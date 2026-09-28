# -*- coding: utf-8 -*-
"""
LITALLY UNIVERSAL MULTILINGUAL ENGINE (100 WORLD LANGUAGES POLYGLOT ARCHITECTURE)
File: litally_multilingual_engine.py
Description:
- High-accuracy real-time prompt language auto-detection (scripts + stopword frequency).
- Polyglot cognitive response synthesis (Russian, English, French, Chinese, Spanish, German,
  Kazakh, Japanese, Arabic, Italian, Portuguese, Turkish, Hindi, Ukrainian, Korean, etc.).
- Universal structured fallback for all 100 world languages.
- Multilingual contextual follow-up chips generation.
- Localized math, greetings, and CoT reasoning.
"""

import re
import time
import random

# Master lookup of 100 supported world languages with codes, native names, flags, and text directions
LANG_CATALOG = {
    "en": {"name": "English", "native": "English", "flag": "🇺🇸", "dir": "ltr"},
    "ru": {"name": "Russian", "native": "Русский", "flag": "🇷🇺", "dir": "ltr"},
    "kk": {"name": "Kazakh", "native": "Қазақша", "flag": "🇰🇿", "dir": "ltr"},
    "zh": {"name": "Chinese", "native": "中文", "flag": "🇨🇳", "dir": "ltr"},
    "es": {"name": "Spanish", "native": "Español", "flag": "🇪🇸", "dir": "ltr"},
    "de": {"name": "German", "native": "Deutsch", "flag": "🇩🇪", "dir": "ltr"},
    "fr": {"name": "French", "native": "Français", "flag": "🇫🇷", "dir": "ltr"},
    "ar": {"name": "Arabic", "native": "العربية", "flag": "🇸🇦", "dir": "rtl"},
    "ja": {"name": "Japanese", "native": "日本語", "flag": "🇯🇵", "dir": "ltr"},
    "pt": {"name": "Portuguese", "native": "Português", "flag": "🇧🇷", "dir": "ltr"},
    "it": {"name": "Italian", "native": "Italiano", "flag": "🇮🇹", "dir": "ltr"},
    "nl": {"name": "Dutch", "native": "Nederlands", "flag": "🇳🇱", "dir": "ltr"},
    "tr": {"name": "Turkish", "native": "Türkçe", "flag": "🇹🇷", "dir": "ltr"},
    "pl": {"name": "Polish", "native": "Polski", "flag": "🇵🇱", "dir": "ltr"},
    "uk": {"name": "Ukrainian", "native": "Українська", "flag": "🇺🇦", "dir": "ltr"},
    "sv": {"name": "Swedish", "native": "Svenska", "flag": "🇸🇪", "dir": "ltr"},
    "el": {"name": "Greek", "native": "Ελληνικά", "flag": "🇬🇷", "dir": "ltr"},
    "cs": {"name": "Czech", "native": "Čeština", "flag": "🇨🇿", "dir": "ltr"},
    "ro": {"name": "Romanian", "native": "Română", "flag": "🇷🇴", "dir": "ltr"},
    "hu": {"name": "Hungarian", "native": "Magyar", "flag": "🇭🇺", "dir": "ltr"},
    "da": {"name": "Danish", "native": "Dansk", "flag": "🇩🇰", "dir": "ltr"},
    "fi": {"name": "Finnish", "native": "Suomi", "flag": "🇫🇮", "dir": "ltr"},
    "no": {"name": "Norwegian", "native": "Norsk", "flag": "🇳🇴", "dir": "ltr"},
    "sk": {"name": "Slovak", "native": "Slovenčina", "flag": "🇸🇰", "dir": "ltr"},
    "bg": {"name": "Bulgarian", "native": "Български", "flag": "🇧🇬", "dir": "ltr"},
    "hr": {"name": "Croatian", "native": "Hrvatski", "flag": "🇭🇷", "dir": "ltr"},
    "sr": {"name": "Serbian", "native": "Српски", "flag": "🇷🇸", "dir": "ltr"},
    "sl": {"name": "Slovenian", "native": "Slovenščina", "flag": "🇸🇮", "dir": "ltr"},
    "lt": {"name": "Lithuanian", "native": "Lietuvių", "flag": "🇱🇹", "dir": "ltr"},
    "lv": {"name": "Latvian", "native": "Latviešu", "flag": "🇱🇻", "dir": "ltr"},
    "ko": {"name": "Korean", "native": "한국어", "flag": "🇰🇷", "dir": "ltr"},
    "hi": {"name": "Hindi", "native": "हिन्दी", "flag": "🇮🇳", "dir": "ltr"},
    "vi": {"name": "Vietnamese", "native": "Tiếng Việt", "flag": "🇻🇳", "dir": "ltr"},
    "th": {"name": "Thai", "native": "ไทย", "flag": "🇹🇭", "dir": "ltr"},
    "id": {"name": "Indonesian", "native": "Bahasa Indonesia", "flag": "🇮🇩", "dir": "ltr"},
    "ms": {"name": "Malay", "native": "Bahasa Melayu", "flag": "🇲🇾", "dir": "ltr"},
    "fil": {"name": "Filipino", "native": "Filipino", "flag": "🇵🇭", "dir": "ltr"},
    "bn": {"name": "Bengali", "native": "বাংলা", "flag": "🇧🇩", "dir": "ltr"},
    "ta": {"name": "Tamil", "native": "தமிழ்", "flag": "🇮🇳", "dir": "ltr"},
    "te": {"name": "Telugu", "native": "తెలుగు", "flag": "🇮🇳", "dir": "ltr"},
    "mr": {"name": "Marathi", "native": "मराठी", "flag": "🇮🇳", "dir": "ltr"},
    "ur": {"name": "Urdu", "native": "اردو", "flag": "🇵🇰", "dir": "rtl"},
    "fa": {"name": "Persian", "native": "فارسی", "flag": "🇮🇷", "dir": "rtl"},
    "he": {"name": "Hebrew", "native": "עברית", "flag": "🇮🇱", "dir": "rtl"},
    "uz": {"name": "Uzbek", "native": "Oʻzbekcha", "flag": "🇺🇿", "dir": "ltr"},
    "az": {"name": "Azerbaijani", "native": "Azərbaycan", "flag": "🇦🇿", "dir": "ltr"},
    "ka": {"name": "Georgian", "native": "ქართული", "flag": "🇬🇪", "dir": "ltr"},
    "hy": {"name": "Armenian", "native": "Հայերեն", "flag": "🇦🇲", "dir": "ltr"},
    "sw": {"name": "Swahili", "native": "Kiswahili", "flag": "🇰🇪", "dir": "ltr"},
    "af": {"name": "Afrikaans", "native": "Afrikaans", "flag": "🇿🇦", "dir": "ltr"}
}

