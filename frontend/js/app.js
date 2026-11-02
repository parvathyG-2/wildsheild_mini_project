// ---------------------------------------------------------
    // 1. TRI-LINGUAL LOCALIZATION DICTIONARY
    // ---------------------------------------------------------
    const TRANSLATIONS = {
      en: {
        brandTitle: "WILDSHIELD TELEMETRY",
        brandSub: "VEHICLE EDGE WILDLIFE RADAR",
        quickVoiceLabel: "Voice Assistant",
        hotspotConnected: "● Hotspot Connected (ESP32 Vehicle Node Active)",
        hotspotOffline: "○ Hotspot Standby (Listening for Vehicle Node)",
        voiceTitle: "Hands-Free Voice Supporter & Emergency Assistant",
        voiceStatusStandby: "Voice Supporter Ready (Tap to Speak)",
        voiceStatusListening: "Listening for Commands... (Say 'Emergency Call')",
        voiceStatusUnsupported: "Speech recognition not supported in this browser. Use test button below.",
        voiceBtnStart: "Start Voice Supporter",
        voiceBtnStop: "Stop Voice Supporter",
        voiceBtnTest: "Test 'Emergency Call' Trigger",
        voiceHintLabel: "Say:",
        transcriptPrefix: "Heard:",
        routeSafetyTitle: "Highway Transit Corridor Route Safety",
        selectRouteLabel: "Select Forest Transit Highway:",
        statusBlockedHead: "BLOCKED / CRITICAL — Active Wildlife Roadblock Detected",
        statusBlockedDesc: "Elephant herd currently crossing roadway near KM 43. Road passage temporarily obstructed.",
        statusAdvisoryHead: "ROUNDING / ADVISORY — Animals Grazing Near Road Edges",
        statusAdvisoryDesc: "Spotted deer herd loitering on highway shoulder near KM 39. Drive with caution.",
        statusClearHead: "CLEAR — Normal Highway Transit Allowed",
        statusClearDesc: "No active animal obstructions reported across this corridor. Follow forest speed limits.",
        speedTipBlocked: "⚠️ MANDATORY PROTOCOL: REDUCE SPEED TO 30 KM/H • LOW BEAMS ONLY • STRICTLY DO NOT HONK",
        speedTipAdvisory: "⚠️ CAUTION PROTOCOL: MAINTAIN 35 KM/H • STAY ALERT FOR SUDDEN ANIMAL CROSSINGS",
        speedTipClear: "🟢 STANDARD FOREST PROTOCOL: CRUISE CAUTIOUSLY • 40 KM/H SPEED LIMIT APPLIES",
        btnMapsText: "Open Route in Google Maps (Driving Directions)",
        btnPinText: "View Animal Sighting GPS Spot",
        corridorsTitle: "High-Frequency Wildlife Crossing Hotspots",
        corridor1Title: "Elephant Corridor (KM 42–46)",
        corridor1Desc: "Primary migration route connecting seasonal watering basins. Peak movements during dawn (05:00-08:00) and dusk (17:30-21:00). High beams provoke herd aggression; drive with low beams only.",
        corridor2Title: "River Valley Bend (KM 38–41)",
        corridor2Desc: "Blind curve where spotted deer and wild boars graze along roadside banks. Sharp curves drastically reduce braking distance. Maintain strict 30 km/h speed limit.",
        corridor3Title: "Buffer Crossing Zone (KM 50–54)",
        corridor3Desc: "Monitored nocturnal predator transit corridor (tiger and leopard crossings). Continuous Forest Department sensor watch. Never disembark or pull over on highway shoulders.",
        helplineTitle: "24/7 Forest Emergency Helplines (One-Tap Dial)",
        hlTollfree: "State Forest Emergency Toll-Free",
        hlRrt: "Wildlife Rapid Response Squad (RRT)",
        hlCheckpost: "National Highway Emergency (Police/Medical)",
        emergencyModalTitle: "EMERGENCY CALL INITIATED",
        emergencyModalDesc: "Voice Supporter detected emergency distress command. Connecting your device to Forest Emergency Helpline...",
        emergencyCountdownLabel: "Auto-dialing Forest Toll-Free (1926) in:",
        btnDialNow: "Call 1926 Now (Toll-Free)",
        btnDialRrt: "Call Rapid Response Squad (+91 94479 79000)",
        btnCancelCall: "✖️ Cancel Emergency Call",
        stealthBtnText: "Officer Access",
        modalTitle: "Officer Verification",
        modalDesc: "Enter authorized Forest Division security passcode to unlock raw forensic telemetry and exact wildlife GPS coordinates.",
        modalPasscodePlaceholder: "Passcode (ranger2026)",
        btnVerify: "Verify Passcode",
        btnCancel: "Cancel",
        officerTitle: "Vehicle Node Raw Telemetry Stream",
        officerSub: "Exact GPS coordinates quarantined under Wildlife Protection Act.",
        btnSimText: "Simulate Vehicle Ingest",
        thTime: "TIMESTAMP",
        thNode: "NODE ID",
        thModel: "ENGINE",
        thSpecies: "SPECIES",
        thConf: "CONFIDENCE",
        thGps: "EXACT GPS (LAT, LNG)",
        thSpeed: "SPEED",
        thStatus: "HAZARD STATUS"
      },
      ml: {
        brandTitle: "വൈൽഡ്ഷീൽഡ് ടെലിമെട്രി",
        brandSub: "വാഹന അധിഷ്ഠിത എഡ്ജ് വന്യജീവി റഡാർ",
        quickVoiceLabel: "വോയ്‌സ് അസിസ്റ്റന്റ്",
        hotspotConnected: "● ഹോട്ട്സ്പോട്ട് ബന്ധിപ്പിച്ചു (വാഹന നോഡ് സജീവം)",
        hotspotOffline: "○ ഹോട്ട്സ്പോട്ട് സ്റ്റാൻഡ്‌ബൈ (വാഹന നോഡിനായി കാത്തിരിക്കുന്നു)",
        voiceTitle: "ഹാൻഡ്‌സ്-ഫ്രീ ശബ്ദ സഹായ സുരക്ഷാ സംവിധാനം",
        voiceStatusStandby: "ശബ്ദ സഹായി സജീവം (സംസാരിക്കാൻ ടാപ്പ് ചെയ്യുക)",
        voiceStatusListening: "ശ്രദ്ധിക്കുന്നു... ('എമർജൻസി കോൾ' എന്ന് പറയുക)",
        voiceStatusUnsupported: "ബ്രൗസറിൽ വോയ്‌സ് റെക്കഗ്നിഷൻ ലഭ്യമല്ല. ടെസ്റ്റ് ബട്ടൺ ഉപയോഗിക്കുക.",
        voiceBtnStart: "ശബ്ദ സംവിധാനം ആരംഭിക്കുക",
        voiceBtnStop: "ശബ്ദ സംവിധാനം നിർത്തുക",
        voiceBtnTest: "🚨 'എമർജൻസി കോൾ' വോയ്‌സ് ടെസ്റ്റ്",
        voiceHintLabel: "പറയുക:",
        transcriptPrefix: "ശബ്ദ സന്ദേശം:",
        routeSafetyTitle: "വനപാത യാത്രാ സുരക്ഷാ വിവരം",
        selectRouteLabel: "യാത്രാ വനപാത തിരഞ്ഞെടുക്കുക:",
        statusBlockedHead: "പാത തടസ്സപ്പെട്ടു / അതിജാഗ്രത — വന്യമൃഗ സാന്നിധ്യം പാതയിൽ!",
        statusBlockedDesc: "KM 43-ൽ ആനക്കൂട്ടം റോഡ് മുറിച്ചുകടക്കുന്നു. ഗതാഗതം താൽക്കാലികമായി തടസ്സപ്പെട്ടു.",
        statusAdvisoryHead: "ജാഗ്രതാ നിർദ്ദേശം — മൃഗങ്ങൾ പാതയോരത്ത് മേയുന്നു",
        statusAdvisoryDesc: "KM 39-ൽ മാനിൻകൂട്ടം റോഡരികിൽ മേയുന്നു. വേഗത കുറച്ച് ജാഗ്രതയോടെ വാഹനമോടിക്കുക.",
        statusClearHead: "സുരക്ഷിതം — തടസ്സങ്ങളില്ലാതെ യാത്ര തുടരാം",
        statusClearDesc: "വനപാതയിൽ തടസ്സങ്ങൾ ഒന്നും റിപ്പോർട്ട് ചെയ്തിട്ടില്ല. വേഗപരിധി പാലിക്കുക.",
        speedTipBlocked: "⚠️ നിർബന്ധിത നിർദ്ദേശം: വേഗത 30 കി.മീ ആയി കുറയ്ക്കുക • ലോ ബീം മാത്രം • ഹോൺ അടിക്കരുത്",
        speedTipAdvisory: "⚠️ ജാഗ്രത: വേഗത 35 കി.മീറ്ററിൽ നിലനിർത്തുക • പെട്ടെന്നുള്ള ക്രോസിംഗുകൾ ശ്രദ്ധിക്കുക",
        speedTipClear: "🟢 വനപാത സുരക്ഷിതം: 40 കി.മീ വേഗപരിധി പാലിച്ച് ശ്രദ്ധയോടെ യാത്ര ചെയ്യുക",
        btnMapsText: "ഗൂഗിൾ മാപ്പിൽ റൂട്ട് തുറക്കുക (ഡ്രൈവിംഗ് നിർദ്ദേശങ്ങൾ)",
        btnPinText: "വന്യജീവി സാന്നിധ്യ സ്ഥലം മാപ്പിൽ കാണുക",
        corridorsTitle: "പ്രധാന വന്യജീവി സഞ്ചാര പാതകൾ",
        corridor1Title: "ആനത്താര (KM 42–46)",
        corridor1Desc: "പ്രധാന ആനസഞ്ചാര പാത. പുലർച്ചെയും (05:00-08:00) സന്ധ്യാസമയത്തും (17:30-21:00) ആനകൾ റോഡ് മുറിച്ചുകടക്കുന്നു. ഹൈ-ബീം ലൈറ്റുകളും ഹോണും പൂർണ്ണമായും ഒഴിവാക്കുക.",
        corridor2Title: "നദീതീര വളവ് (KM 38–41)",
        corridor2Desc: "മാനുകളും കാട്ടുപന്നികളും പുഴയോരത്ത് മേയുന്ന അപകടവളവുകൾ. വേഗത 30 കി.മീറ്ററിൽ കൂടരുത്. വാഹനത്തിൽ നിന്ന് പുറത്തിറങ്ങരുത്.",
        corridor3Title: "ബഫർ സോൺ പാത (KM 50–54)",
        corridor3Desc: "രാത്രികാലങ്ങളിൽ കടുവ, പുലി എന്നിവ സഞ്ചരിക്കുന്ന നിരീക്ഷിത മേഖല. വനം വകുപ്പിന്റെ രാത്രികാല പട്രോളിംഗ് നിലവിലുണ്ട്.",
        helplineTitle: "24/7 വനംവകുപ്പ് അടിയന്തര ഹെൽപ്പ്‌ലൈനുകൾ (വൺ-ടാപ്പ് ഡയൽ)",
        hlTollfree: "സംസ്ഥാന വനം അടിയന്തര ടോൾ-ഫ്രീ",
        hlRrt: "റാപ്പിഡ് റെസ്‌പോൺസ് ടീം (RRT)",
        hlCheckpost: "ദേശീയപാത അടിയന്തര സഹായം (പോലീസ്/ആംബുലൻസ്)",
        emergencyModalTitle: "അടിയന്തിര കോൾ ആരംഭിച്ചു",
        emergencyModalDesc: "ശബ്ദ സഹായി അടിയന്തിര സഹായ സന്ദേശം കണ്ടെത്തി. വനംവകുപ്പ് ഹെൽപ്പ്‌ലൈനിലേക്ക് ബന്ധിപ്പിക്കുന്നു...",
        emergencyCountdownLabel: "1926-ലേക്ക് ഓട്ടോമാറ്റിക് കോൾ ചെയ്യാൻ ബാക്കിയുള്ള സമയം:",
        btnDialNow: "ഇപ്പോൾ 1926-ലേക്ക് വിളിക്കുക (ടോൾ-ഫ്രീ)",
        btnDialRrt: "റാപ്പിഡ് റെസ്‌പോൺസ് ടീമിനെ വിളിക്കുക (+91 94479 79000)",
        btnCancelCall: "✖️ കോൾ റദ്ദാക്കുക",
        stealthBtnText: "ഓഫീസർ ലോഗിൻ",
        modalTitle: "ഫോറസ്റ്റ് ഓഫീസർ പരിശോധന",
        modalDesc: "രഹസ്യ ജിപിഎസ് ലൊക്കേഷനുകളും ക്യാമറ ടെലിമെട്രിയും കാണുന്നതിന് പാസ്‌കോഡ് നൽകുക.",
        modalPasscodePlaceholder: "പാസ്‌കോഡ് (ranger2026)",
        btnVerify: "പരിശോധിക്കുക",
        btnCancel: "റദ്ദാക്കുക",
        officerTitle: "വാഹന നോഡ് തത്സമയ ടെലിമെട്രി ഡാറ്റ",
        officerSub: "വന്യജീവി സംരക്ഷണ നിയമപ്രകാരം ജിപിഎസ് വിവരങ്ങൾ അതീവ രഹസ്യമാണ്.",
        btnSimText: "ടെലിമെട്രി സിമുലേറ്റ് ചെയ്യുക",
        thTime: "സമയം",
        thNode: "നോഡ് ID",
        thModel: "മോഡൽ",
        thSpecies: "ഇനം",
        thConf: "കൃത്യത",
        thGps: "കൃത്യമായ GPS (LAT, LNG)",
        thSpeed: "വേഗത",
        thStatus: "സാഹചര്യം"
      },
      hi: {
        brandTitle: "वाइल्डशील्ड टेलीमेट्री",
        brandSub: "वाहन-आधारित एज वन्यजीव रडार",
        quickVoiceLabel: "वॉयस असिस्टेंट",
        hotspotConnected: "● हॉटस्पॉट कनेक्टेड (ESP32 वाहन नोड सक्रिय)",
        hotspotOffline: "○ हॉटस्पॉट स्टैंडबाय (वाहन नोड की प्रतीक्षा)",
        voiceTitle: "हैंड्स-फ्री वॉयस सपोर्टर एवं आपातकालीन सहायक",
        voiceStatusStandby: "वॉयस सपोर्टर तैयार (बोलने के लिए टैप करें)",
        voiceStatusListening: "सुन रहा है... ('इमरजेंसी कॉल' बोलें)",
        voiceStatusUnsupported: "इस ब्राउज़र में वाक् पहचान उपलब्ध नहीं है। टेस्ट बटन का उपयोग करें।",
        voiceBtnStart: "वॉयस सपोर्टर सक्रिय करें",
        voiceBtnStop: "वॉयस सपोर्टर बंद करें",
        voiceBtnTest: "🚨 'इमरजेंसी कॉल' वॉयस टेस्ट",
        voiceHintLabel: "बोलें:",
        transcriptPrefix: "आवाज इनपुट:",
        routeSafetyTitle: "वन राजमार्ग गलियारा सुरक्षा स्थिति",
        selectRouteLabel: "वन राजमार्ग मार्ग चुनें:",
        statusBlockedHead: "मार्ग अवरुद्ध / अत्यधिक खतरा — सड़क पर वन्यजीव की उपस्थिति!",
        statusBlockedDesc: "KM 43 पर हाथियों का झुंड सड़क पार कर रहा है। मार्ग अस्थायी रूप से अवरुद्ध है।",
        statusAdvisoryHead: "सतर्कता परामर्श — जानवर सड़क के किनारे चर रहे हैं",
        statusAdvisoryDesc: "KM 39 पर हिरण सड़क किनारे देखे गए हैं। कृपया वाहन धीमी गति से चलाएं।",
        statusClearHead: "सुरक्षित — सामान्य आवागमन जारी रखें",
        statusClearDesc: "वर्तमान में इस मार्ग पर कोई वन्यजीव अवरोध नहीं है। वन गति सीमा का पालन करें।",
        speedTipBlocked: "⚠️ अनिवार्य प्रोटोकॉल: गति घटाकर 30 किमी/घंटा करें • केवल लो बीम • हॉर्न बिल्कुल न बजाएं",
        speedTipAdvisory: "⚠️ सावधानी प्रोटोकॉल: गति 35 किमी/घंटा रखें • अचानक आने वाले जानवरों से सतर्क रहें",
        speedTipClear: "🟢 सामान्य वन प्रोटोकॉल: 40 किमी/घंटा की गति सीमा में सावधानीपूर्वक ड्राइव करें",
        btnMapsText: "गूगल मैप्स में मार्ग खोलें (ड्राइविंग दिशाएं)",
        btnPinText: "वन्यजीव दिखने का स्थान मैप पर देखें",
        corridorsTitle: "अत्यधिक वन्यजीव आवागमन गलियारे",
        corridor1Title: "हाथी गलियारा (KM 42–46)",
        corridor1Desc: "मुख्य हाथी प्रवास मार्ग। भोर (05:00-08:00) और गोधूलि (17:30-21:00) के समय झुंड सड़क पार करता है। हेडलाइट धीमी रखें और हॉर्न न बजाएं।",
        corridor2Title: "नदी घाटी मोड़ (KM 38–41)",
        corridor2Desc: "अंधे मोड़ जहां हिरण और जंगली सूअर घास चरते हैं। गति 30 किमी/घंटा से अधिक न रखें। वाहन के अंदर ही रहें।",
        corridor3Title: "बफर क्रॉसिंग जोन (KM 50–54)",
        corridor3Desc: "रात के समय बाघ और तेंदुए का आवागमन क्षेत्र। वन विभाग द्वारा निरंतर निगरानी। सड़क किनारे वाहन न रोकें।",
        helplineTitle: "24/7 वन आपातकालीन हेल्पलाइन (वन-टैप डायल)",
        hlTollfree: "राज्य वन आपातकालीन टोल-फ्री",
        hlRrt: "वन्यजीव त्वरित प्रतिक्रिया दल (RRT)",
        hlCheckpost: "राष्ट्रीय राजमार्ग आपातकालीन (पुलिस/चिकित्सा)",
        emergencyModalTitle: "आपातकालीन कॉल शुरू की गई",
        emergencyModalDesc: "वॉयस सपोर्टर ने आपातकालीन वॉयस कमांड का पता लगाया। वन हेल्पलाइन से कनेक्ट किया जा रहा है...",
        emergencyCountdownLabel: "1926 पर ऑटो-डायल होने में शेष समय:",
        btnDialNow: "1926 पर अभी कॉल करें (टोल-फ्री)",
        btnDialRrt: "रैपिड रिस्पांस स्क्वाड को कॉल करें (+91 94479 79000)",
        btnCancelCall: "✖️ कॉल रद्द करें",
        stealthBtnText: "अधिकारी प्रवेश",
        modalTitle: "वन अधिकारी सत्यापन",
        modalDesc: "गोपनीय जीपीएस निर्देशांक और कैमरा टेलीमेट्री देखने के लिए सुरक्षा पासकोड दर्ज करें।",
        modalPasscodePlaceholder: "पासकोड (ranger2026)",
        btnVerify: "सत्यापित करें",
        btnCancel: "रद्द करें",
        officerTitle: "वाहन नोड लाइव टेलीमेट्री स्ट्रीम",
        officerSub: "वन्यजीव संरक्षण अधिनियम के तहत जीपीएस निर्देशांक अत्यधिक गोपनीय हैं।",
        btnSimText: "टेलीमेट्री सिमुलेट करें",
        thTime: "समय",
        thNode: "नोड ID",
        thModel: "इंजन",
        thSpecies: "प्रजाति",
        thConf: "विश्वास स्कोर",
        thGps: "सटीक GPS (LAT, LNG)",
        thSpeed: "गति",
        thStatus: "खतरे की स्थिति"
      }
    };

    // ---------------------------------------------------------
    // 2. CORRIDOR ROUTE DEFINITIONS & EXACT VERIFIED GPS POINTS
    // ---------------------------------------------------------
    const ROUTES = {
      nh766: {
        name: "Wayanad NH-766 (Bandipur — Sultan Bathery)",
        origin: "Bandipur Forest Checkpost",
        destination: "Sultan Bathery, Wayanad",
        originCoords: "11.6660,76.6340",
        destCoords: "11.6645,76.2570",
        defaultHazard: "CRITICAL_BLOCK",
        species: "elephant",
        sector: "KM 42-46 (Elephant Corridor)",
        lat: 11.6645,
        lng: 76.6210
      },
      sh17: {
        name: "Chinnar SH-17 (Marayoor — Udumalpet Ghat)",
        origin: "Marayoor Forest Checkpost",
        destination: "Udumalpet, Tamil Nadu",
        originCoords: "10.2800,77.1580",
        destCoords: "10.5840,77.2470",
        defaultHazard: "ADVISORY",
        species: "deer",
        sector: "KM 38-41 (River Valley Bend)",
        lat: 10.3120,
        lng: 77.1650
      },
      nh85: {
        name: "Munnar Gap Road NH-85 (Kochi — Dhanushkodi Pass)",
        origin: "Munnar Town, Kerala",
        destination: "Poopara, Kerala",
        originCoords: "10.0889,77.0595",
        destCoords: "9.9710,77.1850",
        defaultHazard: "CLEAR",
        species: "none",
        sector: "KM 50-54 (Buffer Crossing Zone)",
        lat: 10.0350,
        lng: 77.1280
      }
    };

    // ---------------------------------------------------------
    // 3. APPLICATION STATE
    // ---------------------------------------------------------
    let currentLang = "en";
    let isOfficerUnlocked = false;
    let currentUser = null;
    let selectedRouteKey = "nh766";
    const DEFAULT_PASSCODE = "ranger2026";

    // Voice recognition & emergency countdown state
    let recognition = null;
    let isVoiceListening = false;
    let emergencyCountdownInterval = null;
    let emergencyCountdownRemaining = 3;

    // In-memory / Offline Cache Telemetry Logs
    let telemetryLogs = [
      {
        id: 1,
        timestamp: new Date(Date.now() - 2 * 60000).toLocaleTimeString(),
        node_id: "VEHICLE_PROTOTYPE_01",
        model_type: "FOMO",
        species: "elephant",
        confidence: 0.94,
        latitude: 11.6645,
        longitude: 76.6210,
        speed_kmh: 31.5,
        road_sector: "KM 42-46 (Elephant Corridor)",
        hazard_level: "CRITICAL_BLOCK"
      },
      {
        id: 2,
        timestamp: new Date(Date.now() - 11 * 60000).toLocaleTimeString(),
        node_id: "VEHICLE_PROTOTYPE_02",
        model_type: "YOLO",
        species: "tiger",
        confidence: 0.89,
        latitude: 11.6820,
        longitude: 76.6430,
        speed_kmh: 24.0,
        road_sector: "KM 50-54 (Buffer Crossing Zone)",
        hazard_level: "CRITICAL_BLOCK"
      },
      {
        id: 3,
        timestamp: new Date(Date.now() - 24 * 60000).toLocaleTimeString(),
        node_id: "VEHICLE_PROTOTYPE_01",
        model_type: "FOMO",
        species: "deer",
        confidence: 0.82,
        latitude: 11.6490,
        longitude: 76.6025,
        speed_kmh: 42.0,
        road_sector: "KM 38-41 (River Valley Bend)",
        hazard_level: "ADVISORY"
      }
    ];

    // ---------------------------------------------------------
    // 4. INITIALIZATION ON DOM READY (FAILSAFE)
    // ---------------------------------------------------------
    function initAllModules() {
      try { initLocalization(); } catch (e) { console.warn("initLocalization error:", e); }
      try { initRouteSelector(); } catch (e) { console.warn("initRouteSelector error:", e); }
      try { initGoogleMapsButtons(); } catch (e) { console.warn("initGoogleMapsButtons error:", e); }
      try { initVoiceSupporter(); } catch (e) { console.warn("initVoiceSupporter error:", e); }
      try { initAuthPortal(); } catch (e) { console.warn("initAuthPortal error:", e); }
      try { initOfficerModal(); } catch (e) { console.warn("initOfficerModal error:", e); }
      try { initAdminCRUD(); } catch (e) { console.warn("initAdminCRUD error:", e); }
      try { initSimulateIngest(); } catch (e) { console.warn("initSimulateIngest error:", e); }
      try { renderTelemetryTable(); } catch (e) { console.warn("renderTelemetryTable error:", e); }
      try { updateRoadStatus(); } catch (e) { console.warn("updateRoadStatus error:", e); }
      try { probeBackendNetwork(); } catch (e) { console.warn("probeBackendNetwork error:", e); }

      // Poll network & telemetry state periodically
      setInterval(probeBackendNetwork, 4000);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAllModules);
    } else {
      initAllModules();
    }

    // ---------------------------------------------------------
    // 5. TRI-LINGUAL LOCALIZATION CONTROLLER
    // ---------------------------------------------------------
    function initLocalization() {
      const langSelect = document.getElementById("lang-switcher");
      const savedLang = localStorage.getItem("wildshield_lang");
      if (savedLang && TRANSLATIONS[savedLang]) {
        currentLang = savedLang;
        if (langSelect) langSelect.value = savedLang;
      }

      if (langSelect) {
        langSelect.addEventListener("change", (e) => {
          applyLanguage(e.target.value);
        });
      }

      applyLanguage(currentLang);
    }

    function applyLanguage(lang) {
      if (!TRANSLATIONS[lang]) return;
      currentLang = lang;
      localStorage.setItem("wildshield_lang", lang);
      const t = TRANSLATIONS[lang];

      const setSafeText = (id, val) => {
        const el = document.getElementById(id);
        if (el && val !== undefined) el.textContent = val;
      };

      // Update Header Text
      setSafeText("ui-brand-title", t.brandTitle);
      setSafeText("ui-brand-sub", t.brandSub);
      setSafeText("ui-quick-voice-label", t.quickVoiceLabel);

      // Update Voice Supporter Card
      setSafeText("ui-voice-title", t.voiceTitle);
      setSafeText("ui-btn-voice-toggle", isVoiceListening ? t.voiceBtnStop : t.voiceBtnStart);
      setSafeText("ui-btn-voice-test", t.voiceBtnTest);
      setSafeText("ui-voice-hint-label", t.voiceHintLabel);
      setSafeText("ui-transcript-prefix", t.transcriptPrefix);
      if (!isVoiceListening) {
        setSafeText("ui-voice-status", t.voiceStatusStandby);
      } else {
        setSafeText("ui-voice-status", t.voiceStatusListening);
      }

      // Update Route Safety & Hotspots
      setSafeText("ui-route-safety-title", t.routeSafetyTitle);
      setSafeText("ui-select-route-label", t.selectRouteLabel);
      setSafeText("ui-btn-maps-text", t.btnMapsText);
      setSafeText("ui-btn-pin-text", t.btnPinText);

      setSafeText("ui-corridors-title", t.corridorsTitle);
      setSafeText("ui-corridor1-title", t.corridor1Title);
      setSafeText("ui-corridor1-desc", t.corridor1Desc);
      setSafeText("ui-corridor2-title", t.corridor2Title);
      setSafeText("ui-corridor2-desc", t.corridor2Desc);
      setSafeText("ui-corridor3-title", t.corridor3Title);
      setSafeText("ui-corridor3-desc", t.corridor3Desc);

      // Update Helplines
      setSafeText("ui-helpline-title", t.helplineTitle);
      setSafeText("ui-hl-tollfree", t.hlTollfree);
      setSafeText("ui-hl-rrt", t.hlRrt);
      setSafeText("ui-hl-checkpost", t.hlCheckpost);

      // Update Emergency Call Modal
      setSafeText("ui-emergency-modal-title", t.emergencyModalTitle);
      setSafeText("ui-emergency-modal-desc", t.emergencyModalDesc);
      setSafeText("ui-emergency-countdown-label", t.emergencyCountdownLabel);
      setSafeText("ui-btn-dial-now", t.btnDialNow);
      setSafeText("ui-btn-dial-rrt", t.btnDialRrt);
      setSafeText("ui-btn-cancel-call", t.btnCancelCall);

      // Update Stealth Button & Passcode Modal
      setSafeText("ui-stealth-btn-text", t.stealthBtnText);
      setSafeText("ui-modal-title", t.modalTitle);
      setSafeText("ui-modal-desc", t.modalDesc);
      const passcodeEl = document.getElementById("passcode-input");
      if (passcodeEl && t.modalPasscodePlaceholder) passcodeEl.placeholder = t.modalPasscodePlaceholder;
      setSafeText("ui-btn-verify", t.btnVerify);
      setSafeText("ui-btn-cancel", t.btnCancel);

      // Update Officer Terminal
      setSafeText("ui-officer-title", t.officerTitle);
      setSafeText("ui-officer-sub", t.officerSub);
      setSafeText("ui-btn-sim-text", t.btnSimText);

      setSafeText("th-time", t.thTime);
      setSafeText("th-node", t.thNode);
      setSafeText("th-model", t.thModel);
      setSafeText("th-species", t.thSpecies);
      setSafeText("th-conf", t.thConf);
      setSafeText("th-gps", t.thGps);
      setSafeText("th-speed", t.thSpeed);
      setSafeText("th-status", t.thStatus);

      // Update Speech Recognition language if active
      if (recognition) {
        if (lang === "ml") recognition.lang = "ml-IN";
        else if (lang === "hi") recognition.lang = "hi-IN";
        else recognition.lang = "en-IN";
      }

      // Re-render Dynamic Road Status with new localized strings
      updateRoadStatus();
    }

    // ---------------------------------------------------------
    // 6. ROUTE SELECTOR CONTROLLER
    // ---------------------------------------------------------
    function initRouteSelector() {
      const selectEl = document.getElementById("route-select");
      selectEl.addEventListener("change", (e) => {
        selectedRouteKey = e.target.value;
        updateRoadStatus();
      });
      updateRoadStatus();
    }

    function updateRoadStatus() {
      const route = ROUTES[selectedRouteKey];
      if (!route) return;

      const bannerEl = document.getElementById("road-status-banner");
      const iconEl = document.getElementById("status-icon");
      const headEl = document.getElementById("ui-status-head");
      const descEl = document.getElementById("ui-status-desc");
      const speedTipEl = document.getElementById("ui-speed-tip");
      const t = TRANSLATIONS[currentLang];

      // Compute Google Maps Direction & Coordinate URLs
      const dirUrl = `https://www.google.com/maps/dir/?api=1&origin=${route.originCoords}&destination=${route.destCoords}&travelmode=driving`;
      const pinUrl = `https://www.google.com/maps/search/?api=1&query=${route.lat},${route.lng}`;

      // Update Native Google Maps Link Hrefs
      const btnDirections = document.getElementById("btn-open-maps");
      const btnPin = document.getElementById("btn-pin-hotspot");
      if (btnDirections) {
        btnDirections.href = dirUrl;
      }
      if (btnPin) {
        btnPin.href = pinUrl;
      }

      // Update Live Corridor Strip Preview
      const originEl = document.getElementById("ui-checkpoint-origin");
      const destEl = document.getElementById("ui-checkpoint-dest");
      const hazardBadgeEl = document.getElementById("route-hazard-badge");
      const hazardTextEl = document.getElementById("ui-route-hazard-text");
      const hazardIconEl = document.getElementById("route-hazard-icon");

      if (originEl) originEl.textContent = route.origin;
      if (destEl) destEl.textContent = route.destination;
      if (hazardTextEl) hazardTextEl.textContent = route.sector.toUpperCase();

      // Check latest relevant telemetry for this route / sector
      const latestMatchingLog = telemetryLogs.find(l => 
        l.road_sector.toLowerCase().includes(route.sector.split(' ')[0].toLowerCase()) ||
        l.road_sector.toLowerCase().includes("km 42") && selectedRouteKey === "nh766" ||
        l.road_sector.toLowerCase().includes("km 38") && selectedRouteKey === "sh17"
      );

      const activeHazard = latestMatchingLog ? latestMatchingLog.hazard_level : route.defaultHazard;

      if (activeHazard === "CRITICAL_BLOCK") {
        bannerEl.className = "status-banner blocked";
        iconEl.textContent = "🚨";
        headEl.textContent = t.statusBlockedHead;
        descEl.textContent = `${route.name}: Elephant / Megafauna roadblock active near ${route.sector}.`;
        speedTipEl.textContent = t.speedTipBlocked;

        if (hazardBadgeEl) {
          hazardBadgeEl.style.borderColor = "#f87171";
          hazardBadgeEl.style.background = "#fef2f2";
          hazardBadgeEl.style.color = "#dc2626";
          if (hazardIconEl) hazardIconEl.textContent = "🚨";
        }
      } else if (activeHazard === "ADVISORY") {
        bannerEl.className = "status-banner advisory";
        iconEl.textContent = "⚠️";
        headEl.textContent = t.statusAdvisoryHead;
        descEl.textContent = `${route.name}: Wildlife activity near roadside shoulders. Maintain vigilance.`;
        speedTipEl.textContent = t.speedTipAdvisory;

        if (hazardBadgeEl) {
          hazardBadgeEl.style.borderColor = "#fcd34d";
          hazardBadgeEl.style.background = "#fffbeb";
          hazardBadgeEl.style.color = "#b45309";
          if (hazardIconEl) hazardIconEl.textContent = "⚠️";
        }
      } else {
        bannerEl.className = "status-banner clear";
        iconEl.textContent = "🟢";
        headEl.textContent = t.statusClearHead;
        descEl.textContent = `${route.name}: Route clear. Normal highway transit permitted.`;
        speedTipEl.textContent = t.speedTipClear;

        if (hazardBadgeEl) {
          hazardBadgeEl.style.borderColor = "#86efac";
          hazardBadgeEl.style.background = "#f0fdf4";
          hazardBadgeEl.style.color = "#059669";
          if (hazardIconEl) hazardIconEl.textContent = "🟢";
        }
      }

      // Update Embedded SVG Route Radar Map
      const svgTitle = document.getElementById("ui-svg-corridor-title");
      const svgPill = document.getElementById("ui-svg-status-pill");
      const svgOrigin = document.getElementById("ui-svg-origin-name");
      const svgDest = document.getElementById("ui-svg-dest-name");
      const svgDestKm = document.getElementById("ui-svg-dest-km");
      const svgHazardTag = document.getElementById("ui-svg-hazard-tag");
      const svgGps = document.getElementById("ui-svg-gps-coords");
      const svgSpeed = document.getElementById("ui-svg-speed-protocol");

      if (svgTitle) svgTitle.textContent = `HIGHWAY CORRIDOR RADAR: ${route.name.toUpperCase()}`;
      if (svgOrigin) svgOrigin.textContent = route.origin.split(" ")[0] + " Checkpost";
      if (svgDest) svgDest.textContent = route.destination.split(",")[0];
      if (svgGps) svgGps.textContent = `${route.originCoords} → ${route.destCoords}`;

      const kmDist = selectedRouteKey === "nh766" ? "38.0" : selectedRouteKey === "sh17" ? "44.0" : "26.0";
      if (svgDestKm) svgDestKm.textContent = `KM ${kmDist}`;

      if (activeHazard === "CRITICAL_BLOCK") {
        if (svgPill) {
          svgPill.textContent = "ROADBLOCK AT KM 43";
          svgPill.style.background = "#fee2e2";
          svgPill.style.color = "#dc2626";
          svgPill.style.borderColor = "#f87171";
        }
        if (svgHazardTag) svgHazardTag.textContent = "🐘 KM 43: ELEPHANT ROADBLOCK";
        if (svgSpeed) {
          svgSpeed.textContent = "30 KM/H LIMIT";
          svgSpeed.style.color = "#dc2626";
          svgSpeed.style.background = "#fef2f2";
        }
      } else if (activeHazard === "ADVISORY") {
        if (svgPill) {
          svgPill.textContent = "CAUTION AT KM 39";
          svgPill.style.background = "#fef3c7";
          svgPill.style.color = "#b45309";
          svgPill.style.borderColor = "#fcd34d";
        }
        if (svgHazardTag) svgHazardTag.textContent = "🦌 KM 39: DEER NEAR SHOULDER";
        if (svgSpeed) {
          svgSpeed.textContent = "35 KM/H CAUTION";
          svgSpeed.style.color = "#b45309";
          svgSpeed.style.background = "#fffbeb";
        }
      } else {
        if (svgPill) {
          svgPill.textContent = "NORMAL TRANSIT";
          svgPill.style.background = "#dcfce7";
          svgPill.style.color = "#15803d";
          svgPill.style.borderColor = "#86efac";
        }
        if (svgHazardTag) svgHazardTag.textContent = "🟢 KM 52: CORRIDOR CLEAR";
        if (svgSpeed) {
          svgSpeed.textContent = "40 KM/H SPEED LIMIT";
          svgSpeed.style.color = "#15803d";
          svgSpeed.style.background = "#f0fdf4";
        }
      }

      // Update Working Live OpenStreetMap Highway Route Embed (Clean road geometry, no animal marker pins)
      const inpageIframe = document.getElementById("inpage-gmaps-iframe");
      const inpageTitle = document.getElementById("ui-inpage-gmaps-title");
      const btnDirectTop = document.getElementById("btn-map-direct-top");
      const btnDirectOverlay = document.getElementById("btn-map-direct-overlay");

      let osmBbox = "76.22,11.60,76.66,11.72";
      if (selectedRouteKey === "sh17") {
        osmBbox = "77.10,10.25,77.30,10.60";
      } else if (selectedRouteKey === "nh85") {
        osmBbox = "77.00,9.95,77.22,10.12";
      }

      if (inpageIframe) {
        inpageIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${osmBbox}&layer=mapnik`;
      }
      if (inpageTitle) {
        inpageTitle.textContent = `HIGHWAY ROUTE MAP: ${route.name.toUpperCase()} (CLICK TO OPEN GOOGLE MAPS)`;
      }

      if (btnDirectTop) btnDirectTop.href = dirUrl;
      if (btnDirectOverlay) btnDirectOverlay.href = dirUrl;

      // Update Toast URLs
      const toastUrl = document.getElementById("ui-toast-url");
      if (toastUrl) toastUrl.textContent = dirUrl;
    }

    // Direct helper function to open Google Maps Route driving directions
    function openGoogleMapsDirections() {
      const route = ROUTES[selectedRouteKey];
      if (!route) return;
      const dirUrl = `https://www.google.com/maps/dir/?api=1&origin=${route.originCoords}&destination=${route.destCoords}&travelmode=driving`;
      window.open(dirUrl, "_blank");
    }

    // ---------------------------------------------------------
    // 7. GOOGLE MAPS DIRECT REDIRECT & LIVE CORRIDOR MAP CONTROLLER
    // ---------------------------------------------------------
    function initGoogleMapsButtons() {
      const btnDirections = document.getElementById("btn-open-maps");
      const btnPin = document.getElementById("btn-pin-hotspot");
      const toast = document.getElementById("ui-maps-toast");
      const toastClose = document.getElementById("ui-btn-close-toast");

      if (toastClose) {
        toastClose.addEventListener("click", () => {
          if (toast) toast.classList.remove("active");
        });
      }

      // Allow native link navigation to direct to Google Maps immediately, while also copying link
      if (btnDirections) {
        btnDirections.addEventListener("click", () => {
          const route = ROUTES[selectedRouteKey];
          const dirUrl = `https://www.google.com/maps/dir/?api=1&origin=${route.originCoords}&destination=${route.destCoords}&travelmode=driving`;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(dirUrl).catch(() => {});
          }
          if (toast) toast.classList.add("active");
        });
      }

      if (btnPin) {
        btnPin.addEventListener("click", () => {
          const route = ROUTES[selectedRouteKey];
          const pinUrl = `https://www.google.com/maps/search/?api=1&query=${route.lat},${route.lng}`;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(pinUrl).catch(() => {});
          }
          if (toast) toast.classList.add("active");
        });
      }

      updateRoadStatus();
    }

    // ---------------------------------------------------------
    // 8. VOICE SUPPORTER & EMERGENCY CALL TRIGGER (VOICE RECOGNITION)
    // ---------------------------------------------------------
    window.toggleVoiceSession = function() {
      if (isVoiceListening) {
        stopVoiceListening();
      } else {
        startVoiceListening();
      }
    };

    window.testEmergencyCall = function() {
      window.simulateVoicePhrase("Emergency Call");
    };

    window.sendVoiceSimInput = function() {
      const input = document.getElementById("voice-sim-input");
      if (input && input.value.trim()) {
        window.simulateVoicePhrase(input.value.trim());
        input.value = "";
      }
    };

    // Global function to trigger any voice phrase with speech output and wave animation
    window.simulateVoicePhrase = function(phrase) {
      if (!phrase) return;
      const cleanPhrase = phrase.trim();
      const transcriptBox = document.getElementById("voice-live-transcript-box");
      const transcriptText = document.getElementById("voice-live-transcript");
      const statusText = document.getElementById("ui-voice-status");
      const waveBars = document.getElementById("voice-wave-bars");

      if (transcriptBox && transcriptText) {
        transcriptBox.style.display = "flex";
        transcriptText.textContent = `"${cleanPhrase}"`;
      }
      if (statusText) {
        statusText.textContent = `Voice Input: "${cleanPhrase}" — executing...`;
      }
      if (waveBars) {
        waveBars.classList.add("active");
        setTimeout(() => {
          if (!isVoiceListening && waveBars) waveBars.classList.remove("active");
          if (!isVoiceListening && statusText) {
            statusText.textContent = TRANSLATIONS[currentLang]?.voiceStatusStandby || "Voice Supporter Ready (Tap to Speak)";
          }
        }, 2200);
      }

      // Resume Audio context if needed
      if (window.speechSynthesis && window.speechSynthesis.paused) {
        try { window.speechSynthesis.resume(); } catch (_) {}
      }

      showNotificationToast(`🗣️ Voice Command Executed: "${cleanPhrase}"`);
      processVoiceCommands(cleanPhrase.toLowerCase());
    };

    function initVoiceSupporter() {
      const toggleBtn = document.getElementById("btn-voice-toggle");
      const quickVoiceBtn = document.getElementById("btn-quick-voice");
      const testBtn = document.getElementById("btn-test-voice-emergency");
      const voiceInput = document.getElementById("voice-sim-input");
      const voiceSendBtn = document.getElementById("btn-voice-sim-send");

      // Wire interactive input box
      if (voiceSendBtn && !voiceSendBtn.onclick) {
        voiceSendBtn.onclick = window.sendVoiceSimInput;
      }
      if (voiceInput) {
        voiceInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            window.sendVoiceSimInput();
          }
        });
      }

      if (toggleBtn && !toggleBtn.onclick) {
        toggleBtn.onclick = window.toggleVoiceSession;
      }
      if (quickVoiceBtn && !quickVoiceBtn.onclick) {
        quickVoiceBtn.onclick = window.toggleVoiceSession;
      }
      if (testBtn && !testBtn.onclick) {
        testBtn.onclick = window.testEmergencyCall;
      }

      // Cancel button on emergency call modal
      const cancelCallBtn = document.getElementById("btn-cancel-emergency-call");
      if (cancelCallBtn) {
        cancelCallBtn.addEventListener("click", cancelEmergencyCall);
      }
    }

        let recognitionFailedPermanently = false;

    async function startVoiceListening() {
      const statusText = document.getElementById("ui-voice-status");
      const toggleBtn = document.getElementById("btn-voice-toggle");
      const quickVoiceBtn = document.getElementById("btn-quick-voice");
      const stateBadge = document.getElementById("voice-state-badge");
      const waveBars = document.getElementById("voice-wave-bars");
      const transcriptBox = document.getElementById("voice-live-transcript-box");
      const transcriptText = document.getElementById("voice-live-transcript");

      recognitionFailedPermanently = false;
      isVoiceListening = true;
      if (toggleBtn) {
        toggleBtn.classList.add("listening");
        toggleBtn.innerHTML = `<span>🛑</span> <span id="ui-btn-voice-toggle">${TRANSLATIONS[currentLang]?.voiceBtnStop || "Stop Voice Session"}</span>`;
      }
      if (quickVoiceBtn) quickVoiceBtn.classList.add("active");
      if (stateBadge) stateBadge.classList.add("listening");
      if (waveBars) waveBars.classList.add("active");
      if (statusText) statusText.textContent = TRANSLATIONS[currentLang]?.voiceStatusListening || "🎙️ Voice Session Active — Listening for commands";
      if (transcriptBox && transcriptText) {
        transcriptBox.style.display = "flex";
        transcriptText.textContent = `"Session active... Say Emergency Call, Open Map, or Route Status"`;
      }

      // 2. Play audible spoken feedback
      // speakVoiceFeedback("Voice Assistant session active. Listening for your commands.");

      // 3. Audio / Speech Synthesis un-pause
      if (window.speechSynthesis && window.speechSynthesis.paused) {
        try { window.speechSynthesis.resume(); } catch (_) {}
      }

      // 4. Request microphone hardware access safely
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const micCheckStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          micCheckStream.getTracks().forEach(track => track.stop());
        } catch (permErr) {
          console.warn("Microphone access prompt:", permErr);
          recognitionFailedPermanently = true;
          if (statusText) {
            statusText.textContent = "🎙️ Voice Session Active (Interactive Mode) — Tap any command or type below!";
          }
        }
      }

      // 5. Connect Web Speech Recognition if available
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition && !recognitionFailedPermanently) {
        try {
          if (!recognition) {
            recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;

            recognition.onresult = (event) => {
              let phrase = "";
              for (let i = event.resultIndex; i < event.results.length; ++i) {
                phrase += event.results[i][0].transcript;
              }
              const cleanPhrase = phrase.trim();
              if (cleanPhrase) {
                if (transcriptBox && transcriptText) {
                  transcriptBox.style.display = "flex";
                  transcriptText.textContent = `"${cleanPhrase}"`;
                }
                processVoiceCommands(cleanPhrase.toLowerCase());
              }
            };

            recognition.onerror = (e) => {
              console.warn("Speech recognition event:", e.error);
              if (["not-allowed", "service-not-allowed", "audio-capture", "network"].includes(e.error)) {
                recognitionFailedPermanently = true;
              }
              if (statusText) {
                statusText.textContent = "🎙️ Voice Session Active (Interactive Mode) — Tap any command or type below!";
              }
            };

            recognition.onend = () => {
              if (isVoiceListening && !recognitionFailedPermanently) {
                setTimeout(() => {
                  if (isVoiceListening && !recognitionFailedPermanently && recognition) {
                    try { recognition.start(); } catch (_) {}
                  }
                }, 1200);
              }
            };
          }

          if (currentLang === "ml") recognition.lang = "ml-IN";
          else if (currentLang === "hi") recognition.lang = "hi-IN";
          else recognition.lang = "en-IN";

          recognition.start();
        } catch (err) {
          console.warn("Recognition start notice:", err);
          recognitionFailedPermanently = true;
          if (statusText) {
            statusText.textContent = "🎙️ Voice Session Active (Interactive Mode) — Tap any command or type below!";
          }
        }
      } else {
        if (statusText) {
          statusText.textContent = "🎙️ Voice Session Active (Interactive Mode) — Tap any command or type below!";
        }
      }
    }

    function stopVoiceListening() {
      isVoiceListening = false;
      recognitionFailedPermanently = false;
      const toggleBtn = document.getElementById("btn-voice-toggle");
      const quickVoiceBtn = document.getElementById("btn-quick-voice");
      const stateBadge = document.getElementById("voice-state-badge");
      const waveBars = document.getElementById("voice-wave-bars");
      const statusText = document.getElementById("ui-voice-status");

      if (toggleBtn) {
        toggleBtn.classList.remove("listening");
        toggleBtn.innerHTML = `<span>🎙️</span> <span id="ui-btn-voice-toggle">${TRANSLATIONS[currentLang]?.voiceBtnStart || "Start Voice Supporter (Mic)"}</span>`;
      }
      if (quickVoiceBtn) quickVoiceBtn.classList.remove("active");
      if (stateBadge) stateBadge.classList.remove("listening");
      if (waveBars) waveBars.classList.remove("active");
      if (statusText) statusText.textContent = TRANSLATIONS[currentLang]?.voiceStatusStandby || "Voice Supporter Ready (Tap to Speak)";

      if (recognition) {
        try { recognition.stop(); } catch (_) {}
      }
      // speakVoiceFeedback("Voice Supporter standby.");
    }

    // Process spoken keywords for emergency call, map opening, status, and language
    function processVoiceCommands(text) {
      // 1. EMERGENCY CALL PHRASES (English, Malayalam, Hindi)
      const emergencyKeywords = [
        "emergency call", "emergency", "call 1926", "call forest", "call police",
        "help", "sos", "danger", "accident",
        // Malayalam
        "അടിയന്തിര കോൾ", "അടിയന്തിരം", "എമർജൻസി", "സഹായം", "ഹെൽപ്പ്", "വിളിക്കൂ", "1926",
        // Hindi
        "आपातकालीन कॉल", "आपातकालीन", "इमरजेंसी कॉल", "इमरजेंसी", "मदद", "हेल्प", "कॉल करो"
      ];

      for (const kw of emergencyKeywords) {
        if (text.includes(kw)) {
          triggerEmergencyCallInitiation(text);
          return;
        }
      }

      // 2. GOOGLE MAPS ROUTE OPEN COMMAND
      if (text.includes("map") || text.includes("direction") || text.includes("route map") || text.includes("മാപ്പ്") || text.includes("नक्शा")) {
        // Voice speech silenced per user instructions
        // speakVoiceFeedback("Opening Google Maps driving directions.");
        openGoogleMapsDirections();
        return;
      }

      // 3. ROUTE STATUS AUDIBLE REPORT
      if (text.includes("status") || text.includes("road") || text.includes("hazard") || text.includes("റോഡ്") || text.includes("स्थिति")) {
        announceRouteStatus();
        return;
      }

      // 4. LANGUAGE SWITCH BY VOICE
      if (text.includes("malayalam") || text.includes("മലയാളം")) {
        applyLanguage("ml");
        document.getElementById("lang-switcher").value = "ml";
        speakVoiceFeedback("ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി.");
      } else if (text.includes("hindi") || text.includes("हिन्दी")) {
        applyLanguage("hi");
        document.getElementById("lang-switcher").value = "hi";
        speakVoiceFeedback("भाषा हिन्दी में बदली गई।");
      } else if (text.includes("english")) {
        applyLanguage("en");
        document.getElementById("lang-switcher").value = "en";
        speakVoiceFeedback("Language switched to English.");
      }
    }

    // ---------------------------------------------------------
    // 9. EMERGENCY CALL INITIATION MODAL & COUNTDOWN AUTO-DIAL
    // ---------------------------------------------------------
    function triggerEmergencyCallInitiation(triggerReason) {
      // Audio Chime alert via Web Audio API (cross-browser, zero external files)
      playEmergencySirenChime();

      // Voice Audio Announcement
      let alertMsg = "Emergency detected! Initiating emergency call to State Forest Helpline 1926 now.";
      if (currentLang === "ml") {
        alertMsg = "അടിയന്തിര സാഹചര്യം! വനം വകുപ്പ് ഹെൽപ്പ്‌ലൈൻ 1926-ലേക്ക് കോൾ ആരംഭിക്കുന്നു.";
      } else if (currentLang === "hi") {
        alertMsg = "आपातकालीन स्थिति! वन विभाग हेल्पलाइन 1926 पर कॉल की जा रही है।";
      }
      speakVoiceFeedback(alertMsg);

      // Display the emergency modal
      const modal = document.getElementById("emergency-call-modal");
      modal.classList.add("active");

      // Reset countdown to 3 seconds
      emergencyCountdownRemaining = 3;
      const numEl = document.getElementById("emergency-countdown-number");
      const barEl = document.getElementById("emergency-countdown-bar");
      numEl.textContent = emergencyCountdownRemaining;
      barEl.style.width = "100%";

      if (emergencyCountdownInterval) {
        clearInterval(emergencyCountdownInterval);
      }

      emergencyCountdownInterval = setInterval(() => {
        emergencyCountdownRemaining--;
        if (emergencyCountdownRemaining > 0) {
          numEl.textContent = emergencyCountdownRemaining;
          barEl.style.width = (emergencyCountdownRemaining / 3 * 100) + "%";
        } else {
          // Timer reached 0: Automatically launch phone dialer for 1926
          numEl.textContent = "0";
          barEl.style.width = "0%";
          clearInterval(emergencyCountdownInterval);
          emergencyCountdownInterval = null;

          // Auto-dial execution
          window.location.href = "tel:1926";
        }
      }, 1000);
    }

    function cancelEmergencyCall() {
      if (emergencyCountdownInterval) {
        clearInterval(emergencyCountdownInterval);
        emergencyCountdownInterval = null;
      }
      const modal = document.getElementById("emergency-call-modal");
      modal.classList.remove("active");

      let cancelMsg = "Emergency call cancelled.";
      if (currentLang === "ml") cancelMsg = "അടിയന്തിര കോൾ റദ്ദാക്കി.";
      else if (currentLang === "hi") cancelMsg = "आपातकालीन कॉल रद्द की गई।";
      speakVoiceFeedback(cancelMsg);
    }

    // ---------------------------------------------------------
    // 9B. ONE-TAP EMERGENCY DIALER CONTROLLER (AUDIO + CLIPBOARD + MODAL)
    // ---------------------------------------------------------
    function playDialToneAudio() {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === "suspended") audioCtx.resume();
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc1.type = "sine";
        osc2.type = "sine";
        osc1.frequency.setValueAtTime(350, audioCtx.currentTime);
        osc2.frequency.setValueAtTime(440, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioCtx.destination);
        osc1.start();
        osc2.start();
        osc1.stop(audioCtx.currentTime + 0.35);
        osc2.stop(audioCtx.currentTime + 0.35);
      } catch (_) {}
    }

        window.handleOneTapDial = function(rawPhone, label, icon) {
      const cleanPhone = String(rawPhone || "").replace(/[\s\(\)\-]+/g, "");
      playDialToneAudio();

      // 1. Copy to clipboard immediately with error suppression
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cleanPhone).catch(() => {});
      }

      // 2. Audible voice confirmation
      speakVoiceFeedback(`Connecting to ${label || 'Helpline'}, ${rawPhone}`);

      // 3. Show confirmation feedback toast
      showNotificationToast(`📞 Helpline ${label || 'Emergency'}: ${rawPhone} (Copied to Clipboard!)`);

      // 4. Update and display One-Tap Dial Modal
      const modal = document.getElementById("one-tap-dial-modal");
      const iconEl = document.getElementById("one-tap-dial-icon");
      const titleEl = document.getElementById("one-tap-dial-title");
      const numEl = document.getElementById("one-tap-dial-number");
      const btnCall = document.getElementById("one-tap-dial-btn-call");
      const btnCopy = document.getElementById("one-tap-dial-btn-copy");
      const btnSiren = document.getElementById("one-tap-dial-btn-siren");
      const btnClose = document.getElementById("one-tap-dial-btn-close");
      const copyBadge = document.getElementById("one-tap-dial-copy-badge");

      if (iconEl) iconEl.textContent = icon || "📞";
      if (titleEl) titleEl.textContent = label || "Emergency Helpline Dispatch";
      if (numEl) numEl.textContent = rawPhone;
      if (copyBadge) copyBadge.textContent = "✅ Copied to Clipboard";
      if (btnCall) {
        btnCall.href = "tel:" + cleanPhone;
        btnCall.onclick = () => {
          showNotificationToast(`📞 Dispatching phone call to ${rawPhone}...`);
        };
      }
      if (btnCopy) {
        btnCopy.onclick = () => {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(cleanPhone).catch(() => {});
          }
          if (copyBadge) copyBadge.textContent = "✅ Copied to Clipboard Again!";
          showNotificationToast(`📋 ${rawPhone} copied to clipboard!`);
        };
      }
      if (btnSiren) {
        btnSiren.onclick = () => {
          playEmergencySirenChime();
          speakVoiceFeedback(`Emergency alarm sounded for ${label}`);
        };
      }
      if (btnClose && modal) {
        btnClose.onclick = () => {
          modal.classList.remove("active");
        };
      }

      if (modal) {
        modal.classList.add("active");
      }

      // 5. On mobile/touch devices, also launch tel: protocol
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        try { window.location.href = "tel:" + cleanPhone; } catch (_) {}
      }
    };

    function playEmergencySirenChime() {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.35);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.38);
      } catch (_) {}
    }

    function speakVoiceFeedback(text) {
      if (!window.speechSynthesis) return;
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        if (currentLang === "ml") utterance.lang = "ml-IN";
        else if (currentLang === "hi") utterance.lang = "hi-IN";
        else utterance.lang = "en-IN";
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn("speechSynthesis error:", err);
      }
    }

    function announceRouteStatus() {
      const route = ROUTES[selectedRouteKey];
      if (!route) return;
      let msg = `${route.name}. Active roadblock reported. Please reduce speed to 30 km/h and do not honk.`;
      if (currentLang === "ml") {
        msg = `${route.name}. വന്യമൃഗ സാന്നിധ്യം ഉള്ളതിനാൽ വേഗത 30 കിലോമീറ്ററായി കുറയ്ക്കുക.`;
      } else if (currentLang === "hi") {
        msg = `${route.name}. सड़क पर वन्यजीव अवरोध है। कृपया गति 30 किमी/घंटा रखें।`;
      }
      speakVoiceFeedback(msg);
    }

    // ---------------------------------------------------------
    // 10. STEALTH OFFICER ACCESS (PASSCODE MODAL & TERMINAL)
    // ---------------------------------------------------------
    function initOfficerModal() {
      const stealthBtn = document.getElementById("btn-stealth-officer");
      const modal = document.getElementById("passcode-modal");
      const cancelBtn = document.getElementById("btn-modal-cancel");
      const form = document.getElementById("passcode-form");
      const input = document.getElementById("passcode-input");
      const errorEl = document.getElementById("modal-error");
      const terminalSection = document.getElementById("officer-terminal-section");
      const lockBtn = document.getElementById("btn-lock-officer");

      stealthBtn.addEventListener("click", () => {
        if (isOfficerUnlocked) {
          terminalSection.classList.remove("active");
          isOfficerUnlocked = false;
        } else {
          const loginModal = document.getElementById("login-modal");
          if (loginModal) {
            loginModal.classList.add("active");
          } else {
            modal.classList.add("active");
            input.value = "";
            errorEl.textContent = "";
            input.focus();
          }
        }
      });

      cancelBtn.addEventListener("click", () => {
        modal.classList.remove("active");
      });

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const code = input.value.trim();

        // 1. Try backend verification if online
        if (window.location.protocol !== "file:") {
          try {
            const res = await fetch("/api/v1/officer/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ passcode: code })
            });
            if (res.ok) {
              handleSuccessfulLogin({
                name: "Chief Forest Admin",
                email: "admin@wildshield.gov.in",
                role: "ADMIN",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80",
                provider: "passcode"
              });
              modal.classList.remove("active");
              return;
            }
          } catch (_) {}
        }

        // 2. Client-side fallback check
        if (code === DEFAULT_PASSCODE || code === "admin2026") {
          handleSuccessfulLogin({
            name: "Chief Forest Admin",
            email: "admin@wildshield.gov.in",
            role: "ADMIN",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80",
            provider: "passcode"
          });
          modal.classList.remove("active");
        } else {
          errorEl.textContent = "Invalid security passcode. Access denied.";
          input.select();
        }
      });

      lockBtn.addEventListener("click", handleLogout);
    }

    // ---------------------------------------------------------
        // ---------------------------------------------------------
    // 10. AUTHENTICATION & LOGIN PORTAL (GOOGLE & RBAC SESSIONS)
    // ---------------------------------------------------------
    let csrfToken = null;
    let registeredUsersList = [];
    let auditLogsList = [];

    function switchLoginTab(tab) {
      const tabGoogle = document.getElementById("tab-btn-google");
      const tabCreds = document.getElementById("tab-btn-credentials");
      const tabReg = document.getElementById("tab-btn-register");
      const panelGoogle = document.getElementById("auth-panel-google");
      const panelCreds = document.getElementById("auth-panel-credentials");
      const panelReg = document.getElementById("auth-panel-register");

      if (tabGoogle) tabGoogle.classList.toggle("active", tab === "google");
      if (tabCreds) tabCreds.classList.toggle("active", tab === "credentials");
      if (tabReg) tabReg.classList.toggle("active", tab === "register");

      if (panelGoogle) panelGoogle.style.display = tab === "google" ? "block" : "none";
      if (panelCreds) panelCreds.style.display = tab === "credentials" ? "block" : "none";
      if (panelReg) panelReg.style.display = tab === "register" ? "block" : "none";
    }

    function switchAdminTab(tab) {
      const tabTelem = document.getElementById("tab-btn-telemetry");
      const tabUsers = document.getElementById("tab-btn-users");
      const tabAudit = document.getElementById("tab-btn-audit");

      const panelTelem = document.getElementById("admin-panel-telemetry");
      const panelUsers = document.getElementById("admin-panel-users");
      const panelAudit = document.getElementById("admin-panel-audit");

      if (tabTelem) tabTelem.classList.toggle("active", tab === "telemetry");
      if (tabUsers) tabUsers.classList.toggle("active", tab === "users");
      if (tabAudit) tabAudit.classList.toggle("active", tab === "audit");

      if (panelTelem) panelTelem.style.display = tab === "telemetry" ? "block" : "none";
      if (panelUsers) panelUsers.style.display = tab === "users" ? "block" : "none";
      if (panelAudit) panelAudit.style.display = tab === "audit" ? "block" : "none";

      if (tab === "users") fetchAdminUsers();
      if (tab === "audit") fetchAuditLogs();
    }

    function initAuthPortal() {
      const loginModal = document.getElementById("login-modal");
      const btnOpenLogin = document.getElementById("btn-open-login-modal");
      const btnCloseLogin = document.getElementById("btn-close-login-modal");
      const btnGoogleAuth = document.getElementById("btn-google-sign-in");
      const btnQuickAdmin = document.getElementById("btn-quick-admin-login");
      const standardForm = document.getElementById("standard-login-form");
      const registerForm = document.getElementById("traveler-register-form");
      const btnLogout = document.getElementById("btn-header-logout");
      const btnAdminJump = document.getElementById("btn-header-admin-jump");

      // Open / Close Modal
      if (btnOpenLogin) {
        btnOpenLogin.addEventListener("click", () => {
          if (loginModal) loginModal.classList.add("active");
        });
      }
      if (btnCloseLogin) {
        btnCloseLogin.addEventListener("click", () => {
          if (loginModal) loginModal.classList.remove("active");
        });
      }

      // 1. Google Authentication Flow
      if (btnGoogleAuth) {
        btnGoogleAuth.addEventListener("click", async () => {
          const email = (document.getElementById("google-custom-email")?.value || "admin.wildshield@gmail.com").trim();
          const name = (document.getElementById("google-custom-name")?.value || "Chief Conservator").trim();
          const avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80";

          try {
            const res = await fetch("/api/v1/auth/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ email, name, avatar })
            });
            if (res.ok) {
              const data = await res.json();
              handleSuccessfulLogin(data.user, data.csrf_token);
              if (loginModal) loginModal.classList.remove("active");
              showNotificationToast(`Signed in with Google as ${data.user.name} (${data.user.role})!`);
              return;
            }
          } catch (_) {}

          // Fallback
          const user = { name: name || "Chief Forest Administrator", email, role: "ADMIN", avatar, provider: "google" };
          handleSuccessfulLogin(user, null);
          if (loginModal) loginModal.classList.remove("active");
          showNotificationToast("Signed in as Administrator (Demonstration Mode)");
        });
      }

      // 2. Instant 1-Click Fast Admin Demonstration Access
      if (btnQuickAdmin) {
        btnQuickAdmin.addEventListener("click", async () => {
          try {
            const res = await fetch("/api/v1/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ email: "admin@wildshield.gov.in", passcode: "admin2026" })
            });
            if (res.ok) {
              const data = await res.json();
              handleSuccessfulLogin(data.user, data.csrf_token);
              if (loginModal) loginModal.classList.remove("active");
              showNotificationToast("Signed in as Chief Forest Administrator! Full Admin CRUD unlocked.");
              return;
            }
          } catch (_) {}

          const user = { name: "Chief Forest Admin", email: "admin@wildshield.gov.in", role: "ADMIN", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80", provider: "quick_admin" };
          handleSuccessfulLogin(user, null);
          if (loginModal) loginModal.classList.remove("active");
          showNotificationToast("Signed in as Chief Forest Admin! Full Admin CRUD unlocked.");
        });
      }

      // 3. Standard Login Form (Password / Passcode)
      if (standardForm) {
        standardForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const email = document.getElementById("login-email-input")?.value.trim() || "";
          const password = document.getElementById("login-password-input")?.value.trim() || "";
          const errorEl = document.getElementById("login-form-error");
          if (errorEl) errorEl.style.display = "none";

          try {
            const res = await fetch("/api/v1/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ email, passcode: password })
            });
            if (res.ok) {
              const data = await res.json();
              handleSuccessfulLogin(data.user, data.csrf_token);
              if (loginModal) loginModal.classList.remove("active");
              showNotificationToast(`Signed in as ${data.user.name} (${data.user.role})!`);
              return;
            } else {
              const errData = await res.json();
              if (errorEl) {
                errorEl.textContent = errData.detail || "Invalid credentials.";
                errorEl.style.display = "block";
              }
              return;
            }
          } catch (_) {}

          // Fallback for offline passcode
          if (password === "admin2026" || password === "Admin@WildShield2026!") {
            const user = { name: "Forest Administrator", email, role: "ADMIN", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80", provider: "password" };
            handleSuccessfulLogin(user, null);
            if (loginModal) loginModal.classList.remove("active");
            showNotificationToast(`Signed in as ${user.name} (${user.role})!`);
          } else if (password === "ranger2026") {
            const user = { name: "Patrol Officer", email, role: "OFFICER", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80", provider: "password" };
            handleSuccessfulLogin(user, null);
            if (loginModal) loginModal.classList.remove("active");
            showNotificationToast(`Signed in as ${user.name} (${user.role})!`);
          } else {
            if (errorEl) {
              errorEl.textContent = "Invalid passcode. Use 'admin2026' or 'ranger2026'.";
              errorEl.style.display = "block";
            }
          }
        });
      }

      // 4. Traveler Registration Form (Sign Up)
      if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const name = document.getElementById("reg-name-input")?.value.trim() || "";
          const email = document.getElementById("reg-email-input")?.value.trim() || "";
          const password = document.getElementById("reg-password-input")?.value.trim() || "";
          const errorEl = document.getElementById("register-form-error");
          if (errorEl) errorEl.style.display = "none";

          try {
            const res = await fetch("/api/v1/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ name, email, password })
            });
            if (res.ok) {
              const data = await res.json();
              handleSuccessfulLogin(data.user, data.csrf_token);
              if (loginModal) loginModal.classList.remove("active");
              showNotificationToast(`Welcome to WildShield, ${data.user.name}! Registered as Traveler.`);
              return;
            } else {
              const errData = await res.json();
              if (errorEl) {
                errorEl.textContent = errData.detail || "Registration failed.";
                errorEl.style.display = "block";
              }
              return;
            }
          } catch (_) {
            if (errorEl) {
              errorEl.textContent = "Server connection error. Please verify backend is running on 127.0.0.1:8000.";
              errorEl.style.display = "block";
            }
          }
        });
      }

      // 5. Header Logout & Jump
      if (btnLogout) btnLogout.addEventListener("click", handleLogout);
      if (btnAdminJump) {
        btnAdminJump.addEventListener("click", () => {
          unlockOfficerTerminal(true);
        });
      }

      // 6. Check existing session on load from backend
      checkUserSession();
    }

    async function checkUserSession() {
      // Security Policy: Never automatically bypass the login screen on startup!
      // Always enforce the login gateway view so user must manually log in.
      currentUser = null;
      csrfToken = null;
      const gateway = document.getElementById("auth-gateway-view");
      const mainSession = document.getElementById("main-application-session");
      if (gateway) gateway.style.display = "flex";
      if (mainSession) mainSession.style.display = "none";

      // Aggressively clear inputs on startup to defeat browser password managers
      const clearFormFields = () => {
        const emailEl = document.getElementById("auth-login-email");
        const pwEl = document.getElementById("auth-login-password");
        if (emailEl) emailEl.value = "";
        if (pwEl) pwEl.value = "";
      };

      clearFormFields();
      setTimeout(clearFormFields, 30);
      setTimeout(clearFormFields, 100);
      setTimeout(clearFormFields, 300);
      setTimeout(clearFormFields, 700);

      // Invalidate background session cookie on startup so fresh authentication is required
      if (window.location.protocol !== "file:") {
        try {
          await fetch("/api/v1/auth/logout", {
            method: "POST",
            credentials: "include"
          });
        } catch (_) {}
      }
    }

    function showNotificationToast(msg, type = "success") {
      let toastEl = document.getElementById("wildshield-global-toast");
      if (!toastEl) {
        toastEl = document.createElement("div");
        toastEl.id = "wildshield-global-toast";
        toastEl.style.cssText = "position: fixed; bottom: 24px; right: 24px; z-index: 99999; padding: 12px 20px; background: #065f46; color: #ffffff; border: 1.5px solid #34d399; border-radius: 10px; font-weight: 600; font-size: 0.88rem; box-shadow: 0 10px 25px rgba(0,0,0,0.25); display: flex; align-items: center; gap: 10px; transition: all 0.3s ease; opacity: 0; transform: translateY(20px); pointer-events: none;";
        document.body.appendChild(toastEl);
      }
      toastEl.innerHTML = `<span>👑</span> <span>${msg}</span>`;
      toastEl.style.opacity = "1";
      toastEl.style.transform = "translateY(0)";
      setTimeout(() => {
        toastEl.style.opacity = "0";
        toastEl.style.transform = "translateY(20px)";
      }, 4000);
    }

    function handleSuccessfulLogin(user, token, shouldScroll = true) {
      // Hide login gateway and enter main session!
      const gateway = document.getElementById("auth-gateway-view");
      const mainSession = document.getElementById("main-application-session");
      if (gateway) gateway.style.display = "none";
      if (mainSession) mainSession.style.display = "block";

      currentUser = user;
      csrfToken = token || csrfToken;

      // Update Header Profile Elements
      const btnOpenLogin = document.getElementById("btn-open-login-modal");
      const widget = document.getElementById("user-profile-widget");
      const nameEl = document.getElementById("header-user-name");
      const roleEl = document.getElementById("header-user-role");
      const avatarEl = document.getElementById("header-user-avatar");
      const btnAdminJump = document.getElementById("btn-header-admin-jump");

      if (btnOpenLogin) btnOpenLogin.style.display = "none";
      if (widget) widget.style.display = "flex";
      if (nameEl) nameEl.textContent = user.name || "Administrator";
      if (roleEl) {
        roleEl.textContent = user.role || "ADMIN";
        roleEl.className = "user-role-badge " + (user.role || "ADMIN");
      }
      if (avatarEl && user.avatar) avatarEl.src = user.avatar;

      if (btnAdminJump) {
        if (user.role === "ADMIN") {
          btnAdminJump.style.display = "inline-flex";
          btnAdminJump.innerHTML = "<span>⚡</span> <span>Console</span>";
        } else if (user.role === "OFFICER") {
          btnAdminJump.style.display = "inline-flex";
          btnAdminJump.innerHTML = "<span>📡</span> <span>Radar</span>";
        } else {
          btnAdminJump.style.display = "none";
        }
      }

      renderRoleDashboard(user.role, shouldScroll);
    }

    function handleLogout() {
      if (window.location.protocol !== "file:") {
        fetch("/api/v1/auth/logout", {
          method: "POST",
          credentials: "include",
          headers: { "X-CSRF-Token": csrfToken || "" }
        }).catch(() => {});
      }

      currentUser = null;
      csrfToken = null;

      const btnOpenLogin = document.getElementById("btn-open-login-modal");
      const widget = document.getElementById("user-profile-widget");
      if (btnOpenLogin) btnOpenLogin.style.display = "flex";
      if (widget) widget.style.display = "none";

      const gateway = document.getElementById("auth-gateway-view");
      const mainSession = document.getElementById("main-application-session");
      if (mainSession) mainSession.style.display = "none";
      if (gateway) gateway.style.display = "flex";
      showNotificationToast("You have been signed out. Please log in to enter session.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderRoleDashboard(role, shouldScroll = false) {
      const terminalSection = document.getElementById("officer-terminal-section");
      const bannerBadge = document.getElementById("ui-terminal-badge-auth");
      const bannerText = document.getElementById("ui-terminal-banner-text");
      const adminSubnav = document.getElementById("admin-subnav-bar");
      const statUsersCard = document.getElementById("stat-card-users");
      const btnAddSighting = document.getElementById("btn-admin-add-sighting");
      const btnResetDemo = document.getElementById("btn-reset-demo");
      const btnSimIngest = document.getElementById("btn-sim-ingest");

      if (role === "ADMIN") {
        if (terminalSection) terminalSection.style.display = "block";
        if (adminSubnav) adminSubnav.style.display = "flex";
        if (statUsersCard) statUsersCard.style.display = "flex";
        if (btnAddSighting) btnAddSighting.style.display = "inline-flex";
        if (btnResetDemo) btnResetDemo.style.display = "inline-flex";
        if (btnSimIngest) btnSimIngest.style.display = "inline-flex";

        if (bannerBadge) bannerBadge.textContent = "AUTH: GRANTED (CHIEF ADMINISTRATOR - FULL CRUD)";
        if (bannerText) bannerText.textContent = "👑 CONFIDENTIAL FORESTRY ARCHIVE — FULL READ/WRITE/DELETE CRUD ACCESS";

        switchAdminTab("telemetry");
        fetchBackendTelemetry();
        fetchAdminUsers();
        fetchAuditLogs();
        if (shouldScroll && terminalSection) terminalSection.scrollIntoView({ behavior: "smooth" });
      } else if (role === "OFFICER") {
        if (terminalSection) terminalSection.style.display = "block";
        if (adminSubnav) adminSubnav.style.display = "none";
        if (statUsersCard) statUsersCard.style.display = "none";
        if (btnAddSighting) btnAddSighting.style.display = "inline-flex";
        if (btnResetDemo) btnResetDemo.style.display = "none";
        if (btnSimIngest) btnSimIngest.style.display = "inline-flex";

        if (bannerBadge) bannerBadge.textContent = "AUTH: GRANTED (FOREST OFFICER - OPERATIONAL ACCESS)";
        if (bannerText) bannerText.textContent = "🔒 CONFIDENTIAL FORESTRY ARCHIVE — UNREDACTED TELEMETRY & GPS COORDINATES";

        switchAdminTab("telemetry");
        fetchBackendTelemetry();
        if (shouldScroll && terminalSection) terminalSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Traveler Portal
        if (terminalSection) terminalSection.style.display = "none";
        fetchPublicAlerts();
      }

      updateAdminStats();
    }

    function unlockOfficerTerminal(shouldScroll = true) {
      if (currentUser && (currentUser.role === "ADMIN" || currentUser.role === "OFFICER")) {
        renderRoleDashboard(currentUser.role, shouldScroll);
      } else {
        const loginModal = document.getElementById("login-modal");
        if (loginModal) loginModal.classList.add("active");
      }
    }

    function updateAdminStats() {
      const totalRecEl = document.getElementById("stat-total-records");
      const totalSpeciesEl = document.getElementById("stat-total-species");
      const totalUsersEl = document.getElementById("stat-total-users");
      const activeHazardsEl = document.getElementById("stat-active-hazards");

      if (totalRecEl) totalRecEl.textContent = telemetryLogs.length;

      const speciesSet = new Set(telemetryLogs.map(l => (l.species || "").toLowerCase()));
      if (totalSpeciesEl) totalSpeciesEl.textContent = speciesSet.size;

      if (totalUsersEl) totalUsersEl.textContent = registeredUsersList.length || 6;

      const critCount = telemetryLogs.filter(l => l.hazard_level === "CRITICAL_BLOCK" || l.hazard_level === "ADVISORY").length;
      if (activeHazardsEl) activeHazardsEl.textContent = critCount;
    }

    // ---------------------------------------------------------
    // 11. TELEMETRY TABLE WITH INCIDENT STATUS & CRUD
    // ---------------------------------------------------------
    function renderTelemetryTable() {
      const tbody = document.getElementById("telemetry-table-body");
      if (!tbody) return;

      tbody.innerHTML = "";
      const isAdmin = currentUser && currentUser.role === "ADMIN";
      const isOfficer = currentUser && currentUser.role === "OFFICER";

      telemetryLogs.forEach(log => {
        const tr = document.createElement("tr");
        const isCritical = log.hazard_level === "CRITICAL_BLOCK";
        const hazardBadge = isCritical 
          ? `<span class="status-pill critical">CRITICAL</span>`
          : log.hazard_level === "CLEAR" 
            ? `<span class="status-pill clear" style="background:#dcfce7; color:#15803d; border:1px solid #86efac;">CLEAR</span>`
            : `<span class="status-pill advisory">ADVISORY</span>`;

        const incStatus = (log.incident_status || "ACTIVE").toUpperCase();
        let incBadge = `<span class="incident-pill ${incStatus.toLowerCase()}">${incStatus}</span>`;
        if (isAdmin || isOfficer) {
          incBadge = `
            <select class="select-role-inline" onchange="updateIncidentStatus(${log.id}, this.value)" style="font-size:0.75rem;">
              <option value="ACTIVE" ${incStatus === "ACTIVE" ? "selected" : ""}>ACTIVE</option>
              <option value="INVESTIGATING" ${incStatus === "INVESTIGATING" ? "selected" : ""}>INVESTIGATING</option>
              <option value="RESOLVED" ${incStatus === "RESOLVED" ? "selected" : ""}>RESOLVED</option>
              <option value="FALSE_ALARM" ${incStatus === "FALSE_ALARM" ? "selected" : ""}>FALSE_ALARM</option>
            </select>
          `;
        }

        let actionsHtml = `<td style="text-align: center; font-size: 0.72rem; color: var(--text-muted);">View Only</td>`;
        if (isAdmin) {
          actionsHtml = `<td style="text-align: center; white-space: nowrap;">
            <button type="button" class="btn-action-edit" onclick="openEditRecordModal(${log.id})">✏️ Edit</button>
            <button type="button" class="btn-action-delete" onclick="openDeleteRecordModal(${log.id})">🗑️ Delete</button>
          </td>`;
        } else if (isOfficer) {
          actionsHtml = `<td style="text-align: center; font-size: 0.74rem; color: #047857; font-weight:700;">Operational Radar</td>`;
        }

        tr.innerHTML = `
          <td style="font-family: var(--font-mono); font-weight: 600;">${log.timestamp}</td>
          <td style="font-family: var(--font-mono); font-weight: 700;">${log.node_id}</td>
          <td style="font-family: var(--font-mono); color: var(--accent-gold); font-weight: 700;">${log.model_type}</td>
          <td style="font-weight: 700; text-transform: capitalize;">${log.species}</td>
          <td style="font-family: var(--font-mono);">${(log.confidence * 100).toFixed(0)}%</td>
          <td><span class="gps-badge">📍 ${Number(log.latitude).toFixed(4)}, ${Number(log.longitude).toFixed(4)}</span></td>
          <td style="font-family: var(--font-mono);">${log.speed_kmh} km/h</td>
          <td>${hazardBadge}</td>
          <td>${incBadge}</td>
          ${actionsHtml}
        `;
        tbody.appendChild(tr);
      });

      updateAdminStats();
    }

    async function updateIncidentStatus(logId, newStatus) {
      try {
        const res = await fetch(`/api/v1/telemetry/${logId}/status`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "X-CSRF-Token": csrfToken || "" },
          credentials: "include",
          body: JSON.stringify({ incident_status: newStatus })
        });
        if (res.ok) {
          showNotificationToast(`Incident #${logId} status updated to ${newStatus}`);
          await fetchBackendTelemetry();
          return;
        }
      } catch (_) {}

      // Fallback
      const rec = telemetryLogs.find(l => l.id === logId);
      if (rec) rec.incident_status = newStatus;
      renderTelemetryTable();
      showNotificationToast(`Incident #${logId} status set to ${newStatus}`);
    }

    // ---------------------------------------------------------
    // 12. ADMIN USER & ROLE MANAGEMENT
    // ---------------------------------------------------------
    async function fetchAdminUsers() {
      if (!currentUser || currentUser.role !== "ADMIN") return;
      try {
        const res = await fetch("/api/v1/admin/users", { credentials: "include" });
        if (res.ok) {
          const users = await res.json();
          registeredUsersList = users;
          renderUsersTable(users);
          updateAdminStats();
        }
      } catch (_) {}
    }

    function renderUsersTable(users) {
      const tbody = document.getElementById("admin-users-table-body");
      if (!tbody) return;

      tbody.innerHTML = "";
      users.forEach(u => {
        const tr = document.createElement("tr");
        const statusPill = u.is_active
          ? `<span class="badge-active-status active">🟢 ACTIVE</span>`
          : `<span class="badge-active-status deactivated">🔴 DEACTIVATED</span>`;

        const isSelf = currentUser && currentUser.id === u.id;
        const toggleBtnLabel = u.is_active ? "Deactivate" : "Activate";
        const toggleClass = u.is_active ? "danger" : "success";

        tr.innerHTML = `
          <td style="font-family: var(--font-mono); font-weight:700;">#${u.id}</td>
          <td>
            <div style="font-weight:700; color:var(--text-main);">${u.name}</div>
            <div style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">${u.email}</div>
          </td>
          <td><span style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase;">${u.provider || 'password'}</span></td>
          <td>
            <select class="select-role-inline" id="user-role-select-${u.id}">
              <option value="ADMIN" ${u.role === "ADMIN" ? "selected" : ""}>👑 ADMIN</option>
              <option value="OFFICER" ${u.role === "OFFICER" ? "selected" : ""}>🛡️ OFFICER</option>
              <option value="USER" ${u.role === "USER" ? "selected" : ""}>🚗 USER</option>
            </select>
          </td>
          <td>${statusPill}</td>
          <td style="font-size:0.72rem; color:var(--text-muted); font-family:var(--font-mono);">${u.created_at ? u.created_at.slice(0, 10) : '2026-11-01'}</td>
          <td style="text-align: center; white-space: nowrap;">
            <button type="button" class="btn-table-action" onclick="saveUserRole(${u.id})">💾 Save</button>
            ${isSelf ? '' : `<button type="button" class="btn-table-action ${toggleClass}" onclick="toggleUserStatus(${u.id}, ${u.is_active})">${toggleBtnLabel}</button>`}
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    async function saveUserRole(userId) {
      const selectEl = document.getElementById(`user-role-select-${userId}`);
      if (!selectEl) return;
      const newRole = selectEl.value;

      try {
        const res = await fetch(`/api/v1/admin/users/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "X-CSRF-Token": csrfToken || "" },
          credentials: "include",
          body: JSON.stringify({ role: newRole })
        });
        if (res.ok) {
          showNotificationToast(`User #${userId} role updated to ${newRole}`);
          await fetchAdminUsers();
          await fetchAuditLogs();
        } else {
          const err = await res.json();
          alert(err.detail || "Failed to update role");
        }
      } catch (err) {
        alert("Network error updating user role.");
      }
    }

    async function toggleUserStatus(userId, currentStatus) {
      const newStatus = !currentStatus;
      try {
        const res = await fetch(`/api/v1/admin/users/${userId}/status`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "X-CSRF-Token": csrfToken || "" },
          credentials: "include",
          body: JSON.stringify({ is_active: newStatus })
        });
        if (res.ok) {
          showNotificationToast(`User #${userId} account status set to ${newStatus ? 'ACTIVE' : 'DEACTIVATED'}`);
          await fetchAdminUsers();
          await fetchAuditLogs();
        } else {
          const err = await res.json();
          alert(err.detail || "Failed to toggle status");
        }
      } catch (err) {
        alert("Network error toggling user status.");
      }
    }

    function openProvisionUserModal() {
      const modal = document.getElementById("admin-provision-modal");
      if (modal) modal.classList.add("active");
    }

    function closeProvisionUserModal() {
      const modal = document.getElementById("admin-provision-modal");
      if (modal) modal.classList.remove("active");
    }

    // Provision Form Handler
    document.addEventListener("DOMContentLoaded", () => {
      // Explicitly clear login inputs on load so they are always blank for user entry
      const emailInput = document.getElementById("auth-login-email");
      const pwInput = document.getElementById("auth-login-password");
      if (emailInput) emailInput.value = "";
      if (pwInput) pwInput.value = "";

      const provForm = document.getElementById("admin-provision-form");
      if (provForm) {
        provForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const name = document.getElementById("prov-name")?.value.trim();
          const email = document.getElementById("prov-email")?.value.trim();
          const role = document.getElementById("prov-role")?.value;
          const password = document.getElementById("prov-password")?.value.trim();
          const errorEl = document.getElementById("prov-error");

          try {
            const res = await fetch("/api/v1/admin/users", {
              method: "POST",
              headers: { "Content-Type": "application/json", "X-CSRF-Token": csrfToken || "" },
              credentials: "include",
              body: JSON.stringify({ name, email, role, password, is_active: true })
            });
            if (res.ok) {
              closeProvisionUserModal();
              provForm.reset();
              showNotificationToast(`Provisioned ${role} account for ${name} (${email})!`);
              await fetchAdminUsers();
              await fetchAuditLogs();
            } else {
              const err = await res.json();
              if (errorEl) {
                errorEl.textContent = err.detail || "Failed to provision account.";
                errorEl.style.display = "block";
              }
            }
          } catch (_) {
            if (errorEl) {
              errorEl.textContent = "Server connection error.";
              errorEl.style.display = "block";
            }
          }
        });
      }
    });

    // ---------------------------------------------------------
    // 13. ADMIN IMMUTABLE AUDIT LOGS
    // ---------------------------------------------------------
    async function fetchAuditLogs() {
      if (!currentUser || currentUser.role !== "ADMIN") return;
      try {
        const res = await fetch("/api/v1/admin/audit-logs", { credentials: "include" });
        if (res.ok) {
          const logs = await res.json();
          auditLogsList = logs;
          renderAuditLogsTable(logs);
        }
      } catch (_) {}
    }

    function renderAuditLogsTable(logs) {
      const tbody = document.getElementById("admin-audit-table-body");
      if (!tbody) return;

      tbody.innerHTML = "";
      logs.forEach(l => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td style="font-family: var(--font-mono); font-weight:700;">#${l.id}</td>
          <td style="font-family: var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${(l.timestamp || '').slice(0, 19).replace('T', ' ')}</td>
          <td>
            <div style="font-weight:700;">${l.admin_name || 'Admin'}</div>
            <div style="font-size:0.72rem; color:var(--text-muted); font-family:var(--font-mono);">${l.admin_email || ''}</div>
          </td>
          <td><span class="audit-action-tag">${l.action}</span></td>
          <td style="font-family: var(--font-mono);">${l.record_id ? '#' + l.record_id : '—'}</td>
          <td style="font-size:0.76rem; color:var(--text-main);">${l.details || ''}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    // ---------------------------------------------------------
    // 14. ADMIN DATA CRUD CONTROLLER (CREATE, READ, UPDATE, DELETE)
    // ---------------------------------------------------------
    function initAdminCRUD() {
      const addModal = document.getElementById("admin-add-modal");
      const editModal = document.getElementById("admin-edit-modal");
      const deleteModal = document.getElementById("admin-delete-modal");
      const btnOpenAdd = document.getElementById("btn-admin-add-sighting");
      const btnCloseAdd = document.getElementById("btn-close-add-modal");
      const btnCancelAdd = document.getElementById("btn-cancel-add-modal");
      const addForm = document.getElementById("admin-add-form");

      const btnCloseEdit = document.getElementById("btn-close-edit-modal");
      const btnCancelEdit = document.getElementById("btn-cancel-edit-modal");
      const editForm = document.getElementById("admin-edit-form");

      const btnCancelDelete = document.getElementById("btn-cancel-delete");
      const btnConfirmDelete = document.getElementById("btn-confirm-delete");
      const btnResetDemo = document.getElementById("btn-reset-demo");

      if (btnOpenAdd) btnOpenAdd.addEventListener("click", () => { if (addModal) addModal.classList.add("active"); });
      if (btnCloseAdd) btnCloseAdd.addEventListener("click", () => addModal.classList.remove("active"));
      if (btnCancelAdd) btnCancelAdd.addEventListener("click", () => addModal.classList.remove("active"));

      if (addForm) {
        addForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const species = document.getElementById("add-species").value;
          const hazard_level = document.getElementById("add-hazard").value;
          const road_sector = document.getElementById("add-sector").value;
          const latitude = parseFloat(document.getElementById("add-lat").value) || 11.6645;
          const longitude = parseFloat(document.getElementById("add-lng").value) || 76.6210;
          const confidence = parseFloat(document.getElementById("add-conf").value) || 0.95;
          const speed_kmh = parseFloat(document.getElementById("add-speed").value) || 28.0;
          const model_type = document.getElementById("add-model").value || "MANUAL";

          const newRecordPayload = {
            species, hazard_level, road_sector, latitude, longitude,
            confidence, speed_kmh, model_type, node_id: "ADMIN_CONSOLE_01"
          };

          try {
            const res = await fetch("/api/v1/telemetry", {
              method: "POST",
              headers: { "Content-Type": "application/json", "X-CSRF-Token": csrfToken || "" },
              credentials: "include",
              body: JSON.stringify(newRecordPayload)
            });
            if (res.ok) {
              await fetchBackendTelemetry();
              if (addModal) addModal.classList.remove("active");
              updateRoadStatus();
              showNotificationToast(`Created sighting record for ${species.toUpperCase()}!`);
              return;
            }
          } catch (_) {}

          // Fallback
          const localRecord = {
            id: Date.now(), timestamp: new Date().toLocaleTimeString(),
            node_id: "ADMIN_CONSOLE_01", model_type, species, confidence,
            latitude, longitude, speed_kmh, road_sector, hazard_level
          };
          telemetryLogs.unshift(localRecord);
          renderTelemetryTable();
          updateRoadStatus();
          if (addModal) addModal.classList.remove("active");
        });
      }

      // EDIT CONTROLS
      if (btnCloseEdit) btnCloseEdit.addEventListener("click", () => editModal.classList.remove("active"));
      if (btnCancelEdit) btnCancelEdit.addEventListener("click", () => editModal.classList.remove("active"));

      if (editForm) {
        editForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const logId = parseInt(document.getElementById("edit-record-id").value, 10);
          const species = document.getElementById("edit-species").value;
          const hazard_level = document.getElementById("edit-hazard").value;
          const road_sector = document.getElementById("edit-sector").value;
          const latitude = parseFloat(document.getElementById("edit-lat").value);
          const longitude = parseFloat(document.getElementById("edit-lng").value);
          const confidence = parseFloat(document.getElementById("edit-conf").value);
          const speed_kmh = parseFloat(document.getElementById("edit-speed").value);

          const updatedPayload = { species, hazard_level, road_sector, latitude, longitude, confidence, speed_kmh };

          try {
            const res = await fetch(`/api/v1/telemetry/${logId}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json", "X-CSRF-Token": csrfToken || "" },
              credentials: "include",
              body: JSON.stringify(updatedPayload)
            });
            if (res.ok) {
              await fetchBackendTelemetry();
              if (editModal) editModal.classList.remove("active");
              updateRoadStatus();
              showNotificationToast(`Record #${logId} modified successfully!`);
              return;
            }
          } catch (_) {}

          const record = telemetryLogs.find(l => l.id === logId);
          if (record) {
            record.species = species; record.hazard_level = hazard_level;
            record.road_sector = road_sector; record.latitude = latitude;
            record.longitude = longitude; record.confidence = confidence;
            record.speed_kmh = speed_kmh;
          }
          renderTelemetryTable();
          updateRoadStatus();
          if (editModal) editModal.classList.remove("active");
        });
      }

      // DELETE CONTROLS
      if (btnCancelDelete) btnCancelDelete.addEventListener("click", () => deleteModal.classList.remove("active"));
      if (btnConfirmDelete) {
        btnConfirmDelete.addEventListener("click", async () => {
          const logId = parseInt(document.getElementById("delete-record-id").value, 10);

          try {
            const res = await fetch(`/api/v1/telemetry/${logId}`, {
              method: "DELETE",
              headers: { "X-CSRF-Token": csrfToken || "" },
              credentials: "include"
            });
            if (res.ok) {
              await fetchBackendTelemetry();
              if (deleteModal) deleteModal.classList.remove("active");
              updateRoadStatus();
              showNotificationToast(`Record #${logId} permanently removed!`);
              return;
            }
          } catch (_) {}

          telemetryLogs = telemetryLogs.filter(l => l.id !== logId);
          renderTelemetryTable();
          updateRoadStatus();
          if (deleteModal) deleteModal.classList.remove("active");
        });
      }

      // RESET CONTROLS
      if (btnResetDemo) {
        btnResetDemo.addEventListener("click", async () => {
          try {
            const res = await fetch("/api/v1/admin/telemetry/reset", {
              method: "POST",
              headers: { "X-CSRF-Token": csrfToken || "" },
              credentials: "include"
            });
            if (res.ok) {
              await fetchBackendTelemetry();
              updateRoadStatus();
              showNotificationToast("Telemetry database restored to baseline seeds.");
              return;
            }
          } catch (_) {}
        });
      }
    }

    window.openEditRecordModal = function(id) {
      const record = telemetryLogs.find(l => l.id === id);
      if (!record) return;

      document.getElementById("edit-record-id").value = record.id;
      document.getElementById("edit-record-id-badge").textContent = `#${record.id}`;
      document.getElementById("edit-species").value = record.species.toLowerCase();
      document.getElementById("edit-hazard").value = record.hazard_level;
      document.getElementById("edit-sector").value = record.road_sector;
      document.getElementById("edit-lat").value = record.latitude;
      document.getElementById("edit-lng").value = record.longitude;
      document.getElementById("edit-conf").value = record.confidence;
      document.getElementById("edit-speed").value = record.speed_kmh;

      const editModal = document.getElementById("admin-edit-modal");
      if (editModal) editModal.classList.add("active");
    };

    window.openDeleteRecordModal = function(id) {
      const record = telemetryLogs.find(l => l.id === id);
      if (!record) return;

      document.getElementById("delete-record-id").value = record.id;
      document.getElementById("delete-species-name").textContent = `${record.species.toUpperCase()} (${record.road_sector})`;
      const deleteModal = document.getElementById("admin-delete-modal");
      if (deleteModal) deleteModal.classList.add("active");
    };

    // ---------------------------------------------------------
    // 15. LIVE DATA INGEST & BACKEND FETCH (ROLE-AWARE)
    // ---------------------------------------------------------
    function initSimulateIngest() {
      const simBtn = document.getElementById("btn-sim-ingest");
      if (!simBtn) return;

      simBtn.addEventListener("click", async () => {
        const presets = [
          {
            node_id: "VEHICLE_PATROL_01",
            model_type: "FOMO",
            telemetry: {
              latitude: 11.6645,
              longitude: 76.6210,
              road_sector: "KM 42-46 (Elephant Corridor)",
              speed_kmh: 31.5
            },
            detections: [
              { species: "elephant", confidence: 0.96, x: 120, y: 95, w: 0, h: 0 }
            ]
          },
          {
            node_id: "VEHICLE_PATROL_02",
            model_type: "YOLO",
            telemetry: {
              latitude: 11.6820,
              longitude: 76.6430,
              road_sector: "KM 50-54 (Buffer Crossing Zone)",
              speed_kmh: 24.0
            },
            detections: [
              { species: "tiger", confidence: 0.91, x: 100, y: 90, w: 150, h: 110 }
            ]
          }
        ];

        const mockPayload = presets[Math.floor(Math.random() * presets.length)];

        try {
          const res = await fetch("/api/v1/telemetry/ingest", {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Device-Key": "esp32cam-node-secret-2026" },
            body: JSON.stringify(mockPayload)
          });
          if (res.ok) {
            await fetchBackendTelemetry();
            updateRoadStatus();
            showNotificationToast("Live edge telemetry ingested via ESP32-CAM gateway!");
            return;
          }
        } catch (_) {}

        // Fallback
        const det = mockPayload.detections[0];
        const newLog = {
          id: telemetryLogs.length + 1,
          timestamp: new Date().toLocaleTimeString(),
          node_id: mockPayload.node_id,
          model_type: mockPayload.model_type,
          species: det.species,
          confidence: det.confidence,
          latitude: mockPayload.telemetry.latitude,
          longitude: mockPayload.telemetry.longitude,
          speed_kmh: mockPayload.telemetry.speed_kmh,
          road_sector: mockPayload.telemetry.road_sector,
          hazard_level: "CRITICAL_BLOCK",
          incident_status: "ACTIVE"
        };
        telemetryLogs.unshift(newLog);
        renderTelemetryTable();
        updateRoadStatus();
      });
    }

    async function probeBackendNetwork() {
      if (window.location.protocol === "file:") {
        document.getElementById("hotspot-ping").textContent = "Standalone Browser Mode";
        return;
      }
      try {
        const res = await fetch("/api/v1/network/status");
        if (res.ok) {
          const data = await res.json();
          document.getElementById("hotspot-ssid").textContent = data.ssid || "WildShield_Hotspot";
          document.getElementById("hotspot-ip").textContent = `${data.host_ip}:${data.port || 8000}`;
          document.getElementById("hotspot-ping").textContent = "Just now";
          document.getElementById("hotspot-led").style.background = "var(--accent-emerald)";
        }
      } catch (_) {
        document.getElementById("hotspot-ping").textContent = "Offline cache";
      }
    }

    async function fetchBackendTelemetry() {
      try {
        const res = await fetch("/api/v1/telemetry", { credentials: "include" });
        if (res.ok) {
          const logs = await res.json();
          if (logs && logs.length > 0) {
            telemetryLogs = logs;
            renderTelemetryTable();
          }
        }
      } catch (_) {}
    }

    async function fetchPublicAlerts() {
      try {
        const res = await fetch("/api/v1/public/alerts");
        if (res.ok) {
          const alerts = await res.json();
          if (alerts && alerts.length > 0) {
            // Update public corridor status
            updateRoadStatus();
          }
        }
      } catch (_) {}
    }

  
    // ---------------------------------------------------------
    // MODERN AUTH GATEWAY & INSTAGRAM-STYLE TOGGLE CONTROLLER
    // ---------------------------------------------------------
    function toggleAuthMode(mode) {
      const signinPanel = document.getElementById("gateway-signin-panel");
      const signupPanel = document.getElementById("gateway-signup-panel");
      const toSignupMsg = document.getElementById("switch-to-signup-msg");
      const toSigninMsg = document.getElementById("switch-to-signin-msg");

      if (mode === "signup") {
        if (signinPanel) signinPanel.style.display = "none";
        if (signupPanel) signupPanel.style.display = "block";
        if (toSignupMsg) toSignupMsg.style.display = "none";
        if (toSigninMsg) toSigninMsg.style.display = "block";
      } else {
        if (signinPanel) signinPanel.style.display = "block";
        if (signupPanel) signupPanel.style.display = "none";
        if (toSignupMsg) toSignupMsg.style.display = "block";
        if (toSigninMsg) toSigninMsg.style.display = "none";
      }
    }

    function quickFillLogin(email, password, role) {
      const emailInput = document.getElementById("auth-login-email");
      const pwInput = document.getElementById("auth-login-password");
      if (emailInput) emailInput.value = email;
      if (pwInput) pwInput.value = password;

      // Trigger instant sign in
      const submitBtn = document.getElementById("btn-auth-login-submit");
      if (submitBtn) submitBtn.click();
    }

    async function triggerGoogleSignIn() {
      const email = (document.getElementById("auth-login-email")?.value || "admin.wildshield@gmail.com").trim();
      const name = "Chief Conservator";
      const avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80";

      try {
        const res = await fetch("/api/v1/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, name, avatar })
        });
        if (res.ok) {
          const data = await res.json();
          handleSuccessfulLogin(data.user, data.csrf_token);
          showNotificationToast(`Signed in with Google as ${data.user.name} (${data.user.role})!`);
          return;
        }
      } catch (_) {}

      // Fallback
      const user = { name, email, role: "ADMIN", avatar, provider: "google" };
      handleSuccessfulLogin(user, null);
      showNotificationToast("Signed in as Administrator (Demonstration Mode)");
    }

    // Attach event listeners for gateway forms
    document.addEventListener("DOMContentLoaded", () => {
      const signinForm = document.getElementById("gateway-signin-form");
      const signupForm = document.getElementById("gateway-signup-form");

      if (signinForm) {
        signinForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const email = document.getElementById("auth-login-email")?.value.trim() || "";
          const password = document.getElementById("auth-login-password")?.value.trim() || "";
          const errorEl = document.getElementById("auth-signin-error");
          if (errorEl) errorEl.style.display = "none";

          try {
            const res = await fetch("/api/v1/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ email, password: password, passcode: password })
            });
            if (res.ok) {
              const data = await res.json();
              handleSuccessfulLogin(data.user, data.csrf_token);
              showNotificationToast(`Welcome back, ${data.user.name} (${data.user.role})!`);
              return;
            } else {
              const err = await res.json();
              if (errorEl) {
                errorEl.textContent = err.detail || "Invalid email or password. Access denied.";
                errorEl.style.display = "block";
              }
              return;
            }
          } catch (netErr) {
            console.error("Login request error:", netErr);
          }

          // Strict verification fallback: Only allow parvathyg260@gmail.com with exact password
          if (email.toLowerCase() === "parvathyg260@gmail.com" && password === "6235470747") {
            const user = { name: "Parvathy Admin", email: "parvathyg260@gmail.com", role: "ADMIN", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80", provider: "password" };
            handleSuccessfulLogin(user, null);
            showNotificationToast("Signed in as Chief Administrator!");
          } else {
            if (errorEl) {
              errorEl.textContent = "Invalid email or password. Access denied.";
              errorEl.style.display = "block";
            }
          }
        });
      }

      if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const name = document.getElementById("auth-reg-name")?.value.trim() || "";
          const email = document.getElementById("auth-reg-email")?.value.trim() || "";
          const password = document.getElementById("auth-reg-password")?.value.trim() || "";
          const errorEl = document.getElementById("auth-signup-error");
          if (errorEl) errorEl.style.display = "none";

          try {
            const res = await fetch("/api/v1/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ name, email, password })
            });
            if (res.ok) {
              const data = await res.json();
              handleSuccessfulLogin(data.user, data.csrf_token);
              showNotificationToast(`Account created! Welcome to WildShield, ${data.user.name}.`);
              return;
            } else {
              const err = await res.json();
              if (errorEl) {
                errorEl.textContent = err.detail || "Registration failed.";
                errorEl.style.display = "block";
              }
              return;
            }
          } catch (_) {
            if (errorEl) {
              errorEl.textContent = "Server connection error.";
              errorEl.style.display = "block";
            }
          }
        });
      }
    });

  
    // ---------------------------------------------------------
    // GOOGLE ACCOUNT CHOOSER & REDIRECT CONTROLLER
    // ---------------------------------------------------------
    function openGoogleAccountModal() {
      const modal = document.getElementById("google-account-modal");
      if (modal) modal.classList.add("active");
    }

    function closeGoogleAccountModal() {
      const modal = document.getElementById("google-account-modal");
      if (modal) modal.classList.remove("active");
    }

    function toggleCustomGmailBox() {
      const form = document.getElementById("custom-gmail-form");
      if (form) {
        form.style.display = form.style.display === "none" ? "block" : "none";
        if (form.style.display === "block") {
          document.getElementById("custom-gmail-email")?.focus();
        }
      }
    }

    async function selectGoogleAccount(email, name, roleHint) {
      // Security Check: Privileged Admin or Officer accounts require password verification!
      if (email.toLowerCase() === 'parvathyg260@gmail.com' || roleHint === 'ADMIN' || email.toLowerCase().includes('admin')) {
        closeGoogleAccountModal();
        const emailInput = document.getElementById("auth-login-email");
        const pwInput = document.getElementById("auth-login-password");
        const errorEl = document.getElementById("auth-signin-error");
        if (emailInput) emailInput.value = email;
        if (pwInput) {
          pwInput.value = "";
          pwInput.focus();
        }
        if (errorEl) {
          errorEl.textContent = "Security Notice: Please enter your administrator password for " + email + " to access Admin Data.";
          errorEl.style.display = "block";
        }
        return;
      }

      // Public Traveler Sign-In / Sign-Up
      const avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=80";
      try {
        const res = await fetch("/api/v1/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, name, avatar })
        });
        if (res.ok) {
          const data = await res.json();
          closeGoogleAccountModal();
          handleSuccessfulLogin(data.user, data.csrf_token);
          showNotificationToast(`Signed in with Google as ${data.user.name}! Entering Traveler Portal...`);
          return;
        } else {
          const err = await res.json();
          closeGoogleAccountModal();
          const errorEl = document.getElementById("auth-signin-error");
          if (errorEl) {
            errorEl.textContent = err.detail || "Authentication requires password verification.";
            errorEl.style.display = "block";
          }
          return;
        }
      } catch (_) {}

      // Fallback for public traveler
      closeGoogleAccountModal();
      const user = { name: name || "Google Traveler", email, role: "USER", avatar, provider: "google" };
      handleSuccessfulLogin(user, null);
      showNotificationToast(`Signed in as Traveler (${user.name})`);
    }

    async function handleCustomGmailSubmit(e) {
      e.preventDefault();
      const email = document.getElementById("custom-gmail-email")?.value.trim();
      const name = document.getElementById("custom-gmail-name")?.value.trim() || email.split("@")[0];
      if (email) {
        await selectGoogleAccount(email, name, "USER");
      }
    }
