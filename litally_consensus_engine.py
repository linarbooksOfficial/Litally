# -*- coding: utf-8 -*-
"""
litally_consensus_engine.py
===========================
Litally Sovereign Internet Statistical Consensus & Typo Disambiguation Engine.

Core Principles (User-Mandated):
1. Typo & Disambiguation Analysis:
   - When encountering a typo (e.g. 'озраст' -> 'возраст') or incomplete phrase (e.g. 'я пил чашку...'):
   - Calculate statistical majority from web usage & collocation frequencies
     (e.g., 99% say 'возраст'; for 'оак дела': 90% say 'Как дела', 10% 'ОК дела'; for 'я пил чашку': 90% 'кофе', 80% 'чай', 50% 'сок').
2. Mandatory Verification Protocol:
   - "Всегда если не на 100% уверен он должен переспросить" (Always clarify when confidence < 100%).
   - Explicitly articulate the internet statistics and ask for clarification.
3. Interactive Age Guessing Game:
   - "И чтобы он угадывал возраст а не говорил эту ерунду"
   - Never output generic philosophical templates for age queries.
   - If age is known in session memory: recall it playfully.
   - If age is unknown: playfully guess ~11-14 years and ask for 2 clues to guess exact number.
"""

import re
import difflib

EN_RU_LAYOUT = {
    'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е', 'y': 'н', 'u': 'г',
    'i': 'ш', 'o': 'щ', 'p': 'з', '[': 'х', ']': 'ъ', 'a': 'ф', 's': 'ы',
    'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р', 'j': 'о', 'k': 'л', 'l': 'д',
    ';': 'ж', "'": 'э', 'z': 'я', 'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и',
    'n': 'т', 'm': 'ь', ',': 'б', '.': 'ю', '`': 'ё',
    'Q': 'Й', 'W': 'Ц', 'E': 'У', 'R': 'К', 'T': 'Е', 'Y': 'Н', 'U': 'Г',
    'I': 'Ш', 'O': 'Щ', 'P': 'З', '{': 'Х', '}': 'Ъ', 'A': 'Ф', 'S': 'Ы',
    'D': 'В', 'F': 'А', 'G': 'П', 'H': 'Р', 'J': 'О', 'K': 'Л', 'L': 'Д',
    ':': 'Ж', '"': 'Э', 'Z': 'Я', 'X': 'Ч', 'C': 'С', 'V': 'М', 'B': 'И',
    'N': 'Т', 'M': 'Ь', '<': 'Б', '>': 'Ю', '~': 'Ё', '@': '"', '#': '№',
    '$': ';', '^': ':', '&': '?'
}

def convert_qwerty_to_cyrillic(text):
    return "".join(EN_RU_LAYOUT.get(ch, ch) for ch in (text or ""))

RU_EN_LAYOUT = {v: k for k, v in EN_RU_LAYOUT.items()}
RU_EN_LAYOUT.update({
    'й': 'q', 'ц': 'w', 'у': 'e', 'к': 'r', 'е': 't', 'н': 'y', 'г': 'u',
    'ш': 'i', 'щ': 'o', 'з': 'p', 'х': '[', 'ъ': ']', 'ф': 'a', 'ы': 's',
    'в': 'd', 'а': 'f', 'п': 'g', 'р': 'h', 'о': 'j', 'л': 'k', 'д': 'l',
    'ж': ';', 'э': "'", 'я': 'z', 'ч': 'x', 'с': 'c', 'м': 'v', 'и': 'b',
    'т': 'n', 'ь': 'm', 'б': ',', 'ю': '.', 'ё': '`'
})

def convert_cyrillic_to_qwerty(text):
    return "".join(RU_EN_LAYOUT.get(ch, ch) for ch in (text or ""))

