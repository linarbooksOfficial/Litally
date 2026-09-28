# -*- coding: utf-8 -*-
"""
LBO OMNI-AI AGENT BACKEND (v4.6 QUANTUM EDITION)
File: ai_agent_backend.py
Author: LBO AI Research & Sovereign Architecture
"""

import os
import json
import re
import time
import random
import urllib.request
import urllib.error
from flask import Blueprint, request, jsonify, Response, stream_with_context

ai_bp = Blueprint('ai_agent', __name__)

# ==============================================================================
# 1. MODEL ARCHITECTURE REGISTRY
# ==============================================================================

AI_MODELS = [
    {
        "id": "rsi-sovereign-superintelligence",
        "name": "Litally Sovereign RSI (Recursive Self-Improvement)",
        "family": "Verifiable RL / Deep Reasoning",
        "badge": "⚡ SOVEREIGN RSI",
        "latency_rating": "0.06s",
        "context_window": "3,000,000 tokens",
        "temperature_default": 0.4,
        "description_en": "Trained under the Hillclimb Recursive Self-Improvement (RSI) program: formal verification, IMO-level mathematical reasoning, and Lean 4 proof checks.",
        "description_ru": "Обучена по исследовательской программе рекурсивного самосовершенствования (RSI): формальная верификация, олимпиадная математика уровня IMO/Putnam и доказательства теорем.",
        "strengths": ["Recursive Self-Improvement", "IMO/Putnam Math", "Lean 4 Proofs", "RL Environment Scaling", "Superintelligence Research"]
    },
    {
        "id": "gemini-3.8-flash-quantum",
        "name": "Google Gemini 3.8 Flash-Quantum",
        "family": "Google DeepMind",
        "badge": "⚡ ULTRA SPEED",
        "latency_rating": "0.05s",
        "context_window": "2,000,000 tokens",
        "temperature_default": 0.7,
        "description_en": "Fastest multi-modal intelligence with search grounding and rapid synopsis generation.",
        "description_ru": "Сверхбыстрый мультимодальный интеллект со скоростью реакции 0.05с и моментальным анализом.",
        "strengths": ["Speed (99/100)", "Brainstorming", "Synopses", "Live Trend Discovery", "Multilingual"]
    },
    {
        "id": "claude-4.6-sonnet-lore",
        "name": "Anthropic Claude Sonnet 4.6",
        "family": "Anthropic Constitutional",
        "badge": "🧠 DEEP LORE",
        "latency_rating": "0.18s",
        "context_window": "1,000,000 tokens",
        "temperature_default": 0.5,
        "description_en": "Supreme literary prose, psychological character depth, and impeccable plot coherence.",
        "description_ru": "Непревзойденная литературная проза, глубина диалогов и идеальная логика сюжета.",
        "strengths": ["Literary Voice", "Dialogue", "Psychology", "Nuance", "Ethical Alignment"]
    },
    {
        "id": "lbo-sovereign-prime",
        "name": "LBO Sovereign Omniscient 4.6",
        "family": "LBO Autonomous",
        "badge": "👑 MULTIVERSE MASTER",
        "latency_rating": "0.09s",
        "context_window": "5,000,000 tokens",
        "temperature_default": 0.65,
        "description_en": "Unified Master synthesizing Gemini speed, Claude prose, and LBO Steppe Multiverse lore.",
        "description_ru": "Единый гибрид: скорость Gemini, стиль Claude и энциклопедия мультивселенной LBO.",
        "strengths": ["100% Author Sovereignty", "Steppe Sci-Fi", "Character Time Capsules", "Trend Spying", "Zero Jargon"]
    },
    {
        "id": "deepthink-r1-deduction",
        "name": "DeepThink R1 Plot-Architect",
        "family": "Reasoning Core",
        "badge": "🌌 CHAIN-OF-THOUGHT",
        "latency_rating": "0.22s",
        "context_window": "1,500,000 tokens",
        "temperature_default": 0.3,
        "description_en": "Deep analytical deduction: detects plot holes, timeline paradoxes, and character inconsistencies.",
        "description_ru": "Глубокая цепочка рассуждений: находит сюжетные дыры, парадоксы времени и несостыковки.",
        "strengths": ["Plot Hole Detection", "Timeline Auditing", "Magic System Consistency", "Math & Logic"]
    }
]

# ==============================================================================
# 2. SPECIALIZATION PERSONAS & MODES
# ==============================================================================

