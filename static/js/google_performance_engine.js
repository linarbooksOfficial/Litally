/**
 * =============================================================================
 * GOOGLE APEX PERFORMANCE & MICRO-INTERACTION ENGINE (v12.0)
 * File: static/js/google_performance_engine.js
 * Hardware-Accelerated Micro-Interactions, Material Ripple, and Ultra-Smooth UX
 * =============================================================================
 */

(function () {
    'use strict';

    // ── 1. GOOGLE MATERIAL RIPPLE INK SYSTEM ─────────────────────────────────
    function createMaterialRipple(event, element) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'material-ripple-wave';

        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    function initMaterialRipples() {
        document.addEventListener('pointerdown', function (e) {
            const target = e.target.closest(
                '.btn-input-send, .btn-new-chat, .welcome-card-item, .followup-chip, ' +
                '.topbar-btn, .btn-length-toggle, .sidebar-action-btn, .btn-msg-action, ' +
                '.btn-memory-toggle, .btn-project10k-badge, .btn-privacy-badge, .btn-unlock-chat, .material-ripple'
            );
            if (target) {
                target.classList.add('material-ripple');
                createMaterialRipple(e, target);
            }
        }, { passive: true });
    }

    // ── 2. OMNIBAR AUTO-EXPAND & KEYBOARD OMNIPRESENCE ────────────────────────
    function initOmnibarControls() {
        const textarea = document.getElementById('chatInput');
        if (!textarea) return;

        // Auto-expand height
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            const newHeight = Math.min(this.scrollHeight, 220);
            this.style.height = newHeight + 'px';
        }, { passive: true });

        // Global Google Omnibar Keyboard Shortcuts (Ctrl+K / Cmd+K / /)
        document.addEventListener('keydown', function (e) {
            // Ignore if active inside an input or textarea
            const isTyping = document.activeElement && (
                document.activeElement.tagName === 'INPUT' ||
                document.activeElement.tagName === 'TEXTAREA' ||
                document.activeElement.isContentEditable
            );

            // Ctrl+K or Cmd+K: Focus Omnibar
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                textarea.focus();
                textarea.select();
                return;
            }

            // Forward slash '/': Focus Omnibar if not typing
            if (e.key === '/' && !isTyping) {
                e.preventDefault();
                textarea.focus();
                return;
            }

            // Escape: Close all modals, hints, lightbox or unfocus Omnibar
            if (e.key === 'Escape') {
                if (window.closeAllModals) {
                    window.closeAllModals();
                } else {
                    const privacyModal = document.getElementById('privacyModalOverlay');
                    const settingsModal = document.getElementById('settingsModalOverlay');
                    const authModal = document.getElementById('authModalOverlay');
                    const studioModal = document.getElementById('project10kModalOverlay');
                    if (privacyModal) privacyModal.style.display = 'none';
                    if (settingsModal) settingsModal.style.display = 'none';
                    if (authModal) authModal.style.display = 'none';
                    if (studioModal) studioModal.style.display = 'none';
                }
                if (document.activeElement === textarea) {
                    textarea.blur();
                }
            }
        });
    }

    // ── 3. DYNAMIC AMBIENT AURA MOVEMENT (MOUSE & TYPING PARALLAX) ───────────
    function initAmbientAuraMovement() {
        const auraWrap = document.querySelector('.ambient-aurora-wrap');
        if (!auraWrap) return;

        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;
        let isMoving = false;

        window.addEventListener('mousemove', function (e) {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
            if (!isMoving) {
                isMoving = true;
                requestAnimationFrame(updateAuraPosition);
            }
        }, { passive: true });

        function updateAuraPosition() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            auraWrap.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

            if (Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
                requestAnimationFrame(updateAuraPosition);
            } else {
                isMoving = false;
            }
        }
    }

    // ── 4. HIGH-PERFORMANCE 60–120 FPS BATCHED STREAM ACCELERATOR ─────────────
    // Global acceleration helper exposed on window for standalone engine
    window.GoogleStreamBatcher = {
        batchWords: function (input, param2, param3, param4) {
            // Mode A (Promise & Callback): batchWords(fullText: string, onUpdate: (accumulated, done) => void, scrollContainer?: HTMLElement) -> Promise
            if (typeof input === 'string') {
                return new Promise(function (resolve) {
                    const fullText = input;
                    const onUpdate = param2;
                    const scrollContainer = param3;
                    const words = fullText.split(' ');
                    const total = words.length;
                    const chunkSize = total > 500 ? 7 : (total > 200 ? 5 : (total > 50 ? 3 : 2));
                    let idx = 0;
                    let accumulated = '';
                    let userScrolledUp = false;

                    const scrollListener = function () {
                        if (!scrollContainer) return;
                        const dist = scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight;
                        userScrolledUp = (dist > 140);
                    };
                    if (scrollContainer) {
                        scrollContainer.addEventListener('scroll', scrollListener, { passive: true });
                    }

                    let isDone = false;
                    function finish() {
                        if (isDone) return;
                        isDone = true;
                        clearTimeout(watchdogTimer);
                        if (scrollContainer) {
                            try { scrollContainer.removeEventListener('scroll', scrollListener); } catch(e) {}
                            if (!userScrolledUp) scrollContainer.scrollTop = scrollContainer.scrollHeight;
                        }
                        if (typeof onUpdate === 'function') {
                            try { onUpdate(fullText, true); } catch (e) {}
                        }
                        resolve();
                    }

                    // Fail-safe watchdog timer for background tabs where requestAnimationFrame is paused
                    const watchdogTimer = setTimeout(finish, Math.min(3000, Math.max(600, total * 12)));

                    function frameStep() {
                        if (isDone) return;
                        try {
                            if (idx < total) {
                                const chunk = words.slice(idx, idx + chunkSize).join(' ') + (idx + chunkSize < total ? ' ' : '');
                                idx += chunkSize;
                                accumulated += chunk;

                                if (typeof onUpdate === 'function') {
                                    try {
                                        onUpdate(accumulated, idx >= total);
                                    } catch (e) {
                                        console.warn("Batcher onUpdate error:", e);
                                    }
                                }

                                if (scrollContainer && !userScrolledUp) {
                                    scrollContainer.scrollTop = scrollContainer.scrollHeight;
                                }

                                requestAnimationFrame(frameStep);
                            } else {
                                finish();
                            }
                        } catch (err) {
                            finish();
                        }
                    }

                    requestAnimationFrame(frameStep);
                });
            }

            // Mode B (Array & Target): batchWords(words: string[], targetElement: HTMLElement, scrollContainer?: HTMLElement, onComplete?: () => void)
            const words = input || [];
            const targetElement = param2;
            const scrollContainer = param3;
            const onComplete = param4;
            let idx = 0;
            const total = words.length;
            const chunkSize = total > 500 ? 7 : (total > 200 ? 5 : (total > 50 ? 3 : 2));
            let userScrolledUp = false;

            const scrollListener = function () {
                if (!scrollContainer) return;
                const distanceToBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight;
                userScrolledUp = (distanceToBottom > 140);
            };

            if (scrollContainer) {
                scrollContainer.addEventListener('scroll', scrollListener, { passive: true });
            }

            function frameStep() {
                if (idx < total) {
                    const nextWords = words.slice(idx, idx + chunkSize).join(' ');
                    idx += chunkSize;
                    
                    if (targetElement) {
                        targetElement.innerHTML += (idx === chunkSize ? '' : ' ') + nextWords;
                    }

                    if (scrollContainer && !userScrolledUp) {
                        scrollContainer.scrollTop = scrollContainer.scrollHeight;
                    }

                    requestAnimationFrame(frameStep);
                } else {
                    if (scrollContainer) {
                        scrollContainer.removeEventListener('scroll', scrollListener);
                        if (!userScrolledUp) scrollContainer.scrollTop = scrollContainer.scrollHeight;
                    }
                    if (typeof onComplete === 'function') onComplete();
                }
            }

            requestAnimationFrame(frameStep);
        }
    };

    // ── 5. INITIALIZATION ON DOM READY ────────────────────────────────────────
    function init() {
        initMaterialRipples();
        initOmnibarControls();
        initAmbientAuraMovement();
        console.log('🚀 [Google Apex Engine] Material Design 3 & 60-120 FPS acceleration active.');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
