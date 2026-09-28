/**
 * =============================================================================
 * LITALLY 4K ULTRA HD — ACCESSIBILITY 100-LANGUAGE EXPANSION MATRIX
 * File: static/js/accessibility_100.js
 * Description: Multilingual localization dictionary for the 50 Sovereign
 *              Accessibility & Assistive Modalities across 100 world languages.
 * =============================================================================
 */

const A11Y_100_TITLES = {
    en: { title: "Accessibility", activeSuffix: "Active", reset: "Reset All", close: "Close" },
    ru: { title: "Доступность", activeSuffix: "Активно", reset: "Сбросить все", close: "Закрыть" },
    kk: { title: "Қолжетімділік", activeSuffix: "Белсенді", reset: "Барлығын қайтару", close: "Жабу" },
    zh: { title: "无障碍辅助", activeSuffix: "已启用", reset: "重置所有", close: "关闭" },
    es: { title: "Accesibilidad", activeSuffix: "Activo", reset: "Restablecer todo", close: "Cerrar" },
    de: { title: "Barrierefreiheit", activeSuffix: "Aktiv", reset: "Alles zurücksetzen", close: "Schließen" },
    fr: { title: "Accessibilité", activeSuffix: "Actif", reset: "Tout réinitialiser", close: "Fermer" },
    ar: { title: "إمكانية الوصول", activeSuffix: "نشط", reset: "إعادة ضبط الكل", close: "إغلاق" },
    ja: { title: "アクセシビリティ", activeSuffix: "有効", reset: "すべてリセット", close: "閉じる" },
    pt: { title: "Acessibilidade", activeSuffix: "Ativo", reset: "Redefinir tudo", close: "Fechar" },
    it: { title: "Accessibilità", activeSuffix: "Attivo", reset: "Ripristina tutto", close: "Chiudi" },
    nl: { title: "Toegankelijkheid", activeSuffix: "Actief", reset: "Alles resetten", close: "Sluiten" },
    tr: { title: "Erişilebilirlik", activeSuffix: "Aktif", reset: "Tümünü sıfırla", close: "Kapat" },
    pl: { title: "Dostępność", activeSuffix: "Aktywny", reset: "Zresetuj wszystko", close: "Zamknij" },
    uk: { title: "Доступність", activeSuffix: "Активно", reset: "Скинути все", close: "Закрити" },
    sv: { title: "Tillgänglighet", activeSuffix: "Aktiv", reset: "Återställ alla", close: "Stäng" },
    el: { title: "Προσβασιμότητα", activeSuffix: "Ενεργό", reset: "Επαναφορά όλων", close: "Κλείσιμο" },
    cs: { title: "Přístupnost", activeSuffix: "Aktivní", reset: "Resetovat vše", close: "Zavřít" },
    ro: { title: "Accesibilitate", activeSuffix: "Activ", reset: "Resetează tot", close: "Închide" },
    hu: { title: "Akadálymentesítés", activeSuffix: "Aktív", reset: "Összes visszaállítása", close: "Bezárás" },
    da: { title: "Tilgængelighed", activeSuffix: "Aktiv", reset: "Nulstil alle", close: "Luk" },
    fi: { title: "Saavutettavuus", activeSuffix: "Aktiivinen", reset: "Nollaa kaikki", close: "Sulje" },
    no: { title: "Tilgjengelighet", activeSuffix: "Aktiv", reset: "Tilbakestill alle", close: "Lukk" },
    sk: { title: "Prístupnosť", activeSuffix: "Aktívne", reset: "Resetovať všetko", close: "Zavrieť" },
    bg: { title: "Достъпност", activeSuffix: "Активно", reset: "Нулиране на всички", close: "Затвори" },
    hr: { title: "Pristupačnost", activeSuffix: "Aktivno", reset: "Poništi sve", close: "Zatvori" },
    sr: { title: "Приступачност", activeSuffix: "Активно", reset: "Ресетуј све", close: "Затвори" },
    sl: { title: "Dostopnost", activeSuffix: "Aktivno", reset: "Ponastavi vse", close: "Zapri" },
    lt: { title: "Prieinamumas", activeSuffix: "Aktyvus", reset: "Atstatyti viską", close: "Uždaryti" },
    lv: { title: "Pieejamība", activeSuffix: "Aktīvs", reset: "Atiestatīt visu", close: "Aizvērt" },
    ko: { title: "접근성", activeSuffix: "활성", reset: "모두 재설정", close: "닫기" },
    hi: { title: "अभिगम्यता", activeSuffix: "सक्रिय", reset: "सभी रीसेट करें", close: "बंद करें" },
    vi: { title: "Khả năng tiếp cận", activeSuffix: "Hoạt động", reset: "Đặt lại tất cả", close: "Đóng" },
    th: { title: "การเข้าถึง", activeSuffix: "ใช้งานอยู่", reset: "รีเซ็ตทั้งหมด", close: "ปิด" },
    id: { title: "Aksesibilitas", activeSuffix: "Aktif", reset: "Reset semua", close: "Tutup" },
    ms: { title: "Kebolehcapaian", activeSuffix: "Aktif", reset: "Tetapkan semula", close: "Tutup" },
    fil: { title: "Accessibility", activeSuffix: "Aktibo", reset: "I-reset lahat", close: "Isara" },
    bn: { title: "অভিগম্যতা", activeSuffix: "সক্রিয়", reset: "সব রিসেট করুন", close: "বন্ধ করুন" },
    ta: { title: "அணுகல்தன்மை", activeSuffix: "செயலில்", reset: "அனைத்தையும் மீட்டமை", close: "மூடு" },
    te: { title: "సౌలభ్యం", activeSuffix: "క్రియాశీల", reset: "అన్నీ రీసెట్ చేయండి", close: "మూసివేయి" },
    ur: { title: "رسائی پذیری", activeSuffix: "فعال", reset: "تمام ری سیٹ کریں", close: "بند کریں" },
    fa: { title: "دسترسی‌پذیری", activeSuffix: "فعال", reset: "بازنشانی همه", close: "بستن" },
    he: { title: "נגישות", activeSuffix: "פעיל", reset: "אפס הכל", close: "סגור" },
    mr: { title: "प्रवेशयोग्यता", activeSuffix: "सक्रिय", reset: "सर्व रीसेट करा", close: "बंद करा" },
    gu: { title: "સુગમતા", activeSuffix: "સક્રિય", reset: "બધું રીસેટ કરો", close: "બંધ કરો" },
    kn: { title: "ಪ್ರವೇಶಿಸುವಿಕೆ", activeSuffix: "ಸಕ್ರಿಯ", reset: "ಎಲ್ಲವನ್ನೂ ಮರುಹೊಂದಿಸಿ", close: "ಮುಚ್ಚು" },
    ml: { title: "പ്രവേശനക്ഷമത", activeSuffix: "സജീവം", reset: "എല്ലാം പുനഃസജ്ജമാക്കുക", close: "അടയ്ക്കുക" },
    pa: { title: "ਪਹੁੰਚਯੋਗਤਾ", activeSuffix: "ਸਰਗਰਮ", reset: "ਸਭ ਰੀਸੈੱਟ ਕਰੋ", close: "ਬੰਦ ਕਰੋ" },
    my: { title: "အသုံးပြုနိုင်မှု", activeSuffix: "ဖွင့်ထားသည်", reset: "အားလုံးပြန်လည်သတ်မှတ်", close: "ပိတ်မည်" },
    km: { title: "លទ្ធភាពចូលប្រើ", activeSuffix: "សកម្ម", reset: "កំណត់ឡើងវិញទាំងអស់", close: "បិទ" },
    ne: { title: "पहुँचयोग्यता", activeSuffix: "सक्रिय", reset: "सबै रिसेट गर्नुहोस्", close: "बन्द गर्नुहोस्" },
    si: { title: "ප්‍රවේශ්‍යතාව", activeSuffix: "සක්‍රියයි", reset: "සියල්ල නැවත සකසන්න", close: "වසා දමන්න" },
    uz: { title: "Qulaylik", activeSuffix: "Faol", reset: "Barchasini tiklash", close: "Yopish" },
    az: { title: "Əlçatanlıq", activeSuffix: "Aktiv", reset: "Hamısını sıfırla", close: "Bağla" },
    ka: { title: "ხელმისაწვდომობა", activeSuffix: "აქტიური", reset: "ყველას გადატვირთვა", close: "დახურვა" },
    sw: { title: "Ufikiaji", activeSuffix: "Inatumika", reset: "Weka upya yote", close: "Funga" },
    am: { title: "ተደራሽነት", activeSuffix: "ንቁ", reset: "ሁሉንም ዳግም አስጀምር", close: "ዝጋ" },
    yo: { title: "Àrọ́wọ́tó", activeSuffix: "Ṣiṣẹ́", reset: "Tunto gbogbo", close: "Paadé" },
    ig: { title: "Nnweta", activeSuffix: "Na-arụ ọrụ", reset: "Tọgharịa ihe niile", close: "Mechie" },
    ha: { title: "Sauƙin Shiga", activeSuffix: "Yana aiki", reset: "Sake saita duka", close: "Rufe" },
    zu: { title: "Ukufinyeleleka", activeSuffix: "Kuyasebenza", reset: "Setha kabusha konke", close: "Vala" },
    xh: { title: "Ukufikeleleka", activeSuffix: "Iyasebenza", reset: "Cwangcisa kwakhona", close: "Vala" },
    af: { title: "Toeganklikheid", activeSuffix: "Aktief", reset: "Stel alles terug", close: "Maak toe" },
    so: { title: "Helitaanka", activeSuffix: "Firfircoon", reset: "Dib u deji dhammaan", close: "Xidh" },
    mg: { title: "Fidirana", activeSuffix: "Mavitrika", reset: "Avereno daholo", close: "Hidy" },
    sn: { title: "Kupinda", activeSuffix: "Chinoshanda", reset: "Gadzirisa zvese", close: "Vhara" },
    rw: { title: "Kugera ku bikorwa", activeSuffix: "Bikora", reset: "Kugarura byose", close: "Funga" },
    st: { title: "Phihlello", activeSuffix: "E sebetsang", reset: "Setha bocha tsohle", close: "Koala" },
    tn: { title: "Tsamaiso", activeSuffix: "E a bereka", reset: "Seta gape tsotlhe", close: "Tswala" },
    ts: { title: "Mfikelelo", activeSuffix: "Tirhaka", reset: "Hlela hinkwaswo", close: "Pfala" },
    wo: { title: "Yomb-ak-dugg", activeSuffix: "Dox na", reset: "Delloo lépp", close: "Tej" },
    ti: { title: "ተበፃሕነት", activeSuffix: "ንጡፍ", reset: "ንኹሉ ምላሽ", close: "ዕጾ" },
    om: { title: "Dhaqqabummaa", activeSuffix: "Hojii irra jira", reset: "Hunda deebisi", close: "Cufi" },
    tg: { title: "Дастрасӣ", activeSuffix: "Фаъол", reset: "Бозсозии ҳама", close: "Пӯшидан" },
    ky: { title: "Жеткиликтүүлүк", activeSuffix: "Активдүү", reset: "Баарын баштапкыга", close: "Жабуу" },
    tk: { title: "Elýeterlilik", activeSuffix: "Işjeň", reset: "Hemmesini nol", close: "Ýap" },
    mn: { title: "Хүртээмж", activeSuffix: "Идэвхтэй", reset: "Бүгдийг шинэчлэх", close: "Хаах" },
    hy: { title: "Հասանելիություն", activeSuffix: "Ակտիվ", reset: "Վերականգնել բոլորը", close: "Փակել" },
    sq: { title: "Qasshmëria", activeSuffix: "Aktive", reset: "Rivendos të gjitha", close: "Mbyll" },
    mk: { title: "Пристапност", activeSuffix: "Активно", reset: "Ресетирај сѐ", close: "Затвори" },
    bs: { title: "Pristupačnost", activeSuffix: "Aktivno", reset: "Resetuj sve", close: "Zatvori" },
    be: { title: "Даступнасць", activeSuffix: "Актыўна", reset: "Скінуць усё", close: "Закрыць" },
    et: { title: "Juurdepääsetavus", activeSuffix: "Aktiivne", reset: "Lähtesta kõik", close: "Sulge" },
    is: { title: "Aðgengi", activeSuffix: "Virkt", reset: "Endurstilla allt", close: "Loka" },
    ga: { title: "Inrochtaineacht", activeSuffix: "Gníomhach", reset: "Athshocraigh gach rud", close: "Dún" },
    cy: { title: "Hygyrchedd", activeSuffix: "Gweithredol", reset: "Ailosod popeth", close: "Cau" },
    eu: { title: "Irisgarritasuna", activeSuffix: "Aktibo", reset: "Berrezarri guztiak", close: "Itxi" },
    gl: { title: "Accesibilidade", activeSuffix: "Activo", reset: "Restablecer todo", close: "Pechar" },
    ca: { title: "Accessibilitat", activeSuffix: "Actiu", reset: "Restableix tot", close: "Tanca" },
    mt: { title: "Aċċessibbiltà", activeSuffix: "Attiv", reset: "Irrisettja kollox", close: "Agħlaq" },
    lo: { title: "ການເຂົ້າເຖິງ", activeSuffix: "ເປີດໃຊ້", reset: "ຣີເຊັດທັງໝົດ", close: "ປິດ" },
    jw: { title: "Aksesibilitas", activeSuffix: "Aktif", reset: "Reset kabeh", close: "Tutup" },
    su: { title: "Aksesibilitas", activeSuffix: "Aktif", reset: "Reset sadayana", close: "Tutup" },
    ps: { title: "لاسرسی", activeSuffix: "فعال", reset: "ټول بیا تنظیم کړئ", close: "تړل" },
    ku: { title: "Gihîştinî", activeSuffix: "Çalak", reset: "Hemûyan nû bike", close: "Girtin" },
    sd: { title: "رسائي", activeSuffix: "فعال", reset: "سڀ ري سيٽ ڪريو", close: "بند ڪريو" },
    yi: { title: "צוטריט", activeSuffix: "אַקטיוו", reset: "скинуць све", close: "שליסן" },
    eo: { title: "Alirebleco", activeSuffix: "Aktiva", reset: "Restarigi ĉion", close: "Fermi" },
    la: { title: "Accessibilitas", activeSuffix: "Activa", reset: "Restituere omnia", close: "Claudere" },
    gb: { title: "Accessibility", activeSuffix: "Active", reset: "Reset All", close: "Close" }
};

/**
 * Enhanced global updater for Accessibility button and modal header
 */
function updateA11y100HeaderTelemetry() {
    const activeCount = (typeof a11yState !== 'undefined' && a11yState.activeModalities) 
        ? a11yState.activeModalities.size 
        : 0;
    
    const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'en';
    const dict = A11Y_100_TITLES[lang] || A11Y_100_TITLES.en;

    const navBtn = document.getElementById('navBtnA11y');
    if (navBtn) {
        if (activeCount > 0) {
            navBtn.innerHTML = `♿ ${dict.title} <span style="color:#00e676; font-weight:800;">(${activeCount})</span>`;
        } else {
            navBtn.textContent = `♿ ${dict.title} (50)`;
        }
    }

    const modalTitle = document.getElementById('modalTitleA11y');
    if (modalTitle) {
        modalTitle.textContent = `${dict.title} (50)`;
    }

    const badge = document.getElementById('a11yActiveBadge');
    if (badge) {
        badge.textContent = `${activeCount} ${dict.activeSuffix}`;
    }
}

// Hook into state change
window.addEventListener('litally:a11y-changed', updateA11y100HeaderTelemetry);
