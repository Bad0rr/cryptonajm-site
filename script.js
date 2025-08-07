function setLang(lang) {
  if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.getElementById('main-title').innerText = 'مرحبًا بك في كريبتو نجم';
    document.getElementById('main-sub').innerText = 'بوت الكريبتو الآمن والذكي مع Binance';
    document.getElementById('api-title').innerText = 'ربط API من Binance';
  } else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.getElementById('main-title').innerText = 'Welcome to CryptoNajm';
    document.getElementById('main-sub').innerText = 'Your secure and smart crypto bot with Binance';
    document.getElementById('api-title').innerText = 'Connect Binance API';
  }
}

function toggleTheme() {
  const body = document.body;
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = '#0e0e0e';
    body.style.color = '#fff';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = '#000';
  }
}