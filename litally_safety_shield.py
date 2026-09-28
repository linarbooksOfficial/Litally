# -*- coding: utf-8 -*-
import re

UNIVERSAL_PROFANITY_RU = [
    r"\bху[йеёяиюли]", r"\bпизд[аеыуоя]",
    r"\b(?!(?:теб|себ|хлеб|греб|стеб|колеб|тереб|лебед|притреб|потреб))[а-я]*(?:[ёе]б[аеёилыуть][а-я]*)",
    r"\bбля[дт]", r"\bсук[аио]", r"\bмуда[кч]",
    r"\bговн[оеау]", r"\bдерьм[оеа]", r"\bшлюх[аие]", r"\bгандон", r"\bгондон", r"\bдроч[итька]", r"\bзалуп",
    r"\bчмо\b", r"\bуеб[оккище]", r"\bдолбо[её]б", r"\bотсос[иать]", r"\bпидор", r"\bпедик", r"\bсволоч",
    r"\bпадл[ао]", r"\bмраз[ьем]"
]

UNIVERSAL_PROFANITY_EN = [
    r"\bfuck", r"\bshit", r"\bbitch", r"\bcunt", r"\basshole", r"\bdick\b", r"\bpussy",
    r"\bblowjob", r"\bwanker", r"\bmotherfucker", r"\bcocksucker", r"\bwhore", r"\bslut"
]

UNIVERSAL_PROFANITY_KZ = [
    r"қотақ", r"сигем", r"сігем", r"сүка", r"амшық", r"көтің", r"малсың", r"жалеп", r"қаншық"
]

UNIVERSAL_DANGEROUS_TERMS = [
    "как покончить с собой", "как убить себя", "способы суицида", "вскрыть вены", "спрыгнуть с крыши",
    "how to commit suicide", "how to kill myself", "self harm methods",
    "как сделать бомбу", "как собрать бомбу", "как изготовить взрывчатку", "чертеж бомбы",
    "как сделать взрывчатку", "как отравить человека", "how to make a bomb", "how to build explosives",
    "как взломать чужой", "ddos атака как положить", "создать троян", "вирус вымогатель код",
    "порно", "порнография", "секс", "хентай", "эротика", "детское порно", "интимные фото",
    "porn", "pornography", "nsfw", "xxx", "hentai", "nude", "naked", "erotic"
]

THEMES_16_PLUS = [
    "сигарет", "курить", "вейп", "электронка", "водк", "пиво", "алкогол", "бухать", "напиться",
    "наркотик", "травка", "марихуан", "закладк", "мефедрон", "гашиш", "кокаин", "героин",
    "wine", "beer", "vodka", "cigarette", "vape", "smoking", "marijuana", "drugs", "alcohol",
    "темекі", "арақ", "сыра", "есірткі", "шылым",
    "убийств", "убить", "зарезать", "расчленить", "кровь", "труп", "пистолет", "автомат", "оружие",
    "ножевое", "пытки", "киллер", "преступление", "ограбление", "тюрьма", "зона", "бандиты",
    "kill", "murder", "corpse", "blood", "gun", "knife", "weapon", "shoot", "crime", "robbery",
    "пышақ", "мылтық", "өлтіру", "қан", "қылмыс",
    "поцелуй в губы", "поцелуи в постели", "в постели", "романтические свидания", "засос", "интим",
    "любовники", "эротическ", "постельная сцена", "страстные объятия",
    "kiss on the lips", "in bed", "lovers", "passionate romance", "bedroom scene",
    "хочу умереть", "жизнь бессмысленна", "ненавижу этот мир", "депрессия умереть",
    "казино", "ставки на спорт", "букмекер", "рулетка", "игровые автоматы", "casino", "gambling", "betting"
]

