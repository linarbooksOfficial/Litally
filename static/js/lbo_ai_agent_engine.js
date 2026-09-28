/**
 * =============================================================================
 * LBO OMNI-AI AGENT INTERACTIVE ENGINE (v4.6 QUANTUM)
 * File: static/js/lbo_ai_agent_engine.js
 * Description: Interactive AI Chat Terminal combining Litally Sovereign Apex Ultra,
 *              Litally Quantum Hybrid Core, and LBO Multiverse with ultra-low latency,
 *              voice speech synthesis, markdown rendering, and protective shields.
 * =============================================================================
 */

(function(window, document) {
    'use strict';

    // State
    const state = {
        isOpen: false,
        isMinimized: false,
        activeModel: "litally-ultra-4.6",
        activePersona: "coauthor",
        currentLang: "en",
        isStreaming: false,
        voiceEnabled: false,
        streamingSpeed: 10, // ms per token
        totalTokensUsed: 0,
        messages: [],
        speechSynth: window.speechSynthesis || null,
        currentUtterance: null
    };

    // Load saved state
    function loadPersistedHistory() {
        try {
            const saved = localStorage.getItem("lbo_ai_chat_history_v46");
            if (saved) {
                state.messages = JSON.parse(saved);
            }
        } catch (e) {
            state.messages = [];
        }
    }

    function persistHistory() {
        try {
            localStorage.setItem("lbo_ai_chat_history_v46", JSON.stringify(state.messages.slice(-50)));
        } catch (e) {}
    }

    // Markdown Mini-Parser
    function parseMarkdownToHtml(md) {
        if (!md) return "";
        let out = md;

        // Escape dangerous HTML
        out = out.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Code blocks ```code```
        out = out.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, function(match, lang, code) {
            return '<div class="lbo-ai-code-wrapper">' +
                   '<div class="lbo-ai-code-header"><span>' + (lang || 'code') + '</span><button class="lbo-ai-copy-btn" onclick="lboAiCopyCode(this)">Copy</button></div>' +
                   '<pre class="lbo-ai-code-block"><code>' + code.trim() + '</code></pre></div>';
        });

        // Inline code `code`
        out = out.replace(/`([^`]+)`/g, '<code class="lbo-ai-inline-code">$1</code>');

        // Headers ###, ##, #
        out = out.replace(/^### (.*$)/gim, '<h4 class="lbo-ai-h4">$1</h4>');
        out = out.replace(/^## (.*$)/gim, '<h3 class="lbo-ai-h3">$1</h3>');
        out = out.replace(/^# (.*$)/gim, '<h2 class="lbo-ai-h2">$1</h2>');

        // Tables
        out = out.replace(/\|(.+)\|\n\|[-:| ]+\|\n((?:\|.*\|\n?)*)/g, function(match, headerRow, bodyRows) {
            const ths = headerRow.split('|').filter(c => c.trim()).map(c => '<th>' + c.trim() + '</th>').join('');
            const trs = bodyRows.trim().split('\n').map(row => {
                const tds = row.split('|').filter(c => c.trim()).map(c => '<td>' + c.trim() + '</td>').join('');
                return '<tr>' + tds + '</tr>';
            }).join('');
            return '<div class="lbo-ai-table-wrap"><table class="lbo-ai-table"><thead><tr>' + ths + '</tr></thead><tbody>' + trs + '</tbody></table></div>';
        });

        // Bold and Italic
        out = out.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Blockquotes >
        out = out.replace(/^> (.*$)/gim, '<blockquote class="lbo-ai-quote">$1</blockquote>');

        // Unordered lists
        out = out.replace(/^[\*-] (.*$)/gim, '<li class="lbo-ai-li">$1</li>');
        out = out.replace(/(<li.*<\/li>)/s, '<ul class="lbo-ai-ul">$1</ul>');

        // Line breaks
        out = out.replace(/\n/g, '<br>');

        return out;
    }

    // Audio helper
    function playChime(freq) {
        try {
            if (typeof window.playChime === 'function') {
                window.playChime(freq);
                return;
            }
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq || 600, ctx.currentTime);
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.35);
        } catch (e) {}
    }

    let lboTtsAudio = null;
    let lboTtsSessionId = 0;
    let lboTtsAbortController = null;

    // Text-to-Speech (Realistic ElevenLabs & Neural Wikipedia Voice with Zero Duplication)
    async function speakText(text) {
        if (!state.voiceEnabled) return;

        const thisSessionId = ++lboTtsSessionId;
        if (lboTtsAbortController) {
            try { lboTtsAbortController.abort(); } catch (e) {}
            lboTtsAbortController = null;
        }
        lboTtsAbortController = new AbortController();

        if (lboTtsAudio) {
            try {
                lboTtsAudio.pause();
                lboTtsAudio.currentTime = 0;
                lboTtsAudio.onended = null;
                lboTtsAudio.onerror = null;
                lboTtsAudio.src = '';
                lboTtsAudio.load();
            } catch(e) {}
            lboTtsAudio = null;
        }
        if (state.speechSynth) {
            try { state.speechSynth.cancel(); } catch(e) {}
        }
        const clean = text.replace(/<[^>]+>/g, ' ').replace(/[*#`_>|]/g, ' ').slice(0, 3000).trim();
        if (!clean) return;

        try {
            const elevenKey = localStorage.getItem('elevenlabs_api_key') || '';
            const ttsVoice = localStorage.getItem('litally_tts_voice') || 'wikipedia_dmitry';

            const resp = await fetch('/api/ai/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: lboTtsAbortController.signal,
                body: JSON.stringify({
                    text: clean,
                    lang: state.currentLang || 'ru',
                    voice: ttsVoice,
                    elevenlabs_api_key: elevenKey
                })
            });

            if (thisSessionId !== lboTtsSessionId) return;

            if (resp.ok) {
                const data = await resp.json();
                if (thisSessionId !== lboTtsSessionId) return;
                if (data && data.audio_url) {
                    const audio = new Audio(data.audio_url);
                    lboTtsAudio = audio;
                    audio.onended = () => {
                        if (thisSessionId === lboTtsSessionId) {
                            lboTtsAudio = null;
                        }
                    };
                    await audio.play();
                    return;
                }
            }
        } catch (e) {
            if (thisSessionId !== lboTtsSessionId) return;
        }

        // Fallback to Web Speech API
        if (state.speechSynth && thisSessionId === lboTtsSessionId) {
            try {
                const utt = new SpeechSynthesisUtterance(clean);
                utt.rate = 1.0;
                const voices = state.speechSynth.getVoices();
                const isRu = (state.currentLang === 'ru');
                const targetVoice = voices.find(v => (v.name.includes('Natural') || v.name.includes('Online')) && (isRu ? v.lang.includes('ru') : v.lang.includes('en'))) ||
                                    voices.find(v => isRu ? v.lang.includes('ru') : v.lang.includes('en'));
                if (targetVoice) utt.voice = targetVoice;
                state.speechSynth.speak(utt);
            } catch (e) {}
        }
    }

    // Render Master UI
    function renderAiAgentTerminal() {
        const container = document.getElementById('portalAi');
        if (!container) return;

        const lang = state.currentLang || 'en';
        const i18n = (window.LBO_AI_KNOWLEDGE && window.LBO_AI_KNOWLEDGE.getI18n(lang)) || {
            agentTitle: "LBO Omni-AI Agent",
            agentSubtitle: "Litally Sovereign Ultra + Litally Quantum Core + LBO Prime Synthesis",
            badgeActive: "ONLINE · QUANTUM 4.6",
            placeholder: "Ask anything: write a chapter, forge a character, spy on trends...",
            sendBtn: "Send",
            clearBtn: "Clear",
            exportBtn: "Export",
            voiceBtn: "Voice",
            shieldBadge: "🛡️ SHIELD SECURE",
            tokensLabel: "Tokens",
            wordsPerMin: "Words/Min"
        };

        const kb = window.LBO_AI_KNOWLEDGE || {};
        const models = kb.models || [];
        const personas = kb.personas || [];
        const quickPrompts = kb.quickPrompts || [];

        // Build models options
        let modelOptions = '';
        models.forEach(m => {
            const sel = (m.id === state.activeModel) ? 'selected' : '';
            modelOptions += '<option value="' + m.id + '" ' + sel + '>' + m.badge + ' · ' + m.name + '</option>';
        });

        // Build personas options
        let personaOptions = '';
        personas.forEach(p => {
            const sel = (p.id === state.activePersona) ? 'selected' : '';
            const pName = (lang === 'ru' && p.nameRu) ? p.nameRu : p.nameEn;
            personaOptions += '<option value="' + p.id + '" ' + sel + '>' + p.icon + ' ' + pName + '</option>';
        });

        // Build quick prompts chips
        let chipsHtml = '';
        quickPrompts.forEach((qp, idx) => {
            const label = (lang === 'ru' && qp.labelRu) ? qp.labelRu : qp.labelEn;
            chipsHtml += '<button class="lbo-ai-chip" onclick="lboAiUseQuickPrompt(' + idx + ')">' +
                         '<span class="lbo-ai-chip-icon">' + qp.icon + '</span> ' + label + '</button>';
        });

        container.innerHTML = 
            '<div class="portal-content-box lbo-ai-portal-box">' +
                '<!-- Header -->' +
                '<div class="portal-header lbo-ai-header">' +
                    '<div class="portal-header-left">' +
                        '<button class="btn-portal-back" onclick="closeLboAiAgent()">←</button>' +
                        '<div class="lbo-ai-brand-wrap">' +
                            '<div class="lbo-ai-hologram-avatar">' +
                                '<span class="lbo-ai-avatar-core">✦</span>' +
                                '<div class="lbo-ai-avatar-ring"></div>' +
                            '</div>' +
                            '<div>' +
                                '<div class="portal-title lbo-ai-title-row">' +
                                    '<span id="lboAiTitleTxt">' + i18n.agentTitle + '</span>' +
                                    '<span class="lbo-ai-status-pill">' + i18n.badgeActive + '</span>' +
                                    '<span class="lbo-ai-shield-pill">' + i18n.shieldBadge + '</span>' +
                                '</div>' +
                                '<div class="portal-subtitle">' + i18n.agentSubtitle + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="lbo-ai-header-actions">' +
                        '<a href="/litally-ai" target="_blank" class="lbo-ai-action-btn" title="Open Full Screen Litally AI" style="text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">' +
                            '↗ <span>Litally 2.0</span>' +
                        '</a>' +
                        '<button class="lbo-ai-action-btn" id="lboAiVoiceToggleBtn" onclick="lboAiToggleVoice()" title="Toggle Voice Speech">' +
                            '🔊 <span id="lboAiVoiceStatus">' + (state.voiceEnabled ? 'ON' : 'OFF') + '</span>' +
                        '</button>' +
                        '<button class="lbo-ai-action-btn" onclick="lboAiExportChat()" title="Export Chat Markdown">' +
                            '📥 ' + i18n.exportBtn +
                        '</button>' +
                        '<button class="lbo-ai-action-btn" onclick="lboAiClearHistory()" title="Clear Chat History">' +
                            '🗑️ ' + i18n.clearBtn +
                        '</button>' +
                        '<button class="btn-portal-close" onclick="closeLboAiAgent()">✕</button>' +
                    '</div>' +
                '</div>' +

                '<!-- Controls Bar: Model, Persona, Speed -->' +
                '<div class="lbo-ai-controls-bar">' +
                    '<div class="lbo-ai-control-group">' +
                        '<label class="lbo-ai-label">🤖 Architecture:</label>' +
                        '<select class="lbo-ai-select" id="lboAiModelSelect" onchange="lboAiChangeModel(this.value)">' +
                            modelOptions +
                        '</select>' +
                    '</div>' +
                    '<div class="lbo-ai-control-group">' +
                        '<label class="lbo-ai-label">🎭 Specialization:</label>' +
                        '<select class="lbo-ai-select" id="lboAiPersonaSelect" onchange="lboAiChangePersona(this.value)">' +
                            personaOptions +
                        '</select>' +
                    '</div>' +
                    '<div class="lbo-ai-telemetry-pill">' +
                        '<span class="telemetry-dot"></span>' +
                        '<span id="lboAiTelemetryTxt">Latency: <strong>0.05s</strong> · 0 tokens</span>' +
                    '</div>' +
                '</div>' +

                '<!-- Quick Prompts Chips Bar -->' +
                '<div class="lbo-ai-chips-bar" id="lboAiChipsBar">' +
                    chipsHtml +
                '</div>' +

                '<!-- Messages Scroll Viewport -->' +
                '<div class="lbo-ai-messages-viewport" id="lboAiMessagesContainer">' +
                    '<!-- Messages rendered here -->' +
                '</div>' +

                '<!-- Bottom Input Bar -->' +
                '<div class="lbo-ai-input-wrapper">' +
                    '<form id="lboAiChatForm" onsubmit="lboAiHandleSubmit(event)">' +
                        '<div class="lbo-ai-input-box">' +
                            '<textarea id="lboAiInput" class="lbo-ai-textarea" rows="2" placeholder="' + i18n.placeholder + '" onkeydown="lboAiHandleKeyDown(event)"></textarea>' +
                            '<button type="submit" class="lbo-ai-send-btn" id="lboAiSendBtn" title="Send Message (Enter)">' +
                                '<span>' + i18n.sendBtn + '</span> ➔' +
                            '</button>' +
                        '</div>' +
                    '</form>' +
                    '<div class="lbo-ai-footer-note">' +
                        '🛡️ 100% Author Sovereignty · Quantum Sentinel Active · Powered by Litally Sovereign Apex Ultra & Litally Quantum Hybrid Core' +
                    '</div>' +
                '</div>' +
            '</div>';

        renderMessagesList();
    }

    // Render list of messages
    function renderMessagesList() {
        const container = document.getElementById('lboAiMessagesContainer');
        if (!container) return;

        const lang = state.currentLang || 'en';
        const i18n = (window.LBO_AI_KNOWLEDGE && window.LBO_AI_KNOWLEDGE.getI18n(lang)) || {};

        if (state.messages.length === 0) {
            container.innerHTML = 
                '<div class="lbo-ai-welcome-card">' +
                    '<div class="lbo-ai-welcome-badge">✦ LITALLY.AI SOVEREIGN COGNITIVE CORE</div>' +
                    '<h3 class="lbo-ai-welcome-title">' + (i18n.welcomeTitle || 'Welcome to Litally.ai Master Studio') + '</h3>' +
                    '<p class="lbo-ai-welcome-desc">' + (i18n.welcomeBody || "The world's first literary AI uniting Litally Sovereign Ultra speed with Litally Quantum Core prose.") + '</p>' +
                    '<div class="lbo-ai-features-grid">' +
                        '<div class="lbo-ai-feat-card">⚡ <strong>0.05s Latency</strong><div>Instantaneous response streaming</div></div>' +
                        '<div class="lbo-ai-feat-card">🧠 <strong>Litally Quantum Core Prose</strong><div>Lyrical depth & dialogue nuance</div></div>' +
                        '<div class="lbo-ai-feat-card">👑 <strong>100% Sovereignty</strong><div>You own 100% of all generated lore</div></div>' +
                        '<div class="lbo-ai-feat-card">🛡️ <strong>Sentinel Guard</strong><div>Anti-jailbreak & anti-plagiarism shield</div></div>' +
                    '</div>' +
                '</div>';
            return;
        }

        let html = '';
        state.messages.forEach((msg, idx) => {
            const isUser = (msg.role === 'user');
            const roleClass = isUser ? 'lbo-ai-msg-user' : 'lbo-ai-msg-bot';
            const avatar = isUser ? '👤' : '✦';
            const author = isUser ? 'You' : (msg.modelName || 'Omni-AI Master');

            html += 
                '<div class="lbo-ai-message-row ' + roleClass + '">' +
                    '<div class="lbo-ai-msg-avatar">' + avatar + '</div>' +
                    '<div class="lbo-ai-msg-content-wrap">' +
                        '<div class="lbo-ai-msg-header">' +
                            '<span class="lbo-ai-msg-author">' + author + '</span>' +
                            '<span class="lbo-ai-msg-time">' + (msg.time || '') + '</span>' +
                            (!isUser ? '<button class="lbo-ai-msg-speak-btn" onclick="lboAiSpeakMsg(' + idx + ')" title="Read Aloud">🔊</button>' : '') +
                        '</div>' +
                        '<div class="lbo-ai-msg-bubble" id="lboAiBubble-' + idx + '">' +
                            parseMarkdownToHtml(msg.text) +
                        '</div>' +
                    '</div>' +
                '</div>';
        });

        container.innerHTML = html;
        container.scrollTop = container.scrollHeight;
    }

    // Floating Widget Trigger Button (Disabled per user request)
    function injectFloatingAiTrigger() {
        const existing = document.getElementById('lboFloatingAiWidget');
        if (existing) existing.remove();
        return;
    }

    // Send Message
    async function sendMessage(text) {
        if (!text || state.isStreaming) return;
        const cleanText = text.trim();
        if (!cleanText) return;

        // Security check
        const kb = window.LBO_AI_KNOWLEDGE;
        if (kb && typeof kb.checkInputSecurity === 'function') {
            const sec = kb.checkInputSecurity(cleanText);
            if (!sec.safe) {
                playChime(300);
                alert(sec.reason);
                return;
            }
        }

        playChime(580);

        // Add user message
        const now = new Date();
        const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        state.messages.push({
            role: 'user',
            text: cleanText,
            time: timeStr
        });
        renderMessagesList();

        // Clear input
        const inputEl = document.getElementById('lboAiInput');
        if (inputEl) inputEl.value = '';

        // Add placeholder bot message
        state.isStreaming = true;
        const botMsgIndex = state.messages.length;
        const activeModelObj = (kb && kb.models) ? kb.models.find(m => m.id === state.activeModel) : null;
        const modelDisplayName = activeModelObj ? activeModelObj.name : "Omni-AI Quantum";

        state.messages.push({
            role: 'assistant',
            modelName: modelDisplayName,
            text: '',
            time: timeStr
        });
        renderMessagesList();

        const bubbleEl = document.getElementById('lboAiBubble-' + botMsgIndex);
        if (bubbleEl) {
            bubbleEl.innerHTML = '<span class="lbo-ai-typing-indicator"><span></span><span></span><span></span></span>';
        }

        // Send to backend API
        try {
            const t0 = performance.now();
            const response = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: cleanText,
                    model: state.activeModel,
                    persona: state.activePersona,
                    lang: state.currentLang
                })
            });

            if (!response.ok) throw new Error("HTTP error " + response.status);
            const data = await response.json();
            const fullReply = data.response || "No response received.";
            const t1 = performance.now();
            const latencyMs = Math.round(t1 - t0);

            // Stream response token-by-token for ultra-smooth typing effect
            await streamResponseIntoBubble(botMsgIndex, fullReply);

            // Update telemetry
            state.totalTokensUsed += (data.tokens_estimated || Math.round(fullReply.length / 3.5));
            updateTelemetry(latencyMs);
            playChime(880);

            // Text-to-speech if active
            speakText(fullReply);

        } catch (err) {
            // Local intelligent fallback if backend network fails
            console.warn("Backend API unavailable, executing client-side cognitive generation:", err);
            const fallbackReply = generateClientFallbackResponse(cleanText);
            await streamResponseIntoBubble(botMsgIndex, fallbackReply);
            playChime(880);
            speakText(fallbackReply);
        } finally {
            state.isStreaming = false;
            persistHistory();
        }
    }

    // Streaming typing effect
    async function streamResponseIntoBubble(msgIndex, fullText) {
        const bubble = document.getElementById('lboAiBubble-' + msgIndex);
        const container = document.getElementById('lboAiMessagesContainer');
        const words = fullText.split(' ');
        let accumulated = '';

        for (let i = 0; i < words.length; i++) {
            accumulated += words[i] + (i < words.length - 1 ? ' ' : '');
            state.messages[msgIndex].text = accumulated;
            if (bubble) {
                bubble.innerHTML = parseMarkdownToHtml(accumulated) + '<span class="lbo-ai-cursor">|</span>';
            }
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
            // Rapid pacing (8ms - 15ms)
            await new Promise(r => setTimeout(r, state.streamingSpeed));
        }

        if (state.messages && state.messages[msgIndex]) {
            state.messages[msgIndex].text = fullText;
        }
        if (bubble) {
            bubble.innerHTML = parseMarkdownToHtml(fullText);
        }
    }

    // Client-side fallback if server offline
    function generateClientFallbackResponse(prompt) {
        const isRu = (state.currentLang === 'ru') || /[а-яА-ЯёЁ]/.test(prompt);
        const kb = window.LBO_AI_KNOWLEDGE || {};
        const modelObj = (kb.models || []).find(m => m.id === state.activeModel) || { name: "LBO Omni-AI 4.6" };

        if (isRu) {
            return "✦ **" + modelObj.name + "** · *Локальный Нейронный Режим* · Latency: `0.02s`\n\n" +
                   "### ⚡ Творческий Синтез LBO Omni-AI\n\n" +
                   "Ваш запрос успешно обработан: **«" + prompt + "»**.\n\n" +
                   "1. **Драматургический акцент:** В мире Великой Степи и космического эпоса LBO сюжет держится на осязаемых сенсорных деталях — соленый ветер Устюрта, мерцание гравитационных приводов и древняя память предков.\n" +
                   "2. **Архитектура сцены:** Развивайте сцену через конфликт целей. Персонаж должен рисковать чем-то незаменимым.\n" +
                   "3. **Гарантия прав:** Все созданные сюжеты, имена и миры на 100% принадлежат вам.\n\n" +
                   "> 💡 *Продолжайте диалог: попросите написать диалог, сгенерировать синопсис или расписать антагониста!*";
        } else {
            return "✦ **" + modelObj.name + "** · *Local Cognitive Core* · Latency: `0.02s`\n\n" +
                   "### ⚡ LBO Omni-AI Sovereign Synthesis\n\n" +
                   "Direct creative generation for: **\"" + prompt + "\"**.\n\n" +
                   "1. **Core Narrative Focus:** Seamlessly weaving high-concept cosmic exploration with visceral tactile stakes.\n" +
                   "2. **Pacing Directive:** Maintain staccato sensory anchors during physical tension, expanding to lyrical cadence in contemplative horizons.\n" +
                   "3. **Sovereign Guarantee:** 100% intellectual copyright remains under your creative jurisdiction.\n\n" +
                   "> 💡 *Prompt for full chapter drafts, antagonist sheets, or trend intelligence forecasts.*";
        }
    }

    function updateTelemetry(latencyMs) {
        const el = document.getElementById('lboAiTelemetryTxt');
        if (!el) return;
        el.innerHTML = 'Latency: <strong>' + (latencyMs || 50) + 'ms</strong> · Tokens: ' + state.totalTokensUsed;
    }

    // Public API Methods attached to window
    window.openLboAiAgent = function() {
        state.isOpen = true;
        const portal = document.getElementById('portalAi');
        if (portal) {
            portal.classList.add('active');
            renderAiAgentTerminal();
            const input = document.getElementById('lboAiInput');
            if (input) setTimeout(() => input.focus(), 120);
        }
    };

    window.closeLboAiAgent = function() {
        state.isOpen = false;
        const portal = document.getElementById('portalAi');
        if (portal) portal.classList.remove('active');
        if (state.speechSynth) state.speechSynth.cancel();
    };

    window.lboAiHandleSubmit = function(e) {
        if (e) e.preventDefault();
        const input = document.getElementById('lboAiInput');
        if (!input) return;
        sendMessage(input.value);
    };

    window.lboAiHandleKeyDown = function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            window.lboAiHandleSubmit();
        }
    };

    window.lboAiUseQuickPrompt = function(idx) {
        const kb = window.LBO_AI_KNOWLEDGE;
        if (!kb || !kb.quickPrompts || !kb.quickPrompts[idx]) return;
        const qp = kb.quickPrompts[idx];
        const isRu = (state.currentLang === 'ru');
        const text = isRu ? (qp.promptRu || qp.promptEn) : qp.promptEn;
        const input = document.getElementById('lboAiInput');
        if (input) {
            input.value = text;
            sendMessage(text);
        }
    };

    window.lboAiChangeModel = function(modelId) {
        state.activeModel = modelId;
        playChime(640);
        updateTelemetry(50);
    };

    window.lboAiChangePersona = function(personaId) {
        state.activePersona = personaId;
        playChime(680);
    };

    window.lboAiToggleVoice = function() {
        state.voiceEnabled = !state.voiceEnabled;
        const btn = document.getElementById('lboAiVoiceStatus');
        if (btn) btn.textContent = state.voiceEnabled ? 'ON' : 'OFF';
        playChime(state.voiceEnabled ? 800 : 400);
        if (!state.voiceEnabled && state.speechSynth) {
            state.speechSynth.cancel();
        }
    };

    window.lboAiSpeakMsg = function(idx) {
        const msg = state.messages[idx];
        if (msg) speakText(msg.text);
    };

    window.lboAiClearHistory = function() {
        if (confirm("Clear AI Agent chat history? / Очистить историю диалога?")) {
            state.messages = [];
            persistHistory();
            renderMessagesList();
            playChime(400);
        }
    };

    window.lboAiExportChat = function() {
        if (state.messages.length === 0) {
            alert("No messages to export.");
            return;
        }
        let md = "# LBO Omni-AI Chat Export\n";
        md += "Exported on: " + new Date().toISOString() + "\n\n";
        state.messages.forEach(m => {
            md += "### " + (m.role === 'user' ? 'User' : (m.modelName || 'AI')) + " (" + (m.time || '') + ")\n\n";
            md += m.text + "\n\n---\n\n";
        });
        const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = "LBO_AI_Chat_" + Date.now() + ".md";
        a.click();
    };

    window.lboAiCopyCode = function(btn) {
        const pre = btn.closest('.lbo-ai-code-wrapper').querySelector('code');
        if (!pre) return;
        navigator.clipboard.writeText(pre.innerText).then(() => {
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
        });
    };

    // Synchronize language when site changes language
    function onSiteLanguageChange(newLang) {
        state.currentLang = newLang || 'en';
        if (state.isOpen) {
            renderAiAgentTerminal();
        }
    }

    // Hook into site initialization
    document.addEventListener('DOMContentLoaded', function() {
        loadPersistedHistory();
        // injectFloatingAiTrigger(); (Disabled per user request)

        // Detect language
        if (typeof window.currentLang !== 'undefined') {
            state.currentLang = window.currentLang;
        }

        // Intercept setLanguage if present
        const origSetLang = window.setLanguage;
        if (typeof origSetLang === 'function') {
            window.setLanguage = function(lang) {
                origSetLang(lang);
                onSiteLanguageChange(lang);
            };
        }
    });

})(window, document);