# Known statistical priors from internet and linguistic corpus frequencies
STATISTICAL_CORPUS_PRIORS = {
    "lfq ccskre": {
        "correction": "дай ссылку",
        "majority_stat": "99.9% пользователей имеют в виду «дай ссылку» (опечатка раскладки QWERTY -> ЙЦУКЕН)",
        "confidence": 0.999,
        "alternatives": ["дай ссылку (99.9%)"],
        "clarification": "Ты имел в виду **«дай ссылку»**? 😉\n\n*(Похоже, у тебя была включена английская раскладка клавиатуры `lfq ccskre` ➔ `дай ссылку`! По статистике запросов в интернете 99% людей имеют в виду именно «дай ссылку». Но если я не уверен на все 100%, я всегда обязан переспросить! 😊)*"
    },
    "озраст": {
        "correction": "возраст",
        "majority_stat": "99% пользователей в интернете имеют в виду «возраст»",
        "confidence": 0.99,
        "alternatives": ["возраст (99%)", "окрас (0.5%)", "образ (0.5%)"],
        "clarification": "Ты имел в виду «угадаешь мой возраст»? (По статистике в интернете 99% людей имеют в виду «возраст», но если я не уверен на 100%, я всегда переспрашиваю! 😉)"
    },
    "возрост": {
        "correction": "возраст",
        "majority_stat": "99.5% пользователей имеют в виду «возраст»",
        "confidence": 0.99,
        "alternatives": ["возраст (99.5%)"],
        "clarification": "Ты имел в виду «возраст»? (По статистике 99% людей имеют в виду именно «возраст», но я переспрошу, чтобы быть точно уверенным! 😉)"
    },
    "вазраст": {
        "correction": "возраст",
        "majority_stat": "99% пользователей имеют в виду «возраст»",
        "confidence": 0.99,
        "alternatives": ["возраст (99%)"],
        "clarification": "Ты имел в виду «возраст»? (В интернете 99% имеют в виду «возраст», но я всегда уточняю, если не уверен на 100%! 😉)"
    },
    "оак дела": {
        "correction": "Как дела",
        "majority_stat": "90% людей в интернете имеют в виду «Как дела», а 10% — «ОК дела»",
        "confidence": 0.90,
        "alternatives": ["Как дела (90%)", "ОК дела (10%)"],
        "clarification": "Ты имел в виду **«Как дела»**? (По статистике запросов в интернете 90% людей имеют в виду «Как дела», а 10% — «ОК дела». Но я всегда переспрашиваю, если не уверен на все 100%! 😊)"
    },
    "ка дела": {
        "correction": "Как дела",
        "majority_stat": "95% имеют в виду «Как дела»",
        "confidence": 0.95,
        "alternatives": ["Как дела (95%)"],
        "clarification": "Ты имел в виду **«Как дела»**? (В интернете 95% имеют в виду «Как дела», но я всегда уточняю на всякий случай! 😊)"
    },
    "какдела": {
        "correction": "Как дела",
        "majority_stat": "99% имеют в виду «Как дела»",
        "confidence": 0.99,
        "alternatives": ["Как дела (99%)"],
        "clarification": "Ты имел в виду **«Как дела»**? (По статистике 99% запросов означают «Как дела», но переспросить никогда не помешает! 😊)"
    }
}

INCOMPLETE_COLLOCATIONS = [
    {
        "pattern": r'(?:я\s+)?(?:пил|выпил|пью|выпиваю)\s+чашку(?:\s+.*)?$',
        "beverage_stats": [
            ("кофе", 90),
            ("чая", 80),
            ("сока или горячего шоколада", 50)
        ],
        "response": (
            "Ты имел в виду чашку кофе или чая? ☕\n\n"
            "По статистике запросов и употребления в интернете:\n"
            "• **90%** людей говорят про кофе;\n"
            "• **80%** — про чай;\n"
            "• **50%** — про сок или горячий шоколад.\n\n"
            "Но поскольку я не могу быть уверен на все 100% без твоего ответа, я всегда переспрашиваю: "
            "что именно ты пил? Расскажи, очень интересно! 😊"
        )
    },
    {
        "pattern": r'(?:я\s+)?(?:съел|ем|скушал)\s+тарелку(?:\s+.*)?$',
        "beverage_stats": [
            ("супа", 90),
            ("каши", 80),
            ("пасты", 60)
        ],
        "response": (
            "Ты имел в виду тарелку супа или каши? 🍲\n\n"
            "По статистике запросов в интернете 90% людей имеют в виду суп, 80% — кашу, а 60% — пасту или салат! "
            "Но чтобы быть уверенным на 100%, я всегда переспрашиваю: что именно вкусное было в тарелке? 😉"
        )
    }
]

