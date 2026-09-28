/**
 * Google Chrome Search Chatbot (Omnibox & Live Web Assistant)
 * Integrated into both Litally AI and Litdeo Studio.
 */
(function() {
    'use strict';

    let isOpen = false;
    let isBusy = false;
    const history = [];

    const GoogleChromeSearchBot = {
        get isOpen() { return isOpen; },

        init() {
            this.injectWidget();
            this.bindEvents();
        },

        injectWidget() {
            if (document.getElementById('chromeSearchBotWrapper')) return;

            const isLitdeo = window.location.pathname.includes('video-ai') || !!document.getElementById('videoAiCanvas');
            const pageBadge = isLitdeo ? 'Litdeo Video Studio' : 'Litally AI';

            const widgetHtml = `
            <div id="chromeSearchBotWrapper" class="chrome-bot-root">
                <!-- Floating Launcher Pill -->
                <button type="button" id="btnChromeSearchBotLauncher" class="chrome-launcher-btn" title="Открыть чат-бота Google Chrome Search">
                    <svg viewBox="0 0 24 24" width="22" height="22" class="chrome-logo-icon">
                        <circle cx="12" cy="12" r="10" fill="#ffffff" />
                        <path fill="#EA4335" d="M12 2C7.38 2 3.48 5.14 2.34 9.42L6.82 14.1C6.46 13.46 6.25 12.75 6.25 12C6.25 8.82 8.82 6.25 12 6.25H21.57C19.74 3.68 16.12 2 12 2Z"/>
                        <path fill="#4285F4" d="M12 6.25C15.18 6.25 17.75 8.82 17.75 12C17.75 12.82 17.52 13.58 17.11 14.24L21.66 18.79C22.52 16.8 23 14.49 23 12C23 6.25 18.66 2 12 2V6.25Z"/>
                        <path fill="#FBBC05" d="M2.34 9.42C2.12 10.23 2 11.09 2 12C2 17.52 6.48 22 12 22C14.49 22 16.8 21.48 18.79 20.66L14.24 16.11C13.58 16.52 12.82 16.75 12 16.75C8.82 16.75 6.25 14.18 6.25 11C6.25 10.36 6.46 9.75 6.82 9.21L2.34 9.42Z"/>
                        <path fill="#34A853" d="M12 22C16.12 22 19.74 20.32 21.57 17.75H12V17.75C8.82 17.75 6.25 15.18 6.25 12C6.25 11.25 6.46 10.54 6.82 9.9L2.34 5.21C1.48 7.2 1 9.51 1 12C1 17.52 5.48 22 11 22H12Z"/>
                        <circle cx="12" cy="12" r="4.2" fill="#ffffff"/>
                        <circle cx="12" cy="12" r="3.2" fill="#4285F4"/>
                    </svg>
                    <span class="chrome-launcher-text">Google Chrome Search</span>
                    <span class="chrome-launcher-live">LIVE</span>
                </button>

                <!-- Chrome Search Bot Window -->
                <div id="chromeSearchBotWindow" class="chrome-bot-window" style="display: none;">
                    
                    <!-- Chrome Header / Tab Bar -->
                    <div class="chrome-window-header">
                        <div class="chrome-tab-pill active">
                            <svg viewBox="0 0 24 24" width="14" height="14">
                                <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                            </svg>
                            <span class="chrome-tab-title">Google Search Assistant</span>
                            <span class="chrome-tab-env-badge">${pageBadge}</span>
                        </div>
                        <div class="chrome-window-controls">
                            <button type="button" class="btn-chrome-win" id="btnMinimizeChromeBot" title="Свернуть">─</button>
                            <button type="button" class="btn-chrome-win close" id="btnCloseChromeBot" title="Закрыть">✕</button>
                        </div>
                    </div>

                    <!-- Chrome Omnibox Bar -->
                    <div class="chrome-omnibox-bar">
                        <div class="chrome-omnibox-box">
                            <span class="chrome-omnibox-lock" title="Безопасное соединение">🔒</span>
                            <span class="chrome-omnibox-proto">https://</span>
                            <span class="chrome-omnibox-host">google.com/search?q=</span>
                            <input type="text" id="chromeOmniboxInput" class="chrome-omnibox-field" placeholder="Поиск в Google или вопрос...">
                            <button type="button" id="btnSubmitOmniboxSearch" class="btn-omnibox-search" title="Искать в Google">🔍</button>
                        </div>
                    </div>

                    <!-- Chat Body & Results Stream -->
                    <div id="chromeBotMessagesStream" class="chrome-bot-messages">
                        <!-- Welcome message -->
                        <div class="chrome-bot-msg bot">
                            <div class="chrome-msg-avatar">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                                    <circle cx="12" cy="12" r="4" fill="#fff"/>
                                </svg>
                            </div>
                            <div class="chrome-msg-content">
                                <div class="chrome-ai-title">🌐 Google Chrome AI Search Copilot</div>
                                <p>Привет! Я поисковый чат-бот Google Chrome. Я нахожу проверенную информацию в интернете в реальном времени, создаю краткие выжимки и генерирую готовые промпты для видео и текстов.</p>
                                
                                <div class="chrome-quick-prompts-label">Быстрые запросы для вдохновения:</div>
                                <div class="chrome-chips-grid">
                                    <button type="button" class="chrome-quick-chip" data-q="Сверхмассивные чёрные дыры и гравитационные линзы 4K">🌌 Чёрные дыры 4K</button>
                                    <button type="button" class="chrome-quick-chip" data-q="Киберпанк мегаполисы ночные неоновые референсы">⚡ Неоновый Киберпанк</button>
                                    <button type="button" class="chrome-quick-chip" data-q="Главные научные открытия 2026 года">🚀 Наука 2026</button>
                                    <button type="button" class="chrome-quick-chip" data-q="Красивые природные пейзажи степи и гор для видео">🌿 Природа и Горы</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Typing Indicator -->
                    <div id="chromeBotLoadingBar" class="chrome-bot-loading" style="display: none;">
                        <span class="chrome-spinner"></span>
                        <span id="chromeBotStatusText">Google Chrome ищет в сети и формирует ответ...</span>
                    </div>

                    <!-- Bottom Search / Chat Input Dock -->
                    <div class="chrome-bot-input-dock">
                        <div class="chrome-input-wrapper">
                            <textarea id="chromeBotPromptInput" class="chrome-chat-textarea" rows="1" placeholder="Задайте вопрос или поисковый запрос..."></textarea>
                            <button type="button" id="btnSendChromeBotMsg" class="btn-chrome-send" title="Отправить">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            `;

            const el = document.createElement('div');
            el.innerHTML = widgetHtml;
            document.body.appendChild(el.firstElementChild);
        },

        bindEvents() {
            const launcher = document.getElementById('btnChromeSearchBotLauncher');
            const win = document.getElementById('chromeSearchBotWindow');
            const closeBtn = document.getElementById('btnCloseChromeBot');
            const minBtn = document.getElementById('btnMinimizeChromeBot');
            const sendBtn = document.getElementById('btnSendChromeBotMsg');
            const textInput = document.getElementById('chromeBotPromptInput');
            const omniboxInput = document.getElementById('chromeOmniboxInput');
            const omniboxBtn = document.getElementById('btnSubmitOmniboxSearch');

            if (launcher) {
                launcher.addEventListener('click', () => this.toggle());
            }
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }
            if (minBtn) {
                minBtn.addEventListener('click', () => this.close());
            }

            if (sendBtn && textInput) {
                sendBtn.addEventListener('click', () => {
                    const q = textInput.value.trim();
                    if (q) {
                        textInput.value = '';
                        this.search(q);
                    }
                });
                textInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        const q = textInput.value.trim();
                        if (q) {
                            textInput.value = '';
                            this.search(q);
                        }
                    }
                });
            }

            if (omniboxBtn && omniboxInput) {
                omniboxBtn.addEventListener('click', () => {
                    const q = omniboxInput.value.trim();
                    if (q) this.search(q);
                });
                omniboxInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const q = omniboxInput.value.trim();
                        if (q) this.search(q);
                    }
                });
            }

            // Quick Chips
            document.addEventListener('click', (e) => {
                const chip = e.target.closest('.chrome-quick-chip');
                if (chip && chip.dataset.q) {
                    this.search(chip.dataset.q);
                }

                // Apply prompt in Litdeo button
                const btnApplyPrompt = e.target.closest('.btn-apply-to-litdeo');
                if (btnApplyPrompt && btnApplyPrompt.dataset.prompt) {
                    this.applyToLitdeo(btnApplyPrompt.dataset.prompt);
                }
            });
        },

        open(initialQuery = '') {
            const win = document.getElementById('chromeSearchBotWindow');
            if (win) {
                win.style.display = 'flex';
                isOpen = true;
            }
            if (initialQuery) {
                const omnibox = document.getElementById('chromeOmniboxInput');
                if (omnibox) omnibox.value = initialQuery;
                this.search(initialQuery);
            }
        },

        close() {
            const win = document.getElementById('chromeSearchBotWindow');
            if (win) {
                win.style.display = 'none';
                isOpen = false;
            }
        },

        toggle() {
            if (isOpen) this.close();
            else this.open();
        },

        async search(query) {
            if (isBusy || !query) return;
            isBusy = true;

            const omnibox = document.getElementById('chromeOmniboxInput');
            if (omnibox) omnibox.value = query;

            // Render User Message
            this.appendUserMessage(query);

            // Show Loading
            const loading = document.getElementById('chromeBotLoadingBar');
            if (loading) loading.style.display = 'flex';

            const isLitdeo = window.location.pathname.includes('video-ai') || !!document.getElementById('videoAiCanvas');
            const source = isLitdeo ? 'litdeo' : 'litally_ai';
            const lang = document.documentElement.lang || 'ru';

            try {
                const resp = await fetch('/api/ai/chrome-search-bot', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        query: query,
                        source: source,
                        lang: lang
                    })
                });
                const data = await resp.json();
                if (loading) loading.style.display = 'none';
                isBusy = false;

                if (data.status === 'success') {
                    this.appendBotResponse(data, isLitdeo);
                } else {
                    this.appendErrorMessage(data.message || 'Ошибка выполнения поискового запроса');
                }
            } catch(err) {
                if (loading) loading.style.display = 'none';
                isBusy = false;
                this.appendErrorMessage('Не удалось связаться со шлюзом Google Chrome Search');
            }
        },

        appendUserMessage(text) {
            const stream = document.getElementById('chromeBotMessagesStream');
            if (!stream) return;

            const msgDiv = document.createElement('div');
            msgDiv.className = 'chrome-bot-msg user';
            msgDiv.innerHTML = `
                <div class="chrome-msg-bubble user">
                    ${this.escapeHtml(text)}
                </div>
            `;
            stream.appendChild(msgDiv);
            stream.scrollTop = stream.scrollHeight;
        },

        appendBotResponse(data, isLitdeo) {
            const stream = document.getElementById('chromeBotMessagesStream');
            if (!stream) return;

            const msgDiv = document.createElement('div');
            msgDiv.className = 'chrome-bot-msg bot';

            let sourcesHtml = '';
            if (data.sources && data.sources.length > 0) {
                sourcesHtml = `
                    <div class="chrome-sources-box">
                        <div class="chrome-sources-header">🔗 Источники из Google Chrome:</div>
                        <div class="chrome-sources-list">
                            ${data.sources.map(s => `
                                <a href="${this.escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" class="chrome-source-card">
                                    <div class="chrome-source-domain">🌐 ${this.escapeHtml(s.domain || 'google.com')}</div>
                                    <div class="chrome-source-title">${this.escapeHtml(s.title)}</div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            let litdeoCtaHtml = '';
            if (data.video_prompt_suggestion) {
                litdeoCtaHtml = `
                    <div class="chrome-video-prompt-box">
                        <div class="chrome-vp-header">🎬 Рекомендованный 4K видео-промпт для Litdeo:</div>
                        <div class="chrome-vp-text">${this.escapeHtml(data.video_prompt_suggestion)}</div>
                        <button type="button" class="btn-apply-to-litdeo" data-prompt="${this.escapeHtml(data.video_prompt_suggestion)}">
                            ⚡ Использовать в видеостудии Litdeo
                        </button>
                    </div>
                `;
            }

            let relatedHtml = '';
            if (data.related_searches && data.related_searches.length > 0) {
                relatedHtml = `
                    <div class="chrome-related-searches">
                        <small style="color: #94a3b8; font-size: 0.76rem;">Похожие запросы в Google:</small>
                        <div class="chrome-chips-grid mini">
                            ${data.related_searches.map(q => `
                                <button type="button" class="chrome-quick-chip mini" data-q="${this.escapeHtml(q)}">${this.escapeHtml(q)}</button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            // Simple markdown formatter for AI Overview
            let formattedOverview = this.formatMarkdown(data.ai_overview);

            msgDiv.innerHTML = `
                <div class="chrome-msg-avatar">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                        <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                        <circle cx="12" cy="12" r="4" fill="#fff"/>
                    </svg>
                </div>
                <div class="chrome-msg-content">
                    <div class="chrome-ai-overview-card">
                        ${formattedOverview}
                    </div>
                    ${sourcesHtml}
                    ${litdeoCtaHtml}
                    ${relatedHtml}
                </div>
            `;

            stream.appendChild(msgDiv);
            stream.scrollTop = stream.scrollHeight;
        },

        appendErrorMessage(errText) {
            const stream = document.getElementById('chromeBotMessagesStream');
            if (!stream) return;

            const msgDiv = document.createElement('div');
            msgDiv.className = 'chrome-bot-msg bot';
            msgDiv.innerHTML = `
                <div class="chrome-msg-avatar" style="background: #ef4444;">✕</div>
                <div class="chrome-msg-content">
                    <div style="color: #fca5a5; font-size: 0.88rem;">⚠️ ${this.escapeHtml(errText)}</div>
                </div>
            `;
            stream.appendChild(msgDiv);
            stream.scrollTop = stream.scrollHeight;
        },

        applyToLitdeo(promptText) {
            const input = document.getElementById('promptInput');
            if (input) {
                input.value = promptText;
                input.focus();
                // trigger visual pulse
                input.style.boxShadow = '0 0 25px rgba(66, 133, 244, 0.8)';
                setTimeout(() => { input.style.boxShadow = ''; }, 1200);

                if (typeof window.showToast === 'function') {
                    window.showToast('🎬 Промпт из Google Chrome перенесён в студию Litdeo!');
                }
                this.close();
            } else {
                // If on Litally AI, copy to clipboard or toast
                navigator.clipboard.writeText(promptText).then(() => {
                    if (typeof window.showToast === 'function') {
                        window.showToast('📋 Промпт скопирован в буфер обмена!');
                    }
                });
            }
        },

        escapeHtml(text) {
            if (!text) return '';
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        },

        formatMarkdown(md) {
            if (!md) return '';
            let html = md;
            html = html.replace(/### (.*?)
/g, '<h4 class="chrome-h4">$1</h4>');
            html = html.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
            html = html.replace(/\*(.*?)\*/g, '<i>$1</i>');
            html = html.replace(/• (.*?)(?=
|$)/g, '<li>$1</li>');
            html = html.replace(/> 💡 \*(.*?)\*/g, '<div class="chrome-callout">💡 $1</div>');
            html = html.replace(/> 🔍 \*(.*?)\*/g, '<div class="chrome-callout">🔍 $1</div>');
            html = html.replace(/

/g, '<p></p>');
            return html;
        }
    };

    window.GoogleChromeSearchBot = GoogleChromeSearchBot;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => GoogleChromeSearchBot.init());
    } else {
        GoogleChromeSearchBot.init();
    }
})();