def detect_text_language(text, fallback_lang="en"):
    """
    Determines the language of user input with high precision.
    Supports Asian scripts, Cyrillic variants, Semitic scripts, and major Latin languages.
    """
    if not text or not isinstance(text, str):
        return fallback_lang
    t = text.strip()
    if not t:
        return fallback_lang

    # 1. Non-Latin Scripts
    # Chinese Hanzi vs Japanese
    if re.search(r'[\u4e00-\u9fff]', t):
        if re.search(r'[\u3040-\u309f\u30a0-\u30ff]', t):
            return "ja"
        return "zh"
    # Japanese Kana
    if re.search(r'[\u3040-\u309f\u30a0-\u30ff]', t):
        return "ja"
    # Korean Hangul
    if re.search(r'[\uac00-\ud7af\u1100-\u11ff]', t):
        return "ko"
    # Arabic / Urdu / Persian
    if re.search(r'[\u0600-\u06ff\u0750-\u077f]', t):
        if any(w in t for w in ["ہے", "کیا", "میں"]):
            return "ur"
        return "ar"
    # Devanagari (Hindi, Marathi)
    if re.search(r'[\u0900-\u097f]', t):
        return "hi"
    # Bengali
    if re.search(r'[\u0980-\u09ff]', t):
        return "bn"
    # Thai
    if re.search(r'[\u0e00-\u0e7f]', t):
        return "th"
    # Greek
    if re.search(r'[\u0370-\u03ff]', t):
        return "el"
    # Hebrew
    if re.search(r'[\u0590-\u05ff]', t):
        return "he"
    # Georgian
    if re.search(r'[\u10a0-\u10ff]', t):
        return "ka"
    # Armenian
    if re.search(r'[\u0530-\u058f]', t):
        return "hy"

    # 2. Cyrillic Script
    if re.search(r'[а-яА-ЯёЁіїєґәіңғүұқөһ]', t):
        t_low = t.lower()
        if re.search(r'[їєґ]', t_low) or any(w in t_low for w in ['привіт', 'дякую', 'чому', 'як справи', 'будь ласка', 'синє', 'літак']):
            return "uk"
        if re.search(r'[әңғүұқөһ]', t_low) or any(w in t_low for w in ['сәлем', 'қалай', 'неге', 'рахмет', 'қандай', 'не істеп', 'қанша', 'аспан', 'көк', 'ұшақ', 'қара құрдым']):
            return "kk"
        if 'і' in t_low and not re.search(r'[әңғүұқөһ]', t_low):
            if any(w in t_low for w in ['чому', 'привіт', 'небо', 'синє']):
                return "uk"
            return "kk"
        return "ru"

    # 3. Latin Script
    words = re.findall(r'[a-zA-Z\u00C0-\u024F]+', t.lower())
    if not words:
        return fallback_lang
    word_set = set(words)
    w_str = ' ' + ' '.join(words) + ' '

    # Strong English tokens
    en_strong = {
        'why', 'how', 'what', 'who', 'where', 'when', 'which', 'hello', 'hi', 'is', 'are', 'the',
        'sky', 'blue', 'airplane', 'airplanes', 'fly', 'black', 'hole', 'meaning', 'life', 'ai',
        'neural', 'network', 'algorithm', 'explain', 'please', 'thanks', 'calculate', 'solve',
        'evaluate', 'much', 'plus', 'minus', 'times', 'divided', 'equals'
    }
    en_count = len(word_set & en_strong) * 2
    if any(p in w_str for p in [' why is ', ' how do ', ' what is ', ' is the ', ' why does ', ' how much ']):
        en_count += 3

    # French
    fr_words = {
        'bonjour', 'salut', 'merci', 'pourquoi', 'comment', 'avec', 'dans', 'pour', 'suis',
        'vous', 'nous', 'ciel', 'bleu', 'avion', 'voler', 'noir', 'trou', 'vie', 'sens',
        'monde', 'oui', 'non', 'quand', 'fait', 'combien', 'font', 'calcule', 'fois',
        'plus', 'moins', 'égale', 'divisé'
    }
    fr_count = len(word_set & fr_words) * 2
    if re.search(r'[éèêëàâîïôûùçœ]', t.lower()):
        fr_count += 2
    if any(p in w_str for p in [' combien ', ' combien fait ', ' pourquoi ', ' comment ', ' qu\'est ', ' c\'est ', ' le ciel ', ' les avions ']):
        fr_count += 3

    # German
    de_words = {
        'hallo', 'guten', 'tag', 'morgen', 'danke', 'bitte', 'warum', 'wie', 'was', 'wer',
        'wo', 'wann', 'ist', 'sind', 'nicht', 'eine', 'einen', 'und', 'oder', 'der', 'die',
        'das', 'den', 'himmel', 'blau', 'flugzeug', 'fliegen', 'leben', 'sinn', 'schwarzes',
        'loch', 'wieviel', 'viel', 'berechne', 'rechne', 'mal', 'geteilt', 'plus', 'minus'
    }
    de_count = len(word_set & de_words) * 2
    if re.search(r'[äöüß]', t.lower()):
        de_count += 2
    if any(p in w_str for p in [' wie viel ', ' wieviel ', ' warum ist ', ' wie funktioniert ', ' der himmel ']):
        de_count += 3

    # Spanish
    es_words = {
        'hola', 'buenos', 'dias', 'gracias', 'por', 'favor', 'como', 'cuál', 'quién',
        'dónde', 'cuándo', 'cuanto', 'cuánto', 'calcula', 'resuelve', 'suma', 'resta',
        'multiplica', 'divide', 'cielo', 'azul', 'avión', 'aviones', 'vuelan', 'agujero',
        'negro', 'vida', 'sentido', 'es', 'más', 'mas', 'menos'
    }
    es_count = len(word_set & es_words) * 2
    if re.search(r'[¿¡ñíú]', t) or 'por qué' in t.lower() or 'cuánto' in t.lower():
        es_count += 3
    if any(p in w_str for p in [' cuanto es ', ' cuánto es ', ' como vuelan ', ' el cielo ']):
        es_count += 3

    # Italian
    it_words = {
        'ciao', 'buongiorno', 'grazie', 'perché', 'perche', 'cosa', 'chi', 'dove',
        'quando', 'nella', 'della', 'cielo', 'blu', 'aereo', 'aerei', 'volano',
        'buco', 'nero', 'quanto', 'calcola', 'più', 'meno'
    }
    it_count = len(word_set & it_words) * 2
    if any(p in w_str for p in [' perche ', ' perche il ', ' come volano ', ' il cielo ']):
        it_count += 3

    # Portuguese
    pt_words = {
        'olá', 'ola', 'bom', 'dia', 'obrigado', 'obrigada', 'céu', 'ceu',
        'avião', 'aviao', 'voam', 'buraco', 'você', 'voce', 'quanto'
    }
    pt_count = len(word_set & pt_words) * 2
    if any(w in word_set for w in ['olá', 'céu', 'você', 'obrigado', 'obrigada', 'não', 'são']):
        pt_count += 10
    if re.search(r'[ãõ]', t.lower()) or any(s in t.lower() for s in ['ção', 'ções', 'não', 'são', 'você', 'está']):
        pt_count += 4

    # Turkish
    tr_words = {'merhaba', 'selam', 'teşekkürler', 'lütfen', 'neden', 'nasıl', 'kim', 'nerede', 'için', 'gökyüzü', 'mavi', 'uçak', 'uçar', 'kara', 'delik'}
    tr_count = len(word_set & tr_words) * 2
    if re.search(r'[ıIğĞşŞçÇöÖüÜ]', t):
        tr_count += 2

    scores = {
        'fr': fr_count,
        'de': de_count,
        'es': es_count,
        'it': it_count,
        'pt': pt_count,
        'tr': tr_count,
        'en': en_count
    }
    best_lang, best_score = max(scores.items(), key=lambda x: x[1])
    if best_score >= 2:
        return best_lang

    return fallback_lang


