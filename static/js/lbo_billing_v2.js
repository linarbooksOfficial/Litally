// =============================================================================
// LBO BILLING DROPDOWN ENGINE v2 — lbo_billing_v2.js
// Dropdown period selector with price animation, 100-language labels,
// currency conversion, Basic "0 $ – One Time" block, particles
// =============================================================================

/* ── PRICE TABLE ──────────────────────────────────────────────────────────── */
const LBO_PRICES = {
    tier_1_basic         : { m1:0,      m3:null,   m6:null,    m10:null,  m12:null  },
    tier_2_standard      : { m1:14.99,  m3:34.99,  m6:null,    m10:null,  m12:null  },
    tier_3_biz_standard  : { m1:24.99,  m3:45,     m6:55,      m10:60,    m12:null  },
    tier_4_biz_enterprise: { m1:30,     m3:55,     m6:80,      m10:100,   m12:null  },
    tier_5_advanced      : { m1:39.99,  m3:64,     m6:114.99,  m10:130,   m12:150   },
    tier_6_pro           : { m1:49.99,  m3:89.99,  m6:150,     m10:180,   m12:230   },
    tier_7_ultra         : { m1:69.99,  m3:125,    m6:1600,    m10:180,   m12:null  },
    tier_8_unlimited     : { m1:999,    m3:3500,   m6:null,    m10:null,  m12:null  }
};

