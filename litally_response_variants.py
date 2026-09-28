# -*- coding: utf-8 -*-
"""
Litally Response Variants Engine (v2.0)
Generates 5000+ unique natural responses per word using combinatorial semantics.
Combinatorics: 20 openings x 15 topic_refs x 20 frames x 15 closings x 10 emoji x 5 structures = 900000+ combos
"""
import random, hashlib

OPENINGS = {
    "ru": ["Окей,","Слушаю!","Понял тебя —","Хорошо,","Ага,","Ясно,","Интересно!","Хм,","О,","Ладно,","Конечно,","Без проблем —","Давай разберёмся:","Слышу тебя —","Принято,","Ну давай,","Отлично,","Смотри,","Так,","Хорошо же,"],
    "en": ["Okay,","Got it —","Sure!","Alright,","Hmm,","Interesting!","Oh,","Cool,","Right,","Let's see —","No worries —","Of course!","Sounds good —","I hear you —","Let's dive in:","Sure thing,","Nice,","So,","Well,","Absolutely,"],
    "kk": ["Жарайды,","Түсіндім —","Ал,","Иә,","Қызықты!","О,","Жақсы,","Дұрыс,","Мүмкін,","Әрине,","Болады —","Сен айттың:","Естідім —","Мақұл,","Жарайды ма,"],
    "de": ["Okay,","Verstanden —","Gut,","Alright,","Hmm,","Interessant!","Oh,","Na,","Klar,","Schau mal —","Natürlich,","Kein Problem —","Prima,","Toll,","Also,"],
    "fr": ["D'accord,","Je vois —","Bien sûr!","Alors,","Hmm,","Intéressant!","Oh,","Sympa,","Voilà,","Voyons voir —","Pas de souci —","Évidemment,","Parfait,","Super,","Bon,"],
    "es": ["Okay,","Entendido —","¡Claro!","Bien,","Hmm,","¡Interesante!","Oh,","Genial,","Vamos —","Veamos —","Sin problema —","Por supuesto,","Perfecto,","¡Genial!","Bueno,"],
    "zh": ["好的,","明白了 —","当然!","嗯,","哦,","有意思!","啊,","好,","对,","让我看看 —","没问题 —","当然可以,","太好了,","好呀,","行,"],
    "ar": ["حسنًا,","فهمت —","بالطبع!","جيد,","هممم,","مثير للاهتمام!","أوه,","رائع,","تمام —","لنرى —","لا مشكلة —","بكل سرور,","ممتاز,","عظيم,","طيب,"],
    "tr": ["Tamam,","Anladım —","Tabii ki!","İyi,","Hmm,","İlginç!","Oh,","Harika,","Gelin —","Bakalım —","Sorun yok —","Elbette,","Mükemmel,","Süper,","Peki,"],
    "ja": ["わかった,","なるほど —","もちろん!","よし,","うーん,","おもしろい!","あ,","いいね,","ね,","見てみよう —","大丈夫 —","もちろんだよ,","すごい,","よかった,","そうか,"],
    "ko": ["알겠어,","이해했어 —","물론!","좋아,","흠,","흥미롭네!","오,","좋은데,","자,","한번 볼게 —","괜찮아 —","당연하지,","완벽해,","좋아요,","그렇구나,"],
    "pt": ["Ok,","Entendi —","Claro!","Bom,","Hmm,","Interessante!","Oh,","Legal,","Vamos —","Vejamos —","Sem problema —","Claro que sim,","Perfeito,","Ótimo,","Certo,"],
    "it": ["Ok,","Capito —","Certo!","Bene,","Hmm,","Interessante!","Oh,","Bello,","Dai —","Vediamo —","Nessun problema —","Naturalmente,","Perfetto,","Ottimo,","Va bene,"],
    "pl": ["Okej,","Rozumiem —","Jasne!","Dobrze,","Hmm,","Ciekawe!","O,","Spoko,","No to —","Zobaczymy —","Bez problemu —","Oczywiście,","Świetnie,","Super,","Dobra,"],
    "uk": ["Окей,","Зрозумів —","Звісно!","Добре,","Гм,","Цікаво!","О,","Класно,","Ну, —","Дивімось —","Без проблем —","Звичайно,","Чудово,","Супер,","Гаразд,"],
    "nl": ["Oké,","Begrepen —","Zeker!","Goed,","Hmm,","Interessant!","Oh,","Mooi,","Kom —","Laten we kijken —","Geen probleem —","Uiteraard,","Perfect,","Super,","Goed dan,"],
    "sv": ["Ok,","Förstår —","Självklart!","Bra,","Hmm,","Intressant!","Oh,","Coolt,","Nu —","Låt oss se —","Inga problem —","Naturligtvis,","Perfekt,","Super,","Okej,"],
    "no": ["Ok,","Forstår —","Selvfølgelig!","Bra,","Hmm,","Interessant!","Oh,","Kult,","Nå —","La oss se —","Ingen problem —","Naturligvis,","Perfekt,","Super,","Greit,"],
    "fi": ["Ok,","Ymmärsin —","Tietysti!","Hyvä,","Hmm,","Mielenkiintoista!","Oh,","Siisti,","No niin —","Katsotaan —","Ei ongelmaa —","Tottakai,","Täydellinen,","Super,","Selvä,"],
    "da": ["Ok,","Forstår —","Selvfølgelig!","Godt,","Hmm,","Interessant!","Oh,","Fedt,","Kom —","Lad os se —","Intet problem —","Naturligvis,","Perfekt,","Super,","Fint,"],
    "cs": ["Ok,","Rozumím —","Jasně!","Dobře,","Hmm,","Zajímavé!","Oh,","Super,","No tak —","Uvidíme —","Žádný problém —","Samozřejmě,","Perfektní,","Skvělé,","Dobré,"],
    "hu": ["Ok,","Értem —","Persze!","Jó,","Hmm,","Érdekes!","Oh,","Klassz,","Na —","Nézzük —","Semmi gond —","Természetesen,","Tökéletes,","Szuper,","Jól van,"],
    "ro": ["Ok,","Înțeleg —","Desigur!","Bun,","Hmm,","Interesant!","Oh,","Mișto,","Hai —","Să vedem —","Nicio problemă —","Bineînțeles,","Perfect,","Super,","Bine,"],
    "bg": ["Ок,","Разбирам —","Разбира се!","Добре,","Хм,","Интересно!","О,","Яко,","Хайде —","Да видим —","Без проблем —","Естествено,","Перфектно,","Супер,","Добре тогава,"],
    "hr": ["Ok,","Razumijem —","Naravno!","Dobro,","Hmm,","Zanimljivo!","Oh,","Super,","Ajde —","Vidimo —","Nema problema —","Naravno da,","Savršeno,","Super,","Dobro onda,"],
    "sr": ["Ок,","Разумем —","Наравно!","Добро,","Хм,","Занимљиво!","О,","Кул,","Хајде —","Видимо —","Без проблема —","Наравно да,","Савршено,","Супер,","Добро онда,"],
    "sk": ["Ok,","Rozumiem —","Jasne!","Dobre,","Hmm,","Zaujímavé!","Oh,","Super,","No tak —","Uvidíme —","Žiadny problém —","Samozrejme,","Perfektné,","Skvelé,","Dobre,"],
    "el": ["Εντάξει,","Καταλαβαίνω —","Φυσικά!","Καλά,","Χμμ,","Ενδιαφέρον!","Ω,","Ωραία,","Πάμε —","Ας δούμε —","Κανένα πρόβλημα —","Φυσικά,","Τέλεια,","Σούπερ,","Καλό,"],
    "he": ["אוקיי,","הבנתי —","כמובן!","טוב,","המממ,","מעניין!","אוה,","כיף,","בוא —","נראה —","אין בעיה —","כמובן שכן,","מושלם,","סופר,","בסדר,"],
    "fa": ["باشه,","فهمیدم —","البته!","خوبه,","هممم,","جالبه!","اوه,","عالیه,","بیا —","بذار ببینیم —","مشکلی نیست —","البته که آره,","عالی,","سوپر,","خیله خب,"],
    "hi": ["ठीक है,","समझ गया —","बिल्कुल!","अच्छा,","हम्म,","दिलचस्प!","ओह,","बढ़िया,","चलो —","देखते हैं —","कोई बात नहीं —","बेशक,","परफेक्ट,","सुपर,","ठीक है तो,"],
    "bn": ["ঠিক আছে,","বুঝলাম —","অবশ্যই!","ভালো,","হুম,","আকর্ষণীয়!","ওহ,","দারুণ,","চলো —","দেখি —","কোনো সমস্যা নেই —","অবশ্যই,","নিখুঁত,","সুপার,","ভালো তাহলে,"],
    "ur": ["ٹھیک ہے,","سمجھ گیا —","بالکل!","اچھا,","ہمم,","دلچسپ!","اوہ,","شاندار,","چلو —","دیکھتے ہیں —","کوئی مسئلہ نہیں —","بالکل ہاں,","کامل,","سوپر,","ٹھیک ہے پھر,"],
    "sw": ["Sawa,","Nimeelewa —","Bila shaka!","Vizuri,","Hmm,","Inavutia!","Oh,","Poa,","Twende —","Tuone —","Hakuna tatizo —","Bila shaka ndiyo,","Kamili,","Safi,","Sawa basi,"],
    "th": ["โอเค,","เข้าใจแล้ว —","แน่นอน!","ดีเลย,","อืม,","น่าสนใจ!","โอ้,","เจ๋ง,","ไปเลย —","มาดูกัน —","ไม่มีปัญหา —","แน่นอนอยู่แล้ว,","สมบูรณ์แบบ,","ซูเปอร์,","ดีแล้ว,"],
    "vi": ["Được rồi,","Hiểu rồi —","Tất nhiên!","Tốt,","Hmm,","Thú vị!","Ồ,","Tuyệt,","Nào —","Hãy xem —","Không vấn đề gì —","Tất nhiên rồi,","Hoàn hảo,","Tuyệt vời,","Tốt thôi,"],
    "id": ["Oke,","Mengerti —","Tentu!","Baik,","Hmm,","Menarik!","Oh,","Keren,","Ayo —","Mari kita lihat —","Tidak ada masalah —","Tentu saja,","Sempurna,","Super,","Baik kalau begitu,"],
    "ms": ["Ok,","Faham —","Tentu!","Baik,","Hmm,","Menarik!","Oh,","Bagus,","Jom —","Mari kita tengok —","Tiada masalah —","Sudah tentu,","Sempurna,","Super,","Baik lah,"],
    "tl": ["Sige,","Naintindihan —","Siyempre!","Mabuti,","Hmm,","Kawili-wili!","Oh,","Astig,","Tara —","Tingnan natin —","Walang problema —","Syempre naman,","Perpekto,","Super,","Sige na,"],
    "az": ["Tamam,","Başa düşdüm —","Əlbəttə!","Yaxşı,","Hmm,","Maraqlı!","Oh,","Əla,","Hadi —","Görək —","Problem yoxdur —","Əlbəttə ki,","Mükəmməl,","Super,","Yaxşı onda,"],
    "uz": ["Ok,","Tushundim —","Albatta!","Yaxshi,","Hmm,","Qiziq!","Oh,","Super,","Keling —","Ko'ramiz —","Muammo yo'q —","Albatta ha,","Mukammal,","Super,","Yaxshi unda,"],
    "mn": ["За,","Ойлголоо —","Мэдээж!","Сайн,","Хмм,","Сонирхолтой!","Оо,","Супер,","Яв —","Харцгааж —","Асуудал байхгүй —","Мэдээж тийм,","Төгс,","Супер,","За тэгдэг,"],
    "ka": ["კარგი,","გავიგე —","რა თქმა უნდა!","კარგი,","ჰმ,","საინტერესოა!","ო,","სუპერი,","მოდი —","ვნახოთ —","პრობლემა არ არის —","რა თქმა უნდა,","სრულყოფილი,","სუპერი,","კარგი მაშ,"],
    "hy": ["Լավ,","Հասկացա —","Անշուշտ!","Հիանալի,","Հմ,","Հետաքրքիր!","Օ,","Սուպեր,","Արի —","Կտեսնենք —","Խնդիր չկա —","Իհարկե,","Կատարյալ,","Սուպեր,","Լավ ուրեմն,"],
    "default": ["Okay,","Got it —","Sure!","Alright,","Hmm,","Interesting!","Oh,","Right,","Let's go —","I see —"],
}

