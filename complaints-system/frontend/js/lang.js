function changeLanguage() {
    const language = document.getElementById("language").value;
  
    // Set texts based on the selected language
    const translations = {
      en: {
        heading: "Complaint Submission",
        description: "Your voice matters. Submit your complaint anonymously.",
        placeholder: "Write your complaint here...",
        submitButton: "Submit",
      },
      ar: {
        heading: "تقديم شكوى",
        description: "صوتك مهم. قدم شكواك بشكل مجهول.",
        placeholder: "اكتب شكواك هنا...",
        submitButton: "إرسال",
      },
      bn: {
        heading: "অভিযোগ দাখিল করুন",
        description: "আপনার কণ্ঠ গুরুত্বপূর্ণ। আপনার অভিযোগ গোপনে দাখিল করুন।",
        placeholder: "এখানে আপনার অভিযোগ লিখুন...",
        submitButton: "জমা দিন",
      },
      hi: {
        heading: "शिकायत सबमिट करें",
        description: "आपकी आवाज़ महत्वपूर्ण है। अपनी शिकायत गुमनाम रूप से सबमिट करें।",
        placeholder: "यहाँ अपनी शिकायत लिखें...",
        submitButton: "सबमिट करें",
      },
    };
  
    // Get the selected language texts
    const selectedLang = translations[language];
  
    // Update page content
    document.querySelector(".header h1").innerText = selectedLang.heading;
    document.querySelector(".header p").innerText = selectedLang.description;
    document.getElementById("complaint").placeholder = selectedLang.placeholder;
    document.querySelector(".submit-btn").innerText = selectedLang.submitButton;
  }
  