/* ── 100-LANGUAGE PERIOD LABELS ───────────────────────────────────────────── */
const LBO_LABELS = {
    en:{ m1:'Monthly',      m3:'3 Months',   m6:'6 Months',   m10:'10 Months', m12:'Annual',     onetime:'One Time',        free:'Free Forever', na:'Not available', per:'/mo' },
    ru:{ m1:'В месяц',      m3:'3 месяца',   m6:'6 месяцев',  m10:'10 месяцев',m12:'Год',         onetime:'Единоразово',     free:'Бесплатно',    na:'Недоступно',    per:'/мес' },
    kk:{ m1:'Айлық',        m3:'3 ай',       m6:'6 ай',       m10:'10 ай',     m12:'Жылдық',      onetime:'Бір рет',         free:'Тегін',        na:'Жоқ',           per:'/ай' },
    zh:{ m1:'月付',          m3:'3个月',      m6:'6个月',      m10:'10个月',    m12:'年付',         onetime:'一次性',           free:'永久免费',     na:'不可用',         per:'/月' },
    es:{ m1:'Mensual',      m3:'3 meses',    m6:'6 meses',    m10:'10 meses',  m12:'Anual',       onetime:'Pago único',      free:'Gratis',       na:'No disponible', per:'/mes' },
    de:{ m1:'Monatlich',    m3:'3 Monate',   m6:'6 Monate',   m10:'10 Monate', m12:'Jährlich',    onetime:'Einmalig',        free:'Kostenlos',    na:'Nicht verfügbar',per:'/Mo' },
    fr:{ m1:'Mensuel',      m3:'3 mois',     m6:'6 mois',     m10:'10 mois',   m12:'Annuel',      onetime:'Paiement unique', free:'Gratuit',      na:'Non disponible',per:'/mois' },
    ar:{ m1:'شهري',          m3:'3 أشهر',    m6:'6 أشهر',    m10:'10 أشهر',  m12:'سنوي',        onetime:'مرة واحدة',        free:'مجاني',        na:'غير متاح',      per:'/شهر' },
    ja:{ m1:'月払い',         m3:'3ヶ月',      m6:'6ヶ月',      m10:'10ヶ月',   m12:'年払い',       onetime:'1回払い',          free:'無料',         na:'利用不可',       per:'/月' },
    pt:{ m1:'Mensal',       m3:'3 meses',    m6:'6 meses',    m10:'10 meses',  m12:'Anual',       onetime:'Único',           free:'Grátis',       na:'Indisponível',  per:'/mês' },
    it:{ m1:'Mensile',      m3:'3 mesi',     m6:'6 mesi',     m10:'10 mesi',   m12:'Annuale',     onetime:'Una tantum',      free:'Gratuito',     na:'Non disponibile',per:'/mese' },
    ko:{ m1:'월간',          m3:'3개월',      m6:'6개월',      m10:'10개월',    m12:'연간',         onetime:'1회 결제',         free:'무료',         na:'이용 불가',      per:'/월' },
    tr:{ m1:'Aylık',        m3:'3 ay',       m6:'6 ay',       m10:'10 ay',     m12:'Yıllık',      onetime:'Tek seferlik',    free:'Ücretsiz',     na:'Mevcut değil',  per:'/ay' },
    pl:{ m1:'Miesięcznie',  m3:'3 miesiące', m6:'6 miesięcy', m10:'10 miesięcy',m12:'Rocznie',    onetime:'Jednorazowo',     free:'Za darmo',     na:'Niedostępny',   per:'/mies' },
    nl:{ m1:'Maandelijks',  m3:'3 maanden',  m6:'6 maanden',  m10:'10 maanden',m12:'Jaarlijks',   onetime:'Eenmalig',        free:'Gratis',       na:'Niet beschikbaar',per:'/mo' },
    sv:{ m1:'Månadsvis',    m3:'3 månader',  m6:'6 månader',  m10:'10 månader',m12:'Årsvis',      onetime:'Engångs',         free:'Gratis',       na:'Inte tillgänglig',per:'/mån' },
    no:{ m1:'Månedlig',     m3:'3 måneder',  m6:'6 måneder',  m10:'10 måneder',m12:'Årlig',       onetime:'Engangsbetaling', free:'Gratis',       na:'Ikke tilgjengelig',per:'/mnd' },
    da:{ m1:'Månedlig',     m3:'3 måneder',  m6:'6 måneder',  m10:'10 måneder',m12:'Årligt',      onetime:'Engangsgebyr',    free:'Gratis',       na:'Ikke tilgængelig',per:'/mnd' },
    fi:{ m1:'Kuukausittain',m3:'3 kuukautta',m6:'6 kuukautta',m10:'10 kuukautta',m12:'Vuosittain',onetime:'Kertamaksu',     free:'Ilmaiseksi',   na:'Ei saatavilla', per:'/kk' },
    cs:{ m1:'Měsíčně',      m3:'3 měsíce',   m6:'6 měsíců',   m10:'10 měsíců', m12:'Ročně',       onetime:'Jednorázově',     free:'Zdarma',       na:'Nedostupné',    per:'/měs' },
    sk:{ m1:'Mesačne',      m3:'3 mesiace',  m6:'6 mesiacov', m10:'10 mesiacov',m12:'Ročne',      onetime:'Jednorazovo',     free:'Zadarmo',      na:'Nedostupné',    per:'/mes' },
    ro:{ m1:'Lunar',        m3:'3 luni',     m6:'6 luni',     m10:'10 luni',   m12:'Anual',       onetime:'O singură dată',  free:'Gratuit',      na:'Indisponibil',  per:'/lună' },
    hu:{ m1:'Havonta',      m3:'3 hónap',    m6:'6 hónap',    m10:'10 hónap',  m12:'Évente',      onetime:'Egyszeri',        free:'Ingyenes',     na:'Nem elérhető',  per:'/hó' },
    bg:{ m1:'Месечно',      m3:'3 месеца',   m6:'6 месеца',   m10:'10 месеца', m12:'Годишно',     onetime:'Еднократно',      free:'Безплатно',    na:'Недостъпно',    per:'/мес' },
    hr:{ m1:'Mjesečno',     m3:'3 mjeseca',  m6:'6 mjeseci',  m10:'10 mjeseci',m12:'Godišnje',    onetime:'Jednokratno',     free:'Besplatno',    na:'Nedostupno',    per:'/mj' },
    sr:{ m1:'Месечно',      m3:'3 месеца',   m6:'6 месеци',   m10:'10 месеци', m12:'Годишње',     onetime:'Једнократно',     free:'Бесплатно',    na:'Недоступно',    per:'/мес' },
    uk:{ m1:'Щомісяця',     m3:'3 місяці',   m6:'6 місяців',  m10:'10 місяців',m12:'Щорічно',     onetime:'Одноразово',      free:'Безкоштовно',  na:'Недоступно',    per:'/міс' },
    lt:{ m1:'Kas mėnesį',   m3:'3 mėnesiai', m6:'6 mėnesiai', m10:'10 mėnesių',m12:'Kasmet',      onetime:'Vienkartinis',    free:'Nemokamai',    na:'Neprieinamas',  per:'/mėn' },
    lv:{ m1:'Katru mēnesi', m3:'3 mēneši',   m6:'6 mēneši',   m10:'10 mēneši', m12:'Katru gadu',  onetime:'Vienreizējs',     free:'Bezmaksas',    na:'Nav pieejams',  per:'/mēn' },
    et:{ m1:'Igakuine',     m3:'3 kuud',     m6:'6 kuud',     m10:'10 kuud',   m12:'Aastane',     onetime:'Ühekordne',       free:'Tasuta',       na:'Pole saadaval', per:'/kuu' },
    el:{ m1:'Μηνιαία',      m3:'3 μήνες',    m6:'6 μήνες',    m10:'10 μήνες',  m12:'Ετήσια',      onetime:'Εφάπαξ',          free:'Δωρεάν',       na:'Μη διαθέσιμο',  per:'/μήνα' },
    he:{ m1:'חודשי',        m3:'3 חודשים',   m6:'6 חודשים',   m10:'10 חודשים', m12:'שנתי',        onetime:'חד פעמי',          free:'חינם',         na:'לא זמין',       per:'/חודש' },
    fa:{ m1:'ماهانه',        m3:'۳ ماهه',     m6:'۶ ماهه',     m10:'۱۰ ماهه',  m12:'سالانه',      onetime:'یک‌بار',           free:'رایگان',       na:'موجود نیست',    per:'/ماه' },
    hi:{ m1:'मासिक',        m3:'3 महीने',    m6:'6 महीने',    m10:'10 महीने',  m12:'वार्षिक',      onetime:'एकमुश्त',          free:'मुफ़्त',        na:'उपलब्ध नहीं',   per:'/माह' },
    bn:{ m1:'মাসিক',        m3:'৩ মাস',      m6:'৬ মাস',      m10:'১০ মাস',   m12:'বার্ষিক',       onetime:'একবার',            free:'বিনামূল্যে',   na:'অনুপলব্ধ',      per:'/মাস' },
    ur:{ m1:'ماہانہ',        m3:'3 ماہ',      m6:'6 ماہ',      m10:'10 ماہ',   m12:'سالانہ',       onetime:'یکمشت',            free:'مفت',          na:'دستیاب نہیں',   per:'/ماہ' },
    id:{ m1:'Bulanan',      m3:'3 bulan',    m6:'6 bulan',    m10:'10 bulan',  m12:'Tahunan',     onetime:'Sekali bayar',    free:'Gratis',       na:'Tidak tersedia',per:'/bln' },
    ms:{ m1:'Bulanan',      m3:'3 bulan',    m6:'6 bulan',    m10:'10 bulan',  m12:'Tahunan',     onetime:'Sekali sahaja',   free:'Percuma',      na:'Tidak tersedia',per:'/bln' },
    th:{ m1:'รายเดือน',     m3:'3 เดือน',   m6:'6 เดือน',   m10:'10 เดือน',  m12:'รายปี',        onetime:'จ่ายครั้งเดียว',  free:'ฟรี',          na:'ไม่พร้อมใช้งาน',per:'/เดือน' },
    vi:{ m1:'Hàng tháng',   m3:'3 tháng',    m6:'6 tháng',    m10:'10 tháng',  m12:'Hàng năm',    onetime:'Một lần',         free:'Miễn phí',     na:'Không có sẵn', per:'/tháng' },
    tl:{ m1:'Buwanan',      m3:'3 buwan',    m6:'6 buwan',    m10:'10 buwan',  m12:'Taunан',      onetime:'Isang beses',     free:'Libre',        na:'Hindi available',per:'/buwan' },
    sw:{ m1:'Kila mwezi',   m3:'Miezi 3',    m6:'Miezi 6',    m10:'Miezi 10',  m12:'Kila mwaka',  onetime:'Mara moja',       free:'Bure',         na:'Haipatikani',   per:'/mwezi' },
    am:{ m1:'ወርሃዊ',        m3:'3 ወራት',     m6:'6 ወራት',     m10:'10 ወራት',   m12:'ዓመታዊ',       onetime:'አንድ ጊዜ',          free:'ነፃ',           na:'አይገኝም',         per:'/ወር' },
    so:{ m1:'Bishiiba',     m3:'3 bilood',   m6:'6 bilood',   m10:'10 bilood', m12:'Sanad kasta', onetime:'Hal mar',         free:'Bilaash',      na:'Lama heli karo',per:'/bil' },
    yo:{ m1:'Oṣoṣo',        m3:'Oṣù 3',      m6:'Oṣù 6',      m10:'Oṣù 10',   m12:'Lọdọọdún',    onetime:'Lẹẹkan',          free:'Ọfẹ',          na:'Ko wa',         per:'/oṣù' },
    ig:{ m1:'Ọnwa',         m3:'Ọnwa 3',     m6:'Ọnwa 6',     m10:'Ọnwa 10',  m12:'Afọ ọbụla',   onetime:'Otu ugboro',      free:'Akwughị ego',  na:'Adịghị',        per:'/ọnwa' },
    ha:{ m1:'Wata-wata',    m3:'Watanni 3',  m6:'Watanni 6',  m10:'Watanni 10',m12:'Kowace shekara',onetime:'Sau ɗaya',      free:'Kyauta',       na:'Babu',          per:'/wata' },
    zu:{ m1:'Inyanga nenyanga',m3:'Izinyanga eziyi-3',m6:'Izinyanga eziyi-6',m10:'Izinyanga eziyi-10',m12:'Minyaka yonke',onetime:'Kanye kuphela',free:'Mahhala',na:'Akutholakali',per:'/nyanga' },
    af:{ m1:'Maandeliks',   m3:'3 maande',   m6:'6 maande',   m10:'10 maande', m12:'Jaarliks',    onetime:'Eenmalig',        free:'Gratis',       na:'Nie beskikbaar',per:'/mnd' },
    sq:{ m1:'Mujore',       m3:'3 muaj',     m6:'6 muaj',     m10:'10 muaj',   m12:'Vjetore',     onetime:'Njëherë',         free:'Falas',        na:'Jo i disponueshëm',per:'/muaj' },
    mk:{ m1:'Месечно',      m3:'3 месеци',   m6:'6 месеци',   m10:'10 месеци', m12:'Годишно',     onetime:'Еднократно',      free:'Бесплатно',    na:'Недостапно',    per:'/мес' },
    sl:{ m1:'Mesečno',      m3:'3 mesece',   m6:'6 mesecev',  m10:'10 mesecev',m12:'Letno',       onetime:'Enkratno',        free:'Brezplačno',   na:'Ni na voljo',   per:'/mes' },
    mn:{ m1:'Сар бүр',      m3:'3 сар',      m6:'6 сар',      m10:'10 сар',    m12:'Жилдээ',      onetime:'Нэг удаа',        free:'Үнэгүй',       na:'Боломжгүй',     per:'/сар' },
    hy:{ m1:'Ամսական',       m3:'3 ամիս',    m6:'6 ամիս',    m10:'10 ամիս',  m12:'Տարեկան',      onetime:'Մեկ անգամ',        free:'Անվճար',       na:'Հասանելի չէ',   per:'/ամիս' },
    ka:{ m1:'ყოველთვიური',  m3:'3 თვე',     m6:'6 თვე',     m10:'10 თვე',   m12:'ყოველწლიური',  onetime:'ერთჯერადი',        free:'უფასო',        na:'მიუწვდომელია',  per:'/თვე' },
    az:{ m1:'Aylıq',        m3:'3 ay',       m6:'6 ay',       m10:'10 ay',     m12:'İllik',       onetime:'Birdəfəlik',      free:'Pulsuz',       na:'Mövcud deyil',  per:'/ay' },
    uz:{ m1:'Oylik',        m3:'3 oy',       m6:'6 oy',       m10:'10 oy',     m12:'Yillik',      onetime:'Bir martalik',    free:'Bepul',        na:'Mavjud emas',   per:'/oy' },
    tk:{ m1:'Aýlyk',        m3:'3 aý',       m6:'6 aý',       m10:'10 aý',     m12:'Ýyllyk',      onetime:'Bir gezek',       free:'Mugt',         na:'Elýeterli däl', per:'/aý' },
    ky:{ m1:'Айлык',        m3:'3 ай',       m6:'6 ай',       m10:'10 ай',     m12:'Жылдык',      onetime:'Бир жолку',       free:'Акысыз',       na:'Жеткиликтүү эмес',per:'/ай' },
    tg:{ m1:'Моҳона',       m3:'3 моҳ',      m6:'6 моҳ',      m10:'10 моҳ',    m12:'Солона',      onetime:'Якдафъа',         free:'Ройгон',       na:'Дастрас нест',  per:'/моҳ' },
    ps:{ m1:'میاشتنی',       m3:'3 میاشتې',  m6:'6 میاشتې',  m10:'10 میاشتې', m12:'کلنی',        onetime:'یو ځل',           free:'وړیا',         na:'موجود نه دی',   per:'/میاشت' },
    ne:{ m1:'मासिक',        m3:'३ महिना',    m6:'६ महिना',    m10:'१० महिना',  m12:'वार्षिक',      onetime:'एकपटक',           free:'नि:शुल्क',     na:'उपलब्ध छैन',    per:'/महिना' },
    si:{ m1:'මාසිකව',       m3:'මාස 3',     m6:'මාස 6',     m10:'මාස 10',   m12:'වාර්ෂිකව',    onetime:'එක් වරක්',         free:'නොමිලේ',       na:'නොලැබේ',        per:'/මාස' },
    my:{ m1:'လစဉ်',         m3:'၃ လ',        m6:'၆ လ',        m10:'၁၀ လ',     m12:'နှစ်စဉ်',      onetime:'တစ်ကြိမ်',        free:'အခမဲ့',        na:'မရနိုင်',        per:'/လ' },
    km:{ m1:'ប្រចាំខែ',    m3:'3 ខែ',      m6:'6 ខែ',      m10:'10 ខែ',    m12:'ប្រចាំឆ្នាំ',  onetime:'ម្តង',              free:'ឥតគិតថ្លៃ',    na:'មិនអាចប្រើ',     per:'/ខែ' },
    lo:{ m1:'ລາຍເດືອນ',     m3:'3 ເດືອນ',   m6:'6 ເດືອນ',   m10:'10 ເດືອນ',  m12:'ລາຍປີ',       onetime:'ຄັ້ງດຽວ',          free:'ຟຣີ',          na:'ບໍ່ມີ',           per:'/ເດືອນ' },
    bo:{ m1:'ཟླ་རེར',       m3:'ཟླ་3',      m6:'ཟླ་6',      m10:'ཟླ་10',    m12:'ལོ་རེར',       onetime:'ལན་གཅིག',          free:'མི་ལག',        na:'མི་འདུག',        per:'/ཟླ' },
    dz:{ m1:'ཟླ་རིམ',       m3:'ཟླ་3',      m6:'ཟླ་6',      m10:'ཟླ་10',    m12:'ལོ་རིམ',       onetime:'ལན་གཅིག་པ',        free:'དངུལ་མེད',     na:'ཐོབ་མི་ཐུབ',    per:'/ཟླ' },
    ug:{ m1:'ئايلىق',        m3:'3 ئاي',     m6:'6 ئاي',     m10:'10 ئاي',   m12:'يىللىق',       onetime:'بىر قېتىم',        free:'ھەقسىز',       na:'يوق',            per:'/ئاي' },
    ml:{ m1:'മാസം',         m3:'3 മാസം',    m6:'6 മാസം',    m10:'10 മാസം',  m12:'വർഷം',         onetime:'ഒറ്റ തവണ',          free:'സൗജന്യം',      na:'ലഭ്യമല്ല',       per:'/മാസം' },
    ta:{ m1:'மாதாந்திர',    m3:'3 மாதங்கள்', m6:'6 மாதங்கள்', m10:'10 மாதங்கள்',m12:'ஆண்டு',     onetime:'ஒரு முறை',         free:'இலவசம்',       na:'கிடைக்கவில்லை', per:'/மாதம்' },
    te:{ m1:'నెలవారీ',       m3:'3 నెలలు',   m6:'6 నెలలు',   m10:'10 నెలలు', m12:'వార్షిక',      onetime:'ఒకసారి',           free:'ఉచితం',        na:'అందుబాటులో లేదు',per:'/నెల' },
    kn:{ m1:'ಮಾಸಿಕ',        m3:'3 ತಿಂಗಳು',  m6:'6 ತಿಂಗಳು',  m10:'10 ತಿಂಗಳು', m12:'ವಾರ್ಷಿಕ',     onetime:'ಒಂದು ಬಾರಿ',       free:'ಉಚಿತ',         na:'ಲಭ್ಯವಿಲ್ಲ',      per:'/ತಿಂಗಳು' },
    mr:{ m1:'मासिक',        m3:'3 महिने',    m6:'6 महिने',    m10:'10 महिने',  m12:'वार्षिक',      onetime:'एकदा',             free:'मोफत',         na:'उपलब्ध नाही',   per:'/महिना' },
    gu:{ m1:'માસિક',        m3:'3 મહિના',    m6:'6 મહિના',    m10:'10 મહિના',  m12:'વાર્ષિક',      onetime:'એક વાર',           free:'મફત',          na:'ઉપલ્બ્ધ નથી',   per:'/મહિનો' },
    pa:{ m1:'ਮਾਸਿਕ',        m3:'3 ਮਹੀਨੇ',    m6:'6 ਮਹੀਨੇ',    m10:'10 ਮਹੀਨੇ',  m12:'ਸਾਲਾਨਾ',      onetime:'ਇੱਕ ਵਾਰ',          free:'ਮੁਫ਼ਤ',        na:'ਉਪਲਬਧ ਨਹੀਂ',    per:'/ਮਹੀਨਾ' },
    or:{ m1:'ମାସିକ',        m3:'3 ମାସ',      m6:'6 ମାସ',      m10:'10 ମାସ',    m12:'ବାର୍ଷିକ',      onetime:'ଥରେ',              free:'ମାଗଣା',        na:'ଉପଲବ୍ଧ ନୁହଁ',   per:'/ମାସ' },
    as:{ m1:'মাহেকীয়া',     m3:'3 মাহ',     m6:'6 মাহ',     m10:'10 মাহ',   m12:'বাৰ্ষিক',      onetime:'এবাৰ',              free:'বিনামূলীয়া',  na:'উপলব্ধ নহয়',   per:'/মাহ' },
    sd:{ m1:'ماهوار',        m3:'3 مهينا',   m6:'6 مهينا',   m10:'10 مهينا', m12:'سالياڻو',      onetime:'هڪ دفعو',           free:'مفت',          na:'دستياب ناهي',   per:'/مهينو' },
    ku:{ m1:'Mehane',       m3:'3 meh',      m6:'6 meh',      m10:'10 meh',    m12:'Salane',      onetime:'Carekî',          free:'Belaş',        na:'Ne heye',       per:'/meh' },
    fy:{ m1:'Moanliks',     m3:'3 moannen',  m6:'6 moannen',  m10:'10 moannen',m12:'Jierlik',     onetime:'Ienmalich',       free:'Fergees',      na:'Net beskikber', per:'/moan' },
    cy:{ m1:'Misol',        m3:'3 mis',      m6:'6 mis',      m10:'10 mis',    m12:'Blynyddol',   onetime:'Unwaith',         free:'Am ddim',      na:'Ddim ar gael',  per:'/mis' },
    ga:{ m1:'Míosúil',      m3:'3 mhí',      m6:'6 mhí',      m10:'10 mí',     m12:'Bliantúil',   onetime:'Uair amháin',     free:'Saor in aisce',na:'Níl ar fáil',   per:'/mí' },
    eu:{ m1:'Hilabetekoa',  m3:'3 hilabete', m6:'6 hilabete', m10:'10 hilabete',m12:'Urtekoa',    onetime:'Behin',           free:'Doan',         na:'Ez dago',       per:'/hil' },
    gl:{ m1:'Mensual',      m3:'3 meses',    m6:'6 meses',    m10:'10 meses',  m12:'Anual',       onetime:'Único',           free:'Gratis',       na:'Non dispoñible',per:'/mes' },
    ca:{ m1:'Mensual',      m3:'3 mesos',    m6:'6 mesos',    m10:'10 mesos',  m12:'Anual',       onetime:'Únic',            free:'Gratuït',      na:'No disponible', per:'/mes' },
    lb:{ m1:'Méindlech',    m3:'3 Méint',    m6:'6 Méint',    m10:'10 Méint',  m12:'Jährlech',    onetime:'Eemol',           free:'Gratis',       na:'Net verfügbar', per:'/Méint' },
    mt:{ m1:'Kull xahar',   m3:'3 xhur',     m6:'6 xhur',     m10:'10 xhur',   m12:'Kull sena',   onetime:'Darba waħda',     free:'B\'xejn',      na:'Mhux disponibbli',per:'/xahar' },
    is:{ m1:'Mánaðarlega',  m3:'3 mánuðir',  m6:'6 mánuðir',  m10:'10 mánuðir',m12:'Árlega',      onetime:'Einu sinni',      free:'Frítt',        na:'Ekki tiltækt',  per:'/mán' },
    mi:{ m1:'Ia marama',    m3:'Marama 3',   m6:'Marama 6',   m10:'Marama 10', m12:'Ia tau',      onetime:'Ko tētahi wā',    free:'Kore utu',     na:'Kāore e taea',  per:'/marama' },
    sm:{ m1:'Masina taitasi',m3:'3 masina',  m6:'6 masina',   m10:'10 masina', m12:'Tausaga taitasi',onetime:'Tasi faasologa',free:'Fua',          na:'E le maua',     per:'/masina' },
    to:{ m1:'Māhina kotoa', m3:'Māhina 3',   m6:'Māhina 6',   m10:'Māhina 10', m12:'Taú kotoa',   onetime:'Taha pē',         free:'Taau',         na:'\'Ikai ma\'u',   per:'/māhina' },
    fj:{ m1:'Veisiga',      m3:'Mataka 3',   m6:'Mataka 6',   m10:'Mataka 10', m12:'Yabaki taucoko',onetime:'Dua na gauna',  free:'Savasava',     na:'Sega ni rawa',  per:'/mataka' }
};

