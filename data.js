// ============================================================
// SchemeSathi – Government Schemes Database (EN / TA / HI)
// ============================================================

const SCHEMES = [
  {
    id: "pm-kisan",
    category: "farmer",
    icon: "🌾",
    name: {
      en: "PM-KISAN Samman Nidhi",
      ta: "பிஎம்-கிசான் சம்மான் நிதி",
      hi: "पीएम-किसान सम्मान निधि"
    },
    eligibility: {
      en: "All landholding farmer families with cultivable land. Excludes institutional landholders, income-tax payers, and government employees.",
      ta: "பயிரிடக்கூடிய நிலம் கொண்ட அனைத்து விவசாயக் குடும்பங்கள். நிறுவன நிலம் வைத்திருப்போர், வருமான வரி செலுத்துவோர் விலக்கப்படுவர்.",
      hi: "कृषि योग्य भूमि वाले सभी किसान परिवार। संस्थागत भूधारक, आयकर दाता और सरकारी कर्मचारी बाहर हैं।"
    },
    benefits: {
      en: "₹6,000 per year transferred directly to bank account in 3 equal installments of ₹2,000 every four months.",
      ta: "ஆண்டுக்கு ₹6,000 நேரடியாக வங்கிக் கணக்கில் — ₹2,000 வீதம் 3 தவணைகள்.",
      hi: "₹6,000 प्रतिवर्ष सीधे बैंक खाते में — हर चार महीने में ₹2,000 की 3 किस्तें।"
    },
    steps: {
      en: [
        "Visit your nearest Common Service Centre (CSC)",
        "Carry Aadhaar card, land records, and bank passbook",
        "Fill the PM-KISAN registration form",
        "Submit documents for verification",
        "Track status at pmkisan.gov.in"
      ],
      ta: [
        "அருகிலுள்ள பொது சேவை மையத்திற்கு (CSC) செல்லுங்கள்",
        "ஆதார் அட்டை, நில ஆவணங்கள், வங்கி பாஸ்புக் எடுத்துச் செல்லுங்கள்",
        "PM-KISAN பதிவு படிவத்தை நிரப்புங்கள்",
        "சரிபார்ப்புக்கான ஆவணங்களை சமர்ப்பிக்கவும்",
        "pmkisan.gov.in இல் நிலையை கண்காணிக்கவும்"
      ],
      hi: [
        "निकटतम कॉमन सर्विस सेंटर (CSC) जाएँ",
        "आधार कार्ड, भूमि रिकॉर्ड और बैंक पासबुक ले जाएँ",
        "PM-KISAN पंजीकरण फॉर्म भरें",
        "सत्यापन के लिए दस्तावेज़ जमा करें",
        "pmkisan.gov.in पर स्थिति ट्रैक करें"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "Land Ownership Records (Khatauni)", "Bank Account Passbook", "Voter ID / Ration Card"],
      ta: ["ஆதார் அட்டை", "நில உரிமை ஆவணங்கள் (கட்டௌனி)", "வங்கிக் கணக்கு பாஸ்புக்", "வாக்காளர் அட்டை / ரேஷன் அட்டை"],
      hi: ["आधार कार्ड", "भूमि स्वामित्व रिकॉर्ड (खतौनी)", "बैंक खाता पासबुक", "वोटर आईडी / राशन कार्ड"]
    },
    applyUrl: "https://pmkisan.gov.in/",
    keywords: ["farmer","kisan","agriculture","land","crop","farm","खेती","किसान","कृषि","भूमि","விவசாயம்","விவசாயி","நிலம்"]
  },
  {
    id: "pm-fasal-bima",
    category: "farmer",
    icon: "🛡️",
    name: {
      en: "PM Fasal Bima Yojana",
      ta: "பிஎம் பசல் பீமா யோஜனா",
      hi: "पीएम फसल बीमा योजना"
    },
    eligibility: {
      en: "All farmers including sharecroppers and tenant farmers growing notified crops in notified areas. Both loanee and non-loanee farmers are eligible.",
      ta: "அறிவிக்கப்பட்ட பகுதிகளில் பயிர் செய்யும் அனைத்து விவசாயிகள் — குத்தகைதாரர்கள் உட்பட.",
      hi: "अधिसूचित क्षेत्रों में फसल उगाने वाले सभी किसान — बटाईदार और किरायेदार किसान भी पात्र।"
    },
    benefits: {
      en: "Crop insurance at low premium: 2% for Kharif, 1.5% for Rabi, 5% for commercial crops. Government pays remaining premium.",
      ta: "குறைந்த பிரீமியத்தில் பயிர் காப்பீடு: கரீஃப் 2%, ரபி 1.5%, வணிக பயிர்கள் 5%.",
      hi: "कम प्रीमियम पर फसल बीमा: खरीफ 2%, रबी 1.5%, वाणिज्यिक फसल 5%। शेष प्रीमियम सरकार देती है।"
    },
    steps: {
      en: [
        "Visit your bank or insurance company before sowing season",
        "Fill the crop insurance application form",
        "Submit land records, Aadhaar, and bank details",
        "Pay the subsidized premium amount",
        "In case of crop loss, file claim within 72 hours"
      ],
      ta: [
        "விதைப்பு பருவத்திற்கு முன் வங்கி அல்லது காப்பீட்டு நிறுவனத்தை அணுகுங்கள்",
        "பயிர் காப்பீடு விண்ணப்பத்தை நிரப்புங்கள்",
        "நில ஆவணங்கள், ஆதார், வங்கி விவரங்கள் சமர்ப்பிக்கவும்",
        "மானிய பிரீமியம் தொகையை செலுத்துங்கள்",
        "பயிர் இழப்பு ஏற்பட்டால் 72 மணி நேரத்தில் கோரிக்கை செய்யுங்கள்"
      ],
      hi: [
        "बुवाई के मौसम से पहले बैंक या बीमा कंपनी जाएँ",
        "फसल बीमा आवेदन पत्र भरें",
        "भूमि रिकॉर्ड, आधार और बैंक विवरण जमा करें",
        "सब्सिडी वाली प्रीमियम राशि का भुगतान करें",
        "फसल नुकसान होने पर 72 घंटे में दावा दर्ज करें"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "Land Records / Lease Agreement", "Bank Account Details", "Sowing Certificate from Patwari", "Previous Season Crop Details"],
      ta: ["ஆதார் அட்டை", "நில ஆவணங்கள் / குத்தகை ஒப்பந்தம்", "வங்கிக் கணக்கு விவரங்கள்", "பட்வாரியிடம் விதைப்பு சான்றிதழ்", "முந்தைய பருவ பயிர் விவரங்கள்"],
      hi: ["आधार कार्ड", "भूमि रिकॉर्ड / लीज एग्रीमेंट", "बैंक खाता विवरण", "पटवारी से बुवाई प्रमाण पत्र", "पिछले सीजन की फसल विवरण"]
    },
    applyUrl: "https://pmfby.gov.in/",
    keywords: ["farmer","insurance","crop","kisan","fasal","bima","बीमा","फसल","காப்பீடு","பயிர்","விவசாயி"]
  },
  {
    id: "national-scholarship",
    category: "student",
    icon: "🎓",
    name: {
      en: "National Scholarship Portal",
      ta: "தேசிய உதவித்தொகை போர்ட்டல்",
      hi: "राष्ट्रीय छात्रवृत्ति पोर्टल"
    },
    eligibility: {
      en: "Students from economically weaker sections (family income < ₹2.5 lakh/year) pursuing recognized courses from Class 1 to PhD level.",
      ta: "பொருளாதாரத்தில் பின்தங்கிய பிரிவு மாணவர்கள் (குடும்ப வருமானம் < ₹2.5 லட்சம்) — வகுப்பு 1 முதல் PhD வரை.",
      hi: "आर्थिक रूप से कमजोर वर्ग के छात्र (पारिवारिक आय < ₹2.5 लाख/वर्ष) — कक्षा 1 से PhD तक।"
    },
    benefits: {
      en: "Scholarship amount varies: ₹1,000 to ₹20,000 per month based on course level. Covers tuition fees, maintenance allowance, and book grants.",
      ta: "உதவித்தொகை: மாதம் ₹1,000 முதல் ₹20,000 வரை — கல்வி கட்டணம், புத்தக மானியம் உள்ளடக்கியது.",
      hi: "छात्रवृत्ति: ₹1,000 से ₹20,000 प्रतिमाह — ट्यूशन फीस, रखरखाव भत्ता और पुस्तक अनुदान शामिल।"
    },
    steps: {
      en: [
        "Register on scholarships.gov.in with valid mobile number",
        "Complete your profile with academic details",
        "Choose applicable scholarship scheme",
        "Upload required documents (income certificate, marksheet, Aadhaar)",
        "Submit application before deadline and track status online"
      ],
      ta: [
        "scholarships.gov.in இல் செல்லுபடியான மொபைல் எண்ணுடன் பதிவு செய்யுங்கள்",
        "கல்வி விவரங்களுடன் சுயவிவரத்தை நிறைவு செய்யுங்கள்",
        "பொருத்தமான உதவித்தொகை திட்டத்தைத் தேர்வு செய்யுங்கள்",
        "தேவையான ஆவணங்களை பதிவேற்றுங்கள்",
        "காலக்கெடுவிற்கு முன் விண்ணப்பத்தை சமர்ப்பிக்கவும்"
      ],
      hi: [
        "scholarships.gov.in पर मोबाइल नंबर से रजिस्टर करें",
        "शैक्षणिक विवरण के साथ प्रोफ़ाइल पूरा करें",
        "लागू छात्रवृत्ति योजना चुनें",
        "आवश्यक दस्तावेज़ (आय प्रमाण पत्र, मार्कशीट, आधार) अपलोड करें",
        "समय सीमा से पहले आवेदन जमा करें और ऑनलाइन ट्रैक करें"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "Income Certificate (< ₹2.5 lakh)", "Previous Year Marksheet", "Current Admission / Bonafide Certificate", "Caste Certificate (if applicable)", "Bank Account Passbook"],
      ta: ["ஆதார் அட்டை", "வருமான சான்றிதழ் (< ₹2.5 லட்சம்)", "முந்தைய ஆண்டு மதிப்பெண் பட்டியல்", "தற்போதைய சேர்க்கை / போனாஃபைட் சான்றிதழ்", "சாதிச் சான்றிதழ் (பொருந்தினால்)", "வங்கிக் கணக்கு பாஸ்புக்"],
      hi: ["आधार कार्ड", "आय प्रमाण पत्र (< ₹2.5 लाख)", "पिछले वर्ष की मार्कशीट", "वर्तमान प्रवेश / बोनाफाइड प्रमाण पत्र", "जाति प्रमाण पत्र (यदि लागू हो)", "बैंक खाता पासबुक"]
    },
    applyUrl: "https://scholarships.gov.in/",
    keywords: ["student","scholarship","education","study","college","school","छात्रवृत्ति","छात्र","शिक्षा","மாணவர்","உதவித்தொகை","கல்வி"]
  },
  {
    id: "vidya-lakshmi",
    category: "student",
    icon: "📚",
    name: {
      en: "PM Vidya Lakshmi – Education Loan",
      ta: "பிஎம் வித்யா லட்சுமி – கல்வி கடன்",
      hi: "पीएम विद्या लक्ष्मी – शिक्षा ऋण"
    },
    eligibility: {
      en: "Indian students who have secured admission in recognized institutions in India or abroad. Loan available for all courses from diploma to post-graduation.",
      ta: "இந்தியா அல்லது வெளிநாட்டில் அங்கீகரிக்கப்பட்ட நிறுவனங்களில் சேர்க்கை பெற்ற மாணவர்கள்.",
      hi: "भारत या विदेश में मान्यता प्राप्त संस्थानों में प्रवेश लेने वाले भारतीय छात्र।"
    },
    benefits: {
      en: "Education loans up to ₹20 lakh at subsidized interest rates. Interest subsidy for economically weaker sections during moratorium period.",
      ta: "₹20 லட்சம் வரை கல்விக் கடன் — மானிய வட்டி — பொருளாதார பலவீனமானவர்களுக்கு வட்டி மானியம்.",
      hi: "₹20 लाख तक शिक्षा ऋण — सब्सिडी ब्याज दर — आर्थिक रूप से कमजोर वर्ग को ब्याज सब्सिडी।"
    },
    steps: {
      en: [
        "Visit vidyalakshmi.co.in and register",
        "Search and compare education loans from multiple banks",
        "Fill a single application form for up to 3 banks",
        "Upload admission letter, fee structure, and income proof",
        "Banks process and disburse loan directly to institution"
      ],
      ta: [
        "vidyalakshmi.co.in பார்வையிட்டு பதிவு செய்யுங்கள்",
        "பல வங்கிகளின் கல்விக் கடனை தேடி ஒப்பிடுங்கள்",
        "3 வங்கிகளுக்கு ஒரே விண்ணப்பம் நிரப்புங்கள்",
        "சேர்க்கை கடிதம், கட்டண அமைப்பு, வருமான சான்று பதிவேற்றுங்கள்",
        "வங்கிகள் செயலாக்கி நிறுவனத்திற்கு நேரடியாக கடன் வழங்கும்"
      ],
      hi: [
        "vidyalakshmi.co.in पर जाएँ और रजिस्टर करें",
        "कई बैंकों से शिक्षा ऋण खोजें और तुलना करें",
        "3 बैंकों के लिए एक ही आवेदन पत्र भरें",
        "प्रवेश पत्र, शुल्क संरचना और आय प्रमाण अपलोड करें",
        "बैंक प्रक्रिया करके सीधे संस्थान को ऋण वितरित करता है"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "Admission Letter from Institution", "Fee Structure Document", "Mark Sheets (10th, 12th, Graduation)", "Income Proof of Parents", "Collateral Documents (for loans > ₹7.5 lakh)"],
      ta: ["ஆதார் அட்டை", "நிறுவனத்தின் சேர்க்கை கடிதம்", "கட்டண அமைப்பு ஆவணம்", "மதிப்பெண் பட்டியல்கள் (10, 12, பட்டப்படிப்பு)", "பெற்றோர் வருமான சான்று", "ஈட்டு ஆவணங்கள் (₹7.5 லட்சத்திற்கு மேல்)"],
      hi: ["आधार कार्ड", "संस्थान का प्रवेश पत्र", "शुल्क संरचना दस्तावेज़", "मार्कशीट (10वीं, 12वीं, स्नातक)", "माता-पिता का आय प्रमाण", "गारंटी दस्तावेज़ (₹7.5 लाख से अधिक ऋण के लिए)"]
    },
    applyUrl: "https://www.vidyalakshmi.co.in/",
    keywords: ["student","education","loan","college","university","study","कॉलेज","शिक्षा","ऋण","கடன்","கல்வி","பல்கலை"]
  },
  {
    id: "beti-bachao",
    category: "women",
    icon: "👧",
    name: {
      en: "Beti Bachao Beti Padhao",
      ta: "பெண் காப்போம் பெண் படிப்போம்",
      hi: "बेटी बचाओ बेटी पढ़ाओ"
    },
    eligibility: {
      en: "All girl children from birth to 10 years of age. Applicable across India with focus on gender-critical districts.",
      ta: "பிறப்பு முதல் 10 வயது வரை அனைத்து பெண் குழந்தைகள்.",
      hi: "जन्म से 10 वर्ष तक की सभी बालिकाएँ। लिंग-संवेदनशील जिलों पर विशेष ध्यान।"
    },
    benefits: {
      en: "Promotes girl child education, prevents gender-based sex selection, ensures survival & protection. Links with Sukanya Samriddhi Yojana for financial security.",
      ta: "பெண் கல்வி ஊக்குவிப்பு, பாலின தேர்வு தடுப்பு, சுகன்யா சம்ரித்தி யோஜனா இணைப்பு.",
      hi: "बालिका शिक्षा को बढ़ावा, लिंग आधारित चयन पर रोक, सुकन्या समृद्धि योजना से जुड़ा वित्तीय लाभ।"
    },
    steps: {
      en: [
        "Visit nearest Anganwadi centre or district office",
        "Register the girl child with birth certificate",
        "Open Sukanya Samriddhi account at any post office or bank",
        "Enroll for educational benefits at school level",
        "Avail health and nutrition services through Anganwadi"
      ],
      ta: [
        "அருகிலுள்ள அங்கன்வாடி மையம் அல்லது மாவட்ட அலுவலகத்திற்கு செல்லுங்கள்",
        "பிறப்புச் சான்றிதழுடன் பெண் குழந்தையை பதிவு செய்யுங்கள்",
        "அஞ்சல் நிலையம் அல்லது வங்கியில் சுகன்யா சம்ரித்தி கணக்கு தொடங்குங்கள்",
        "பள்ளி மட்டத்தில் கல்வி சலுகைகளுக்கு சேர்க்கை செய்யுங்கள்",
        "அங்கன்வாடி மூலம் சுகாதார மற்றும் ஊட்டச்சத்து சேவைகளைப் பெறுங்கள்"
      ],
      hi: [
        "निकटतम आंगनवाड़ी केंद्र या जिला कार्यालय जाएँ",
        "जन्म प्रमाण पत्र के साथ बालिका का पंजीकरण करें",
        "किसी भी डाकघर या बैंक में सुकन्या समृद्धि खाता खोलें",
        "स्कूल स्तर पर शैक्षिक लाभ के लिए नामांकन करें",
        "आंगनवाड़ी के माध्यम से स्वास्थ्य और पोषण सेवाएँ प्राप्त करें"
      ]
    },
    certificates: {
      en: ["Girl Child's Birth Certificate", "Parent's Aadhaar Card", "Hospital Discharge Summary", "Bank Account for Sukanya Samriddhi", "Address Proof"],
      ta: ["பெண் குழந்தையின் பிறப்புச் சான்றிதழ்", "பெற்றோர் ஆதார் அட்டை", "மருத்துவமனை டிஸ்சார்ஜ் சுருக்கம்", "சுகன்யா சம்ரித்திக்கு வங்கிக் கணக்கு", "முகவரி சான்று"],
      hi: ["बालिका का जन्म प्रमाण पत्र", "माता-पिता का आधार कार्ड", "अस्पताल डिस्चार्ज सारांश", "सुकन्या समृद्धि के लिए बैंक खाता", "पता प्रमाण"]
    },
    applyUrl: "https://wcd.nic.in/bbbp-schemes",
    keywords: ["women","girl","daughter","beti","education","child","बेटी","महिला","लड़की","பெண்","மகள்","சிறுமி"]
  },
  {
    id: "ujjwala-yojana",
    category: "women",
    icon: "🔥",
    name: {
      en: "PM Ujjwala Yojana",
      ta: "பிஎம் உஜ்வாலா யோஜனா",
      hi: "पीएम उज्ज्वला योजना"
    },
    eligibility: {
      en: "Women from BPL households aged 18 and above. Priority to SC/ST, Pradhan Mantri Awas Yojana beneficiaries, and forest dwellers.",
      ta: "BPL குடும்பங்களைச் சேர்ந்த 18 வயதுக்கு மேற்பட்ட பெண்கள்.",
      hi: "बीपीएल परिवारों की 18 वर्ष से अधिक की महिलाएँ। SC/ST और वनवासियों को प्राथमिकता।"
    },
    benefits: {
      en: "Free LPG connection with ₹1,600 financial assistance. Free first refill and stove. EMI facility for subsequent refills.",
      ta: "₹1,600 நிதி உதவியுடன் இலவச LPG இணைப்பு. முதல் ரீஃபில் மற்றும் அடுப்பு இலவசம்.",
      hi: "₹1,600 की आर्थिक सहायता के साथ मुफ्त एलपीजी कनेक्शन। पहली रिफिल और चूल्हा मुफ्त।"
    },
    steps: {
      en: [
        "Contact nearest LPG distributor or gas agency",
        "Submit BPL certificate and Aadhaar card",
        "Fill Ujjwala Yojana application form",
        "Provide bank account details for subsidy transfer",
        "Receive LPG connection and first refill"
      ],
      ta: [
        "அருகிலுள்ள LPG விநியோகஸ்தர் அல்லது எரிவாயு நிறுவனத்தை தொடர்பு கொள்ளுங்கள்",
        "BPL சான்றிதழ் மற்றும் ஆதார் அட்டையை சமர்ப்பிக்கவும்",
        "உஜ்வாலா யோஜனா விண்ணப்பத்தை நிரப்புங்கள்",
        "மானிய பரிமாற்றத்திற்கான வங்கி விவரங்களை வழங்குங்கள்",
        "LPG இணைப்பு மற்றும் முதல் ரீஃபில் பெறுங்கள்"
      ],
      hi: [
        "निकटतम एलपीजी वितरक या गैस एजेंसी से संपर्क करें",
        "बीपीएल प्रमाण पत्र और आधार कार्ड जमा करें",
        "उज्ज्वला योजना आवेदन पत्र भरें",
        "सब्सिडी ट्रांसफर के लिए बैंक खाता विवरण दें",
        "एलपीजी कनेक्शन और पहली रिफिल प्राप्त करें"
      ]
    },
    certificates: {
      en: ["BPL Certificate / BPL Ration Card", "Aadhaar Card of Woman Applicant", "Voter ID Card", "Bank Account Passbook", "Passport Size Photograph", "Caste Certificate (SC/ST if applicable)"],
      ta: ["BPL சான்றிதழ் / BPL ரேஷன் அட்டை", "பெண் விண்ணப்பதாரரின் ஆதார் அட்டை", "வாக்காளர் அடையாள அட்டை", "வங்கிக் கணக்கு பாஸ்புக்", "பாஸ்போர்ட் அளவு புகைப்படம்", "சாதிச் சான்றிதழ் (SC/ST பொருந்தினால்)"],
      hi: ["बीपीएल प्रमाण पत्र / बीपीएल राशन कार्ड", "महिला आवेदक का आधार कार्ड", "वोटर आईडी कार्ड", "बैंक खाता पासबुक", "पासपोर्ट साइज फोटो", "जाति प्रमाण पत्र (SC/ST यदि लागू हो)"]
    },
    applyUrl: "https://www.pmujjwalayojana.com/",
    keywords: ["women","gas","lpg","cooking","bpl","ujjwala","महिला","गैस","रसोई","பெண்","சமையல்","எரிவாயு"]
  },
  {
    id: "ignoaps",
    category: "elderly",
    icon: "🧓",
    name: {
      en: "Indira Gandhi National Old Age Pension",
      ta: "இந்திரா காந்தி தேசிய முதியோர் ஓய்வூதியம்",
      hi: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन"
    },
    eligibility: {
      en: "Citizens aged 60 years and above belonging to a household living below the poverty line (BPL). No other pension should be received.",
      ta: "வறுமைக் கோட்டிற்கு கீழ் வாழும் 60 வயது மற்றும் அதற்கு மேற்பட்ட குடிமக்கள்.",
      hi: "गरीबी रेखा से नीचे के 60 वर्ष व उससे अधिक आयु के नागरिक। कोई अन्य पेंशन नहीं मिलना चाहिए।"
    },
    benefits: {
      en: "Monthly pension: ₹300 for ages 60–79, ₹500 for ages 80 and above. States may add additional amount.",
      ta: "மாதாந்திர ஓய்வூதியம்: 60-79 வயது ₹300, 80+ வயது ₹500. மாநிலங்கள் கூடுதல் தொகை சேர்க்கலாம்.",
      hi: "मासिक पेंशन: 60-79 वर्ष ₹300, 80+ वर्ष ₹500। राज्य अतिरिक्त राशि जोड़ सकते हैं।"
    },
    steps: {
      en: [
        "Visit your Gram Panchayat or Municipal office",
        "Submit age proof (Aadhaar, voter ID) and BPL certificate",
        "Fill the old age pension application form",
        "Provide bank account or post office account details",
        "Pension will be credited monthly after verification"
      ],
      ta: [
        "கிராம பஞ்சாயத்து அல்லது நகராட்சி அலுவலகத்தை அணுகுங்கள்",
        "வயது சான்று (ஆதார், வாக்காளர் அட்டை) மற்றும் BPL சான்றிதழ் சமர்ப்பிக்கவும்",
        "முதியோர் ஓய்வூதிய விண்ணப்பத்தை நிரப்புங்கள்",
        "வங்கி அல்லது அஞ்சலக கணக்கு விவரங்கள் வழங்குங்கள்",
        "சரிபார்ப்புக்குப் பிறகு மாதாந்திர ஓய்வூதியம் வரவு வைக்கப்படும்"
      ],
      hi: [
        "ग्राम पंचायत या नगरपालिका कार्यालय जाएँ",
        "आयु प्रमाण (आधार, वोटर आईडी) और बीपीएल प्रमाण पत्र जमा करें",
        "वृद्धावस्था पेंशन आवेदन पत्र भरें",
        "बैंक खाता या डाकघर खाता विवरण प्रदान करें",
        "सत्यापन के बाद मासिक पेंशन जमा होगी"
      ]
    },
    certificates: {
      en: ["Age Proof (Aadhaar / Voter ID / Birth Certificate)", "BPL Certificate", "Bank Account or Post Office Account Passbook", "Passport Size Photograph", "Declaration of No Other Pension"],
      ta: ["வயது சான்று (ஆதார் / வாக்காளர் அட்டை / பிறப்புச் சான்றிதழ்)", "BPL சான்றிதழ்", "வங்கி அல்லது அஞ்சலக கணக்கு பாஸ்புக்", "பாஸ்போர்ட் அளவு புகைப்படம்", "வேறு ஓய்வூதியம் இல்லை என்ற உறுதிமொழி"],
      hi: ["आयु प्रमाण (आधार / वोटर आईडी / जन्म प्रमाण पत्र)", "बीपीएल प्रमाण पत्र", "बैंक या डाकघर खाता पासबुक", "पासपोर्ट साइज फोटो", "कोई अन्य पेंशन नहीं होने का घोषणा पत्र"]
    },
    applyUrl: "https://nsap.nic.in/",
    keywords: ["elderly","pension","old","age","senior","retired","वृद्ध","बुजुर्ग","पेंशन","முதியோர்","ஓய்வூதியம்","மூத்த"]
  },
  {
    id: "atal-pension",
    category: "elderly",
    icon: "🏦",
    name: {
      en: "Atal Pension Yojana",
      ta: "அடல் ஓய்வூதிய யோஜனா",
      hi: "अटल पेंशन योजना"
    },
    eligibility: {
      en: "Indian citizens aged 18–40 years with a bank account. Targeted at unorganized sector workers who are not covered under any statutory social security scheme.",
      ta: "18-40 வயது இந்திய குடிமக்கள் — வங்கி கணக்கு அவசியம் — அமைப்புசாரா தொழிலாளர்களுக்கு.",
      hi: "18-40 वर्ष के भारतीय नागरिक — बैंक खाता आवश्यक — असंगठित क्षेत्र के श्रमिकों के लिए।"
    },
    benefits: {
      en: "Guaranteed monthly pension of ₹1,000 to ₹5,000 after age 60 based on contribution. Government co-contributes 50% for eligible subscribers.",
      ta: "60 வயதுக்குப் பிறகு மாதம் ₹1,000 முதல் ₹5,000 வரை உத்தரவாத ஓய்வூதியம்.",
      hi: "60 वर्ष के बाद ₹1,000 से ₹5,000 मासिक गारंटीड पेंशन। सरकार 50% सह-योगदान करती है।"
    },
    steps: {
      en: [
        "Visit any bank or post office with savings account",
        "Fill Atal Pension Yojana subscriber form",
        "Choose pension amount (₹1,000 to ₹5,000 per month)",
        "Set up auto-debit for monthly contribution from account",
        "Receive pension guarantee certificate"
      ],
      ta: [
        "சேமிப்பு கணக்குள்ள எந்த வங்கி அல்லது அஞ்சலகத்திற்கும் செல்லுங்கள்",
        "அடல் பென்ஷன் சந்தாதாரர் படிவத்தை நிரப்புங்கள்",
        "ஓய்வூதிய தொகையை தேர்வு செய்யுங்கள் (மாதம் ₹1,000 - ₹5,000)",
        "மாதாந்திர பங்களிப்புக்கு தானியங்கி பற்று அமைக்கவும்",
        "ஓய்வூதிய உத்தரவாத சான்றிதழ் பெறுங்கள்"
      ],
      hi: [
        "बचत खाता वाले किसी भी बैंक या डाकघर में जाएँ",
        "अटल पेंशन सब्सक्राइबर फॉर्म भरें",
        "पेंशन राशि चुनें (₹1,000 से ₹5,000 प्रतिमाह)",
        "मासिक योगदान के लिए ऑटो-डेबिट सेट करें",
        "पेंशन गारंटी प्रमाण पत्र प्राप्त करें"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "Bank Account / Savings Account Passbook", "Mobile Number Linked to Account", "Nominee Details (Aadhaar of Spouse)"],
      ta: ["ஆதார் அட்டை", "வங்கிக் கணக்கு / சேமிப்பு கணக்கு பாஸ்புக்", "கணக்குடன் இணைக்கப்பட்ட மொபைல் எண்", "வாரிசு விவரங்கள் (வாழ்க்கைத்துணையின் ஆதார்)"],
      hi: ["आधार कार्ड", "बैंक खाता / बचत खाता पासबुक", "खाते से जुड़ा मोबाइल नंबर", "नॉमिनी विवरण (पति/पत्नी का आधार)"]
    },
    applyUrl: "https://www.npscra.nsdl.co.in/scheme-details.php",
    keywords: ["pension","retirement","elderly","atal","unorganized","worker","पेंशन","सेवानिवृत्ति","ஓய்வூதியம்","ஓய்வு","தொழிலாளி"]
  },
  {
    id: "ayushman-bharat",
    category: "general",
    icon: "🏥",
    name: {
      en: "Ayushman Bharat – PM Jan Arogya Yojana",
      ta: "ஆயுஷ்மான் பாரத் – பிஎம் ஜன ஆரோக்ய யோஜனா",
      hi: "आयुष्मान भारत – पीएम जन आरोग्य योजना"
    },
    eligibility: {
      en: "Families identified in SECC 2011 database. Covers rural deprived families and urban worker families in specified occupations.",
      ta: "SECC 2011 தரவுத்தளத்தில் அடையாளம் காணப்பட்ட குடும்பங்கள்.",
      hi: "SECC 2011 डेटाबेस में चिन्हित परिवार। ग्रामीण वंचित और शहरी श्रमिक परिवार।"
    },
    benefits: {
      en: "Free health insurance cover of ₹5 lakh per family per year. Covers hospitalization, surgery, diagnostics, and medicines at empanelled hospitals.",
      ta: "குடும்பத்திற்கு ₹5 லட்சம் இலவச சுகாதார காப்பீடு — மருத்துவமனை, அறுவை சிகிச்சை, மருந்துகள்.",
      hi: "प्रति परिवार ₹5 लाख का मुफ्त स्वास्थ्य बीमा — अस्पताल, सर्जरी, दवाइयाँ शामिल।"
    },
    steps: {
      en: [
        "Check eligibility at mera.pmjay.gov.in or call 14555",
        "Visit nearest Ayushman Bharat Arogya Mitra at empanelled hospital",
        "Carry Aadhaar card, ration card, or any government ID",
        "Get your Ayushman Bharat health card (e-card) generated",
        "Avail cashless treatment at any empanelled hospital across India"
      ],
      ta: [
        "mera.pmjay.gov.in அல்லது 14555 அழைத்து தகுதியை சரிபார்க்கவும்",
        "பட்டியலிடப்பட்ட மருத்துவமனையில் ஆரோக்ய மித்ரா அணுகுங்கள்",
        "ஆதார், ரேஷன் அட்டை அல்லது அரசு அடையாள அட்டை எடுத்துச்செல்லுங்கள்",
        "ஆயுஷ்மான் பாரத் சுகாதார அட்டை (இ-கார்டு) பெறுங்கள்",
        "இந்தியா முழுவதும் பட்டியலிடப்பட்ட மருத்துவமனையில் பணமில்லா சிகிச்சை பெறுங்கள்"
      ],
      hi: [
        "mera.pmjay.gov.in पर या 14555 पर कॉल करके पात्रता जाँचें",
        "सूचीबद्ध अस्पताल में आयुष्मान भारत आरोग्य मित्र से मिलें",
        "आधार, राशन कार्ड या कोई सरकारी पहचान पत्र ले जाएँ",
        "आयुष्मान भारत स्वास्थ्य कार्ड (ई-कार्ड) बनवाएँ",
        "भारत भर में किसी भी सूचीबद्ध अस्पताल में कैशलेस इलाज कराएँ"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "Ration Card", "SECC 2011 Listed Family Proof", "Any Government Photo ID", "Mobile Number for OTP Verification"],
      ta: ["ஆதார் அட்டை", "ரேஷன் அட்டை", "SECC 2011 பட்டியலிடப்பட்ட குடும்ப சான்று", "எந்த அரசு புகைப்பட அடையாள அட்டை", "OTP சரிபார்ப்புக்கு மொபைல் எண்"],
      hi: ["आधार कार्ड", "राशन कार्ड", "SECC 2011 सूचीबद्ध परिवार प्रमाण", "कोई भी सरकारी फोटो आईडी", "OTP सत्यापन के लिए मोबाइल नंबर"]
    },
    applyUrl: "https://mera.pmjay.gov.in/search/login",
    keywords: ["health","hospital","insurance","medical","ayushman","doctor","स्वास्थ्य","अस्पताल","बीमा","சுகாதாரம்","மருத்துவமனை","காப்பீடு"]
  },
  {
    id: "pm-awas",
    category: "general",
    icon: "🏠",
    name: {
      en: "PM Awas Yojana – Housing for All",
      ta: "பிஎம் ஆவாஸ் யோஜனா – அனைவருக்கும் வீடு",
      hi: "पीएम आवास योजना – सबके लिए आवास"
    },
    eligibility: {
      en: "EWS/LIG families with annual income up to ₹6 lakh (EWS) or ₹12 lakh (LIG). Should not own a pucca house anywhere in India.",
      ta: "வருடாந்திர வருமானம் ₹6 லட்சம் (EWS) அல்லது ₹12 லட்சம் (LIG) வரையுள்ள குடும்பங்கள்.",
      hi: "वार्षिक आय ₹6 लाख (EWS) या ₹12 लाख (LIG) तक के परिवार। भारत में कहीं भी पक्का मकान नहीं होना चाहिए।"
    },
    benefits: {
      en: "Interest subsidy of 6.5% on home loans up to ₹6 lakh for 20 years. Direct assistance up to ₹2.67 lakh for house construction.",
      ta: "₹6 லட்சம் வரை வீட்டு கடனுக்கு 6.5% வட்டி மானியம். வீடு கட்ட ₹2.67 லட்சம் வரை நேரடி உதவி.",
      hi: "₹6 लाख तक के होम लोन पर 6.5% ब्याज सब्सिडी। घर निर्माण के लिए ₹2.67 लाख तक सीधी सहायता।"
    },
    steps: {
      en: [
        "Visit pmaymis.gov.in or nearest Common Service Centre",
        "Check eligibility under EWS/LIG/MIG category",
        "Fill the PMAY online application with Aadhaar details",
        "Submit income proof, identity documents, and land papers",
        "Track application status and receive subsidy through bank"
      ],
      ta: [
        "pmaymis.gov.in அல்லது அருகிலுள்ள CSC செல்லுங்கள்",
        "EWS/LIG/MIG வகையில் தகுதியை சரிபார்க்கவும்",
        "ஆதார் விவரங்களுடன் PMAY ஆன்லைன் விண்ணப்பம் நிரப்புங்கள்",
        "வருமான சான்று, அடையாள ஆவணங்கள், நில ஆவணங்கள் சமர்ப்பிக்கவும்",
        "விண்ணப்ப நிலையை கண்காணித்து வங்கி வழியாக மானியம் பெறுங்கள்"
      ],
      hi: [
        "pmaymis.gov.in या निकटतम CSC जाएँ",
        "EWS/LIG/MIG श्रेणी में पात्रता जाँचें",
        "आधार विवरण के साथ PMAY ऑनलाइन आवेदन भरें",
        "आय प्रमाण, पहचान दस्तावेज़ और भूमि कागजात जमा करें",
        "आवेदन स्थिति ट्रैक करें और बैंक के माध्यम से सब्सिडी प्राप्त करें"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "Income Certificate (EWS/LIG/MIG)", "Proof of No Pucca House (Affidavit)", "Land / Plot Documents", "Bank Account Details", "Passport Size Photograph"],
      ta: ["ஆதார் அட்டை", "வருமான சான்றிதழ் (EWS/LIG/MIG)", "பக்கா வீடு இல்லை என்ற சான்று (உறுதிமொழி)", "நிலம் / மனை ஆவணங்கள்", "வங்கிக் கணக்கு விவரங்கள்", "பாஸ்போர்ட் அளவு புகைப்படம்"],
      hi: ["आधार कार्ड", "आय प्रमाण पत्र (EWS/LIG/MIG)", "पक्का मकान नहीं होने का प्रमाण (शपथ पत्र)", "भूमि / प्लॉट दस्तावेज़", "बैंक खाता विवरण", "पासपोर्ट साइज फोटो"]
    },
    applyUrl: "https://pmaymis.gov.in/",
    keywords: ["house","housing","home","awas","construction","shelter","घर","आवास","मकान","வீடு","குடியிருப்பு","கட்டுமானம்"]
  },
  {
    id: "mudra-yojana",
    category: "general",
    icon: "💼",
    name: {
      en: "PM MUDRA Yojana – Business Loans",
      ta: "பிஎம் முத்ரா யோஜனா – தொழில் கடன்",
      hi: "पीएम मुद्रा योजना – व्यवसाय ऋण"
    },
    eligibility: {
      en: "Any Indian citizen with a business plan for non-farm income generating activity. Micro and small enterprises, individuals starting new businesses.",
      ta: "வேளாண் அல்லாத வருமான நடவடிக்கைக்கான தொழில் திட்டம் கொண்ட எந்த இந்திய குடிமகனும்.",
      hi: "गैर-कृषि आय गतिविधि की व्यवसाय योजना वाला कोई भी भारतीय नागरिक।"
    },
    benefits: {
      en: "Collateral-free loans in 3 categories: Shishu (up to ₹50,000), Kishore (₹50,000–₹5 lakh), Tarun (₹5–₹10 lakh). No processing fee.",
      ta: "ஈட்டு இல்லா கடன்: சிஷு (₹50,000 வரை), கிஷோர் (₹5 லட்சம் வரை), தருண் (₹10 லட்சம் வரை).",
      hi: "बिना गारंटी ऋण: शिशु (₹50,000 तक), किशोर (₹5 लाख तक), तरुण (₹10 लाख तक)। कोई प्रोसेसिंग फीस नहीं।"
    },
    steps: {
      en: [
        "Prepare a brief business plan or project report",
        "Visit any bank, NBFC, or MFI that offers MUDRA loans",
        "Fill the MUDRA loan application form",
        "Submit identity proof, address proof, and business plan",
        "Loan gets processed within 7–10 working days"
      ],
      ta: [
        "ஒரு சுருக்கமான தொழில் திட்டம் அல்லது திட்ட அறிக்கை தயாரிக்கவும்",
        "MUDRA கடன் வழங்கும் வங்கி அல்லது NBFC செல்லுங்கள்",
        "MUDRA கடன் விண்ணப்பப் படிவத்தை நிரப்புங்கள்",
        "அடையாள சான்று, முகவரி சான்று, தொழில் திட்டம் சமர்ப்பிக்கவும்",
        "7-10 வேலை நாட்களில் கடன் செயலாக்கப்படும்"
      ],
      hi: [
        "एक संक्षिप्त व्यवसाय योजना या प्रोजेक्ट रिपोर्ट तैयार करें",
        "MUDRA ऋण देने वाले किसी भी बैंक या NBFC में जाएँ",
        "MUDRA ऋण आवेदन पत्र भरें",
        "पहचान प्रमाण, पता प्रमाण और व्यवसाय योजना जमा करें",
        "7-10 कार्य दिवसों में ऋण प्रक्रिया पूरी हो जाती है"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "PAN Card", "Business Plan / Project Report", "Identity Proof (Voter ID / Passport / Driving License)", "Address Proof", "Caste Certificate (SC/ST/OBC if applicable)", "Passport Size Photographs (2)"],
      ta: ["ஆதார் அட்டை", "PAN அட்டை", "தொழில் திட்டம் / திட்ட அறிக்கை", "அடையாள சான்று (வாக்காளர் அட்டை / பாஸ்போர்ட்)", "முகவரி சான்று", "சாதிச் சான்றிதழ் (SC/ST/OBC பொருந்தினால்)", "பாஸ்போர்ட் அளவு புகைப்படங்கள் (2)"],
      hi: ["आधार कार्ड", "PAN कार्ड", "व्यवसाय योजना / प्रोजेक्ट रिपोर्ट", "पहचान प्रमाण (वोटर आईडी / पासपोर्ट / ड्राइविंग लाइसेंस)", "पता प्रमाण", "जाति प्रमाण पत्र (SC/ST/OBC यदि लागू हो)", "पासपोर्ट साइज फोटो (2)"]
    },
    applyUrl: "https://www.mudra.org.in/",
    keywords: ["business","loan","mudra","startup","entrepreneur","self-employed","व्यवसाय","ऋण","उद्यम","தொழில்","கடன்","சுயதொழில்"]
  },
  {
    id: "sukanya-samriddhi",
    category: "women",
    icon: "💰",
    name: {
      en: "Sukanya Samriddhi Yojana",
      ta: "சுகன்யா சம்ரித்தி யோஜனா",
      hi: "सुकन्या समृद्धि योजना"
    },
    eligibility: {
      en: "Parents or guardians of a girl child below the age of 10 years. Maximum 2 accounts per family (one per girl child).",
      ta: "10 வயதுக்குட்பட்ட பெண் குழந்தையின் பெற்றோர் அல்லது பாதுகாவலர்.",
      hi: "10 वर्ष से कम की बालिका के माता-पिता या अभिभावक। प्रति परिवार अधिकतम 2 खाते।"
    },
    benefits: {
      en: "High interest rate (currently ~8%). Tax-free under Section 80C. Maturity at girl's age 21. Partial withdrawal for education at 18.",
      ta: "உயர் வட்டி விகிதம் (~8%). வரிச் சலுகை. 21 வயதில் முதிர்வு. 18 வயதில் கல்விக்கு ஓரளவு பணம் எடுக்கலாம்.",
      hi: "उच्च ब्याज दर (~8%)। धारा 80C के तहत कर-मुक्त। 21 वर्ष में परिपक्वता। 18 वर्ष में शिक्षा के लिए आंशिक निकासी।"
    },
    steps: {
      en: [
        "Visit any post office or authorized bank",
        "Carry girl child's birth certificate and parent's ID proof",
        "Fill Sukanya Samriddhi account opening form",
        "Deposit minimum ₹250 (max ₹1.5 lakh per year)",
        "Continue deposits for 15 years; maturity at 21 years"
      ],
      ta: [
        "எந்த அஞ்சலகம் அல்லது அங்கீகரிக்கப்பட்ட வங்கிக்கும் செல்லுங்கள்",
        "பெண் குழந்தையின் பிறப்புச் சான்றிதழ் மற்றும் பெற்றோர் அடையாள சான்று எடுத்துச்செல்லுங்கள்",
        "சுகன்யா சம்ரித்தி கணக்கு படிவத்தை நிரப்புங்கள்",
        "குறைந்தபட்சம் ₹250 செலுத்துங்கள் (வருடத்திற்கு அதிகபட்சம் ₹1.5 லட்சம்)",
        "15 ஆண்டுகள் டெபாசிட் செய்யுங்கள்; 21 ஆண்டுகளில் முதிர்வு"
      ],
      hi: [
        "किसी भी डाकघर या अधिकृत बैंक में जाएँ",
        "बालिका का जन्म प्रमाण पत्र और माता-पिता का पहचान प्रमाण ले जाएँ",
        "सुकन्या समृद्धि खाता खोलने का फॉर्म भरें",
        "न्यूनतम ₹250 जमा करें (अधिकतम ₹1.5 लाख प्रति वर्ष)",
        "15 साल तक जमा करें; 21 साल में परिपक्वता"
      ]
    },
    certificates: {
      en: ["Girl Child's Birth Certificate", "Parent / Guardian Aadhaar Card", "Parent / Guardian PAN Card", "Address Proof", "Passport Size Photographs (of Guardian & Child)", "Medical Certificate (from hospital of birth)"],
      ta: ["பெண் குழந்தையின் பிறப்புச் சான்றிதழ்", "பெற்றோர் / பாதுகாவலர் ஆதார் அட்டை", "பெற்றோர் / பாதுகாவலர் PAN அட்டை", "முகவரி சான்று", "பாஸ்போர்ட் அளவு புகைப்படங்கள் (பாதுகாவலர் & குழந்தை)", "மருத்துவ சான்றிதழ் (பிறந்த மருத்துவமனை)"],
      hi: ["बालिका का जन्म प्रमाण पत्र", "माता-पिता / अभिभावक आधार कार्ड", "माता-पिता / अभिभावक PAN कार्ड", "पता प्रमाण", "पासपोर्ट साइज फोटो (अभिभावक व बालिका)", "मेडिकल सर्टिफिकेट (जन्म अस्पताल से)"]
    },
    applyUrl: "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
    keywords: ["women","girl","savings","daughter","sukanya","investment","बेटी","बचत","निवेश","பெண்","சேமிப்பு","முதலீடு"]
  },
  {
    id: "kalaignar-magalir",
    category: "women",
    level: "state",
    icon: "₹",
    name: {
      en: "Kalaignar Magalir Urimai Thittam",
      ta: "கலைஞர் மகளிர் உரிமைத் திட்டம்",
      hi: "कलैग्नर मगलिर उरीमई थिट्टम"
    },
    eligibility: {
      en: "Women heads of families in Tamil Nadu with annual family income below ₹2.5 lakh, and owning less than 5 acres of wetland or 10 acres of dryland.",
      ta: "குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்கு கீழ் உள்ள தமிழ்நாட்டின் குடும்பத் தலைவிகள்.",
      hi: "तमिलनाडु में परिवार की महिला मुखिया जिनकी वार्षिक आय ₹2.5 लाख से कम हो।"
    },
    benefits: {
      en: "Monthly financial assistance of ₹1,000 directly credited to the bank account.",
      ta: "மாதந்தோறும் ₹1,000 உரிமைத் தொகை நேரடியாக வங்கிக் கணக்கில் செலுத்தப்படும்.",
      hi: "प्रति माह ₹1,000 की वित्तीय सहायता सीधे बैंक खाते में जमा की जाती है।"
    },
    steps: {
      en: [
        "Apply at local ration shop or specified camps",
        "Submit Aadhaar, Ration card and Bank passbook",
        "Biometric authentication at the camp",
        "Wait for field verification SMS",
        "Receive ₹1000 in bank account monthly"
      ],
      ta: [
        "நியாயவிலைக்கடை அல்லது சிறப்பு முகாம்களில் விண்ணப்பிக்கவும்",
        "ஆதார், ரேஷன் அட்டை மற்றும் வங்கி பாஸ்புக் சமர்ப்பிக்கவும்",
        "முகாமில் பயோமெட்ரிக் பதிவு",
        "சரிபார்ப்புக்குப் பின் SMS வரும்",
        "வங்கிக் கணக்கில் மாதம் ₹1000 வரவு வைக்கப்படும்"
      ],
      hi: [
        "स्थानीय राशन की दुकान या विशेष शिविरों में आवेदन करें",
        "आधार, राशन कार्ड और बैंक पासबुक जमा करें",
        "शिविर में बायोमेट्रिक प्रमाणीकरण",
        "क्षेत्र सत्यापन एसएमएस की प्रतीक्षा करें",
        "प्रति माह बैंक खाते में ₹1000 प्राप्त करें"
      ]
    },
    certificates: {
      en: ["Aadhaar Card", "Ration Card", "Bank Account Passbook"],
      ta: ["ஆதார் அட்டை", "குடும்ப அட்டை (ரேஷன்)", "வங்கிக் கணக்கு பாஸ்புக்"],
      hi: ["आधार कार्ड", "राशन कार्ड", "बैंक खाता पासबुक"]
    },
    applyUrl: "https://tnpds.gov.in/",
    keywords: ["women","tamil nadu","state","financial","kalaignar","magalir","மாநிலம்","பெண்","உரிமைத் தொகை","tamilnadu"]
  },
  {
    id: "kanya-sumangala",
    category: "women",
    level: "state",
    icon: "👧",
    name: {
      en: "Mukhyamantri Kanya Sumangala Yojana",
      ta: "முக்கியமந்திரி கன்யா சுமங்கலா யோஜனா",
      hi: "मुख्यमंत्री कन्या सुमंगला योजना"
    },
    eligibility: {
      en: "Girl child born in Uttar Pradesh. Maximum 2 girls per family. Annual family income below ₹3 lakh.",
      ta: "உத்தரபிரதேசத்தில் பிறந்த பெண் குழந்தை. குடும்பத்திற்கு அதிகபட்சம் 2 பெண்கள்.",
      hi: "उत्तर प्रदेश में जन्मी बालिका। प्रति परिवार अधिकतम 2 लड़कियाँ। वार्षिक पारिवारिक आय ₹3 लाख से कम।"
    },
    benefits: {
      en: "Total ₹15,000 provided in 6 phases from birth to graduation.",
      ta: "பிறப்பு முதல் பட்டப்படிப்பு வரை 6 கட்டங்களாக மொத்தம் ₹15,000 வழங்கப்படுகிறது.",
      hi: "जन्म से लेकर स्नातक होने तक 6 चरणों में कुल ₹15,000 प्रदान किए जाते हैं।"
    },
    steps: {
      en: [
        "Visit mksy.up.gov.in portal",
        "Register as a new user with family details",
        "Fill the application form for the specific stage",
        "Upload required documents (Birth cert, Aadhaar)",
        "Submit and track online"
      ],
      ta: [
        "mksy.up.gov.in போர்ட்டலுக்கு செல்க",
        "புதிய பயனராக பதிவு செய்யவும்",
        "குறிப்பிட்ட கட்டத்திற்கான விண்ணப்பத்தை நிரப்புக",
        "தேவையான ஆவணங்களை பதிவேற்றவும்",
        "ஆன்லைனில் சமர்ப்பித்து கண்காணிக்கவும்"
      ],
      hi: [
        "mksy.up.gov.in पोर्टल पर जाएं",
        "परिवार के विवरण के साथ नए उपयोगकर्ता के रूप में पंजीकरण करें",
        "विशिष्ट चरण के लिए आवेदन पत्र भरें",
        "आवश्यक दस्तावेज़ अपलोड करें (जन्म प्रमाण पत्र, आधार)",
        "सबमिट करें और ऑनलाइन ट्रैक करें"
      ]
    },
    certificates: {
      en: ["Girl Child's Birth Certificate", "Parents Aadhaar", "Income Certificate", "Bank Passbook"],
      ta: ["பெண் குழந்தையின் பிறப்பு சான்றிதழ்", "பெற்றோரின் ஆதார்", "வருமான சான்றிதழ்", "வங்கி பாஸ்புக்"],
      hi: ["बालिका का जन्म प्रमाण पत्र", "माता-पिता का आधार", "आय प्रमाण पत्र", "बैंक पासबुक"]
    },
    applyUrl: "https://mksy.up.gov.in/",
    keywords: ["women","up","state","sumangala","girl","kanya","राज्‍य","बालिका","उत्तर प्रदेश"]
  }
];