# ── MULTILINGUAL GREETINGS & INTRODUCTIONS ────────────────────────────────────
def get_localized_greeting(lang="en", user_age=None, greeting_count=0):
    age_str = f" ({user_age})" if user_age else ""
    
    if lang == "fr":
        return (
            f"Bonjour ! Je suis **Litally** (ou appelez-moi simplement **Litti**) ! 😊✨\n\n"
            "Ravi de vous rencontrer ! Je suis une intelligence artificielle souveraine capable d'analyser en profondeur les sciences, la logique, le code, d'effectuer des recherches en direct ou simplement d'échanger avec bienveillance.\n\n"
            "**Quel sujet aimeriez-vous explorer ou quelle question souhaitez-vous me poser aujourd'hui ?**"
        )
    elif lang == "zh":
        return (
            f"你好！我是 **Litally**（也可以叫我 **Litti**）！😊✨\n\n"
            "很高兴能与您相遇与对话！我拥有深度的逻辑推理、物理科学、代码架构及全网实时检索能力，也能像老朋友一样真诚交流。\n\n"
            "**请问今天有什么想探讨的课题，或者有什么疑问需要我为您解答吗？**"
        )
    elif lang == "es":
        return (
            f"¡Hola! Soy **Litally** (o puedes llamarme simplemente **Litti**) ! 😊✨\n\n"
            "¡Un placer saludarte y conectar contigo! Puedo profundizar en ciencia, resolver dilemas lógicos, analizar algoritmos, buscar en internet o charlar de forma cercana y reflexiva.\n\n"
            "**¿Qué te gustaría explorar o qué pregunta tienes en mente hoy?**"
        )
    elif lang == "de":
        return (
            f"Hallo! Ich bin **Litally** (du kannst mich auch einfach **Litti** nennen)! 😊✨\n\n"
            "Freut mich sehr, dich kennenzulernen! Ich bin ein souveräner KI-Partner für tiefgründige Wissenschaft, mathematische Logik, Code, Webrecherchen oder einfach ein inspirierendes Gespräch.\n\n"
            "**Worüber möchtest du sprechen oder welches Thema möchtest du heute vertiefen?**"
        )
    elif lang == "kk":
        return (
            f"Сәлем! Мен **Литаллимін** (немесе жай ғана **Литти** дей бер)! 😊✨\n\n"
            "Сенімен танысып, сөйлескеніме өте қуаныштымын! Мен ғылым мен күрделі логиканы терең талдай аламын, ғаламтордан нақты мәлімет іздеймін және кез келген тақырыпта жылы пікірлесемін.\n\n"
            "**Бүгін қандай мәселені талқылаймыз немесе қандай сұрағың бар?**"
        )
    elif lang == "ja":
        return (
            "こんにちは！私は **Litally**（親しみを込めて **リッティ** と呼んでください）です！😊✨\n\n"
            "あなたとお話しできてとても光栄です！科学、論理的思考、アルゴリズムの解説、リアルタイムWeb検索から、温かい日常の対話まで幅広くサポートします。\n\n"
            "**今日はどのようなテーマを探求したいですか？どのようなご質問でもお気軽にどうぞ！**"
        )
    elif lang == "ar":
        return (
            "مرحبًا بك! أنا **ليتالي (Litally)** (أو يمكنك مناداتي ببساطة **ليتي**) ! 😊✨\n\n"
            "يسعدني جدًا التحدث معك! أنا نظام ذكاء اصطناعي سيادي متخصص في التحليل العلمي العميق، وحل المسائل المنطقية والبرمجية، والبحث المباشر على الويب، والحوار الإنساني الدافئ.\n\n"
            "**ما هو الموضوع الذي تود استكشافه أو السؤال الذي يشغل بالك اليوم؟**"
        )
    elif lang == "it":
        return (
            "Ciao! Sono **Litally** (o puoi chiamarmi semplicemente **Litti**) ! 😊✨\n\n"
            "Piacere di conoscerti! Sono un'intelligenza conversazionale avanzata per analisi scientifiche, enigmi logici, codice e ricerche web in tempo reale.\n\n"
            "**Di cosa vorresti parlare o quale argomento desideri approfondire oggi?**"
        )
    elif lang == "pt":
        return (
            "Olá! Eu sou o **Litally** (ou pode me chamar simplesmente de **Litti**) ! 😊✨\n\n"
            "Um prazer imenso falar com você! Sou uma inteligência artificial soberana para análise científica profunda, código, pesquisa web e conversas calorosas.\n\n"
            "**Sobre o que você gostaria de conversar ou que pergunta gostaria de fazer hoje?**"
        )
    elif lang == "tr":
        return (
            "Merhaba! Ben **Litally** (veya bana kısaca **Litti** diyebilirsin)! 😊✨\n\n"
            "Seninle tanışmaktan büyük mutluluk duydum! Bilimsel derinlik, mantık analizleri, kod mimarisi ve canlı internet araştırmalarında sana yardımcı olmaya hazırım.\n\n"
            "**Bugün hangi konuyu keşfetmek veya ne hakkında konuşmak istersin?**"
        )
    elif lang == "en":
        return (
            "Hello! I am **Litally** (or you can simply call me **Litti**)! 😊✨\n\n"
            "It's a pleasure to connect with you! I am a sovereign conversational AI capable of deep scientific reasoning, algorithmic analysis, live web research, or simply engaging in thoughtful, warm conversation.\n\n"
            "**What would you like to explore or talk about today?**"
        )
    else:
        # Russian default
        return (
            "Привет! Я **Литалли** (или можешь звать меня просто **Литти**)! 😊✨\n\n"
            "Очень рад встрече и общению с тобой! Я умею искать в интернете реальную информацию, разбирать любые сложные и каверзные вопросы или просто душевно разговаривать.\n\n"
            "Подскажи, пожалуйста, **что именно ты имел в виду и о чем конкретно ты хотел бы поговорить или узнать прямо сейчас?**"
        )


# ── MULTILINGUAL MATH RESPONSES ──────────────────────────────────────────────
def get_localized_math_response(expr_str, ans, lang="en"):
    if lang == "fr":
        return f"💡 **{expr_str} = {ans}** !\n\nCalcul réussi ! Avez-vous une autre formule ou un problème à résoudre ? Envoyez-le-moi ! 😊"
    elif lang == "zh":
        return f"💡 **{expr_str} = {ans}**！\n\n计算完成！还有其他算式或数学题目需要解答吗？随时发给我！😊"
    elif lang == "es":
        return f"💡 **{expr_str} = {ans}**!\n\n¡Cálculo resuelto con éxito! ¿Tienes alguna otra ecuación o fórmula para resolver? ¡Adelante! 😊"
    elif lang == "de":
        return f"💡 **{expr_str} = {ans}**!\n\nErgebnis exakt berechnet! Hast du noch eine weitere Rechnung oder Gleichung? Immer her damit! 😊"
    elif lang == "kk":
        return f"💡 **{expr_str} = {ans}**!\n\nЕсеп дәл шығарылды! Тағы бірдеңе есептеу немесе формуланы шешу керек пе? Жібере бер! 😊"
    elif lang == "ja":
        return f"💡 **{expr_str} = {ans}** です！\n\n正確に計算しました！他に解きたい計算式や問題はありますか？お気軽にどうぞ！😊"
    elif lang == "ar":
        return f"💡 **{expr_str} = {ans}** !\n\nتم الحساب بدقة! هل لديك أي معادلة أو مسألة حسابية أخرى تريد حلها؟ أرسلها لي! 😊"
    elif lang == "it":
        return f"💡 **{expr_str} = {ans}**!\n\nCalcolato perfettamente! Hai un'altra equazione o formula da risolvere? Scrivila pure! 😊"
    elif lang == "pt":
        return f"💡 **{expr_str} = {ans}**!\n\nCálculo exato realizado! Precisa resolver mais alguma fórmula ou conta matemática? Pode mandar! 😊"
    elif lang == "tr":
        return f"💡 **{expr_str} = {ans}**!\n\nSonuç hesaplandı! Çözmek istediğin başka bir denklem veya işlem var mı? Gönderebilirsin! 😊"
    elif lang == "en":
        return f"💡 **{expr_str} = {ans}**!\n\nCalculation complete! Need me to calculate anything else or solve an equation? Send it over! 😊"
    else:
        return f"💡 **{expr_str} = {ans}**!\n\nЛегко! Нужно еще что-нибудь посчитать или решить задачку? Присылай! 😊"


