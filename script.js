const translations = {
  en: {
    "main-title": "Welcome to CryptoNajm",
    "main-sub": "Your secure and smart crypto bot with Binance",
    "api-title": "Connect Binance API"
  },
  ar: {
    "main-title": "مرحبًا بك في كريبتو نجم",
    "main-sub": "بوت تداول آمن وذكي مع Binance",
    "api-title": "ربط واجهة Binance"
  }
};

function setLang(lang) {
  Object.keys(translations[lang]).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = translations[lang][id];
  });
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}