SCHEMES.forEach(s => {
  if (!s.level) s.level = "central";
});

// Help center dummy data
const HELP_CENTERS = [
  {
    name: { en: "District e-Seva Centre", ta: "மாவட்ட இ-சேவை மையம்", hi: "जिला ई-सेवा केंद्र" },
    address: { en: "Main Road, District Office Complex", ta: "பிரதான சாலை, மாவட்ட அலுவலக வளாகம்", hi: "मुख्य सड़क, जिला कार्यालय परिसर" },
    phone: "1800-XXX-XXXX",
    distance: "1.2 km",
    hours: { en: "Mon–Sat: 9 AM – 5 PM", ta: "திங்–சனி: காலை 9 – மாலை 5", hi: "सोम–शनि: सुबह 9 – शाम 5" }
  },
  {
    name: { en: "Common Service Centre (CSC)", ta: "பொது சேவை மையம் (CSC)", hi: "कॉमन सर्विस सेंटर (CSC)" },
    address: { en: "Near Bus Stand, Town Centre", ta: "பேருந்து நிலையம் அருகில், நகர மையம்", hi: "बस स्टैंड के पास, टाउन सेंटर" },
    phone: "1800-XXX-YYYY",
    distance: "2.5 km",
    hours: { en: "Mon–Sat: 8 AM – 7 PM", ta: "திங்–சனி: காலை 8 – மாலை 7", hi: "सोम–शनि: सुबह 8 – शाम 7" }
  },
  {
    name: { en: "Taluk Office – Welfare Desk", ta: "தாலுகா அலுவலகம் – நல உதவி", hi: "तहसील कार्यालय – कल्याण डेस्क" },
    address: { en: "Collectorate Road, Taluk Office", ta: "கலெக்டர் சாலை, தாலுகா அலுவலகம்", hi: "कलेक्ट्रेट रोड, तहसील कार्यालय" },
    phone: "1800-XXX-ZZZZ",
    distance: "3.8 km",
    hours: { en: "Mon–Fri: 10 AM – 4 PM", ta: "திங்–வெள்: காலை 10 – மாலை 4", hi: "सोम–शुक्र: सुबह 10 – शाम 4" }
  }
];

