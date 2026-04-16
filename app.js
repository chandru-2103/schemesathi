// ============================================================
// SchemeSathi – Main Application Logic (Restyled)
// ============================================================

(function () {
  "use strict";

  // ─── State ─────────────────────────────────────────────
  let currentLang = "en";
  let currentView = "home";
  let currentCategory = "all";
  let currentLevel = "all";
  let savedSchemes = new Set(JSON.parse(localStorage.getItem("savedSchemes") || "[]"));

  // ─── DOM Refs ──────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const searchInput = $("#search-input");
  const noResults = $("#no-results");
  const resultsGrid = $("#results-grid");
  const resultsHeader = $("#results-header");
  const resultsTitle = $("#results-title");
  const resultsCount = $("#results-count");
  const toast = $("#toast");

  const micBtn = $("#mic-btn");
  const voiceStatus = $("#voice-status");
  const startBtn = $("#start-assistant-btn");
  const restartBtn = $("#restart-assistant-btn");
  const loginModal = $("#login-modal");
  const closeModal = $("#close-modal");
  const loginBtn = $("#login-btn");
  const registerBtn = $("#register-btn");

  let recognition = null;
  let isListening = false;
  let speechSynth = window.speechSynthesis;

  // ─── Initialize ────────────────────────────────────────
  function init() {
    setupTheme();
    setupNavigation();
    setupLanguageSelector();
    setupSearch();
    setupCategories();
    applyFilters();
    updateUILanguage();
    setupModals();
    setupVoice();
    setupAssistant();
    renderHelpCenters();
    animateStats();
  }

  // ─── Theme Toggle ─────────────────────────────────────
  function setupTheme() {
    const saved = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeIcon(saved);

    $("#theme-toggle").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    $("#theme-toggle").textContent = theme === "light" ? "🌙" : "☀️";
  }

  // ─── Navigation ────────────────────────────────────────
  function setupNavigation() {
    $$(".nav-tab[data-view]").forEach((tab) => {
      tab.addEventListener("click", () => {
        const view = tab.dataset.view;
        if (view === "home") {
          currentLevel = "all";
        }
        switchView(view);
        if (view === "home") applyFilters();
      });
    });

    const setLevel = (level) => {
      currentLevel = level;
      switchView("home");
      applyFilters();
    };

    const centralBtn = $("#tab-central");
    if(centralBtn) centralBtn.addEventListener("click", () => setLevel("central"));

    const stateBtn = $("#tab-state");
    if(stateBtn) stateBtn.addEventListener("click", () => setLevel("state"));

    // Check Eligibility → go to assistant
    const eligBtn = $("#tab-eligibility");
    if (eligBtn) {
      eligBtn.addEventListener("click", () => switchView("assistant"));
    }

    const applyBtn = $("#tab-apply");
    if(applyBtn) applyBtn.addEventListener("click", () => showToast("🚧 Coming soon in the full version"));
  }

  function switchView(view) {
    currentView = view;
    $$(".nav-tab[data-view]").forEach((t) => t.classList.remove("active"));
    const activeTab = $(`.nav-tab[data-view="${view}"]`);
    if (activeTab) activeTab.classList.add("active");

    $$(".view").forEach((v) => v.classList.remove("active"));
    $(`#${view}-view`).classList.add("active");

    if (typeof stopSpeaking === "function") stopSpeaking();
  }

  // ─── Language Selector ─────────────────────────────────
  function setupLanguageSelector() {
    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentLang = btn.dataset.lang;
        $$(".lang-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        updateUILanguage();
        if (searchInput.value.trim()) {
          performSearch(searchInput.value.trim());
        } else {
          applyFilters();
        }
        renderHelpCenters();
      });
    });
  }

  function updateUILanguage() {
    // Dynamic i18n tag scanning
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = t(key, currentLang);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    });

    // Subtitle pseudo-element handling
    const searchSection = document.querySelector(".search-section");
    if (searchSection) {
      searchSection.setAttribute("data-subtitle", t("heroSubtitle", currentLang));
    }

    // Header
    $("#header-tagline").textContent = t("tagline", currentLang);
    $("#login-btn").textContent = t("login", currentLang);
    $("#register-btn").textContent = t("register", currentLang);

    // Navigation
    $("#tab-home").textContent = t("navHome", currentLang);
    $("#tab-assistant").textContent = t("navFindScheme", currentLang);
    $("#tab-centers").textContent = t("navHelpCenters", currentLang);
    $("#tab-central").textContent = t("centralSchemes", currentLang);
    $("#tab-state").textContent = t("stateSchemes", currentLang);
    $("#tab-eligibility").textContent = t("checkEligibility", currentLang);
    $("#tab-apply").textContent = t("applyOnline", currentLang);

    // Helpline
    $("#helpline-text").innerHTML = t("helplineLabel", currentLang) + ': <strong>1800-111-555</strong>';
    $("#offline-badge").textContent = t("offlineBadge", currentLang);

    // Search
    searchInput.placeholder = t("searchPlaceholder", currentLang);
    $("#voice-hint").textContent = t("voiceSearchHint", currentLang);

    // Categories
    $("#cat-all").textContent = t("categoryAll", currentLang);
    $("#cat-farmer").textContent = t("categoryFarmer", currentLang);
    $("#cat-student").textContent = t("categoryStudent", currentLang);
    $("#cat-women").textContent = t("categoryWomen", currentLang);
    $("#cat-elderly").textContent = t("categoryElderly", currentLang);
    $("#cat-general").textContent = t("categoryGeneral", currentLang);

    // Stats
    $("#stat-schemes").textContent = t("statsSchemes", currentLang);
    $("#stat-states").textContent = t("statsStates", currentLang);
    $("#stat-beneficiaries").textContent = t("statsBeneficiaries", currentLang);

    // Assistant
    $("#assistant-title").textContent = t("assistantTitle", currentLang) || "Government Scheme Assistant";
    $("#assistant-subtitle").textContent = t("assistantSubtitle", currentLang) || "I can help you find schemes tailored to your profile.";
    if (startBtn) startBtn.textContent = t("assistantStart", currentLang) || "Start Guided Search";
    if (restartBtn) restartBtn.textContent = t("assistantRestart", currentLang) || "Start Over";

    // Help Centers
    $("#centers-title").textContent = t("helpCentersTitle", currentLang);
    $("#centers-subtitle").textContent = t("helpCentersSubtitle", currentLang);

    // Footer & results
    $("#footer-text").innerHTML = t("footer", currentLang).replace("SchemeSathi", "<span>SchemeSathi</span>");
    $("#no-results-text").textContent = t("noResults", currentLang);
    resultsTitle.textContent = t("showingAllSchemes", currentLang);

    // Login modal
    $("#modal-title").textContent = t("loginTitle", currentLang);
    $("#label-email").textContent = t("loginEmail", currentLang);
    $("#label-password").textContent = t("loginPassword", currentLang);
    $("#modal-submit").textContent = t("loginSubmit", currentLang);
    $("#modal-footer-text").textContent = t("loginNewUser", currentLang);
  }

  // ─── Search ────────────────────────────────────────────
  function setupSearch() {
    let debounce;
    searchInput.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const query = searchInput.value.trim();
        if (query.length > 0) {
          $$(".cat-chip").forEach((c) => c.classList.remove("active"));
          performSearch(query);
        } else {
          currentCategory = "all";
          $("#cat-all").classList.add("active");
          applyFilters();
        }
      }, 300);
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) performSearch(query);
      }
    });

    // Search button
    const searchBtn = $("#search-btn");
    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) performSearch(query);
      });
    }
  }

  function performSearch(query) {
    const q = query.toLowerCase();
    const tokens = q.split(/\s+/);

    const scored = SCHEMES.map((scheme) => {
      let score = 0;
      const name = scheme.name[currentLang].toLowerCase();
      const eligibility = scheme.eligibility[currentLang].toLowerCase();
      const benefits = scheme.benefits[currentLang].toLowerCase();

      tokens.forEach((token) => {
        if (name.includes(token)) score += 5;
        if (eligibility.includes(token)) score += 2;
        if (benefits.includes(token)) score += 2;
        if (scheme.keywords.some((kw) => kw.toLowerCase().includes(token))) score += 3;
        if (scheme.category.includes(token)) score += 4;
      });

      return { scheme, score };
    });

    const results = scored
      .filter((s) => s.score > 0 && (currentLevel === "all" || s.scheme.level === currentLevel))
      .sort((a, b) => b.score - a.score)
      .map((s) => s.scheme);

    renderSchemes(results, true);

    if (results.length > 0) {
      const topScheme = results[0];
      const speech = topScheme.name[currentLang] + ". " + topScheme.benefits[currentLang];
      speak(speech);
    }
  }

  // ─── Category Filter ──────────────────────────────────
  function setupCategories() {
    $$(".cat-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const cat = chip.dataset.category;
        currentCategory = cat;
        searchInput.value = "";

        $$(".cat-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");

        applyFilters();
      });
    });
  }

  function applyFilters() {
    let filtered = SCHEMES;
    if (currentLevel !== "all") {
      filtered = filtered.filter(s => s.level === currentLevel);
    }
    if (currentCategory !== "all") {
      filtered = filtered.filter(s => s.category === currentCategory);
    }
    renderSchemes(filtered, true);
  }

  // ─── Render Schemes ───────────────────────────────────
  function renderSchemes(schemes, isSearch = false) {
    resultsGrid.innerHTML = "";

    if (schemes.length === 0) {
      resultsHeader.style.display = "none";
      noResults.style.display = "block";
      return;
    }

    noResults.style.display = "none";
    resultsHeader.style.display = "flex";
    resultsTitle.textContent = isSearch
      ? t("showingAllSchemes", currentLang)
      : t("showingAllSchemes", currentLang);
    resultsCount.textContent = `${schemes.length} ${t("schemesFound", currentLang)}`;

    schemes.forEach((scheme, idx) => {
      const card = createSchemeCard(scheme, idx);
      resultsGrid.appendChild(card);
    });
  }

  function createSchemeCard(scheme, index) {
    const card = document.createElement("div");
    card.className = "scheme-card";
    card.style.animationDelay = `${index * 0.06}s`;

    const categoryLabels = {
      farmer: t("categoryFarmer", currentLang),
      student: t("categoryStudent", currentLang),
      women: t("categoryWomen", currentLang),
      elderly: t("categoryElderly", currentLang),
      general: t("categoryGeneral", currentLang),
    };

    const stepsHTML = scheme.steps[currentLang]
      .map((step) => `<li>${step}</li>`)
      .join("");

    const certsHTML = (scheme.certificates && scheme.certificates[currentLang])
      ? scheme.certificates[currentLang].map((doc) => `<li>${doc}</li>`).join("")
      : "";

    const isSaved = savedSchemes.has(scheme.id);

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${scheme.icon}</div>
        <div>
          <div class="card-title">${scheme.name[currentLang]}</div>
          <span class="card-category-badge">${categoryLabels[scheme.category] || scheme.category}</span>
        </div>
      </div>

      <div class="card-section">
        <div class="card-section-label">${t("eligibilityLabel", currentLang)}</div>
        <div class="card-section-text">${scheme.eligibility[currentLang]}</div>
      </div>
      <div class="card-section">
        <div class="card-section-label">${t("benefitsLabel", currentLang)}</div>
        <div class="card-section-text">${scheme.benefits[currentLang]}</div>
      </div>

      <div class="card-tabs-container">
        <div class="card-tabs">
          <button class="card-tab active" data-tab="documents">${t("tabDocuments", currentLang)}</button>
          <button class="card-tab" data-tab="steps">${t("tabWhatToDoNext", currentLang)}</button>
        </div>
        <div class="card-tab-content active" data-tab-content="documents">
          ${certsHTML ? `
          <div class="card-section">
            <div class="card-section-label">${t("certificatesLabel", currentLang)}</div>
            <ul class="docs-list">${certsHTML}</ul>
          </div>
          ` : `<p class="no-docs-text">${t("noDocsText", currentLang)}</p>`}
        </div>
        <div class="card-tab-content" data-tab-content="steps">
          <div class="card-section">
            <div class="card-section-label">${t("stepsLabel", currentLang)}</div>
            <ol class="steps-list">${stepsHTML}</ol>
          </div>
        </div>
      </div>

      <div class="card-actions">
        <button class="save-btn ${isSaved ? 'saved' : ''}" data-save-id="${scheme.id}">
          ${isSaved ? '★ ' + t("savedScheme", currentLang) : '☆ ' + t("saveScheme", currentLang)}
        </button>
        <button class="read-aloud-btn" data-scheme-id="${scheme.id}" title="${t("readAloudBtn", currentLang)}">
          ${t("readAloudBtn", currentLang)}
        </button>
      </div>
      <a class="card-apply-btn" href="${scheme.applyUrl || '#'}" target="_blank" rel="noopener noreferrer">${t("applyOnlineBtn", currentLang)}</a>
    `;

    // Save/Bookmark
    const saveBtn = card.querySelector(".save-btn");
    saveBtn.addEventListener("click", () => {
      const id = scheme.id;
      if (savedSchemes.has(id)) {
        savedSchemes.delete(id);
        saveBtn.classList.remove("saved");
        saveBtn.textContent = '☆ ' + t("saveScheme", currentLang);
      } else {
        savedSchemes.add(id);
        saveBtn.classList.add("saved");
        saveBtn.textContent = '★ ' + t("savedScheme", currentLang);
        showToast("⭐ " + scheme.name[currentLang] + " saved!");
      }
      localStorage.setItem("savedSchemes", JSON.stringify([...savedSchemes]));
    });

    // Read Aloud button
    const readBtn = card.querySelector(".read-aloud-btn");
    if (readBtn) {
      readBtn.addEventListener("click", () => {
        if (speechSynth && speechSynth.speaking) {
          speechSynth.cancel();
          readBtn.innerHTML = t("readAloudBtn", currentLang);
          readBtn.classList.remove("speaking");
        } else {
          const textToRead = scheme.name[currentLang] + ". " +
            t("eligibilityLabel", currentLang) + ": " + scheme.eligibility[currentLang] + ". " +
            t("benefitsLabel", currentLang) + ": " + scheme.benefits[currentLang] + ". " +
            t("stepsLabel", currentLang) + ": " + scheme.steps[currentLang].join(". ");
          const utterance = new SpeechSynthesisUtterance(textToRead);
          utterance.lang = currentLang === 'en' ? 'en-IN' : (currentLang === 'hi' ? 'hi-IN' : 'ta-IN');
          utterance.onend = () => {
            readBtn.innerHTML = t("readAloudBtn", currentLang);
            readBtn.classList.remove("speaking");
          };
          speechSynth.speak(utterance);
          readBtn.innerHTML = t("stopReadingBtn", currentLang);
          readBtn.classList.add("speaking");
        }
      });
    }

    // Tab switching for Documents / Steps
    const tabs = card.querySelectorAll(".card-tab");
    const tabContents = card.querySelectorAll(".card-tab-content");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove("active"));
        tabContents.forEach(tc => tc.classList.remove("active"));
        tab.classList.add("active");
        card.querySelector(`[data-tab-content="${target}"]`).classList.add("active");
      });
    });

    return card;
  }
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  // ─── Modals ────────────────────────────────────────────
  function setupModals() {
    const openModal = () => {
      if (loginModal) loginModal.classList.add("open");
    };
    if (loginBtn) loginBtn.addEventListener("click", openModal);
    if (registerBtn) registerBtn.addEventListener("click", openModal);
    if (closeModal) closeModal.addEventListener("click", () => {
      loginModal.classList.remove("open");
    });
    
    window.addEventListener("click", (e) => {
      if (e.target === loginModal) loginModal.classList.remove("open");
    });
    
    const modalSubmit = $("#modal-submit");
    if(modalSubmit) modalSubmit.addEventListener("click", () => {
      showToast("Verification link sent!");
      loginModal.classList.remove("open");
    });
  }

  // ─── Stats Animation ───────────────────────────────────
  function animateStats() {
    const totalSchemes = typeof SCHEMES !== 'undefined' ? SCHEMES.length : 315;
    const schemesCountEl = $("#count-schemes");
    if (!schemesCountEl) return;
    
    let startTimestamp = null;
    const duration = 1500;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * totalSchemes);
      schemesCountEl.textContent = currentCount;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        schemesCountEl.textContent = totalSchemes;
      }
    };
    window.requestAnimationFrame(step);
  }

  // ─── Voice Search ──────────────────────────────────────
  function setupVoice() {
    if (!micBtn) return;
    
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      
      recognition.onstart = () => {
        isListening = true;
        micBtn.classList.add("listening");
        if(voiceStatus) {
            voiceStatus.innerHTML = `<span class="voice-status-text">Listening</span><div class="dot-animation"><span></span><span></span><span></span></div>`;
        }
      };
      
      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        searchInput.value = transcript;
        performSearch(transcript);
        stopListening();
      };
      
      recognition.onerror = () => stopListening();
      recognition.onend = () => stopListening();
      
      micBtn.addEventListener("click", () => {
        if (isListening) stopListening();
        else startListening();
      });
    } else {
      micBtn.addEventListener("click", () => {
        showToast("Voice recognition not supported in this browser.");
      });
    }
  }

  function startListening() {
    if (recognition) {
      recognition.lang = currentLang === 'en' ? 'en-IN' : (currentLang === 'hi' ? 'hi-IN' : 'ta-IN');
      recognition.start();
    }
  }
  
  function stopListening() {
    if (recognition && isListening) {
      recognition.stop();
      isListening = false;
      micBtn.classList.remove("listening");
      if(voiceStatus) voiceStatus.innerHTML = "";
    }
  }

  window.speak = function(text) {
    if (!speechSynth) return;
    speechSynth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLang === 'en' ? 'en-IN' : (currentLang === 'hi' ? 'hi-IN' : 'ta-IN');
    speechSynth.speak(utterance);
  };
  
  window.stopSpeaking = function() {
    if (speechSynth) speechSynth.cancel();
  };

  // ─── Render Help Centers ──────────────────────────────
  function renderHelpCenters() {
    const container = $("#centers-list");
    if (!container || typeof HELP_CENTERS === "undefined") return;
    container.innerHTML = "";

    HELP_CENTERS.forEach((center) => {
      const card = document.createElement("div");
      card.className = "center-card";
      card.innerHTML = `
        <div class="center-card-header">
          <div class="center-icon">🏢</div>
          <div>
            <div class="center-name">${center.name[currentLang]}</div>
            <div class="center-address">${center.address[currentLang]}</div>
          </div>
        </div>
        <div class="center-details">
          <span>📞 ${center.phone}</span>
          <span>📏 ${t("distance", currentLang)}: ${center.distance}</span>
          <span>🕐 ${center.hours[currentLang]}</span>
        </div>
        <button class="center-directions-btn">${t("getDirections", currentLang)}</button>
      `;
      card.querySelector(".center-directions-btn").addEventListener("click", () => {
        showToast("📍 Opening map directions…");
      });
      container.appendChild(card);
    });
  }

  // ─── Guided Assistant ─────────────────────────────────
  function setupAssistant() {
    if (!startBtn) return;

    let assistantStep = 0;
    let answers = {};
    const questionOrder = ["occupation", "age", "support"];

    startBtn.addEventListener("click", () => {
      startBtn.style.display = "none";
      restartBtn.style.display = "inline-block";
      assistantStep = 0;
      answers = {};
      const chatContainer = $("#chat-container");
      chatContainer.innerHTML = "";
      updateProgress(0);
      askNextQuestion();
    });

    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        assistantStep = 0;
        answers = {};
        const chatContainer = $("#chat-container");
        chatContainer.innerHTML = "";
        updateProgress(0);
        askNextQuestion();
      });
    }

    function updateProgress(pct) {
      const fill = $("#progress-fill");
      const percent = $("#progress-percent");
      if (fill) fill.style.width = pct + "%";
      if (percent) percent.textContent = pct + "%";
    }

    function addBotMessage(html) {
      const chatContainer = $("#chat-container");
      const msg = document.createElement("div");
      msg.className = "chat-msg bot";
      msg.innerHTML = `<div class="chat-bubble bot-bubble">${html}</div>`;
      chatContainer.appendChild(msg);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function addUserMessage(text) {
      const chatContainer = $("#chat-container");
      const msg = document.createElement("div");
      msg.className = "chat-msg user";
      msg.innerHTML = `<div class="chat-bubble user-bubble">${text}</div>`;
      chatContainer.appendChild(msg);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function showTypingIndicator() {
      const chatContainer = $("#chat-container");
      const typing = document.createElement("div");
      typing.className = "chat-msg bot typing-indicator";
      typing.innerHTML = `<div class="chat-bubble bot-bubble"><span class="dot-animation"><span></span><span></span><span></span></span></div>`;
      chatContainer.appendChild(typing);
      chatContainer.scrollTop = chatContainer.scrollHeight;
      return typing;
    }

    function askNextQuestion() {
      if (assistantStep >= questionOrder.length) {
        showResults();
        return;
      }

      const key = questionOrder[assistantStep];
      const q = ASSISTANT_QUESTIONS[key];

      const typing = showTypingIndicator();
      setTimeout(() => {
        typing.remove();

        const qNum = t("questionOf", currentLang)
          .replace("{current}", assistantStep + 1)
          .replace("{total}", questionOrder.length);

        let optionsHTML = q.options
          .map(
            (opt) =>
              `<button class="assistant-option" data-value="${opt.value}">${opt.label[currentLang]}</button>`
          )
          .join("");

        addBotMessage(`<div class="question-number">${qNum}</div><p>${q.question[currentLang]}</p><div class="assistant-options">${optionsHTML}</div>`);

        // Bind option clicks
        const chatContainer = $("#chat-container");
        const buttons = chatContainer.querySelectorAll(
          ".assistant-option:not([data-bound])"
        );
        buttons.forEach((btn) => {
          btn.setAttribute("data-bound", "true");
          btn.addEventListener("click", () => {
            const value = btn.dataset.value;
            answers[key] = value;
            addUserMessage(btn.textContent);

            // Disable all options in this group
            btn
              .closest(".assistant-options")
              .querySelectorAll(".assistant-option")
              .forEach((b) => {
                b.disabled = true;
                b.style.opacity = "0.5";
              });

            assistantStep++;
            updateProgress(
              Math.round((assistantStep / questionOrder.length) * 100)
            );

            setTimeout(() => askNextQuestion(), 600);
          });
        });
      }, 800);
    }

    function showResults() {
      updateProgress(100);
      const typing = showTypingIndicator();

      setTimeout(() => {
        typing.remove();
        const recommended = getRecommendedSchemes(
          answers.occupation,
          answers.age,
          answers.support
        );

        if (recommended.length === 0) {
          addBotMessage(
            `<p>${t("noSchemesFound", currentLang)}</p>`
          );
          return;
        }

        let cardsHTML = recommended
          .map(
            (s) => `
          <div class="assistant-result-card">
            <div class="card-icon">${s.icon}</div>
            <div>
              <div class="card-title">${s.name[currentLang]}</div>
              <div class="card-section-text" style="font-size:0.82rem;margin-top:4px;">${s.benefits[currentLang]}</div>
            </div>
          </div>`
          )
          .join("");

        addBotMessage(
          `<p>${t("recommendedSchemes", currentLang)}</p><div class="assistant-results">${cardsHTML}</div>`
        );

        speak(
          recommended[0].name[currentLang] +
            ". " +
            recommended[0].benefits[currentLang]
        );
      }, 1000);
    }
  }

  window.addEventListener("DOMContentLoaded", init);
}());
