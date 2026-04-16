# 🏛️ SchemeSathi – Your Companion for Government Schemes

> A voice-first, multilingual digital assistant that helps Indian citizens discover government schemes through intelligent voice interaction, guided questions, and smart recommendations.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎙️ **Voice-First Interaction** | Speak naturally in English, Tamil, or Hindi to search schemes |
| 🗣️ **Voice Output (TTS)** | System reads scheme details aloud in all 3 languages |
| 🌐 **Trilingual Support** | Full UI in English (en-IN), Tamil (ta-IN), Hindi (hi-IN) |
| 🤖 **Guided Assistant** | Chat-style Q&A flow recommending personalized schemes |
| 🔍 **Smart Search** | Keyword-based intelligent matching across scheme data |
| 📱 **Mobile Responsive** | Works beautifully on all screen sizes |
| ✈️ **Offline Ready** | All data stored locally — no internet required |
| 🏥 **Help Centers** | Nearby assistance office directory |

## 🚀 Quick Start

### Option 1: Python (Recommended)
```bash
cd c:\ag
python -m http.server 3000
```
Open **http://localhost:3000** in Google Chrome.

### Option 2: Direct File
Simply double-click `index.html` to open in your browser.  
*(Voice features require Chrome)*

### Option 3: Node.js
```bash
npx -y serve -l 3000
```

## 🏗️ Project Structure

```
c:\ag\
├── index.html    → Main HTML (semantic, accessible, SEO-ready)
├── styles.css    → Premium dark-mode stylesheet with animations
├── data.js       → 12 real government schemes in 3 languages
├── i18n.js       → All UI strings in English, Tamil, Hindi
├── app.js        → Core logic: voice, search, assistant, TTS
└── README.md     → This file
```

## 🎯 Government Schemes Included (12)

| Category | Schemes |
|----------|---------|
| 🌾 Farmer | PM-KISAN, PM Fasal Bima Yojana |
| 🎓 Student | National Scholarship Portal, PM Vidya Lakshmi |
| 👩 Women | Beti Bachao Beti Padhao, PM Ujjwala Yojana, Sukanya Samriddhi |
| 🧓 Elderly | IGNOAPS Old Age Pension, Atal Pension Yojana |
| 🏥 General | Ayushman Bharat, PM Awas Yojana, PM MUDRA Yojana |

## 🎤 Voice Commands (Examples)

| Language | Try Saying |
|----------|-----------|
| English | "farmer schemes", "education loan", "health insurance" |
| Tamil | "விவசாயி", "கல்வி", "முதியோர்" |
| Hindi | "किसान", "शिक्षा", "स्वास्थ्य" |

## 💡 Technology

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Voice**: Web Speech API (SpeechRecognition + SpeechSynthesis)
- **Design**: Glassmorphism, CSS animations, responsive grid
- **Data**: All local — zero external API dependencies

## 📋 Browser Requirements

- **Google Chrome** (recommended) — full voice support
- Microsoft Edge — voice support
- Firefox/Safari — text features work, voice limited

---

**Built for Hackathon – SchemeSathi** 🇮🇳