// Guided assistant question flow
const ASSISTANT_QUESTIONS = {
  occupation: {
    question: {
      en: "What is your occupation?",
      ta: "உங்கள் தொழில் என்ன?",
      hi: "आपका व्यवसाय क्या है?"
    },
    options: [
      { value: "farmer", label: { en: "🌾 Farmer", ta: "🌾 விவசாயி", hi: "🌾 किसान" } },
      { value: "student", label: { en: "🎓 Student", ta: "🎓 மாணவர்", hi: "🎓 छात्र" } },
      { value: "business", label: { en: "💼 Business Owner", ta: "💼 தொழில் உரிமையாளர்", hi: "💼 व्यवसाय स्वामी" } },
      { value: "homemaker", label: { en: "🏠 Homemaker", ta: "🏠 இல்லத்தரசி", hi: "🏠 गृहिणी" } },
      { value: "retired", label: { en: "🧓 Retired / Senior", ta: "🧓 ஓய்வுபெற்ற / மூத்த", hi: "🧓 सेवानिवृत्त / वरिष्ठ" } },
      { value: "other", label: { en: "👤 Other", ta: "👤 பிற", hi: "👤 अन्य" } }
    ]
  },
  age: {
    question: {
      en: "What is your age group?",
      ta: "உங்கள் வயதுக் குழு என்ன?",
      hi: "आपका आयु वर्ग क्या है?"
    },
    options: [
      { value: "below18", label: { en: "👶 Below 18", ta: "👶 18க்கு கீழ்", hi: "👶 18 से कम" } },
      { value: "18-25", label: { en: "🧑 18 – 25 years", ta: "🧑 18 – 25 வயது", hi: "🧑 18 – 25 वर्ष" } },
      { value: "26-40", label: { en: "👨 26 – 40 years", ta: "👨 26 – 40 வயது", hi: "👨 26 – 40 वर्ष" } },
      { value: "41-60", label: { en: "🧔 41 – 60 years", ta: "🧔 41 – 60 வயது", hi: "🧔 41 – 60 वर्ष" } },
      { value: "60+", label: { en: "🧓 60+ years", ta: "🧓 60+ வயது", hi: "🧓 60+ वर्ष" } }
    ]
  },
  support: {
    question: {
      en: "What type of support do you need?",
      ta: "உங்களுக்கு என்ன வகையான ஆதரவு தேவை?",
      hi: "आपको किस प्रकार की सहायता चाहिए?"
    },
    options: [
      { value: "financial", label: { en: "💵 Financial Aid", ta: "💵 நிதி உதவி", hi: "💵 वित्तीय सहायता" } },
      { value: "insurance", label: { en: "🛡️ Insurance", ta: "🛡️ காப்பீடு", hi: "🛡️ बीमा" } },
      { value: "education", label: { en: "📚 Education", ta: "📚 கல்வி", hi: "📚 शिक्षा" } },
      { value: "housing", label: { en: "🏠 Housing", ta: "🏠 வீட்டு வசதி", hi: "🏠 आवास" } },
      { value: "health", label: { en: "🏥 Health", ta: "🏥 சுகாதாரம்", hi: "🏥 स्वास्थ्य" } },
      { value: "business", label: { en: "💼 Business / Loan", ta: "💼 தொழில் / கடன்", hi: "💼 व्यवसाय / ऋण" } }
    ]
  }
};