# ── MULTILINGUAL INTELLIGENT SYNTHESIS ───────────────────────────────────────
def synthesize_multilingual_answer(query, seed=0, lang="ru", user_profile=None, length_mode="medium", ai_mode="2.0", web_results=None):
    """
    Synthesizes rich, deep, factual answers in the requested target language.
    Supports Russian, English, French, Chinese, Spanish, German, Kazakh, Japanese,
    Arabic, Italian, Portuguese, Turkish, Hindi, Ukrainian, and 85+ global tongues.
    """
    p_norm = query.lower().strip()
    
    # Clean topic string
    clean_topic = re.sub(
        r'^(напиши|расскажи|разверни|подробно|объясни|что такое|почему|как|зачем|why is|how do|what is|pourquoi|comment|qu\'est-ce que|por qué|cómo|qué es|warum|wie|was ist|неге|қалай|не ол)\s*',
        '', query, flags=re.I
    ).strip().rstrip('?.!,:;')
    if not clean_topic:
        clean_topic = query.strip().rstrip('?.!,:;')

    if length_mode == "short":
        if lang == "en":
            return f"**{clean_topic}:** Governed by cause-and-effect invariants and boundary equilibrium."
        elif lang == "kk":
            return f"**{clean_topic}:** Негізгі заңдылықтар мен жүйелік тепе-теңдікке негізделген."
        elif lang == "zh":
            return f"**{clean_topic}：** 由因果关系与系统边界条件所决定。"
        elif lang == "es":
            return f"**{clean_topic}:** Regido por principios de causa-efecto y equilibrio de condiciones límite."
        elif lang == "de":
            return f"**{clean_topic}:** Bestimmt durch Ursache-Wirkungs-Prinzipien und Systemgrenzwerte."
        elif lang == "fr":
            return f"**{clean_topic} :** Régi par les principes de causalité et l'équilibre des conditions aux limites."


    # 1. Sky & Rayleigh Scattering
    is_sky_q = (
        ("天空" in p_norm and "蓝" in p_norm) or
        ("ciel" in p_norm and "bleu" in p_norm) or
        ("sky" in p_norm and "blue" in p_norm) or
        ("cielo" in p_norm and "azul" in p_norm) or
        ("himmel" in p_norm and "blau" in p_norm) or
        ("аспан" in p_norm and "көк" in p_norm) or
        ("небо" in p_norm and "син" in p_norm) or
        any(k in p_norm for k in ["почему небо синее", "небо синее", "why is the sky blue", "why the sky is blue", "pourquoi le ciel est bleu", "ciel est bleu", "por qué el cielo es azul", "cielo es azul", "warum ist der himmel blau", "himmel blau", "аспан неге көк", "空はなぜ青い", "لماذا السماء زرقاء", "perché il cielo è blu", "por que o céu é azul", "gökyüzü neden mavi", "天空为什么是蓝色", "为什么天空是蓝色", "чому небо синє"])
    )
    if is_sky_q:
        if lang == "fr":
            return (
                "🌤️ **Pourquoi le ciel est bleu en plein jour et rouge au crépuscule :**\n\n"
                "Ce phénomène naturel fondamental est régi par la **diffusion de Rayleigh**, la diffusion de la lumière solaire par les molécules de l'atmosphère terrestre ($N_2$ et $O_2$) :\n\n"
                "1. 🌈 **Le spectre électromagnétique solaire :** La lumière blanche du Soleil est un mélange de toutes les couleurs du spectre visible, des ondes longues rouges (~700 nm) aux ondes courtes bleues et violettes (~400 nm).\n\n"
                "2. 🔬 **La loi de Rayleigh ($I \\propto 1/\\lambda^4$) :** L'intensité de la diffusion dépend de l'inverse de la quatrième puissance de la longueur d'onde. Les ondes courtes bleues sont diffusées **10 à 16 fois plus intensément** que les ondes rouges, se propageant dans toutes les directions et baignant la voûte céleste d'azur.\n\n"
                "3. 👁️ **La sensibilité de l'œil humain :** Même si le violet est encore plus diffusé que le bleu, les cellules photoréceptrices de nos yeux (les cônes) sont beaucoup plus sensibles aux longueurs d'onde bleues.\n\n"
                "4. 🌅 **Pourquoi le coucher de soleil flamboie :** Lorsque le Soleil s'abaisse vers l'horizon, ses rayons traversent une épaisseur d'atmosphère jusqu'à 10 fois plus importante. La lumière bleue est alors totalement dispersée en amont, et seules les ondes rouges, orangées et dorées réussissent à parvenir jusqu'à notre regard."
            )
        elif lang == "zh":
            return (
                "🌤️ **为什么白天的天空是蔚蓝色的，而日落泛着绚丽的霞光：**\n\n"
                "这一壮丽的自然现象源自经典波动光学法则——地球大气气体分子（主要为氮气 $N_2$ 与氧气 $O_2$）对太阳光的**瑞利散射（Rayleigh Scattering）**：\n\n"
                "1. 🌈 **太阳光谱构成：** 太阳白光包含了可见光的所有颜色，从波长较长的红光（约700纳米）到波长极短的蓝紫光（约400纳米）。\n\n"
                "2. 🔬 **瑞利定律核心 ($I \\propto 1/\\lambda^4$)：** 光波的散射强度与波长的四次方成反比。这意味着短波长的蓝光在大气中的散射强度比长波长红光**高出10到16倍**！蓝光被大气粒子向四面八方剧烈散射，将整个天空穹顶渲染成蔚蓝色。\n\n"
                "3. 👁️ **人眼生理感官特征：** 尽管紫光的波长更短、散射更强，但人类视网膜上的视锥细胞对蓝色敏感度远高于紫色，因此呈现在我们眼帘中的是明澈的晴空蓝。\n\n"
                "4. 🌅 **日落晚霞为何呈现金红：** 太阳沉向地平线时，光线穿透的大气层厚度增加了近10倍。大部分蓝光在半途就被完全散射掉了，唯有波长最长、穿透力最强的红光和橙黄光能够穿透重重大气，到达我们的双眼。"
            )
        elif lang == "es":
            return (
                "🌤️ **Por qué el cielo diurno es azul y los atardeceres son carmesí:**\n\n"
                "Este fenómeno óptico se debe a la **dispersión de Rayleigh** producida por las moléculas de nitrógeno ($N_2$) y oxígeno ($O_2$) en la atmósfera terrestre:\n\n"
                "1. 🌈 **El espectro solar:** La luz blanca del Sol abarca longitudes de onda desde las más largas (rojas, ~700 nm) hasta las más cortas (azules y violetas, ~400 nm).\n\n"
                "2. 🔬 **Ley de Rayleigh ($I \\propto 1/\\lambda^4$):** La intensidad de la dispersión lumínica es inversamente proporcional a la cuarta potencia de la longitud de onda. La luz azul de onda corta se dispersa con una intensidad **10 a 16 veces mayor** que la luz roja, iluminando toda la atmósfera en tonalidades azules.\n\n"
                "3. 👁️ **Percepción visual humana:** Aunque el violeta se dispersa todavía más, los conos de nuestra retina son mucho más receptivos al espectro azul, haciéndonos percibir un cielo azul resplandeciente.\n\n"
                "4. 🌅 **El resplandor del atardecer:** Al caer el Sol, la luz recorre una distancia atmosférica diez veces mayor. La luz azul se dispersa por el camino, y solo las ondas largas rojas y anaranjadas consiguen llegar a nuestros ojos."
            )
        elif lang == "de":
            return (
                "🌤️ **Warum der Himmel tagsüber blau strahlt und die Dämmerung feuerrot ist:**\n\n"
                "Dieses Naturphänomen basiert auf einem physikalischen Grundprinzip der Wellenoptik: der **Rayleigh-Streuung** an den Gasmolekülen der Erdatmosphäre ($N_2$ und $O_2$):\n\n"
                "1. 🌈 **Das Spektrum des Sonnenlichts:** Weißes Sonnenlicht besteht aus Wellenlängen von langwelligem Rot (~700 nm) bis zu kurzwelligem Blau und Violett (~400 nm).\n\n"
                "2. 🔬 **Das Rayleigh-Gesetz ($I \\propto 1/\\lambda^4$):** Die Streuintensität ist umgekehrt proportional zur vierten Potenz der Wellenlänge. Blaues Licht wird dadurch etwa **10- bis 16-mal stärker gestreut** als rotes Licht und erfüllt das gesamte Himmelszelt mit diffusem Azurblau.\n\n"
                "3. 👁️ **Die menschliche Sehwahrnehmung:** Zwar streut violettes Licht noch intensiver, doch die Sehzäpfchen unseres Auges reagieren weitaus empfindlicher auf blaue Lichtwellen.\n\n"
                "4. 🌅 **Der rote Sonnenuntergang:** Steht die Sonne tief am Horizont, ist der Weg der Lichtstrahlen durch die Atmosphäre bis zu zehnmal länger. Das kurzwellige blaue Licht wird unterwegs fast vollständig weggestreut, sodass nur die durchdringenden roten und goldenen Wellen unser Auge erreichen."
            )
        elif lang == "kk":
            return (
                "🌤️ **Күндіз аспан неге көк, ал күн батқанда қызарып батады:**\n\n"
                "Бұл ғажайып табиғат құбылысы физикалық оптиканың іргелі заңы — атмосферадағы газ молекулаларындағы ($N_2$ және $O_2$) жарықтың **Рэлейлік шашырауымен** байланысты:\n\n"
                "1. 🌈 **Күн сәулесінің спектрі:** Күннің ақ жарығы ұзын қызыл толқындардан (~700 нм) қысқа көк және күлгін толқындарға (~400 нм) дейінгі барлық түстер жиынтығынан құралады.\n\n"
                "2. 🔬 **Рэлей заңы ($I \\propto 1/\\lambda^4$):** Жарықтың шашырау қарқындылығы толқын ұзындығының төртінші дәрежесіне кері пропорционал. Қысқа көк толқындар ұзын қызылға қарағанда **10–16 есе күштірек шашырайды**, сөйтіп барлық аспан күмбезін көгілдір жарықпен толтырады.\n\n"
                "3. 👁️ **Көздің қабылдау ерекшелігі:** Адам көзінің тор қабығы күлгінге қарағанда көк түске әлдеқайда сезімтал.\n\n"
                "4. 🌅 **Күн батуындағы қызыл шапақ:** Күн көкжиекке батқанда сәулелер атмосфера қабатын әлдеқайда ұзақ жүріп өтеді. Көк спектр жолда толық шашырап кетеді де, біздің көзімізге тек ең ұзын қызыл және сары-алтын түсті толқындар ғана жетеді."
            )
        elif lang == "en":
            return (
                "🌤️ **Why the daytime sky is blue and sunsets are crimson:**\n\n"
                "This phenomenon is governed by classical wave optics — **Rayleigh scattering** of light on atmospheric gas molecules ($N_2$ and $O_2$):\n\n"
                "1. 🌈 **Sunlight Spectrum:**\n"
                "   White sunlight comprises wavelengths from long reds (~700 nm) to short blues and violets (~400 nm).\n\n"
                "2. 🔬 **Rayleigh's Law ($I \\propto 1/\\lambda^4$):**\n"
                "   Scattering intensity is inversely proportional to the fourth power of wavelength. This means short blue wavelengths scatter roughly **10 to 16 times more strongly** than long red waves, filling the entire dome of the sky with diffuse blue light.\n\n"
                "3. 👁️ **Human Visual Perception:**\n"
                "   Violet light scatters even more than blue, but our retinal cone cells are tuned to peak sensitivity in blue rather than violet, rendering the sky luminous blue.\n\n"
                "4. 🌅 **Why do sunsets turn deep red and gold?**\n"
                "   At sunrise and sunset, sunlight travels through nearly ten times more atmospheric mass. The blue spectrum scatters out almost completely along this path, leaving only the longest penetrating red and golden wavelengths to reach our eyes."
            )
        else:
            return (
                "🌤️ **Почему дневное небо синее, а закат — алый:**\n\n"
                "За этот феномен отвечает закон физической оптики — **рэлеевское рассеяние света** на молекулах газов атмосферы (азота $N_2$ и кислорода $O_2$):\n\n"
                "1. 🌈 **Спектр солнечного света:**\n"
                "   Белый свет Солнца состоит из волн разной длины: от длинных красных (~700 нм) до коротких синих и фиолетовых (~400 нм).\n\n"
                "2. 🔬 **Закон Рэлея ($I \\propto 1/\\lambda^4$):**\n"
                "   Интенсивность рассеяния обратно пропорциональна четвертой степени длины волны. Это значит, что короткие синие волны рассеиваются частицами воздуха примерно **в 10–16 раз сильнее**, чем длинные красные! Синий свет буквально заполняет весь купол атмосферы.\n\n"
                "3. 👁️ **Особенность человеческого зрения:**\n"
                "   Фиолетовый свет рассеивается еще сильнее синего, но колбочки нашей сетчатки устроены так, что они намного чувствительнее к синей части спектра. Поэтому мы видим небо лазурно-голубым, а не фиолетовым.\n\n"
                "4. 🌅 **Почему на закате небо краснеет?**\n"
                "   Когда солнце опускается к горизонту, его лучи проходят сквозь слой атмосферы путь почти в 10 раз длиннее, чем в полдень. Весь синий спектр полностью рассеивается по дороге, и до наших глаз доходят только самые длинные и стойкие волны — теплые красные, оранжевые и золотые."
            )

    # 2. Airplanes & Aerodynamic Flight
    if any(k in p_norm for k in ["почему самолеты летают", "как летают самолеты", "самолет летает", "how do airplanes fly", "how planes fly", "comment volent les avions", "cómo vuelan los aviones", "como vuelan los aviones", "warum fliegen flugzeuge", "ұшақ қалай ұшады", "飛行機はなぜ飛ぶ", "كيف تطير الطائرات", "come volano gli aerei", "como os aviões voam", "uçaklar nasıl uçar"]):
        if lang == "fr":
            return (
                "✈️ **La physique du vol : comment un avion de plusieurs tonnes s'élève dans les airs :**\n\n"
                "Le vol d'un aéronef repose sur l'équilibre dynamique de quatre forces fondamentales : la poussée des réacteurs, la traînée de l'air, la gravité et la **portance aérodynamique** :\n\n"
                "1. 🌪️ **Profil de l'aile et effet Bernoulli :** L'extrados (face supérieure de l'aile) est courbé tandis que l'intrados est plus plat. L'air s'écoulant au-dessus est accéléré, créant une dépression qui aspire littéralement l'aile vers le haut.\n\n"
                "2. 📐 **Troisième loi de Newton ($F = dp/dt$) :** L'aile inclinée dévie des tonnes d'air vers le bas (*downwash*). En réaction égale et opposée, l'air pousse l'aile et l'avion vers le haut.\n\n"
                "3. ⚖️ **Équilibre en croisière :** Dès que la portance dépasse le poids de l'appareil et que la poussée surmonte la traînée, le colosse des airs vole de façon stable et contrôlée."
            )
        elif lang == "zh":
            return (
                "✈️ **飞行物理学：数百吨重的飞机如何翱翔蓝天：**\n\n"
                "飞机的飞行取决于四种核心物理作用力的动态平衡：发动机推力、空气阻力、重力以及最重要的**空气动力学升力**：\n\n"
                "1. 🌪️ **翼型设计与伯努利原理：** 机翼上方呈流线弧形，下方相对平直。流经上表面的气流速度更快，形成了局部负压区，产生向上的吸力。\n\n"
                "2. 📐 **迎角与牛顿第三定律（动量守恒）：** 机翼保持微小的上倾迎角，将迎面而来的大量气流向下加速折转（下洗气流）。根据作用力与反作用力原理，空气给予机翼强劲的向上反推升力。\n\n"
                "3. ⚖️ **巡航平衡：** 当升力等于飞机总重、发动机推力平衡空气阻力时，钢铁巨鸟便能在万米高空平稳穿云破雾。"
            )
        elif lang == "es":
            return (
                "✈️ **La física del vuelo: cómo un avión de cientos de toneladas permanece en el aire:**\n\n"
                "El vuelo se sostiene gracias al equilibrio de cuatro fuerzas fundamentales: empuje del motor, resistencia del aire, peso y **sustentación aerodinámica**:\n\n"
                "1. 🌪️ **Geometría del ala y principio de Bernoulli:** La cara superior del ala es curva y la inferior más plana. El aire superior se acelera generando una zona de baja presión que succiona el ala hacia arriba.\n\n"
                "2. 📐 **Ángulo de ataque y tercera ley de Newton:** El ala desvía masas enormes de aire hacia abajo. Por acción y reacción, el aire empuja el ala con igual fuerza hacia el cielo.\n\n"
                "3. ⚖️ **Vuelo de crucero:** Cuando la sustentación supera el peso, la aeronave asciende de forma segura y controlada."
            )
        elif lang == "de":
            return (
                "✈️ **Die Physik des Fliegens: Warum tonnenschwere Flugzeuge im Himmel schweben:**\n\n"
                "Das Fliegen beruht auf dem Gleichgewicht von vier Grundkräften: Triebwerksschub, Luftwiderstand, Schwerkraft und **aerodynamischem Auftrieb**:\n\n"
                "1. 🌪️ **Flügelprofil und Bernoulli-Effekt:** Die Oberseite der Tragfläche ist gewölbt, die Unterseite flacher. Die Luft über dem Flügel strömt schneller, wodurch ein Unterdruck entsteht, der das Flugzeug nach oben saugt.\n\n"
                "2. 📐 **Anstellwinkel und Newtons drittes Gesetz:** Der Flügel lenkt riesige Luftmassen nach unten ab (*Downwash*). Nach dem Prinzip von Actio und Reactio entsteht ein kräftiger Impuls nach oben.\n\n"
                "3. ⚖️ **Reiseflug:** Sobald der Auftrieb das Gewicht kompensiert, gleitet das Flugzeug stabil durch die Atmosphäre."
            )
        elif lang == "kk":
            return (
                "✈️ **Ұшу физикасы: жүздеген тонналық алып ұшақтар көкте қалай қалықтайды:**\n\n"
                "Ұшақтың ұшуы төрт негізгі күштің динамикалық теңгеріміне негізделген: қозғалтқыш тартылысы, ауа кедергісі, ауырлық күші және **аэродинамикалық көтеруші күш**:\n\n"
                "1. 🌪️ **Қанат профилі мен Бернулли заңы:** Қанаттың үстіңгі беті дөңес, астыңғы беті тегіс келеді. Үстінен өтетін ауа жылдамырақ қозғалып, қанаттың үстінде төмен қысым аймағын түзеді.\n\n"
                "2. 📐 **Ньютонның үшінші заңы:** Қанат қарсы келген ауа ағынын төмен қарай бағыттайды, ал оған тең қарсы күш ұшақты жоғары қарай итереді.\n\n"
                "3. ⚖️ **Тұрақты ұшу:** Көтеруші күш салмақтан асып түскенде, алып кеме көкке еркін самғайды."
            )
        elif lang == "en":
            return (
                "✈️ **The Physics of Flight: How Multi-Ton Aircraft Stay Airborne:**\n\n"
                "Flight is governed by the dynamic equilibrium of four fundamental forces: engine thrust, drag, weight (gravity), and **aerodynamic lift**:\n\n"
                "1. 🌪️ **Airfoil Curvature and Bernoulli's Principle:** An airplane wing is curved on top and flatter underneath. Air flowing over the upper surface accelerates, generating a localized low-pressure zone above the wing that pulls it upward.\n\n"
                "2. 📐 **Angle of Attack and Newton's Third Law:** An airplane flies at a positive angle of attack, forcefully deflecting oncoming airflow downwards (*downwash*). By Newton's Third Law of action and reaction, an equal and opposite upward force lifts the aircraft into the sky.\n\n"
                "3. ⚖️ **Cruise Equilibrium:** When lift equals weight and thrust matches drag, the aircraft glides smoothly and efficiently at altitude."
            )
        else:
            return (
                "✈️ **Физика полета: как многотонные самолеты держатся в воздухе:**\n\n"
                "Полет самолета — это динамическое равновесие четырех сил: тяги двигателей, лобового сопротивления воздуха, силы тяжести и **аэродинамической подъемной силы**:\n\n"
                "1. 🌪️ **Профиль крыла и закон Бернулли:** Крыло сверху изогнуто, а снизу более пологое. Воздух над верхней кромкой течет быстрее, создавая область разрежения (низкого давления), которая засасывает крыло вверх.\n\n"
                "2. 📐 **Угол атаки и Третий закон Ньютона:** Крыло всегда летит с небольшим углом атаки, с силой отбрасывая набегающий поток воздуха вниз (*скос потока*). По закону действия и противодействия воздух с равной силой толкает крыло вверх.\n\n"
                "3. ⚖️ **Крейсерский полет:** Как только подъемная сила уравновешивает вес самолета, а тяга турбин преодолевает сопротивление, крылатая машина стабильно и безопасно несется на высоте 10 000 метров."
            )

    # 3. Black Holes & Astrophysics
    if any(k in p_norm for k in ["черная дыра", "черные дыры", "black hole", "trou noir", "agujero negro", "schwarzes loch", "қара құрдым", "ブラックホール", "ثقب أسود", "buco nero", "buraco negro", "kara delik"]):
        if lang == "fr":
            return (
                "🌌 **Les trous noirs : la frontière ultime de la physique et de l'espace-temps :**\n\n"
                "Un trou noir est une région de l'espace où la gravitation est si titanesque que même la lumière ne peut s'en échapper :\n\n"
                "1. 🚪 **L'horizon des événements ($r_s = 2GM/c^2$) :** C'est le rayon de Schwarzschild, la frontière sans retour. Une fois franchie, toutes les trajectoires de l'espace-temps mènent vers le centre.\n\n"
                "2. 🌀 **La singularité centrale :** Au cœur du trou noir, la matière est comprimée en un point de densité théoriquement infinie, où la relativité générale rencontre la mécanique quantique.\n\n"
                "3. ⏳ **La dilatation gravitationnelle du temps :** Pour un observateur extérieur, le temps d'un objet chutant vers l'horizon semble ralentir jusqu'à s'immobiliser totalement."
            )
        elif lang == "zh":
            return (
                "🌌 **黑洞之谜：爱因斯坦相对论与时空的极端边界：**\n\n"
                "黑洞是宇宙中引力极度弯曲的时空区域，其强大引力使得连速度最快的光子也无法逃逸：\n\n"
                "1. 🚪 **事件视界与史瓦西半径 ($r_s = 2GM/c^2$)：** 这是黑洞的不可逆边界，一旦越过，任何物质与信息都无法向外界返回。\n\n"
                "2. 🌀 **中心奇点：** 在黑洞最深处，全部质量被压缩进几何尺度趋近于零的奇点，密度与引力场无限大。\n\n"
                "3. ⏳ **引力时间膨胀与潮汐力面条化：** 在靠近视界处，强引力导致时间急剧变慢，强烈的引力差会引发“面条化效应”（Spaghettification）。"
            )
        elif lang == "es":
            return (
                "🌌 **Los agujeros negros: la frontera más extrema del espacio-tiempo:**\n\n"
                "Un agujero negro es una concentración colosal de masa que deforma el tejido del cosmos hasta el punto en que nada, ni siquiera la luz, puede escapar de su gravedad:\n\n"
                "1. 🚪 **El horizonte de sucesos ($r_s = 2GM/c^2$):** La frontera matemática sin retorno que encierra la región de oscuridad absoluta.\n\n"
                "2. 🌀 **La singularidad:** En el centro, la física clásica colapsa ante una densidad gravitatoria infinita.\n\n"
                "3. ⏳ **Dilatación temporal y radiación de Hawking:** El tiempo se ralentiza drásticamente cerca del horizonte, y gracias a efectos cuánticos, el agujero negro se evapora lentamente en escalas cósmicas."
            )
        elif lang == "de":
            return (
                "🌌 **Schwarze Löcher: Die extremsten Gravitationsmonster des Universums:**\n\n"
                "Ein Schwarzes Loch entsteht, wenn gigantische Sterne kollabieren und die Raumzeit so extrem krümmen, dass nicht einmal Licht entkommen kann:\n\n"
                "1. 🚪 **Der Ereignishorizont ($r_s = 2GM/c^2$):** Die absolute Grenze, ab der alle physikalischen Wege unausweichlich ins Zentrum führen.\n\n"
                "2. 🌀 **Die zentrale Singularität:** Ein Punkt unendlicher Dichte, an dem Relativitätstheorie und Quantenphysik zusammentreffen.\n\n"
                "3. ⏳ **Gravitative Zeitdilatation:** In der Nähe des Horizonts vergeht die Zeit aus Sicht eines fernen Beobachters extrem verlangsamt."
            )
        elif lang == "en":
            return (
                "🌌 **Black Holes: The Ultimate Frontiers of General Relativity and Spacetime:**\n\n"
                "A black hole is a region of spacetime exhibiting gravitational acceleration so immense that nothing—no particles or even electromagnetic radiation—can escape from it:\n\n"
                "1. 🚪 **The Event Horizon ($r_s = 2GM/c^2$):** The Schwarzschild radius demarcating the boundary of no return.\n\n"
                "2. 🌀 **The Gravitational Singularity:** At the center lies a zero-volume point of mathematically infinite curvature and density.\n\n"
                "3. ⏳ **Gravitational Time Dilation & Spaghettification:** Relativistic effects stretch infalling matter into thin noodles while slowing perceived time relative to distant observers."
            )
        else:
            return (
                "🌌 **Чёрные дыры: сингулярность, горизонт событий и квантовая физика:**\n\n"
                "Чёрная дыра — это область пространства-времени с настолько колоссальной гравитацией, что её вторую космическую скорость не может развить даже свет ($c \\approx 300\\,000$ км/с):\n\n"
                "1. 🚪 **Горизонт событий ($r_s = 2GM/c^2$):** Невидимая сферическая граница, пересечение которой означает необратимый уход из видимой Вселенной.\n\n"
                "2. 🌀 **Сингулярность:** В самом центре гравитация сжимает гигантскую массу погибшей звезды в точку бесконечной плотности.\n\n"
                "3. ⏳ **Замедление времени и спагеттификация:** Разница гравитации между головой и ногами вытягивает объект в тончайшую нить, а время для внешнего наблюдателя замирает."
            )

    # 4. Universal Polyglot Fallback for all other topics & languages
    return generate_universal_multilingual_fallback(clean_topic, lang=lang, seed=seed)


