/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║   LITALLY.AI — SOVEREIGN VFX ENGINE v10.5 OBSIDIAN HIGH-DYNAMIC EDITION     ║
 * ║   File: static/js/litally_sovereign_vfx.js                                 ║
 * ║   Full theme reactivity · Dynamic Particle Physics · Aurora Orbs VFX       ║
 * ║   Cursor Glow Tracker · 3D Specular Tilt · Sovereign Toasts · Sound Waves  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */
(function(window, document) {
    'use strict';

    // ── 0. THEME PALETTE PRESETS & COLOR SCHEMES ─────────────────────────────
    var THEME_PALETTES = {
        50: ['rgba(255,215,0,', 'rgba(212,175,55,', 'rgba(245,197,24,', 'rgba(255,255,255,'],     // Sovereign Gold
        1:  ['rgba(249,115,22,', 'rgba(220,38,38,', 'rgba(251,146,60,', 'rgba(254,215,170,'],     // Charyn Canyon
        2:  ['rgba(20,184,166,', 'rgba(13,148,136,', 'rgba(45,212,191,', 'rgba(204,251,241,'],    // Kaindy Lake
        3:  ['rgba(226,232,240,', 'rgba(148,163,184,', 'rgba(241,245,249,', 'rgba(203,213,225,'], // Bozzhira Chalk
        4:  ['rgba(16,185,129,', 'rgba(5,150,105,', 'rgba(52,211,153,', 'rgba(209,250,229,'],     // Burabay Mist
        5:  ['rgba(56,189,248,', 'rgba(2,132,199,', 'rgba(125,211,252,', 'rgba(224,242,254,'],    // Altai Glacier
        6:  ['rgba(129,140,248,', 'rgba(79,70,229,', 'rgba(165,180,252,', 'rgba(224,231,255,'],   // Kolsay Twilight
        7:  ['rgba(245,158,11,', 'rgba(217,119,6,', 'rgba(251,191,36,', 'rgba(254,243,199,'],     // Singing Dunes
        8:  ['rgba(234,179,8,', 'rgba(202,138,4,', 'rgba(250,204,21,', 'rgba(254,240,138,'],      // Steppe Gold
        17: ['rgba(6,182,212,', 'rgba(8,145,178,', 'rgba(34,211,238,', 'rgba(207,250,254,'],      // Astana Cyber
        18: ['rgba(236,72,153,', 'rgba(219,39,119,', 'rgba(244,114,182,', 'rgba(252,231,243,'],   // Almaty Blossom
        15: ['rgba(14,165,233,', 'rgba(3,105,161,', 'rgba(56,189,248,', 'rgba(224,242,254,'],     // Caspian Petrol
        34: ['rgba(103,232,249,', 'rgba(6,182,212,', 'rgba(165,243,252,', 'rgba(255,255,255,'],   // Medeo Ice
        36: ['rgba(217,119,6,', 'rgba(180,83,9,', 'rgba(245,158,11,', 'rgba(254,243,199,']        // Berkut Sovereign
    };

    var currentPalette = THEME_PALETTES[50];

    // ── 1. SOVEREIGN KINETIC PARTICLE ENGINE ─────────────────────────────────
    var canvas = document.getElementById('svParticleCanvas');
    var ctx = canvas ? canvas.getContext('2d') : null;
    var particles = [];
    var PARTICLE_COUNT = 160;
    var animFrame;

    function resizeCanvas() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function randomBetween(a, b) { return a + Math.random() * (b - a); }

    function createParticle() {
        var col = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        return {
            x: Math.random() * (canvas ? canvas.width : 1920),
            y: Math.random() * (canvas ? canvas.height : 1080),
            r: randomBetween(0.5, 2.5),
            baseAlpha: randomBetween(0.20, 0.75),
            alpha: 0,
            color: col,
            vx: randomBetween(-0.15, 0.15),
            vy: randomBetween(-0.10, 0.10),
            twinkleSpeed: randomBetween(0.006, 0.03),
            twinkleOffset: Math.random() * Math.PI * 2
        };
    }

    function initParticles() {
        particles = [];
        for (var i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle());
        }
    }

    function updatePalette(themeId) {
        currentPalette = THEME_PALETTES[themeId] || THEME_PALETTES[50];
        for (var i = 0; i < particles.length; i++) {
            particles[i].color = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        }
    }

    // Cursor position for particle deflection & glow
    var mouseX = -999, mouseY = -999;
    var glowX = -999, glowY = -999;
    var cursorGlow = document.getElementById('svCursorGlow');

    function drawParticle(p, time) {
        if (!ctx) return;
        var twinkle = Math.sin(time * p.twinkleSpeed + p.twinkleOffset);
        p.alpha = p.baseAlpha + twinkle * 0.25;
        if (p.alpha < 0.05) p.alpha = 0.05;
        if (p.alpha > 0.95) p.alpha = 0.95;

        // Subtle interactive physics: gentle repulsion near cursor
        var dx = p.x - mouseX;
        var dy = p.y - mouseY;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 1) {
            var force = (120 - dist) / 120 * 0.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
        }

        ctx.save();
        ctx.shadowBlur = p.r * 8;
        ctx.shadowColor = p.color + '0.85)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();

        // Extra bright diamond core for larger particles
        if (p.r > 1.3) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 0.35, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,' + (p.alpha * 0.9) + ')';
            ctx.fill();
        }
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;

        var w = canvas ? canvas.width : 1920;
        var h = canvas ? canvas.height : 1080;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
    }

    // Shooting stars
    var shootingStars = [];
    function maybeAddShootingStar() {
        if (Math.random() < 0.003 && shootingStars.length < 3) {
            var w = canvas ? canvas.width : 1920;
            var h = canvas ? canvas.height : 1080;
            var col = currentPalette[0];
            shootingStars.push({
                x: randomBetween(0, w * 0.8),
                y: randomBetween(0, h * 0.4),
                len: randomBetween(90, 220),
                speed: randomBetween(7, 16),
                angle: randomBetween(Math.PI * 0.12, Math.PI * 0.32),
                alpha: 1,
                color: col
            });
        }
    }

    function drawShootingStars() {
        if (!ctx) return;
        for (var i = shootingStars.length - 1; i >= 0; i--) {
            var s = shootingStars[i];
            ctx.save();
            ctx.globalAlpha = s.alpha;
            var grad = ctx.createLinearGradient(
                s.x, s.y,
                s.x - Math.cos(s.angle) * s.len,
                s.y - Math.sin(s.angle) * s.len
            );
            grad.addColorStop(0, s.color + '0.95)');
            grad.addColorStop(0.4, s.color + '0.5)');
            grad.addColorStop(1, s.color + '0)');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 10;
            ctx.shadowColor = s.color + '0.8)';
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
            ctx.stroke();
            ctx.restore();

            s.x += Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;
            s.alpha -= 0.02;

            if (s.alpha <= 0) shootingStars.splice(i, 1);
        }
    }

    // Interactive sparkle burst on click
    var sparkleBursts = [];
    function triggerSparkleBurst(x, y) {
        for (var i = 0; i < 18; i++) {
            var ang = Math.random() * Math.PI * 2;
            var spd = randomBetween(2, 6);
            sparkleBursts.push({
                x: x, y: y,
                vx: Math.cos(ang) * spd,
                vy: Math.sin(ang) * spd,
                r: randomBetween(1, 3),
                alpha: 1,
                decay: randomBetween(0.02, 0.05),
                color: currentPalette[Math.floor(Math.random() * currentPalette.length)]
            });
        }
    }

    function drawSparkleBursts() {
        if (!ctx) return;
        for (var i = sparkleBursts.length - 1; i >= 0; i--) {
            var b = sparkleBursts[i];
            ctx.save();
            ctx.shadowBlur = b.r * 6;
            ctx.shadowColor = b.color + '0.9)';
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.fillStyle = b.color + b.alpha + ')';
            ctx.fill();
            ctx.restore();

            b.x += b.vx;
            b.y += b.vy;
            b.alpha -= b.decay;
            b.vx *= 0.95;
            b.vy *= 0.95;

            if (b.alpha <= 0) sparkleBursts.splice(i, 1);
        }
    }

    function animate(time) {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        maybeAddShootingStar();
        drawShootingStars();
        drawSparkleBursts();
        for (var i = 0; i < particles.length; i++) {
            drawParticle(particles[i], time * 0.001);
        }
        animFrame = requestAnimationFrame(animate);
    }

    function startParticles() {
        if (!canvas || !ctx) return;
        resizeCanvas();
        initParticles();
        animFrame = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', function() {
        resizeCanvas();
        initParticles();
    }, { passive: true });

    // ── 2. CURSOR GLOW TRACKER & LERP ─────────────────────────────────────────
    function lerpGlow() {
        glowX += (mouseX - glowX) * 0.10;
        glowY += (mouseY - glowY) * 0.10;
        if (cursorGlow) {
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top  = glowY + 'px';
        }
        requestAnimationFrame(lerpGlow);
    }

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });

    document.addEventListener('click', function(e) {
        // Trigger subtle sparkle on interactive buttons
        if (e.target && e.target.closest('button, select, .welcome-prompt-card, .btn-input-send')) {
            triggerSparkleBurst(e.clientX, e.clientY);
        }
    }, { passive: true });

    // ── 3. 3D CARD TILT WITH PERSPECTIVE SHINE ───────────────────────────────
    function init3DTilt() {
        var cards = document.querySelectorAll('.sv-card-3d, .welcome-prompt-card, .masterpiece-showcase-box, .quota-card, .welcome-feature-card');
        cards.forEach(function(card) {
            if (card.__svTiltBound) return;
            card.__svTiltBound = true;

            card.addEventListener('mousemove', function(e) {
                var rect = card.getBoundingClientRect();
                var cx = rect.left + rect.width / 2;
                var cy = rect.top + rect.height / 2;
                var dx = (e.clientX - cx) / (rect.width / 2);
                var dy = (e.clientY - cy) / (rect.height / 2);
                var rotX = -dy * 7;
                var rotY = dx * 7;
                card.style.transform = 'perspective(1200px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg) translateY(-2px)';
            }, { passive: true });

            card.addEventListener('mouseleave', function() {
                card.style.transform = '';
            }, { passive: true });
        });
    }

    // ── 4. SOVEREIGN TOAST NOTIFICATION SYSTEM ────────────────────────────────
    var toastContainer = document.getElementById('svToastContainer');

    function showToast(message, type, duration) {
        if (!toastContainer) return;
        type = type || 'gold';
        duration = duration || 3000;

        var toast = document.createElement('div');
        toast.className = 'sv-toast sv-toast-' + type;
        var icon = (type === 'success') ? '✓' : (type === 'error') ? '✕' : (type === 'info') ? '✦' : '👑';
        toast.innerHTML = '<span style=\"font-size:1.1em;\">' + icon + '</span><span>' + message + '</span>';

        toastContainer.appendChild(toast);

        setTimeout(function() {
            toast.classList.add('sv-toast-out');
            setTimeout(function() {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 350);
        }, duration);
    }

    // ── 5. AURORA ORBS THEME COLOR ADAPTATION ────────────────────────────────
    function updateAuroraColors(theme) {
        var orbs = document.querySelectorAll('.sv-aurora-orb');
        if (!orbs || orbs.length === 0 || !theme) return;
        var accent = theme.accent || '#d4af37';
        var glow = theme.glow || 'rgba(212,175,55,0.3)';

        if (orbs[0]) orbs[0].style.background = 'radial-gradient(circle, ' + glow + ' 0%, transparent 70%)';
        if (orbs[1]) orbs[1].style.background = 'radial-gradient(circle, ' + accent + '22 0%, transparent 70%)';
        if (orbs[2]) orbs[2].style.background = 'radial-gradient(circle, ' + glow + ' 0%, transparent 70%)';
    }

    // ── 6. THEME CHANGE EVENT LISTENER ────────────────────────────────────────
    window.addEventListener('litally-theme-change', function(e) {
        if (!e.detail || !e.detail.theme) return;
        var theme = e.detail.theme;
        updatePalette(theme.id);
        updateAuroraColors(theme);
    });

    // ── 7. MOBILE SIDEBAR NAVIGATION ──────────────────────────────────────────
    function initMobileSidebar() {
        var sidebar = document.getElementById('appSidebar');
        var overlay = document.getElementById('svSidebarOverlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'svSidebarOverlay';
            overlay.style.cssText = 'position:fixed;inset:0;z-index:490;background:rgba(0,0,0,0.6);backdrop-filter:blur(6px);display:none;';
            document.body.appendChild(overlay);
        }

        window.toggleSidebarMobile = function() {
            if (!sidebar) return;
            var isOpen = sidebar.classList.contains('mobile-open');
            if (isOpen) {
                sidebar.classList.remove('mobile-open');
                overlay.style.display = 'none';
                document.body.classList.remove('scroll-locked');
            } else {
                sidebar.classList.add('mobile-open');
                overlay.style.display = 'block';
                document.body.classList.add('scroll-locked');
            }
        };

        overlay.addEventListener('click', function() {
            if (sidebar) sidebar.classList.remove('mobile-open');
            overlay.style.display = 'none';
            document.body.classList.remove('scroll-locked');
        });
    }

    // ── 8. PUBLIC EXPORTS ─────────────────────────────────────────────────────
    window.SovereignVFX = {
        showToast: showToast,
        triggerSparkleBurst: triggerSparkleBurst,
        updatePalette: updatePalette
    };

    // ── 9. INITIALIZATION ─────────────────────────────────────────────────────
    function svInit() {
        startParticles();
        lerpGlow();
        init3DTilt();
        initMobileSidebar();

        // Observe chat messages container to bind 3D tilt to new cards
        if (window.MutationObserver) {
            var observer = new MutationObserver(function() {
                init3DTilt();
            });
            var chatContainer = document.getElementById('chatScrollContainer');
            if (chatContainer) {
                observer.observe(chatContainer, { childList: true, subtree: true });
            }
        }

        // Global hotkeys
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                var overlays = document.querySelectorAll('.litally-modal-overlay');
                overlays.forEach(function(el) {
                    if (el.style.display !== 'none') el.style.display = 'none';
                });
                var lightbox = document.getElementById('litallyStudioLightbox');
                if (lightbox && lightbox.style.display !== 'none') lightbox.style.display = 'none';
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', svInit);
    } else {
        svInit();
    }

})(window, document);