// Recommendation logic: maps (occupation, age, support) → scheme IDs
function getRecommendedSchemes(occupation, age, support) {
  const scores = {};
  SCHEMES.forEach(s => scores[s.id] = 0);

  // Occupation mapping
  const occMap = {
    farmer:    ["pm-kisan","pm-fasal-bima"],
    student:   ["national-scholarship","vidya-lakshmi"],
    business:  ["mudra-yojana"],
    homemaker: ["ujjwala-yojana","beti-bachao","sukanya-samriddhi"],
    retired:   ["ignoaps","atal-pension"],
    other:     ["ayushman-bharat","pm-awas"]
  };
  (occMap[occupation] || []).forEach(id => scores[id] += 3);

  // Age mapping
  const ageMap = {
    "below18": ["beti-bachao","national-scholarship","sukanya-samriddhi"],
    "18-25":   ["national-scholarship","vidya-lakshmi","mudra-yojana","atal-pension"],
    "26-40":   ["pm-awas","mudra-yojana","pm-kisan","atal-pension","ayushman-bharat"],
    "41-60":   ["pm-kisan","pm-fasal-bima","ayushman-bharat","pm-awas"],
    "60+":     ["ignoaps","atal-pension","ayushman-bharat"]
  };
  (ageMap[age] || []).forEach(id => scores[id] += 2);

  // Support type mapping
  const supMap = {
    financial:  ["pm-kisan","ignoaps","sukanya-samriddhi"],
    insurance:  ["pm-fasal-bima","ayushman-bharat"],
    education:  ["national-scholarship","vidya-lakshmi","beti-bachao"],
    housing:    ["pm-awas","ujjwala-yojana"],
    health:     ["ayushman-bharat"],
    business:   ["mudra-yojana"]
  };
  (supMap[support] || []).forEach(id => scores[id] += 2);

  // Sort by score descending and return top matches (score > 0)
  return SCHEMES
    .filter(s => scores[s.id] > 0)
    .sort((a, b) => scores[b.id] - scores[a.id])
    .slice(0, 4);
}