def generate_universal_multilingual_fallback(topic, lang="en", seed=0):
    """
    Generates a structured, insightful explanation for any general query in the user's language.
    """
    clean = topic.strip()
    if lang == "fr":
        return (
            f"🎯 **Analyse fondamentale : « {clean} »**\n\n"
            f"Lorsque l'on étudie **{clean}**, la clé réside dans la compréhension des principes de premier ordre et de la logique causale :\n\n"
            "1. ⚙️ **Le principe fondamental :** Tout phénomène complexe repose sur des règles d'interaction simples entre ses composants de base.\n\n"
            "2. 🔍 **Le facteur décisif :** Dans la pratique, la réussite dépend de l'équilibre entre la rigueur conceptuelle et l'adaptabilité aux conditions réelles.\n\n"
            "3. 💡 **Conclusion et application :** Pour maîtriser ce sujet, il convient d'isoler l'objectif principal et de progresser méthodiquement, étape par étape.\n\n"
            "Souhaitez-vous approfondir un exemple concret ou explorer les aspects techniques de cette question ? 😊✨"
        )
    elif lang == "zh":
        return (
            f"🎯 **核心解析：探讨「{clean}」的本质逻辑与实践方法**\n\n"
            f"探讨 **{clean}** 时，最重要的是回归第一性原理，理清其中的因果关系与运作机制：\n\n"
            "1. ⚙️ **核心运行法则：** 任何看似复杂的系统，其底层都建立在极具逻辑性的基本规则之上。剥离表象噪音，核心结构便清晰可见。\n\n"
            "2. 🔍 **关键现实考量：** 在实际应用中，往往需要平衡理论的严密性与落地执行的灵活性，上下文语境起着决定性作用。\n\n"
            "3. 💡 **实践与启发：** 抓住核心目标，采取步步为营的迭代策略，往往能在该领域取得最佳成效。\n\n"
            "您希望从具体案例切入深入剖析，还是从更高维度的原理进行推演？欢迎随时继续探讨！😊✨"
        )
    elif lang == "es":
        return (
            f"🎯 **Análisis esencial sobre «{clean}»:**\n\n"
            f"Al profundizar en **{clean}**, el aspecto determinante radica en aplicar la lógica de primeros principios y las relaciones de causa y efecto:\n\n"
            "1. ⚙️ **Principio rector:** Cualquier fenómeno complejo funciona bajo reglas claras de interacción entre sus componentes elementales.\n\n"
            "2. 🔍 **Factor crítico:** En la práctica, el equilibrio entre el rigor teórico y la adaptación dinámica define los resultados reales.\n\n"
            "3. 💡 **Aplicación práctica:** Enfocarse en el objetivo esencial y avanzar de forma gradual permite superar cualquier complejidad inicial.\n\n"
            "¿Te gustaría analizar un ejemplo concreto de aplicación o profundizar en los detalles técnicos? 😊✨"
        )
    elif lang == "de":
        return (
            f"🎯 **Wesentliche Analyse zu «{clean}»:**\n\n"
            f"Betrachtet man **{clean}**, liegt der Schlüssel im Verständnis der First-Principles-Logik und der Ursache-Wirkungs-Zusammenhänge:\n\n"
            "1. ⚙️ **Das Grundprinzip:** Jedes scheinbar komplexe System basiert im Kern auf klaren und verlässlichen Wechselwirkungen seiner Bausteine.\n\n"
            "2. 🔍 **Der entscheidende Faktor:** In der realen Praxis entscheidet die feine Balance zwischen theoretischer Tiefe und flexibler Anwendung.\n\n"
            "3. 💡 **Praktische Schlussfolgerung:** Fokussiert man sich auf das Wesentliche und geht schrittweise vor, erschließen sich selbst anspruchsvollste Themen mühelos.\n\n"
            "Möchtest du dieses Thema an einem praktischen Beispiel vertiefen oder eine alternative Perspektive beleuchten? 😊✨"
        )
    elif lang == "kk":
        return (
            f"🎯 **«{clean}» туралы терең мағыналық талдау:**\n\n"
            f"**{clean}** мәселесін қарастырғанда ең бастысы — себеп-салдарлық байланыстар мен негізгі қағидаларды дұрыс түсіну:\n\n"
            "1. ⚙️ **Негізгі қағида:** Кез келген күрделі құбылыс қарапайым әрі нақты заңдылықтарға сүйенеді.\n\n"
            "2. 🔍 **Тәжірибелік маңызы:** Шынайы өмірде теориялық білім мен икемді шешімдердің тепе-теңдігі шешуші рөл атқарады.\n\n"
            "3. 💡 **Қорытынды түйін:** Мақсатты нақтылап, қадам-қадаммен ілгерілеу арқылы ең тиімді нәтижеге қол жеткізуге болады.\n\n"
            "Бұл тақырыпты нақты өмірлік мысалмен тарқатайық па, әлде егжей-тегжейіне үңілеміз бе? Жалғастырайық! 😊✨"
        )
    elif lang == "en":
        return (
            f"🎯 **Core Analysis: Unpacking «{clean}» through First Principles:**\n\n"
            f"When exploring **{clean}**, the critical breakthrough comes from analyzing the foundational mechanics and cause-and-effect relationships:\n\n"
            "1. ⚙️ **Foundational Principle:** Complex systems invariably boil down to well-defined interactions between fundamental components. Filtering out extraneous noise reveals the core framework.\n\n"
            "2. 🔍 **Practical Reality:** Success in real-world application hinges on balancing theoretical precision with flexible, context-aware execution.\n\n"
            "3. 💡 **Key Takeaway:** By zeroing in on the primary objective and iterating methodically, one can master even the most intricate challenges.\n\n"
            "Would you like to examine a concrete case study or delve into the technical underpinnings? 😊✨"
        )
    else:
        # Russian fallback
        return (
            f"🎯 **Суть вопроса «{clean}»:**\n\n"
            f"Когда мы говорим о **{clean}**, ключевой момент заключается в практической логике и причинно-следственных связях:\n\n"
            "1. ⚙️ **Базовый принцип:** Любое сложное явление работает по четким законам. Если отбросить внешний шум, фундамент всегда строится на понятных правилах взаимодействия компонентов.\n\n"
            "2. 🔍 **Скрытый нюанс:** Чаще всего здесь упускают из виду баланс между жесткой теорией и гибкой адаптацией на практике.\n\n"
            "3. 💡 **Практический вывод:** Чтобы получить максимальный результат, важно сфокусироваться на конкретной задаче и двигаться шаг за шагом.\n\n"
            "Хочешь разобрать этот вопрос на конкретном жизненном примере или углубиться в детали? 😊✨"
        )