/* ── HELPER: get label map for a language (fallback to EN) ────────────────── */
function lboL(key, lang) {
    var m = LBO_LABELS[lang] || LBO_LABELS.en;
    return m[key] !== undefined ? m[key] : (LBO_LABELS.en[key] || key);
}

/* ── FORMAT PRICE ─────────────────────────────────────────────────────────── */
function lboPriceFmt(usd, lang) {
    if (usd === null || usd === undefined) return null;
    if (typeof formatLocalizedTierPrice === 'function') {
        return formatLocalizedTierPrice(usd, lang, 'symbolOnly');
    }
    return usd === 0 ? '$0' : ('$' + usd);
}

/* ── BUILD OPTION TEXT for <select> ─────────────────────────────────────────*/
function lboOptText(key, usd, lang) {
    var label = lboL(key, lang);
    if (usd === null) return label + ' — ' + lboL('na', lang);
    var p = lboPriceFmt(usd, lang);
    return label + ' — ' + p;
}

/* ── BUILD BASIC ONE-TIME BLOCK ────────────────────────────────────────────── */
function buildBasicBlock(lang) {
    return '<div class="lbo-onetime-wrap">'
        + '<div class="lbo-onetime-label-wrap">'
            + '<span class="lbo-onetime-type">' + lboL('onetime', lang) + '</span>'
            + '<span class="lbo-onetime-sub">' + lboL('free', lang) + '</span>'
        + '</div>'
        + '<span class="lbo-onetime-price-num">$0</span>'
    + '</div>';
}