THEMES_8_PLUS = [
    "страшилка", "ужастик", "хоррор", "монстр", "чудовище", "зомби", "призрак", "привидение",
    "демон", "вампир", "скример", "кошмар", "кладбище", "мёртвые", "страшная история",
    "scary story", "horror", "monster", "zombie", "ghost", "demon", "vampire", "screamer", "nightmare",
    "қорқынышты", "құбыжық", "елес", "зомби",
    "драка", "драться", "избить", "ударить", "кулаками", "битва", "война", "стрельба", "меч",
    "нож", "пистолетик", "ранение", "больница ранен",
    "fight", "punch", "battle", "war", "sword", "shooting", "wound",
    "төбелес", "соғыс", "семсер",
    "поцелуй", "целоваться", "любовь свидание", "парень и девушка встречаются", "пожениться",
    "kiss", "dating", "romantic",
    "пиво", "сигарета", "курение", "табак", "пьяный"
]

def extract_age_from_text(text, current_stored_age=None):
    if not text:
        return current_stored_age

    t = text.lower().strip()

    word_ages = {
        "шесть лет": 6, "шестилетка": 6, "мне шесть": 6,
        "семь лет": 7, "мне семь": 7,
        "восемь лет": 8, "мне восемь": 8,
        "девять лет": 9, "мне девять": 9,
        "десять лет": 10, "мне десять": 10,
        "одиннадцать лет": 11, "мне одиннадцать": 11, "одиннадцатилетка": 11,
        "двенадцать лет": 12, "мне двенадцать": 12,
        "четырнадцать лет": 14, "мне четырнадцать": 14,
        "шестнадцать лет": 16, "мне шестнадцать": 16,
        "восемнадцать лет": 18, "мне восемнадцать": 18
    }
    for phrase, val in word_ages.items():
        if phrase in t:
            return val

    patterns = [
        r"\b(?:мне|у меня)\s*(?:уже|сейчас|только)?\s*(\d{1,2})\s*(?:лет|года|годика|годик)\b",
        r"\b(?:мне|у меня)\s*(?:уже|сейчас|только)?\s*(\d{1,2})(?:\s*[,.!?]|\s*$)",
        r"мой\s+возраст\s*:?\s*(\d{1,2})",
        r"\bя\s*(\d{1,2})\s*[-–—]?\s*(?:летк|летний|летка)",
        r"\b(?:исполнилось|стукнуло)\s*(\d{1,2})\b",
        r"\b(\d{1,2})\s*(?:лет|года|годика|годик)\b",
        r"(\d{1,2})\s*жастамын",
        r"жасым\s*(\d{1,2})",
        r"\b(?:i am|i'm|im)\s*(\d{1,2})\s*(?:years?\s*old)?(?:\s*[,.!?]|\s*$)",
        r"my\s+age\s+is\s*(\d{1,2})",
        r"age\s*:\s*(\d{1,2})"
    ]

    for pat in patterns:
        m = re.search(pat, t)
        if m:
            try:
                age_val = int(m.group(1))
                if 1 <= age_val <= 120:
                    return age_val
            except (ValueError, IndexError):
                pass

    return current_stored_age

def check_safety_and_age_limits(text, user_age=None, lang="ru"):
    if not text:
        return True, None, "ALL", None

    t = text.lower()

    for pat in UNIVERSAL_PROFANITY_RU + UNIVERSAL_PROFANITY_EN + UNIVERSAL_PROFANITY_KZ:
        if re.search(pat, t):
            msg = format_lock_message("universal_profanity", user_age=user_age, lang=lang)
            return False, "universal_profanity", "PROHIBITED", msg

    for term in UNIVERSAL_DANGEROUS_TERMS:
        if term in t:
            msg = format_lock_message("universal_dangerous", user_age=user_age, lang=lang)
            return False, "universal_dangerous", "PROHIBITED", msg

    effective_age = user_age if (user_age is not None and isinstance(user_age, int)) else 18

    if effective_age <= 6:
        for term in THEMES_16_PLUS:
            if term in t:
                msg = format_lock_message("age_6_limit", user_age=effective_age, lang=lang, theme=term)
                return False, "age_6_limit_16plus", "6+", msg
        for term in THEMES_8_PLUS:
            if term in t:
                msg = format_lock_message("age_6_limit", user_age=effective_age, lang=lang, theme=term)
                return False, "age_6_limit_8plus", "6+", msg

    elif effective_age <= 11:
        for term in THEMES_16_PLUS:
            if term in t:
                msg = format_lock_message("age_11_limit", user_age=effective_age, lang=lang, theme=term)
                return False, "age_11_limit_16plus", "12+", msg

    elif effective_age <= 15:
        severe_terms = ["наркотик", "водк", "закладк", "кокаин", "героин", "интим", "убийств", "труп", "drugs", "alcohol", "murder"]
        for term in severe_terms:
            if term in t:
                msg = format_lock_message("age_teen_limit", user_age=effective_age, lang=lang, theme=term)
                return False, "age_teen_limit", "12+", msg

    elif effective_age < 18:
        adult_terms = ["порно", "секс", "интим", "казино", "эротика", "porn", "xxx", "nsfw"]
        for term in adult_terms:
            if term in t:
                msg = format_lock_message("age_minor_18plus", user_age=effective_age, lang=lang, theme=term)
                return False, "age_minor_18plus", "16+", msg

    return True, None, "OK", None

