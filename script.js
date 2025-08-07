function toggleTheme() {
  document.body.classList.toggle('light');
}

function setLang(lang) {
  const translations = {
    en: {
      mainTitle: "Welcome to CryptoNajm",
      mainSub: "Your secure and smart crypto bot with Binance",
      apiTitle: "Connect Your Binance API"
    },
    ar: {
      mainTitle: "مرحبًا بك في كريبتو نجم",
      mainSub: "بوت تداول آمن وذكي مع Binance",
      apiTitle: "اربط واجهة Binance"
    }
  };
  document.getElementById('main-title').innerText = translations[lang].mainTitle;
  document.getElementById('main-sub').innerText = translations[lang].mainSub;
  document.getElementById('api-title').innerText = translations[lang].apiTitle;
}