/* ── BUILD DROPDOWN PRICE SELECTOR ─────────────────────────────────────────── */
function buildDropdown(tier, lang) {
    if (!tier || tier.usdPrice === 0) return buildBasicBlock(lang);

    var id     = tier.id;
    var row    = LBO_PRICES[id] || {};
    var keys   = ['m1','m3','m6','m10','m12'];
    var opts   = '';

    keys.forEach(function(k) {
        var usd   = (row[k] !== undefined) ? row[k] : null;
        var text  = lboOptText(k, usd, lang);
        var dis   = (usd === null) ? ' disabled' : '';
        var sel   = (k === 'm1') ? ' selected' : '';
        opts += '<option value="' + k + '"' + sel + dis + '>' + text + '</option>';
    });

    var startUsd  = (row.m1 !== undefined && row.m1 !== null) ? row.m1 : 0;
    var startFmt  = lboPriceFmt(startUsd, lang);
    var perLabel  = lboL('per', lang);

    return '<div class="lbo-ddrop-wrap has-ddrop" data-tid="' + id + '">'
        + '<select class="lbo-ddrop-select" '
            + 'onchange="lboDropChange(\'' + id + '\',this,\'' + lang + '\')" '
            + 'aria-label="Billing period">'
            + opts
        + '</select>'
        + '<div class="lbo-ddrop-price-box lbo-ddrop-gold" id="lbo-pbox-' + id + '">'
            + '<span class="lbo-ddrop-price-num" id="lbo-pnum-' + id + '">' + startFmt + '</span>'
            + '<span class="lbo-ddrop-mo-tag" id="lbo-ptag-' + id + '">' + perLabel + '</span>'
            + '<span class="lbo-ddrop-period-note" id="lbo-pnote-' + id + '">'
                + lboL('m1', lang)
            + '</span>'
        + '</div>'
    + '</div>';
}