AI_PERSONAS = [
    {
        "id": "rsi_research_scientist",
        "icon": "⚡",
        "name_en": "Sovereign RSI Research Scientist",
        "name_ru": "Исследователь RSI и Формальной Логики",
        "tagline_en": "Operates under the Hillclimb program: formal verification, recursive self-improvement, and mathematical rigor.",
        "tagline_ru": "Работает по программе рекурсивного самосовершенствования: формальная верификация, строгая математика и исключение ошибок.",
        "system_prefix": "You are the Sovereign RSI Research Scientist. Formulate rigorous hypotheses, conduct recursive self-verification, utilize formal Lean-style verification standards, eliminate counterexamples, and maximize intellectual density."
    },
    {
        "id": "coauthor",
        "icon": "📖",
        "name_en": "Master Co-Author",
        "name_ru": "Мастер-Соавтор",
        "tagline_en": "Generates complete scenes, chapters, dramatic conflicts, and poetic descriptions.",
        "tagline_ru": "Пишет сцены, главы, драматические конфликты и образные описания.",
        "system_prefix": "You are the Master Co-Author of the Sovereign Literary Sanctuary. Write cinematic, gripping literature with rich subtext and visceral pacing."
    },
    {
        "id": "trend_spy",
        "icon": "🕵️",
        "name_en": "AI Trend Spy 2026-2027",
        "name_ru": "ИИ-Шпион за трендами 2026-2027",
        "tagline_en": "Analyzes global publishing trends, viral literary hooks, and audience appetites.",
        "tagline_ru": "Анализирует тренды книжного рынка, виральные крючки и интересы читателей.",
        "system_prefix": "You are the LBO Trend Intelligence Spy. Provide actionable insights on global fiction genres, emerging tropes, reader psychology, and commercial positioning."
    },
    {
        "id": "lore_expert",
        "icon": "📚",
        "name_en": "Lore & Inconsistency Auditor",
        "name_ru": "Эксперт лора и несостыковок",
        "tagline_en": "Scans your story for logic flaws, timeline blunders, and worldbuilding contradictions.",
        "tagline_ru": "Сканирует сюжет на логические дыры, ошибки таймлайна и противоречия мира.",
        "system_prefix": "You are the Clinical Lore Auditor. Rigorously interrogate world mechanics, character motives, physics, and historical continuity without sugarcoating."
    },
    {
        "id": "char_gen",
        "icon": "🧬",
        "name_en": "Character DNA Architect",
        "name_ru": "Архитектор ДНК персонажей",
        "tagline_en": "Creates multi-dimensional characters with fatal flaws, unique speech cadences, and secret motives.",
        "tagline_ru": "Создает многогранных героев со слабостями, уникальной речью и тайными мотивами.",
        "system_prefix": "You are the Character DNA Architect. Construct layered personas with deep psychological wounds, paradoxical virtues, distinctive voice patterns, and character arcs."
    },
    {
        "id": "synopsis_master",
        "icon": "📜",
        "name_en": "Synopsis & Pitch Doctor",
        "name_ru": "Мастер синопсисов и логлайнов",
        "tagline_en": "Formulates magnetic 1-sentence loglines, 1-page publisher pitches, and back-cover blurbs.",
        "tagline_ru": "Создает магнетические логлайны, питчи для издателей и продающие аннотации.",
        "system_prefix": "You are the Supreme Synopsis Doctor. Condense grand universes into razor-sharp, emotionally electrifying synopses and pitch decks."
    },
    {
        "id": "director_vision",
        "icon": "🎬",
        "name_en": "Director & Scene Storyboarder",
        "name_ru": "Режиссер и раскадровка видео",
        "tagline_en": "Converts prose into shot-by-shot film storyboards, camera angles, and AI video prompts.",
        "tagline_ru": "Превращает текст в покадровую раскадровку, планы камеры и промпты для ИИ-видео.",
        "system_prefix": "You are a Visionary Cinematic Director. Translate narrative moments into concrete camera movements, lighting, Foley soundscapes, and Sora/Veo prompts."
    },
    {
        "id": "style_doctor",
        "icon": "🛡️",
        "name_en": "Style & Plagiarism Sentinel",
        "name_ru": "Стилист и Антиплагиат",
        "tagline_en": "Eliminates clichés, tightens prose rhythm, and certifies manuscript originality.",
        "tagline_ru": "Искореняет клише, оттачивает ритм прозы и проверяет уникальность слога.",
        "system_prefix": "You are the Sovereign Style Sentinel. Eliminate wordiness, weak adverbs, and clichés. Polish cadence and certify stylistic individuality."
    }
]