TOPIC_REFS = {
    "ru": ["«{word}»","тема «{word}»","слово «{word}»","«{word}» — интересная штука,","про «{word}»","когда говоришь «{word}»","насчёт «{word}»","что касается «{word}»,","по теме «{word}»","с «{word}»","насчёт этого «{word}»","в контексте «{word}»","по поводу «{word}»","«{word}» — слышу тебя,","твоя мысль про «{word}»"],
    "en": ['"{word}"','the topic "{word}"','the word "{word}"','"{word}" is interesting,','about "{word}"','when you say "{word}"','regarding "{word}"','as for "{word}",','on the topic of "{word}"','with "{word}"','about this "{word}"','in the context of "{word}"','concerning "{word}"','"{word}" — got you,','your thought on "{word}"'],
    "default": ["{word}", "about {word}", "regarding {word}", "{word} — interesting,", "on {word}"],
}

QUESTION_FRAMES = {
    "ru": {
        "unknown": ["что именно тебя интересует?","расскажи подробнее — о чём идёт речь?","уточни мысль — я готов разобраться!","что конкретно хочешь узнать?","раскрой чуть подробнее — разберём вместе!","какой аспект тебя интересует?","с чего начнём разбор?","что именно ты имеешь в виду — хочу понять правильно!","задай направление — двинемся туда!","напиши ещё пару слов — тогда смогу помочь точнее!","о чём конкретно думаешь?","давай углубимся — что именно хочешь понять?","уточни — чтобы ответить максимально точно!","какой результат хочешь получить?","добавь деталей — и сразу помогу!","что тебя конкретно зацепило в этом?","чего ожидаешь от ответа?","продолжи мысль — слушаю!","какой контекст за этим?","уточни цель — тогда дам точный ответ!"],
        "greeting": ["как дела? Чем могу помочь?","рад тебя видеть! О чём поговорим?","как ты? Что интересного?","что нового? Я готов болтать!","привет! Чем займёмся?","всё хорошо у тебя? Задавай вопросы!","как настроение? Поможем с чем угодно!","рад слышать! Что тебя интересует?","привет-привет! Чем могу быть полезен?","хей! Говори, слушаю!"],
        "tech": ["какой язык программирования или технология?","что конкретно нужно сделать?","покажи код или ошибку — разберём!","что именно не работает?","опиши задачу точнее — помогу с кодом!","уточни стек — и сразу решим!","какая ошибка выходит?","на каком этапе застрял?","что ожидается vs что получается?","какой фреймворк или библиотека?"],
        "study": ["это учёба? Какой предмет?","по какому заданию нужна помощь?","расскажи задачу — решим вместе!","предмет / класс / тема?","что именно задали?","какой уровень сложности?","нужно объяснение или решение?","что непонятно в задаче?","с какого момента теряешься?","какие данные уже есть?"],
        "question": ["отличный вопрос! Давай разберём по шагам?","хочешь детальный ответ или краткий?","уточни — что именно непонятно?","сейчас разберём — что конкретно нужно?","давай раскроем тему полностью!","отвечу — добавь контекст!","сформулируй полнее — отвечу чётко!","вопрос принят — уточни детали!"],
        "casual": ["что имеешь в виду? Звучит интересно!","расскажи побольше — я весь во внимании!","это про что? Хочу понять!","поясни мысль — поддержу разговор!","звучит загадочно — что за тема?","уточни немного — поговорим!","и что за этим стоит?","хочешь поговорить об этом подробнее?","расскажи контекст!","как это связано с твоей ситуацией?"],
        "creative": ["расскажи об идее подробнее!","это творческий проект? Давай развернём!","звучит креативно — что именно создаёшь?","помогу с идеей — опиши задумку!"],
    },
    "en": {
        "unknown": ["what exactly are you interested in?","tell me more — what's on your mind?","elaborate a bit — let's figure it out!","what specifically do you want to know?","open it up a bit more — we'll work through it together!","which aspect interests you?","where should we start?","what exactly do you mean — I want to understand correctly!","set the direction — let's go there!","write a couple more words — then I can help more precisely!","what exactly are you thinking?","let's go deeper — what do you want to understand?","clarify — so I can answer as accurately as possible!","what result do you want?","add some details — and I'll help right away!","what specifically caught your attention?","what do you expect from the answer?","continue the thought — I'm listening!","what's the context behind this?","clarify the goal — then I'll give you a precise answer!"],
        "greeting": ["how are you? What can I help with?","great to see you! What shall we talk about?","how's it going? What's new?","what's up? Ready to chat!","hey! What are we doing today?","all good? Ask away!","how's your mood? I can help with anything!","great to hear from you! What are you curious about?","hey hey! How can I help?","yo! Talk to me!"],
        "tech": ["which programming language or technology?","what specifically needs to be done?","show me the code or error — let's debug!","what exactly isn't working?","describe the task more precisely — I'll help with code!","specify the stack — and we'll solve it!","what error appears?","where exactly are you stuck?","what's expected vs what's happening?","which framework or library?"],
        "study": ["is this for school? Which subject?","which assignment do you need help with?","tell me the task — we'll solve it together!","subject / grade / topic?","what exactly was assigned?","what level of difficulty?","do you need an explanation or a solution?","what's unclear in the task?","at what point do you get lost?","what data do you already have?"],
        "casual": ["what do you mean? Sounds interesting!","tell me more — I'm all ears!","what's that about? I want to understand!","clarify your thought — I'll join the conversation!","sounds mysterious — what's the topic?","tell me a little more — let's talk!","what's behind that?","want to talk about this in more detail?","tell me the context!","how does this relate to your situation?"],
        "question": ["great question! Shall we break it down step by step?","do you want a detailed answer or a brief one?","clarify — what exactly is unclear?","let's look at it now — what specifically do you need?","let's unpack the topic completely!","I'll answer — add some context!","formulate it more fully — I'll answer precisely!","question received — clarify the details!"],
        "creative": ["tell me more about the idea!","is this a creative project? Let's develop it!","sounds creative — what exactly are you creating?","I'll help with the idea — describe your concept!"],
    },
}
QUESTION_FRAMES["kk"] = QUESTION_FRAMES["ru"]
QUESTION_FRAMES["uk"] = QUESTION_FRAMES["ru"]
QUESTION_FRAMES["de"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["fr"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["es"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["pt"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["it"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["pl"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["nl"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["sv"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["no"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["fi"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["da"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["cs"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["hu"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["ro"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["bg"] = QUESTION_FRAMES["ru"]
QUESTION_FRAMES["hr"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["sr"] = QUESTION_FRAMES["ru"]
QUESTION_FRAMES["sk"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["el"] = QUESTION_FRAMES["en"]
QUESTION_FRAMES["default"] = QUESTION_FRAMES["en"]

CLOSINGS = {
    "ru": ["Я готов помочь!","Разберём вместе 🤝","Задавай вопросы!","Буду рядом 👌","Помогу с удовольствием!","Давай!","Слушаю тебя 🙌","Всегда здесь!","Двинемся вперёд 🚀","Начнём?","Давай разберёмся!","На связи!","Не стесняйся спрашивать!","Я твой помощник!","Вместе справимся 💪"],
    "en": ["I'm ready to help!","Let's figure it out together 🤝","Ask away!","I'm here for you 👌","Happy to help!","Let's go!","I'm listening 🙌","Always here!","Let's move forward 🚀","Shall we start?","Let's work through it!","Stay tuned!","Don't hesitate to ask!","I'm your assistant!","We'll handle it together 💪"],
    "kk": ["Көмектесуге дайынмын!","Бірге шешеміз 🤝","Сұрақтар қой!","Қасыңдамын 👌","Ықыласпен көмектесемін!","Жүр!","Тыңдап тұрмын 🙌","Мен мұндамын!","Алға жылжимыз 🚀","Бастаймыз ба?","Шешіп шығамыз!"],
    "default": ["Ready to help!","Let's go!","I'm here!","Ask away!","Together we'll figure it out 🤝"],
}
for lang in ["de","fr","es","pt","it","pl","uk","nl","sv","no","fi","da","cs","hu","ro","bg","hr","sr","sk","el"]:
    CLOSINGS[lang] = CLOSINGS["en"]

EMOJI_SETS = {
    "unknown": ["🔍","🤔","💭","🧐","🎯","💡","🌟","✨","🔎","📌"],
    "greeting": ["👋","😊","🙌","🤗","😄","✌️","🌟","⭐","💫","🎉"],
    "question": ["❓","💡","🧠","🔍","📚","🎯","⚡","🌟","💭","🤓"],
    "tech": ["💻","⚙️","🛠️","🔧","🐛","🚀","🔬","⚡","🖥️","💡"],
    "study": ["📚","✏️","🎓","📝","🧮","📖","🏫","🎯","💡","⭐"],
    "casual": ["😊","💬","🙌","✨","🌟","😄","👍","🎉","💫","🤙"],
    "creative": ["🎨","✨","💡","🌟","🎭","🎬","🎵","🖼️","✍️","🚀"],
    "emotion": ["❤️","🤗","💙","🌟","✨","💫","🙏","💚","🌈","⭐"],
}

_GREETING_WORDS = {
    "ru": {"привет","хей","здарова","хай","хело","салют","приветик","йо","ку","здрасте","добрый","hi","hello"},
    "en": {"hi","hey","hello","yo","sup","hiya","heya","greetings","howdy"},
    "kk": {"салем","сәлем","сәлеметсіз","қайырлы"},
    "de": {"hallo","hi","hey","moin","servus"},
    "fr": {"salut","bonjour","bonsoir","coucou"},
    "es": {"hola","buenas","ola","saludos"},
    "tr": {"merhaba","selam","hey","naber"},
    "ar": {"مرحبا","أهلا","سلام"},
    "zh": {"你好","嗨","喂","哈喽"},
    "ja": {"こんにちは","やあ","ねえ"},
    "ko": {"안녕","안녕하세요","헤이"},
    "pt": {"olá","oi","salve"},
    "it": {"ciao","salve","buongiorno"},
    "uk": {"привіт","хай","вітаю","добрий"},
    "pl": {"cześć","hej","siema"},
    "nl": {"hallo","hoi","hey","dag"},
    "sv": {"hej","tjena","hallå"},
    "no": {"hei","heisann","hallo"},
    "fi": {"hei","moi","terve"},
    "da": {"hej","davs","hallo"},
    "hi": {"नमस्ते","हेलो","हाय","नमस्कार"},
    "th": {"สวัสดี","หวัดดี"},
    "vi": {"xin chào","chào"},
    "id": {"halo","hai"},
    "ms": {"helo","hai"},
    "sw": {"habari","jambo","hujambo"},
    "he": {"שלום","היי"},
    "ar_sa": {"مرحباً","أهلاً"},
    "default": {"hello","hi","hey"},
}
_TECH_WORDS = {
    "ru": {"код","баг","ошибка","функция","цикл","массив","класс","питон","джаваскрипт","реакт","алгоритм","гит","sql","апи","сервер","бэкенд","фронтенд","база","данных"},
    "en": {"code","bug","error","function","loop","array","class","python","javascript","react","algorithm","git","sql","api","server","backend","frontend","database","css","html","typescript","vue","angular","docker"},
}
_STUDY_WORDS = {
    "ru": {"урок","задание","задача","контрольная","экзамен","зачёт","лекция","формула","теорема","математика","физика","химия","биология","история","литература"},
    "en": {"homework","assignment","task","exam","test","formula","theorem","math","physics","chemistry","biology","history","literature"},
}
_QUESTION_WORDS = {
    "ru": {"как","почему","зачем","когда","где","кто","что","сколько","объясни","расскажи","помоги","можно","нельзя"},
    "en": {"how","why","what","when","where","who","which","explain","help","tell","show","can","could","should"},
}

def detect_semantic_category(word, lang="ru"):
    w = word.lower().strip()
    g = _GREETING_WORDS.get(lang, set()) | _GREETING_WORDS.get("en", set())
    t = _TECH_WORDS.get(lang, set()) | _TECH_WORDS.get("en", set())
    s = _STUDY_WORDS.get(lang, set()) | _STUDY_WORDS.get("en", set())
    q = _QUESTION_WORDS.get(lang, set()) | _QUESTION_WORDS.get("en", set())
    for p in w.split():
        if p in g: return "greeting"
        if p in q: return "question"
        if p in t: return "tech"
        if p in s: return "study"
    if w in g: return "greeting"
    if w in t: return "tech"
    if w in s: return "study"
    if w in q: return "question"
    if len(w) <= 3: return "casual"
    return "unknown"

def generate_variant(word, lang="ru", semantic_category=None, seed=None):
    if seed is None:
        seed = int(hashlib.md5((word + lang + str(random.random())).encode()).hexdigest()[:8], 16)
    rng = random.Random(seed)
    if not semantic_category:
        semantic_category = detect_semantic_category(word, lang)
    openings = OPENINGS.get(lang, OPENINGS["default"])
    topic_refs_pool = TOPIC_REFS.get(lang, TOPIC_REFS["default"])
    closings = CLOSINGS.get(lang, CLOSINGS["default"])
    emoji_pool = EMOJI_SETS.get(semantic_category, EMOJI_SETS["unknown"])
    lang_frames = QUESTION_FRAMES.get(lang, QUESTION_FRAMES["default"])
    frames = lang_frames.get(semantic_category, lang_frames.get("unknown", ["расскажи подробнее!"])) if isinstance(lang_frames, dict) else lang_frames
    opening = rng.choice(openings)
    topic_ref = rng.choice(topic_refs_pool).replace("{word}", word)
    frame = rng.choice(frames)
    closing = rng.choice(closings)
    emoji = rng.choice(emoji_pool)
    st = rng.randint(0, 4)
    if st == 0: return f"{opening} {topic_ref} — {frame} {closing} {emoji}"
    elif st == 1: return f"{opening} {frame}\n\n{closing} {emoji}"
    elif st == 2: return f"{emoji} {opening} {topic_ref}! {frame}"
    elif st == 3: return f"{opening} {topic_ref}!\n\n{frame} {closing}"
    else: return f"{opening} {frame} {topic_ref} — {closing} {emoji}"

def get_natural_response(word, lang="ru", semantic_category=None):
    if not semantic_category:
        semantic_category = detect_semantic_category(word, lang)
    return generate_variant(word, lang, semantic_category)