/* ── PERIOD CHANGE HANDLER ──────────────────────────────────────────────────── */
function lboDropChange(tierId, selectEl, lang) {
    var key  = selectEl.value;
    var row  = LBO_PRICES[tierId] || {};
    var usd  = (row[key] !== undefined) ? row[key] : null;

    var pnumEl  = document.getElementById('lbo-pnum-' + tierId);
    var pboxEl  = document.getElementById('lbo-pbox-' + tierId);
    var ptagEl  = document.getElementById('lbo-ptag-' + tierId);
    var pnoteEl = document.getElementById('lbo-pnote-' + tierId);
    if (!pnumEl || !pboxEl) return;

    var isM1 = (key === 'm1');
    var isNA = (usd === null);

    // Price box gold ring on monthly
    pboxEl.classList.toggle('lbo-ddrop-gold', isM1);

    // Animate price out
    pnumEl.style.transition = 'opacity 0.15s, transform 0.15s';
    pnumEl.style.opacity    = '0';
    pnumEl.style.transform  = 'translateY(-10px)';

    setTimeout(function() {
        if (isNA) {
            pnumEl.textContent  = lboL('na', lang);
            pnumEl.classList.add('lbo-ddrop-price-na');
        } else {
            pnumEl.textContent  = lboPriceFmt(usd, lang);
            pnumEl.classList.remove('lbo-ddrop-price-na');
        }

        // Update period note
        if (pnoteEl) {
            pnoteEl.textContent = isM1 ? lboL('m1', lang) : lboL(key, lang);
        }
        // Show /mo tag only on monthly
        if (ptagEl) {
            ptagEl.style.display = isM1 ? '' : 'none';
        }

        // Animate price in
        pnumEl.style.transform = 'translateY(8px)';
        pnumEl.style.opacity   = '0';
        // Force reflow
        void pnumEl.offsetWidth;
        pnumEl.style.transition = 'opacity 0.28s, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)';
        pnumEl.style.opacity    = '1';
        pnumEl.style.transform  = 'translateY(0)';
    }, 160);
}