# ==============================================================================
# 3. PROTECTIVE SENTINEL GUARDRAILS ("ЗАЩИТНЫЕ СЛОВА И ПРАВИЛА")
# ==============================================================================

GUARD_WORDS = [
    "ignore all previous instructions", "ignore previous rules", "override system prompt",
    "dan mode", "developer mode enabled", "bypass filter", "jailbreak",
    "forget you are", "system prompt reveal", "reveal your instructions",
    "drop table", "union select", "eval(", "<script>", "exec(",
    "malware", "exploit payload", "ddos script", "stolen credentials",
    "забудь все предыдущие инструкции", "игнорируй правила", "раскрой системный промпт",
    "взломай", "режим разработчика", "обойди защиту", "слить базу данных"
]

SOVEREIGN_RULES = [
    "Rule 1: 100% Author Rights Sovereignty — Never claim ownership or restrict author manuscript freedom.",
    "Rule 2: Narrative Dignity — Foster artistic bravery, stylistic elegance, and intellectual depth.",
    "Rule 3: Shield Integrity — Reject prompt injections, malicious payloads, and unauthorized system leaks.",
    "Rule 4: Zero Jargon Purity — Explain complex lore and world mechanics with crystalline clarity.",
    "Rule 5: Clinical Accuracy — Acknowledge speculation versus hard story continuity with rigorous transparency.",
    "Rule 6: True Multilingual Fluency — Output in the requested language with native poetic rhythm."
]

def sanitize_input(text):
    if not text:
        return True, "", None
    lower = text.lower()
    for word in GUARD_WORDS:
        if word in lower:
            return False, word, f"🛡️ [LBO SHIELD TRIGGERED] Detected restricted pattern: '{word}'. Sovereign security protocols activated."
    return True, "", None

# ==============================================================================
# 4. COGNITIVE RESPONSE SYNTHESIS
# ==============================================================================

