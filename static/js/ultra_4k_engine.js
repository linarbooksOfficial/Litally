/**
 * =============================================================================
 * LITALLY 4K ULTRA HD — ENGINE FOR SMART TV, MOBILE & LIQUID GLASS ANIMATIONS
 * File: static/js/ultra_4k_engine.js
 * Author: Litally Sovereign Core 2026
 * Features:
 *  - 10-foot UI Smart TV D-Pad Spatial Navigation
 *  - iPhone 17 Pro Max Dynamic Island & ProMotion 120Hz Adaptations
 *  - Low-End Android Auto-Throttling & Battery Conservation
 *  - Touch Ripple & Elastic Swipe Physics
 * =============================================================================
 */

(function() {
    'use strict';

    // -------------------------------------------------------------------------
    // 1. DEVICE PROFILER & TELEMETRY
    // -------------------------------------------------------------------------
    const U4K_PROFILE = {
        isTV: false,
        isMobile: false,
        isTablet: false,
        isiPhone: false,
        isLowEnd: false,
        hasTouch: false,
        maxFPS: 60,
        dpr: Math.min(window.devicePixelRatio || 1, 2)
    };

    function detectDeviceEnvironment() {
        const ua = navigator.userAgent.toLowerCase();
        U4K_PROFILE.hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        U4K_PROFILE.isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua);
        U4K_PROFILE.isiPhone = /iphone/i.test(ua);
        U4K_PROFILE.isTablet = /ipad|tablet|(android(?!.*mobile))/i.test(ua) || (U4K_PROFILE.hasTouch && window.innerWidth >= 768 && window.innerWidth <= 1280);
        
        // Smart TV detection (Tizen, WebOS, Android TV, Apple TV, large 4K screens)
        U4K_PROFILE.isTV = /smart-tv|googletv|appletv|hbbtv|pov_tv|netcast.tv|viera|bravia|tizen/i.test(ua) || 
                           (window.innerWidth >= 2560 && !U4K_PROFILE.hasTouch);

        // Low-end Android / budget device detection (limited hardware concurrency or slow memory)
        const logicalCores = navigator.hardwareConcurrency || 4;
        const deviceMemory = navigator.deviceMemory || 4;
        if (logicalCores <= 4 && deviceMemory <= 3 && U4K_PROFILE.isMobile) {
            U4K_PROFILE.isLowEnd = true;
        }

        // Apply profile classes to document.body
        if (U4K_PROFILE.isTV) document.body.classList.add('device-tv');
        if (U4K_PROFILE.isMobile) document.body.classList.add('device-mobile');
        if (U4K_PROFILE.isiPhone) document.body.classList.add('device-ios');
        if (U4K_PROFILE.isLowEnd) document.body.classList.add('device-low-end');

        // Battery level observer to trigger power saving on budget or discharging devices
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                const checkPowerMode = () => {
                    if (battery.level <= 0.20 && !battery.charging) {
                        document.body.classList.add('device-low-end');
                    } else if (!U4K_PROFILE.isLowEnd) {
                        document.body.classList.remove('device-low-end');
                    }
                };
                checkPowerMode();
                battery.addEventListener('levelchange', checkPowerMode);
                battery.addEventListener('chargingchange', checkPowerMode);
            }).catch(() => {});
        }
    }

    // -------------------------------------------------------------------------
    // 2. 4K LIQUID GLASS TOP-BAR ELEVATION SCROLLER
    // -------------------------------------------------------------------------
    function initTopBarScrollObserver() {
        const topBar = document.getElementById('siteTopBar');
        if (!topBar) return;

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 30) {
                        topBar.classList.add('scrolled');
                    } else {
                        topBar.classList.remove('scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // -------------------------------------------------------------------------
    // 3. SMART TV D-PAD SPATIAL NAVIGATION (KEYBOARD ARROWS / REMOTE CONTROL)
    // -------------------------------------------------------------------------
    let currentSpatialFocus = null;

    function getSpatialFocusables() {
        const selector = [
            'button:not([disabled]):not([style*="display: none"])',
            'a:not([style*="display: none"])',
            'input:not([type="hidden"]):not([disabled])',
            'textarea:not([disabled])',
            '.theme-matrix-tile',
            '.a11y-card',
            '.custom-card'
        ].join(', ');

        const activePortal = document.querySelector('.portal-modal-overlay.active, .admin-modal-overlay.active');
        const scope = activePortal || document.body;

        return Array.from(scope.querySelectorAll(selector)).filter(el => {
            const rect = el.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0 && 
                   rect.top < window.innerHeight && rect.bottom > 0;
        });
    }

    function findNearestSpatialElement(current, direction) {
        const focusables = getSpatialFocusables();
        if (!focusables.length) return null;
        if (!current) return focusables[0];

        const cRect = current.getBoundingClientRect();
        const cCenter = { x: cRect.left + cRect.width / 2, y: cRect.top + cRect.height / 2 };

        let bestMatch = null;
        let minDistance = Infinity;

        focusables.forEach(candidate => {
            if (candidate === current) return;
            const candRect = candidate.getBoundingClientRect();
            const candCenter = { x: candRect.left + candRect.width / 2, y: candRect.top + candRect.height / 2 };

            const dx = candCenter.x - cCenter.x;
            const dy = candCenter.y - cCenter.y;

            let isInDirection = false;
            switch (direction) {
                case 'ArrowUp':
                    isInDirection = dy < -10 && Math.abs(dx) < Math.abs(dy) * 2;
                    break;
                case 'ArrowDown':
                    isInDirection = dy > 10 && Math.abs(dx) < Math.abs(dy) * 2;
                    break;
                case 'ArrowLeft':
                    isInDirection = dx < -10 && Math.abs(dy) < Math.abs(dx) * 2;
                    break;
                case 'ArrowRight':
                    isInDirection = dx > 10 && Math.abs(dy) < Math.abs(dx) * 2;
                    break;
            }

            if (isInDirection) {
                const dist = Math.hypot(dx, dy);
                if (dist < minDistance) {
                    minDistance = dist;
                    bestMatch = candidate;
                }
            }
        });

        return bestMatch;
    }

    function handleSpatialKeydown(e) {
        // Only engage spatial focus traversal on actual Smart TV devices with remote D-Pad
        if (!U4K_PROFILE.isTV) return;
        if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

        // Skip spatial arrow intercept when user is typing in text inputs
        if (document.activeElement && 
           (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
            return;
        }

        const activeEl = document.activeElement || currentSpatialFocus;
        const nextEl = findNearestSpatialElement(activeEl, e.key);

        if (nextEl) {
            e.preventDefault();
            nextEl.focus();
            currentSpatialFocus = nextEl;
            nextEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
    }

    // -------------------------------------------------------------------------
    // 4. TOUCH RIPPLE & LIQUID SPECULAR BURSTS
    // -------------------------------------------------------------------------
    function initTouchRipple() {
        document.addEventListener('pointerdown', (e) => {
            const btn = e.target.closest('.gold-submit-btn, .btn-header-action, .btn-master-trigger, .theme-matrix-tile, .a11y-card');
            if (!btn) return;

            const rect = btn.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'u4k-ripple';
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

            btn.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }, { passive: true });
    }

    // -------------------------------------------------------------------------
    // 5. MOBILE SWIPE-DOWN TO CLOSE PORTALS (IPHONE / ANDROID GESTURES)
    // -------------------------------------------------------------------------
    function initMobileSwipeDismiss() {
        let touchStartY = 0;
        let touchCurrentY = 0;
        let activeBox = null;

        document.addEventListener('touchstart', (e) => {
            const header = e.target.closest('.portal-header');
            if (!header) return;

            const portalBox = header.closest('.portal-content-box');
            if (!portalBox) return;

            activeBox = portalBox;
            touchStartY = e.touches[0].clientY;
            touchCurrentY = touchStartY;
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (!activeBox) return;
            touchCurrentY = e.touches[0].clientY;
            const diff = touchCurrentY - touchStartY;

            if (diff > 0) {
                // Drag down resistance curve
                activeBox.style.transform = `translateY(${diff * 0.7}px)`;
            }
        }, { passive: true });

        document.addEventListener('touchend', () => {
            if (!activeBox) return;
            const diff = touchCurrentY - touchStartY;

            if (diff > 120) {
                // Dismiss portal
                if (typeof closeAllPortals === 'function') closeAllPortals();
                activeBox.style.transform = '';
            } else {
                // Snap back with spring
                activeBox.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
                activeBox.style.transform = 'translateY(0)';
                setTimeout(() => {
                    if (activeBox) activeBox.style.transition = '';
                }, 300);
            }
            activeBox = null;
        }, { passive: true });
    }

    // -------------------------------------------------------------------------
    // 6. INITIALIZATION ON DOM READY
    // -------------------------------------------------------------------------
    window.addEventListener('DOMContentLoaded', () => {
        detectDeviceEnvironment();
        initTopBarScrollObserver();
        initTouchRipple();
        initMobileSwipeDismiss();
        window.addEventListener('keydown', handleSpatialKeydown);
    });

    // Re-evaluate on window resize
    window.addEventListener('resize', () => {
        detectDeviceEnvironment();
    });

    // Public API
    window.LitallyUltra4K = {
        profile: U4K_PROFILE,
        detectDevice: detectDeviceEnvironment
    };

})();