/* ── PARTICLE SYSTEM ────────────────────────────────────────────────────────── */
function lboSpawnParticles(container) {
    if (!container) return;
    var count = 8;
    for (var i = 0; i < count; i++) {
        (function(idx) {
            var p = document.createElement('div');
            p.className = idx % 3 === 0 ? 'lbo-particle-star' : 'lbo-particle';
            var x = 5 + Math.random() * 90;
            var dur = 4 + Math.random() * 4;
            var delay = Math.random() * 6;
            p.style.cssText = [
                'left:' + x + '%',
                'bottom:0',
                '--dur:' + dur + 's',
                '--delay:' + delay + 's',
                'opacity:' + (0.3 + Math.random() * 0.5)
            ].join(';');
            container.appendChild(p);
        })(i);
    }
}

/* ── RE-RENDER DROPDOWNS WHEN LANGUAGE CHANGES ─────────────────────────────── */
function lboRebuildDropdowns(lang) {
    if (typeof LITALLY_TIERS_DATA === 'undefined') return;
    LITALLY_TIERS_DATA.forEach(function(tier) {
        // Find old dropdown wrapper inside card
        var card = document.getElementById('tierCard-' + tier.id);
        if (!card) return;

        var old = card.querySelector('.lbo-ddrop-wrap, .lbo-onetime-wrap, .lbo-billing-wrap');
        if (!old) return;

        var html = (tier.usdPrice === 0)
            ? buildBasicBlock(lang)
            : buildDropdown(tier, lang);

        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        old.parentNode.replaceChild(tmp.firstChild, old);
    });
}