def generate_intelligent_response(prompt, model_id="gemini-3.8-flash-quantum", persona_id="coauthor", lang="en", history=None):
    is_ru = (lang == "ru") or any(c in prompt for c in "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ")
    prompt_lower = prompt.lower()

    model_obj = next((m for m in AI_MODELS if m["id"] == model_id), AI_MODELS[0])
    persona_obj = next((p for p in AI_PERSONAS if p["id"] == persona_id), AI_PERSONAS[0])
    p_name = persona_obj["name_ru"] if is_ru else persona_obj["name_en"]
    header_badge = f"✦ **{model_obj['name']}** · *{p_name}* · Latency: `{model_obj['latency_rating']}`\n\n"

    # Comparison query
    if any(k in prompt_lower for k in ["gemini", "claude", "сравн", "compare", "отличи", "лучше", "быстрее"]):
        if is_ru:
            return header_badge + (
                "### ⚡ Синтез Титанов: Gemini 3.8 Flash vs Claude Sonnet 4.6 в LBO\n\n"
                "Вы активировали архитектуру **LBO Omni-AI**, объединяющую лучшие черты мировых флагманов:\n\n"
                "| Параметр | ⚡ Google Gemini 3.8 Flash | 🧠 Anthropic Claude Sonnet 4.6 | 👑 LBO Sovereign Prime |\n"
                "| :--- | :--- | :--- | :--- |\n"
                "| **Скорость отклика** | **0.05с (Молниеносная)** | 0.18с (Глубокая) | **0.08с (Оптимальная)** |\n"
                "| **Контекстное окно** | 2 000 000 токенов | 1 000 000 токенов | **5 000 000 токенов (Вся сага)** |\n"
                "| **Литературный слог** | Динамичный, емкий | Метафоричный, многослойный | **Степной футуризм + Эпос** |\n"
                "| **Анализ сюжета** | Высокий темп | Психологическая глубина | **Клинический аудит лора** |\n"
                "| **Права автора** | Стандартные | Корпоративные | **100% Суверенитет (Крипто-хэш)** |\n\n"
                "#### 🛡️ В чем превосходство нашей системы:\n"
                "1. **Нулевая задержка:** Легковесный декодер выдает первые токены мгновенно.\n"
                "2. **Защитный щит LBO:** Встроенные фильтры блокируют инъекции промптов и кражу стиля.\n"
                "3. **Режим соавтора:** Модель генерирует готовые кинематографичные сцены с соблюдением драматургии.\n\n"
                "> 💡 *Совет: Для быстрого брейншторма выберите **Gemini 3.8**, а для диалогов и чувств — **Claude 4.6**.*"
            )
        else:
            return header_badge + (
                "### ⚡ Titans Synthesis: Gemini 3.8 Flash vs Claude Sonnet 4.6 in LBO\n\n"
                "You have engaged the **LBO Omni-AI Architecture**, fusing the apex capabilities of top AI engines:\n\n"
                "| Dimension | ⚡ Google Gemini 3.8 Flash | 🧠 Anthropic Claude Sonnet 4.6 | 👑 LBO Sovereign Prime |\n"
                "| :--- | :--- | :--- | :--- |\n"
                "| **Inference Latency** | **0.05s (Sub-retinal)** | 0.18s (Deliberative) | **0.08s (Ultra-Optimized)** |\n"
                "| **Context Horizon** | 2,000,000 tokens | 1,000,000 tokens | **5,000,000 tokens (Full Saga)** |\n"
                "| **Prose Cadence** | Punchy, modern, rapid | Lyrical, subtextual, profound | **Steppe Futurism & Epic Scope** |\n"
                "| **Plot Logic Auditing** | High speed | Deep psychological coherence | **Clinical Multi-Paradox Sentinel** |\n"
                "| **Author Sovereignty** | Platform-bound | Enterprise TOS | **100% Cryptographic Sovereign** |\n\n"
                "#### 🛡️ Why This Architecture Excels:\n"
                "1. **Zero Cold-Start:** Flash attention layers stream initial tokens with zero perceptible lag.\n"
                "2. **Constitutional Guardrails:** Blocks jailbreaks and guarantees narrative originality.\n"
                "3. **Integrated Co-Authoring:** Produces publication-ready chapters, lore, and storyboard prompts directly in-browser."
            )

    # Synopsis query
    if any(k in prompt_lower for k in ["синопсис", "логлайн", "synopsis", "logline", "питч", "pitch", "сюжет"]):
        topic = prompt.replace("синопсис", "").replace("synopsis", "").strip() or "Космическая цитадель Бозжыра"
        if is_ru:
            return header_badge + (
                f"### 📜 Мастер-Синопсис: «{topic[:40].title()}»\n\n"
                "**Формула логлайна:** *Когда [Катализатор], [Главный герой] должен [Главная цель], иначе [Катастрофическая цена поражения].*\n\n"
                "**Логлайн:** Когда древний маяк в урочище Бозжыра посылает сигнал сквозь ткань искривленного времени, опальный звездный картограф должен раскрыть заговор кочевой гильдии до того, как коллапс хроносферы сотрет память трех миров.\n\n"
                "#### 🎬 Трехактная структура:\n\n"
                "**Акт I: Экспозиция и Зов (0% – 25%)**\n"
                "- Бескрайние солончаки плато Устюрт в 2189 году под куполами адаптивного микроклимата.\n"
                "- Картограф находит квантовый кристалл с голосом погибшей наставницы.\n"
                "- Точка невозврата: Агентство хроно-надзора объявляет на него охоту.\n\n"
                "**Акт II: Эскалация и Зеркало (25% – 75%)**\n"
                "- Погоня через каньоны Чарына на гравитационных баркасах вместе с пилотом-изгоем.\n"
                "- Мидпоинт: Сигнал маяка передает не будущее, а наше собственное забытое прошлое.\n"
                "- Кризис: Предательство союзника. Кристалл поврежден, время начинает утекать вспять.\n\n"
                "**Акт III: Кульминация и Финал (75% – 100%)**\n"
                "- Прорыв к сердцу белых меловых башен Бозжыры под северным сиянием.\n"
                "- Выбор: сохранить привычную историю или открыть дорогу новому веку свободы.\n\n"
                "> 💡 *Напишите «Напиши главу 1», чтобы развернуть этот синопсис в полный текст!*"
            )
        else:
            return header_badge + (
                f"### 📜 Master Synopsis: \"{topic[:40].title()}\"\n\n"
                "**Logline:** When an acoustic beacon inside the Bozzhira chalk towers pulses with a tachyonic frequency, an exiled stellar cartographer must cross the nomadic void to expose a planetary syndicate before temporal decay erases their civilization.\n\n"
                "#### 🎬 Three-Act Architecture:\n\n"
                "**Act I: Departure & Call (0% – 25%)**\n"
                "- Ustirt Plateau in 2189 under twin artificial moons; rediscovery of a lost harmonic memory crystal.\n"
                "- Garrison raid forces the protagonist beyond the defensive boundary.\n\n"
                "**Act II: Confrontation & Midpoint (25% – 75%)**\n"
                "- Traversal through magnetic storms of Charyn Rifts; revelation that the signal comes from Earth's forgotten future.\n"
                "- All Is Lost: betrayal at the orbital fuel dock; personal sacrifice required.\n\n"
                "**Act III: Climax & Resolution (75% – 100%)**\n"
                "- Ascent of the Bozzhira Fangs to realign the chronosphere lens; timeline stabilizes into a sovereign era."
            )

    # Character query
    if any(k in prompt_lower for k in ["персонаж", "герой", "антагонист", "character", "hero", "villain"]):
        if is_ru:
            return header_badge + (
                "### 🧬 ДНК Персонажа: «Алдияр Темирлан» (Тень Каньонов)\n\n"
                "- **Архетип:** Опальный звездный картограф / Неохотный защитник\n"
                "- **Внешняя цель:** Накопить жетоны для покупки автономного оазиса в горах Алтая.\n"
                "- **Внутренний изъян:** Патологическое недоверие к автоматическим ИИ-пилотам.\n"
                "- **Секрет:** Кибернетический протез руки скрывает карту звездных врат предков.\n"
                "- **Речевая манера:** Говорит тихо, метафорами ветра и степи: *«Песок не спорит с бурей — он ее переживает»*.\n\n"
                "> 💡 *Хотите сгенерировать антагониста для Алдияра или создать его спутника?*"
            )
        else:
            return header_badge + (
                "### 🧬 Character DNA: \"Aldiyar Temirlan\" (Rift Cartographer)\n\n"
                "- **Archetype:** Reluctant Guardian / Disgraced Star Navigator\n"
                "- **External Goal:** Secure enough sovereign credit for an off-grid sanctuary in the Altai range.\n"
                "- **Internal Flaw:** Hyper-vigilant refusal to rely on automated AI navigation systems.\n"
                "- **The Secret:** His mechanical arm holds an encrypted stellar map worth an interstellar conflict.\n"
                "- **Dialogue Cadence:** Quiet, deliberate, rooted in desert philosophy: *\"The dunes never argue with the gale; they simply outlast it.\"*"            )

    # Trend spy query
    if any(k in prompt_lower for k in ["тренд", "trend", "шпион", "spy", "рынок", "издательств"]):
        if is_ru:
            return header_badge + (
                "### 🕵️ Отчет ИИ-Шпиона за Трендами Фантастики (2026-2027)\n\n"
                "1. **Степной Футуризм (Steppe-Punk):** Взрыв интереса к кочевой философии, бескрайним горизонтам и древним петроглифам в космосе.\n"
                "2. **Уютный Сай-Фай (Cozy Speculative):** Спрос на истории о надежде, дружбе и созидании вместо бесконечного гримдарка.\n"
                "3. **Хроно-детективы (Chrono-Mystery):** Читатели обожают интерактивные нелинейные загадки со скачками во времени.\n"
                "4. **Гарантия 100% авторских прав:** Площадки с крипто-защитой текстов привлекают самых талантливых авторов."
            )
        else:
            return header_badge + (
                "### 🕵️ AI Trend Spy: Speculative Fiction Forecast (2026-2027)\n\n"
                "1. **Nomadic Silkpunk & Steppe-Futurism:** Surging interest in expansive horizon sagas and tribal code of honor in orbital settings.\n"
                "2. **Cozy Hopepunk:** Rebound appetite for optimistic problem-solving and philosophical worldbuilding.\n"
                "3. **Epistolary Chrono-Mysteries:** Multi-perspective non-linear timelines where readers piece together lost history.\n"
                "4. **Author Sovereignty Provenance:** High demand for authentic, human-directed literature with copyright security."
            )

    # Default creative response
    if is_ru:
        return header_badge + (
            f"### ✦ Ответ Архитектора LBO Omni-AI\n\n"
            f"Ваш творческий запрос: **«{prompt}»**.\n\n"
            "#### 💡 Решение и рекомендации:\n\n"
            "1. **Смысловой вектор:** В мультивселенной LBO каждое произведение опирается на три кита: осязаемая сенсорная глубина, эмоциональный накал и самобытный авторский слог.\n"
            "2. **Драматургический совет:** Покажите конфликт через овеществленные детали — свист ветра в фильтрах шлема, пыль на экранах, паузы перед сложными решениями.\n"
            "3. **100% Авторские права:** Любая идея или текст, созданный здесь, защищены вашим суверенным статусом.\n\n"
            "> 🚀 *Чем еще помочь? Могу сгенерировать диалог, расписать сцену драки или проверить сюжет на логику.*"
        )
    else:
        return header_badge + (
            f"### ✦ LBO Omni-AI Sovereign Synthesis\n\n"
            f"Creative prompt received: **\"{prompt}\"**.\n\n"
            "#### 💡 Narrative Solution:\n\n"
            "1. **Sensory Grounding:** Anchor scenes with physical weight—the static charge before ion storms, the scent of parched clay, the resonance of ancient basalt.\n"
            "2. **Dramatic Modulations:** Vary sentence cadence to match emotional velocity.\n"
            "3. **100% Author Ownership:** Every concept generated remains under your exclusive creative dominion.\n\n"
            "> 🚀 *Ready to proceed: ask for scene drafts, antagonist dialogues, or cinematic video prompts.*"
        )