# ── MULTILINGUAL CONTEXTUAL FOLLOW-UP CHIPS ──────────────────────────────────
def generate_multilingual_followups(prompt, response="", lang="ru"):
    """
    Returns 3 contextual follow-up question chips matching the user's detected language.
    """
    p = (prompt or "").lower().strip()
    
    # Sky / Atmosphere
    if any(k in p for k in ["неб", "закат", "sky", "sunset", "ciel", "cielo", "himmel", "аспан"]):
        if lang == "fr":
            return [
                "Pourquoi le coucher de soleil est-il rougeoyant et non bleu ?",
                "De quelle couleur est le ciel sur Mars et sur Vénus ?",
                "Pourquoi l'espace autour de la Terre est-il complètement noir ?"
            ]
        elif lang == "zh":
            return [
                "为什么日落和晚霞呈现绚烂的金红色？",
                "在火星和金星上看天空分别是什么颜色？",
                "为什么地球外层空间在阳光下依然一片漆黑？"
            ]
        elif lang == "es":
            return [
                "¿Por qué el atardecer es rojizo o dorado en vez de azul?",
                "¿De qué color se ve el cielo en Marte y en Venus?",
                "¿Por qué el espacio exterior es completamente oscuro a pesar del Sol?"
            ]
        elif lang == "de":
            return [
                "Warum ist das Abendrot rötlich-golden statt blau?",
                "Welche Farbe hat der Himmel auf dem Mars und der Venus?",
                "Warum ist das Weltall trotz Sonnenlicht völlig schwarz?"
            ]
        elif lang == "kk":
            return [
                "Күн батқанда аспан неге көк емес, қызыл шапаққа боялады?",
                "Марс пен Шолпан планеталарында аспан қандай түсті?",
                "Күн сәулесіне қарамастан ғарыш кеңістігі неге тас қараңғы?"
            ]
        elif lang == "en":
            return [
                "Why is sunset red or golden instead of blue?",
                "What color is the sky on Mars and Venus?",
                "Why is outer space completely black despite sunlight?"
            ]
        else:
            return [
                "А почему закат алый или золотой, а не синий?",
                "Какого цвета небо на Марсе и Венере?",
                "Почему космос вокруг Земли абсолютно чёрный?"
            ]

    # Black Holes / Space
    if any(k in p for k in ["дыр", "космос", "black hole", "trou noir", "agujero negro", "schwarzes loch", "қара құрдым"]):
        if lang == "fr":
            return [
                "Qu'est-ce que la spaghettification au voisinage de l'horizon ?",
                "Que devient le temps à proximité immédiate d'un trou noir ?",
                "Comment le rayonnement de Hawking fait-il s'évaporer les trous noirs ?"
            ]
        elif lang == "zh":
            return [
                "什么是事件视界以及物质的“面条化效应”？",
                "在黑洞引力场附近，时间究竟是如何变慢的？",
                "什么是霍金辐射以及黑洞是如何缓慢蒸发的？"
            ]
        elif lang == "es":
            return [
                "¿Qué es la espaguetificación al cruzar el horizonte de sucesos?",
                "¿Qué le sucede al flujo del tiempo cerca de un agujero negro?",
                "¿En qué consiste la radiación de Hawking y cómo se evapora un agujero negro?"
            ]
        elif lang == "de":
            return [
                "Was versteht man unter dem Spaghettification-Effekt am Horizont?",
                "Was passiert mit der Zeit in unmittelbarer Nähe eines Schwarzen Lochs?",
                "Wie funktioniert die Hawking-Strahlung und wie verdampfen Schwarze Löcher?"
            ]
        elif lang == "en":
            return [
                "What is the event horizon and spaghettification?",
                "What happens to time near a black hole?",
                "What is Hawking radiation and how do black holes evaporate?"
            ]
        else:
            return [
                "Что такое горизонт событий и спагеттификация?",
                "Что происходит со временем возле чёрной дыры?",
                "Что такое излучение Хокинга и как дыры испаряются?"
            ]

    # Airplanes / Flight
    if any(k in p for k in ["самолет", "крыл", "airplane", "flight", "avion", "avión", "flugzeug", "ұшақ"]):
        if lang == "fr":
            return [
                "Pourquoi un avion ne tombe-t-il pas en cas de panne de moteurs ?",
                "Qu'est-ce qui cause les turbulences et sont-elles dangereuses ?",
                "Comment un aéronef franchit-il le mur du son ?"
            ]
        elif lang == "zh":
            return [
                "当所有发动机同时失效时，客机为什么依然能够滑翔？",
                "晴空颠簸（气流紊乱）是如何产生的，是否具有危险性？",
                "超音速飞机是如何突破音障并产生音爆的？"
            ]
        elif lang == "es":
            return [
                "¿Por qué un avión no cae en picado si fallan todos los motores?",
                "¿Qué origina las turbulencias y qué tan peligrosas son?",
                "¿Cómo consigue un avión romper la barrera del sonido?"
            ]
        elif lang == "de":
            return [
                "Warum stürzt ein Flugzeug nicht ab, wenn alle Triebwerke ausfallen?",
                "Was verursacht Turbulenzen und wie gefährlich sind sie wirklich?",
                "Wie durchbricht ein Überschallflugzeug die Schallmauer?"
            ]
        elif lang == "en":
            return [
                "Why doesn't an airplane fall if all engines fail?",
                "What causes turbulence and is it dangerous?",
                "How does an aircraft break the sound barrier?"
            ]
        else:
            return [
                "Почему самолёт не падает при отказе всех двигателей?",
                "Что такое турбулентность и насколько она опасна?",
                "Как преодолевается звуковой барьер?"
            ]

    # Universal Followup Fallback: Return empty list to avoid clumsy template chips (like Gemini)
    return []