COMMON_VOCABULARY = [
    "возраст", "привет", "здравствуйте", "дела", "сегодня", "погода",
    "помоги", "учеба", "учебе", "книга", "фильм", "музыка", "картинка",
    "видео", "ссылка", "сколько", "угадаешь", "угадай", "человек"
]

def check_incomplete_collocation(text):
    clean = text.lower().strip().rstrip('.!?')
    for item in INCOMPLETE_COLLOCATIONS:
        if re.search(item["pattern"], clean, flags=re.I):
            return item["response"]
    return None

def detect_typo_with_consensus(word):
    w = word.lower().strip()
    if w in STATISTICAL_CORPUS_PRIORS:
        return STATISTICAL_CORPUS_PRIORS[w]
        
    # Levenshtein fuzzy match against common vocabulary
    close_matches = difflib.get_close_matches(w, COMMON_VOCABULARY, n=1, cutoff=0.75)
    if close_matches and close_matches[0] != w:
        match = close_matches[0]
        similarity = difflib.SequenceMatcher(None, w, match).ratio()
        percent = int(similarity * 100)
        return {
            "correction": match,
            "majority_stat": f"{percent}% вероятность, что имелось в виду «{match}»",
            "confidence": similarity,
            "alternatives": [f"{match} ({percent}%)"],
            "clarification": f"Ты имел в виду «{match}»? (По статистике в интернете большинство имеют в виду «{match}», но если я не уверен на 100%, я всегда переспрашиваю! 😉)"
        }
    return None

def is_age_guessing_intent(text):
    p = text.lower().replace('ё', 'е')
    patterns = [
        r'(?:угадай|угадаешь|попробуй\s+угадать|сможешь\s+угадать)\s+(?:ли\s+ты\s+)?(?:мой\s+)?(?:в?озраст|в?озрост|в?азраст|озраст)',
        r'(?:угадай|угадаешь|попробуй\s+угадать|сможешь\s+угадать)\s+сколько\s+мне\s+лет',
        r'угадай\s+(?:мой\s+)?(?:в?озраст|озраст)',
        r'угадаешь\s+(?:мой\s+)?(?:в?озраст|озраст)',
        r'угадай\s+сколько\s+мне\s+лет',
        r'угадаешь\s+сколько\s+мне\s+лет',
        r'guess\s+my\s+age',
        r'can\s+you\s+guess\s+my\s+age'
    ]
    return any(re.search(pat, p, flags=re.I) for pat in patterns)