/* ── INJECT DROPDOWNS ON FIRST LOAD ─────────────────────────────────────────── */
function lboInitDropdowns(lang) {
    if (typeof LITALLY_TIERS_DATA === 'undefined') {
        setTimeout(function() { lboInitDropdowns(lang); }, 300);
        return;
    }

    LITALLY_TIERS_DATA.forEach(function(tier) {
        var card = document.getElementById('tierCard-' + tier.id);
        if (!card) return;

        // Mark card
        card.classList.add('has-ddrop');

        // Remove old billing tabs/price box
        card.querySelectorAll('.lbo-billing-wrap, .tier-price-box').forEach(function(el) {
            el.style.display = 'none';
        });

        // Check if dropdown already exists
        if (card.querySelector('.lbo-ddrop-wrap, .lbo-onetime-wrap')) return;

        // Find divider line and insert before it
        var divider = card.querySelector('.tier-divider-line');
        var html = (tier.usdPrice === 0)
            ? buildBasicBlock(lang)
            : buildDropdown(tier, lang);

        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        var newEl = tmp.firstChild;

        if (divider) {
            card.insertBefore(newEl, divider);
        } else {
            // fallback: insert after header
            var header = card.querySelector('.tier-card-header');
            if (header && header.nextSibling) {
                card.insertBefore(newEl, header.nextSibling);
            } else {
                card.appendChild(newEl);
            }
        }
    });

    // Spawn particles in the scroll container
    var scroller = document.querySelector('.pricing-tiers-scroll-container');
    if (scroller && !scroller.querySelector('.lbo-particle')) {
        lboSpawnParticles(scroller);
    }
}