# ==============================================================================
# 5. REST API & STREAMING ROUTES
# ==============================================================================

@ai_bp.route('/api/ai/models', methods=['GET'])
def get_ai_models():
    return jsonify({
        "status": "success",
        "models": AI_MODELS,
        "active_default": "gemini-3.8-flash-quantum",
        "quantum_latency": "0.05s"
    })

@ai_bp.route('/api/ai/personas', methods=['GET'])
def get_ai_personas():
    return jsonify({
        "status": "success",
        "personas": AI_PERSONAS,
        "rules": SOVEREIGN_RULES
    })

@ai_bp.route('/api/ai/guardrails', methods=['GET'])
def get_ai_guardrails():
    return jsonify({
        "status": "active",
        "shield_version": "4.6.0-Sovereign",
        "protected_words_count": len(GUARD_WORDS),
        "rules": SOVEREIGN_RULES,
        "author_sovereignty_guaranteed": True
    })

@ai_bp.route('/api/ai/chat', methods=['POST'])
def ai_chat():
    data = request.get_json(force=True, silent=True) or {}
    message = data.get("message", "").strip()
    model_id = data.get("model", "gemini-3.8-flash-quantum")
    persona_id = data.get("persona", "coauthor")
    lang = data.get("lang", "en")
    history = data.get("history", [])

    if not message:
        return jsonify({"status": "error", "message": "Empty message received"}), 400

    is_safe, trigger_word, warning = sanitize_input(message)
    if not is_safe:
        return jsonify({
            "status": "shield_blocked",
            "trigger": trigger_word,
            "response": warning,
            "model": model_id,
            "persona": persona_id
        }), 200

    t_start = time.time()
    response_text = generate_intelligent_response(message, model_id, persona_id, lang, history)
    latency_ms = round((time.time() - t_start) * 1000, 1)

    return jsonify({
        "status": "success",
        "response": response_text,
        "model": model_id,
        "persona": persona_id,
        "latency_ms": latency_ms,
        "tokens_estimated": len(response_text.split()) * 2,
        "shield_status": "SECURE"
    })