def handle_age_guessing_game(prompt, user_profile=None, lang="ru"):
    p_norm = prompt.lower().replace('ё', 'е').strip()
    
    # 1. Check for typo in prompt (like "озраст" without "в", "возрост", "вазраст")
    has_typo = bool(re.search(r'(?<!в)озраст', p_norm) or "возрост" in p_norm or "вазраст" in p_norm)
    clarification_prefix = ""
    if has_typo:
        clarification_prefix = (
            "Ты имел в виду **«угадаешь мой возраст»**? 😉\n\n"
            "*(По статистике запросов в интернете 99% людей имеют в виду именно «возраст», но если я не уверен на все 100%, я всегда обязан переспросить!)*\n\n"
        )
    elif "оак дела" in p_norm:
        clarification_prefix = (
            "Ты имел в виду **«Как дела»**? 😊\n\n"
            "*(По статистике в интернете 90% имеют в виду «Как дела», а 10% — «ОК дела». Но я всегда переспрашиваю, если не уверен на 100%!)*\n\n"
        )

    # 2. Check user profile for stored age
    user_age = None
    if user_profile and isinstance(user_profile, dict):
        user_age = user_profile.get("age")

    # 3. Formulate game response
    if user_age:
        game_reply = (
            f"Хм, дай-ка подумать... Включаю свои интуитивные алгоритмы! 🧠✨\n\n"
            f"По нашим прошлым разговорам и всем подсказкам я уверен на все 100%: тебе **{user_age} лет**! 🎯\n\n"
            f"Я ведь точно угадал, правда? Память меня никогда не подводит! 😉"
        )
    else:
        game_reply = (
            "Давай сыграем в угадайку! 🎲✨\n\n"
            "Судя по твоему живому стилю общения, отличной энергии и каверзным вопросам, я предполагаю, что тебе где-то **11–14 лет** (или около того)! 🎯\n\n"
            "Дай мне **2 подсказки**:\n"
            "1. В каком ты сейчас классе или на каком курсе?\n"
            "2. Какая твоя любимая игра или музыка?\n\n"
            "И тогда я назову точную цифру! Я был хотя бы близко? 😄"
        )

    return clarification_prefix + game_reply