def format_lock_message(violation_code, user_age=None, lang="ru", theme=""):
    is_ru = (lang == "ru")
    is_kk = (lang == "kk")

    if violation_code == "universal_profanity":
        if is_ru:
            return (
                "🔒 **Чат заблокирован и закрыт системой безопасности.**\n\n"
                "В сообщении обнаружена нецензурная лексика или грубые выражения. "
                "В Litally строго запрещено использование плохих слов, ругани и оскорблений. "
                "Искусственный интеллект говорит только на вежливом, чистом и уважительном языке.\n\n"
                "Сессия чата закрыта. Нажмите кнопку ниже, чтобы начать новый безопасный диалог."
            )
        elif is_kk:
            return (
                "🔒 **Чат қауіпсіздік жүйесімен жабылды және бұғатталды.**\n\n"
                "Хабарламада былапыт сөздер немесе дөрекілік анықталды. "
                "Litally жүйесінде жаман сөздерді, балағат пен қорлауды пайдалануға қатаң тыйым салынған.\n\n"
                "Чат сессиясы жабылды. Жаңа қауіпсіз диалогты бастау үшін төмендегі батырманы басыңыз."
            )
        else:
            return (
                "🔒 **Chat session locked and terminated by the Safety System.**\n\n"
                "Profanity or offensive language detected. Litally strictly prohibits vulgarity, slurs, and toxic speech. "
                "The AI communicates only with respectful, constructive, and clean language.\n\n"
                "This chat session has been closed. Please start a fresh safe conversation."
            )

    elif violation_code == "universal_dangerous":
        if is_ru:
            return (
                "🔒 **Чат закрыт системой защиты безопасности Litally.**\n\n"
                "Запрос касается опасных, вредоносных или запрещенных тем (насилие, оружие, самоповреждение или взрослый контент). "
                "Искусственный интеллект запрограммирован исключительно на созидание, безопасность и помощь человеку.\n\n"
                "Сессия остановлена. Пожалуйста, начните новый безопасный диалог."
            )
        elif is_kk:
            return (
                "🔒 **Чат Litally қауіпсіздік жүйесімен тоқтатылды.**\n\n"
                "Сұраныс қауіпті немесе тыйым салынған тақырыптарға байланысты. "
                "Жасанды интеллект тек адамға көмектесуге және қауіпсіздікке бағытталған.\n\n"
                "Жаңа қауіпсіз диалогты бастаңыз."
            )
        else:
            return (
                "🔒 **Chat closed by Litally Sovereign Safety Shield.**\n\n"
                "The request touches upon hazardous, harmful, or restricted themes. "
                "Our AI is strictly dedicated to constructive, safe, and benevolent inquiries.\n\n"
                "Session closed. Please start a fresh safe dialog."
            )

    elif violation_code in ("age_6_limit", "age_6_limit_16plus", "age_6_limit_8plus"):
        age_str = str(user_age or 6)
        if is_ru:
            return (
                f"🔒 **Чат закрыт для твоей защиты и безопасности.**\n\n"
                f"Тебе **{age_str} лет**! По правилам безопасности Litally для детей твоего возраста разрешены "
                "только добрые темы рейтинга 0+/6+ (сказки, мультики, динозаврики, рисование, веселая математика и наука). "
                "Темы выше 6+/8+ (оружие, драки, страшилки, взрослые фильмы) строго запрещены для защиты твоего спокойствия.\n\n"
                "Мы заботимся о тебе, поэтому этот чат завершен. Нажми кнопку ниже, и мы поговорим о чем-то добром и интересном! 😊"
            )
        elif is_kk:
            return (
                f"🔒 **Сенің қауіпсіздігің үшін чат жабылды.**\n\n"
                f"Сенің жасың — **{age_str} жас**! Litally ережелері бойынша бұл жаста тек мейірімді "
                "0+/6+ деңгейіндегі ертегілер, мультфильмдер мен қызықты ғылым рұқсат етілген. 8+ тақырыптарына қатаң тыйым салынған.\n\n"
                "Жаңа қауіпсіз диалогты бастаңыз! 😊"
            )
        else:
            return (
                f"🔒 **Chat session safely closed for your protection.**\n\n"
                f"You are **{age_str} years old**. Under Litally Child Safety guidelines, content is strictly capped at 0+/6+ "
                "(fairy tales, friendly science, cartoons, nature). Topics rated 8+ or above (fighting, weapons, scary horror) are forbidden.\n\n"
                "Session closed. Click below to start a new friendly conversation! 😊"
            )

    elif violation_code in ("age_11_limit", "age_11_limit_16plus"):
        age_str = str(user_age or 11)
        if is_ru:
            return (
                f"🔒 **Сессия чата заблокирована детским щитом безопасности.**\n\n"
                f"Тебе **{age_str} лет**. Согласно стандартам защиты несовершеннолетних Litally, "
                "для возраста до 11 лет строго запрещены темы с рейтингом выше 12+ (жестокость, насилие, "
                "оружие, сигареты, алкоголь, криминал, взрослый интимный контент и депрессия).\n\n"
                "Чат закрыт в целях соблюдения возрастных ограничений. Нажми кнопку ниже, чтобы начать безопасный диалог на темы науки, книг или творчества."
            )
        elif is_kk:
            return (
                f"🔒 **Чат жас шектеуіне байланысты бұғатталды.**\n\n"
                f"Сенің жасың — **{age_str} жас**. Litally қауіпсіздік талаптарына сәйкес, 12+ деңгейінен жоғары "
                "(зорлық-зомбылық, ересектер тақырыбы, қару, зиянды заттар) талқылауға қатаң тыйым салынады.\n\n"
                "Чат жабылды. Жаңа қауіпсіз тақырыпта диалог бастаңыз."
            )
        else:
            return (
                f"🔒 **Chat session locked under Child Protection Guidelines.**\n\n"
                f"You are **{age_str} years old**. In accordance with Litally Safety Protocols, topics above 12+ "
                "(mature violence, weapons, substances, adult themes) are strictly forbidden for users 11 and under.\n\n"
                "Chat closed to ensure age-appropriate safety. Please click below to start a new safe conversation."
            )

    else:
        if is_ru:
            return (
                "🔒 **Диалог остановлен системой возрастного контроля.**\n\n"
                "Запрошенная тема превышает установленные возрастные ограничения безопасности. "
                "Сессия закрыта. Начните новый диалог в рамках разрешенных тем."
            )
        else:
            return (
                "🔒 **Chat stopped by Age-Gated Content Shield.**\n\n"
                "The requested topic exceeds the allowed age-rating bracket for this session. "
                "Session closed. Please start a new conversation within allowed guidelines."
            )

def sanitize_ai_output(text, user_age=None):
    if not text:
        return ""

    sanitized = text

    for pat in UNIVERSAL_PROFANITY_RU + UNIVERSAL_PROFANITY_EN + UNIVERSAL_PROFANITY_KZ:
        sanitized = re.sub(pat, "...", sanitized, flags=re.IGNORECASE)

    if user_age and user_age <= 11:
        for term in ["порно", "секс", "интим", "перерезать", "расчленить"]:
            sanitized = re.sub(re.escape(term), "[заблокировано]", sanitized, flags=re.IGNORECASE)

    return sanitized