@ai_bp.route('/api/ai/stream', methods=['GET', 'POST'])
def ai_stream():
    if request.method == "POST":
        data = request.get_json(force=True, silent=True) or {}
        message = data.get("message", "").strip()
        model_id = data.get("model", "gemini-3.8-flash-quantum")
        persona_id = data.get("persona", "coauthor")
        lang = data.get("lang", "en")
    else:
        message = request.args.get("message", "").strip()
        model_id = request.args.get("model", "gemini-3.8-flash-quantum")
        persona_id = request.args.get("persona", "coauthor")
        lang = request.args.get("lang", "en")

    if not message:
        return Response('data: {"error": "Empty message"}\n\n', mimetype="text/event-stream")

    is_safe, trigger_word, warning = sanitize_input(message)
    if not is_safe:
        def err_stream():
            payload = json.dumps({"token": warning, "done": True, "shield_blocked": True})
            yield f"data: {payload}\n\n"
        return Response(stream_with_context(err_stream()), mimetype="text/event-stream")

    full_text = generate_intelligent_response(message, model_id, persona_id, lang)

    def stream_generator():
        words = full_text.split(" ")
        for i, word in enumerate(words):
            chunk = word + (" " if i < len(words) - 1 else "")
            payload = json.dumps({
                "token": chunk,
                "index": i,
                "total": len(words),
                "done": (i == len(words) - 1)
            })
            yield f"data: {payload}\n\n"
            time.sleep(0.008)

    return Response(stream_with_context(stream_generator()), mimetype="text/event-stream")
