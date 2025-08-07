
const langData = {
    en: {
        homeLink: "Home",
        pricingLink: "Pricing",
        contactLink: "Contact",
        welcomeText: "Welcome to the smartest Binance Trading Bot",
        descText: "Join thousands of users and start trading smarter today."
    },
    ar: {
        homeLink: "الرئيسية",
        pricingLink: "الاشتراكات",
        contactLink: "تواصل معنا",
        welcomeText: "مرحبًا بك في أذكى بوت تداول على باينانس",
        descText: "انضم إلى آلاف المستخدمين وابدأ التداول بذكاء اليوم."
    }
};

function changeLanguage(lang) {
    const elements = langData[lang];
    for (let id in elements) {
        const el = document.getElementById(id);
        if (el) el.textContent = elements[id];
    }
}