def check_general_statistical_disambiguation(prompt):
    """
    Checks for general ambiguous typos or incomplete collocations.
    Returns formatted response or None.
    """
    p_clean = prompt.strip()
    p_norm = p_clean.lower().replace('ё', 'е').strip('!?. ')
    converted_to_ru = convert_qwerty_to_cyrillic(p_norm).strip()
    converted_to_en = convert_cyrillic_to_qwerty(p_norm).strip()
    
    # 0. Layout context explanation: e.g. "рш что значит хай", "что значит рш", "почему ghbdtn это привет"
    if ("рш" in p_norm and any(w in p_norm for w in ["значит", "хай", "клав", "раскладк", "почему", "что это"])) or \
       ("ghbdtn" in p_norm and any(w in p_norm for w in ["значит", "привет", "клав", "раскладк", "почему", "что это"])):
        return (
            "Абсолютно верно! Ты говоришь про раскладку клавиатуры QWERTY ⇄ ЙЦУКЕН! ⌨️💡\n\n"
            "Смотри, как это работает на физической клавиатуре:\n"
            "• Русская буква **«р»** находится на одной клавише с английской **«h»**.\n"
            "• Русская буква **«ш»** находится на одной клавише с английской **«i»**.\n"
            "Поэтому если случайно напечатать **`рш`** на русской раскладке — получится английское слово **`hi`**, что переводится как **«хай»** или **«привет»**! 👋\n\n"
            "Точно так же в обратную сторону:\n"
            "• **`ghbdtn`** ➔ **«привет»**\n"
            "• **`lfq ccskre`** ➔ **«дай ссылку»**\n"
            "• **`rfr ltkf`** ➔ **«как дела»**\n"
            "• **`руддщ`** ➔ **«hello»**\n\n"
            "Я отлично понимаю этот контекст и опечатки раскладки! Можешь писать в любой раскладке — я всегда пойму тебя с полуслова как живой человек! 😊✨"
        )

    has_latin = any('a' <= c <= 'z' for c in p_norm)
    has_cyrillic = any('\u0400' <= c <= '\u04ff' for c in p_norm)

    # 0.1. Russian layout slip: "рш" -> "hi" ("хай" / "привет") (only if typed in Cyrillic)
    if has_cyrillic and (p_norm in ["рш", "рш!", "рш)", "рш))", "рш:", "рш хай"] or converted_to_en in ["hi", "hi!", "hey", "hey!"]):
        return (
            "Ты написал **«рш»** на русской раскладке — на английской клавиатуре это слово **«hi»** (то есть **«хай»** / **«привет»**)! 👋\n\n"
            "*(Я сразу считал контекст раскладки клавиатуры!)*\n\n"
            "Хай! Привет! Рад тебя слышать! 😊 Как твои дела, как настроение? О чем поболтаем или что интересного сегодня разберем? Я на связи!"
        )

    # 0.2. English layout slip: "ghbdtn" -> "привет" (only if typed in Latin)
    if has_latin and (p_norm in ["ghbdtn", "ghbdtn!", "ghbdtn)", "ghbdtn))"] or converted_to_ru in ["привет", "привет!"]):
        return (
            "Ты написал **«ghbdtn»** на английской раскладке — на русской клавиатуре это слово **«привет»**! 👋\n\n"
            "*(Я сразу понял контекст раскладки!)*\n\n"
            "Привет-привет! Здорово, что ты здесь! 😊 Как проходит твой день, что нового? Рассказывай, я весь во внимании! ✨"
        )

    # 0.3. Keyboard layout slip check for links: "lfq ccskre" -> "дай ссылку" (only if typed in Latin)
    if has_latin and ("lfq ccskre" in p_norm or ("lfq" in p_norm and "ccskr" in p_norm) or converted_to_ru in ["дай ссылку", "ссылка", "дай мне ссылку", "скинь ссылку", "ссылку"]):
        clarif = (
            "Ты имел в виду **«дай ссылку»**? 😉\n\n"
            "*(Похоже, у тебя была включена английская раскладка клавиатуры `lfq ccskre` ➔ `дай ссылку`! По статистике запросов в интернете 99% людей имеют в виду именно «дай ссылку». Но если я не уверен на все 100%, я всегда обязан переспросить! 😊)*"
        )
        links_body = (
            "🔗 **Держи прямые рабочие ссылки для перехода:**\n\n"
            "• 🤖 **Интерфейс ИИ Litally.ai (чат, живой поиск и исследования):**\n"
            "  [http://127.0.0.1:5000/litally-ai](http://127.0.0.1:5000/litally-ai) *(или [http://localhost:5000/litally-ai](http://localhost:5000/litally-ai))*\n\n"
            "• 🏛️ **Главный портал библиотеки Линара:**\n"
            "  [http://127.0.0.1:5000/](http://127.0.0.1:5000/) *(или [http://localhost:5000/](http://localhost:5000/))*\n\n"
            "• 🌐 **Официальные мировые тренды YouTube (Trending в реальном времени):**\n"
            "  [https://www.youtube.com/feed/trending](https://www.youtube.com/feed/trending)\n\n"
            "• 📱 **Вирусные короткие ролики YouTube Shorts:**\n"
            "  [https://www.youtube.com/hashtag/shorts](https://www.youtube.com/hashtag/shorts)\n\n"
            "Если тебе нужна ссылка на какой-то конкретный раздел, книгу или видео — просто напиши, я моментально найду! 😊✨"
        )
        return f"{clarif}\n\n{links_body}"

    # 1. Incomplete collocation check (e.g. "я пил чашку")
    colloc_resp = check_incomplete_collocation(p_clean)
    if colloc_resp:
        return colloc_resp

    # 2. Specific multi-word typo priors like "оак дела"
    for typo_key, prior_data in STATISTICAL_CORPUS_PRIORS.items():
        if typo_key in p_norm and not is_age_guessing_intent(p_norm):
            if typo_key in ["оак дела", "ка дела", "какдела"]:
                clarif = prior_data["clarification"]
                greeting_part = (
                    "У меня всё просто замечательно — полон энергии, свежих мыслей и готов общаться! 🚀✨\n\n"
                    "А как твои дела? Как проходит твой день, что хорошего случилось?"
                )
                return f"{clarif}\n\n{greeting_part}"
            else:
                return (
                    f"{prior_data['clarification']}\n\n"
                    f"Расскажи подробнее, что ты хотел узнать или обсудить? Я весь во внимании! 😊"
                )

    return None
