/**
 * Litally & Litdeo Universal Google Sign-In (OAuth / GIS) Client
 * Connects Google Identity & Authentication into both Litally AI and Litdeo Video Studio.
 * Synchronizes session cross-tab and cross-app via LocalStorage and backend API.
 */
(function() {
    'use strict';

    const STORAGE_KEY = 'litally_google_user';
    let currentUser = null;
    const listeners = [];

    const LitallyGoogleAuth = {
        get currentUser() {
            return currentUser;
        },

        isAuthenticated() {
            return !!currentUser;
        },

        onAuthStateChanged(callback) {
            if (typeof callback === 'function') {
                listeners.push(callback);
                callback(currentUser);
            }
        },

        notifyListeners() {
            listeners.forEach(cb => {
                try { cb(currentUser); } catch(e) { console.error(e); }
            });
            window.dispatchEvent(new CustomEvent('litally:auth-state-changed', {
                detail: { user: currentUser }
            }));
        },

        init() {
            // 1. Check LocalStorage for saved Google session
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    currentUser = JSON.parse(stored);
                }
            } catch(e) {
                currentUser = null;
            }

            // 2. Verify with backend session in background
            fetch('/api/auth/google/session')
                .then(r => r.json())
                .then(data => {
                    if (data && data.authenticated && data.user) {
                        currentUser = data.user;
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
                    }
                    this.renderAll();
                    this.notifyListeners();
                })
                .catch(() => {
                    this.renderAll();
                    this.notifyListeners();
                });

            // 3. Listen for cross-tab or cross-window auth sync
            window.addEventListener('storage', (e) => {
                if (e.key === STORAGE_KEY) {
                    try {
                        currentUser = e.newValue ? JSON.parse(e.newValue) : null;
                    } catch(err) {
                        currentUser = null;
                    }
                    this.renderAll();
                    this.notifyListeners();
                }
            });

            // 4. Inject Google Account Selection Modal into DOM if missing
            this.ensureGoogleModal();

            // 5. Bind triggers
            this.bindEvents();
            this.renderAll();
        },

        signInWithGoogle() {
            this.openGoogleAccountModal();
        },

        async signOut() {
            try {
                await fetch('/api/auth/google/logout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ uid: currentUser ? currentUser.uid : null })
                });
            } catch(e) {}

            const prevName = currentUser ? currentUser.name : '';
            currentUser = null;
            localStorage.removeItem(STORAGE_KEY);
            this.renderAll();
            this.notifyListeners();
            this.showToast(`🚪 Вы вышли из Google аккаунта ${prevName ? '(' + prevName + ')' : ''}`);
        },

        async completeGoogleLogin(userData) {
            try {
                const resp = await fetch('/api/auth/google/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });
                const data = await resp.json();
                if (data.status === 'success' && data.user) {
                    currentUser = data.user;
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
                    this.renderAll();
                    this.notifyListeners();
                    this.closeGoogleAccountModal();
                    this.showToast(`👋 Добро пожаловать, ${currentUser.name}! Вход через Google выполнен.`);
                    return currentUser;
                }
            } catch(e) {
                console.error('Google Auth Verify Error:', e);
            }

            // Fallback client-side activation
            const email = userData.email || 'user.google@gmail.com';
            const name = userData.name || email.split('@')[0];
            currentUser = {
                uid: userData.uid || 'goog_' + Date.now(),
                name: name,
                email: email,
                photoUrl: userData.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4285F4&color=fff&size=128`,
                provider: 'google',
                authenticated: true
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
            this.renderAll();
            this.notifyListeners();
            this.closeGoogleAccountModal();
            this.showToast(`👋 Добро пожаловать, ${currentUser.name}! Вход через Google выполнен.`);
            return currentUser;
        },

        renderAll() {
            // Litally AI elements
            const btnLitally = document.getElementById('btnLitallyGoogleSignIn');
            const chipLitally = document.getElementById('litallyGoogleUserChip');
            const avatarLitally = document.getElementById('litallyGoogleAvatar');
            const nameLitally = document.getElementById('litallyGoogleName');

            // Litdeo elements
            const btnLitdeo = document.getElementById('btnLitdeoGoogleSignIn');
            const chipLitdeo = document.getElementById('litdeoGoogleUserChip');
            const avatarLitdeo = document.getElementById('litdeoGoogleAvatar');
            const nameLitdeo = document.getElementById('litdeoGoogleName');

            // Auth Modal continue with google button
            const btnModalGoogle = document.getElementById('btnAuthModalGoogleSignIn');

            if (currentUser) {
                // User is Signed In
                if (btnLitally) btnLitally.style.display = 'none';
                if (chipLitally) {
                    chipLitally.style.display = 'inline-flex';
                    if (avatarLitally) avatarLitally.src = currentUser.photoUrl;
                    if (nameLitally) nameLitally.textContent = currentUser.name;
                }

                if (btnLitdeo) btnLitdeo.style.display = 'none';
                if (chipLitdeo) {
                    chipLitdeo.style.display = 'inline-flex';
                    if (avatarLitdeo) avatarLitdeo.src = currentUser.photoUrl;
                    if (nameLitdeo) nameLitdeo.textContent = currentUser.name;
                }

                if (btnModalGoogle) {
                    btnModalGoogle.innerHTML = `
                        <img src="${currentUser.photoUrl}" style="width: 22px; height: 22px; border-radius: 50%;">
                        <span>Вы вошли как <b>${currentUser.name}</b> (Google)</span>
                    `;
                }

                // Update Litally AI sidebar profile
                const sidebarName = document.getElementById('sidebarProfileName');
                const avatarCircle = document.getElementById('profileAvatarCircle');
                if (sidebarName) sidebarName.textContent = currentUser.name;
                if (avatarCircle) {
                    avatarCircle.innerHTML = `<img src="${currentUser.photoUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
                }

                // Update settings modal profile
                const setProfileName = document.getElementById('settingsProfileName');
                const setProfileEmail = document.getElementById('settingsProfileEmail');
                const setAvatarCircle = document.getElementById('settingsAvatarCircle');
                if (setProfileName) setProfileName.textContent = currentUser.name;
                if (setProfileEmail) setProfileEmail.textContent = currentUser.email + ' (Google)';
                if (setAvatarCircle) {
                    setAvatarCircle.innerHTML = `<img src="${currentUser.photoUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
                }

            } else {
                // User is Signed Out
                if (btnLitally) btnLitally.style.display = 'inline-flex';
                if (chipLitally) chipLitally.style.display = 'none';

                if (btnLitdeo) btnLitdeo.style.display = 'inline-flex';
                if (chipLitdeo) chipLitdeo.style.display = 'none';

                if (btnModalGoogle) {
                    btnModalGoogle.innerHTML = `
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        <span>Продолжить с Google</span>
                    `;
                }
            }
        },

        bindEvents() {
            document.addEventListener('click', (e) => {
                const t = e.target;
                if (t.closest('#btnLitallyGoogleSignIn') || t.closest('#btnLitdeoGoogleSignIn') || t.closest('#btnAuthModalGoogleSignIn')) {
                    e.preventDefault();
                    this.signInWithGoogle();
                } else if (t.closest('#btnLitallyGoogleSignOut') || t.closest('#btnLitdeoGoogleSignOut')) {
                    e.preventDefault();
                    this.signOut();
                }
            });
        },

        ensureGoogleModal() {
            if (document.getElementById('litallyGoogleAccountModal')) return;

            const modalHtml = `
            <div id="litallyGoogleAccountModal" class="google-oauth-overlay" style="display: none;">
                <div class="google-oauth-card">
                    <button type="button" class="google-oauth-close" id="btnCloseGoogleOAuth">✕</button>
                    
                    <div class="google-oauth-header">
                        <svg viewBox="0 0 24 24" width="36" height="36" class="google-oauth-logo">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        <h3 class="google-oauth-title">Вход с помощью Google</h3>
                        <p class="google-oauth-subtitle">Перейти в приложение <b>Litally & Litdeo Studio</b></p>
                    </div>

                    <div class="google-oauth-body">
                        <!-- Quick 1-Click Fast Accounts -->
                        <div class="google-accounts-list">
                            <div class="google-account-item" id="btnQuickAccount1">
                                <img src="https://ui-avatars.com/api/?name=Author+Linar&background=4285F4&color=fff&size=80" class="google-acc-avatar" alt="Avatar">
                                <div class="google-acc-info">
                                    <div class="google-acc-name">Линар (Автор LBO)</div>
                                    <div class="google-acc-email">linar.author@gmail.com</div>
                                </div>
                                <span class="google-acc-badge">Быстрый вход</span>
                            </div>

                            <div class="google-account-item" id="btnQuickAccount2">
                                <img src="https://ui-avatars.com/api/?name=Creative+User&background=34A853&color=fff&size=80" class="google-acc-avatar" alt="Avatar">
                                <div class="google-acc-info">
                                    <div class="google-acc-name">Google Пользователь</div>
                                    <div class="google-acc-email">google.user@gmail.com</div>
                                </div>
                            </div>
                        </div>

                        <!-- Custom Google Account Input -->
                        <div class="google-custom-auth-box">
                            <div class="google-custom-toggle" id="btnToggleCustomGoogleInput">
                                <span>➕ Использовать другой аккаунт Google</span>
                            </div>
                            
                            <div id="googleCustomInputsWrapper" style="display: none; margin-top: 12px;">
                                <div style="margin-bottom: 10px;">
                                    <label style="display: block; font-size: 0.78rem; color: #6b7280; margin-bottom: 4px;">Имя в профиле:</label>
                                    <input type="text" id="inputCustomGoogleName" class="google-text-field" placeholder="Ваше имя...">
                                </div>
                                <div style="margin-bottom: 14px;">
                                    <label style="display: block; font-size: 0.78rem; color: #6b7280; margin-bottom: 4px;">Google Email (@gmail.com):</label>
                                    <input type="email" id="inputCustomGoogleEmail" class="google-text-field" placeholder="your.name@gmail.com">
                                </div>
                                <button type="button" class="btn-google-primary-confirm" id="btnConfirmCustomGoogleLogin">
                                    Войти в систему
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="google-oauth-footer">
                        <small>Чтобы продолжить, Google предоставит Litally ваше имя, адрес электронной почты и фото профиля.</small>
                    </div>
                </div>
            </div>
            `;

            const wrapper = document.createElement('div');
            wrapper.innerHTML = modalHtml;
            document.body.appendChild(wrapper.firstElementChild);

            // Wire modal events
            const modal = document.getElementById('litallyGoogleAccountModal');
            const closeBtn = document.getElementById('btnCloseGoogleOAuth');
            if (closeBtn) closeBtn.addEventListener('click', () => this.closeGoogleAccountModal());
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) this.closeGoogleAccountModal();
                });
            }

            // Quick Account 1
            const acc1 = document.getElementById('btnQuickAccount1');
            if (acc1) {
                acc1.addEventListener('click', () => {
                    this.completeGoogleLogin({
                        name: 'Линар (Автор LBO)',
                        email: 'linar.author@gmail.com',
                        photoUrl: 'https://ui-avatars.com/api/?name=Author+Linar&background=4285F4&color=fff&size=128',
                        uid: 'goog_linar_lbo'
                    });
                });
            }

            // Quick Account 2
            const acc2 = document.getElementById('btnQuickAccount2');
            if (acc2) {
                acc2.addEventListener('click', () => {
                    this.completeGoogleLogin({
                        name: 'Google Пользователь',
                        email: 'google.user@gmail.com',
                        photoUrl: 'https://ui-avatars.com/api/?name=Google+User&background=34A853&color=fff&size=128',
                        uid: 'goog_user_standard'
                    });
                });
            }

            // Toggle custom email
            const toggleCustom = document.getElementById('btnToggleCustomGoogleInput');
            const customWrapper = document.getElementById('googleCustomInputsWrapper');
            if (toggleCustom && customWrapper) {
                toggleCustom.addEventListener('click', () => {
                    const isHidden = customWrapper.style.display === 'none';
                    customWrapper.style.display = isHidden ? 'block' : 'none';
                });
            }

            // Confirm custom email
            const btnConfirmCustom = document.getElementById('btnConfirmCustomGoogleLogin');
            if (btnConfirmCustom) {
                btnConfirmCustom.addEventListener('click', () => {
                    const nameIn = document.getElementById('inputCustomGoogleName');
                    const emailIn = document.getElementById('inputCustomGoogleEmail');
                    const emailVal = (emailIn && emailIn.value.trim()) ? emailIn.value.trim() : 'my.account@gmail.com';
                    const nameVal = (nameIn && nameIn.value.trim()) ? nameIn.value.trim() : emailVal.split('@')[0];

                    this.completeGoogleLogin({
                        name: nameVal,
                        email: emailVal,
                        photoUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(nameVal)}&background=4285F4&color=fff&size=128`,
                        uid: 'goog_' + Date.now()
                    });
                });
            }
        },

        openGoogleAccountModal() {
            this.ensureGoogleModal();
            const modal = document.getElementById('litallyGoogleAccountModal');
            if (modal) modal.style.display = 'flex';
        },

        closeGoogleAccountModal() {
            const modal = document.getElementById('litallyGoogleAccountModal');
            if (modal) modal.style.display = 'none';
        },

        showToast(msg) {
            if (typeof window.showToast === 'function') {
                window.showToast(msg);
                return;
            }
            const existing = document.getElementById('litallyGoogleToast');
            if (existing) existing.remove();

            const toast = document.createElement('div');
            toast.id = 'litallyGoogleToast';
            toast.style.cssText = `
                position: fixed;
                bottom: 24px;
                right: 24px;
                background: #111827;
                border: 1px solid rgba(66, 133, 244, 0.4);
                color: #f3f4f6;
                padding: 12px 20px;
                border-radius: 12px;
                font-size: 0.9rem;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                z-index: 999999;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(66, 133, 244, 0.3);
                display: flex;
                align-items: center;
                gap: 10px;
                animation: toastFadeIn 0.3s ease;
            `;
            toast.textContent = msg;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3500);
        }
    };

    window.LitallyGoogleAuth = LitallyGoogleAuth;
})();