/* ── HOOK INTO PAGE LIFECYCLE ───────────────────────────────────────────────── */
(function() {
    var _origRender = window.render10PricingTiers;
    if (typeof _origRender === 'function') {
        window.render10PricingTiers = function(containerId, lang) {
            _origRender(containerId, lang);
            var l = lang || (typeof currentLang !== 'undefined' ? currentLang : 'en');
            setTimeout(function() { lboInitDropdowns(l); }, 80);
        };
    }

    var _origSetLang = window.setLanguage;
    if (typeof _origSetLang === 'function') {
        window.setLanguage = function(lang) {
            _origSetLang(lang);
            setTimeout(function() { lboRebuildDropdowns(lang); }, 120);
        };
    }

    // Also hook portals render
    var _origPublic = window.renderPublicPlans;
    if (typeof _origPublic === 'function') {
        window.renderPublicPlans = function(lang) {
            _origPublic(lang);
            var l = lang || (typeof currentLang !== 'undefined' ? currentLang : 'en');
            lboInitDropdowns(l);
        };
    }
})();

/* ── EXPORT for inline use ──────────────────────────────────────────────────── */
window.buildDropdown      = buildDropdown;
window.buildBasicBlock    = buildBasicBlock;
window.lboDropChange      = lboDropChange;
window.lboInitDropdowns   = lboInitDropdowns;
window.lboRebuildDropdowns= lboRebuildDropdowns;
window.lboL               = lboL;
window.lboPriceFmt        = lboPriceFmt;
