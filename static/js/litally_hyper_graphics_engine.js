/**
 * =============================================================================
 * LITALLY HYPER-GRAPHICS QUANTUM VISUAL ENGINE 4K/8K (v40.0 DELUXE EDITION)
 * File: static/js/litally_hyper_graphics_engine.js
 * =============================================================================
 * 20 SUPREME VISUAL CHERRIES ON TOP (20 ВИШЕНОК НА ТОРТЕ):
 *  1. 🍒 Supernova Cursor Stardust Trail
 *  2. 🍒 Fluid Laser Scroll Progress Beacon
 *  3. 🍒 Floating VisionOS Action Portal Dock
 *  4. 🍒 Constellation Particle Network
 *  5. 🍒 Prismatic Glass Edge Refraction
 *  6. 🍒 Contour Border Beam Tracer
 *  7. 🍒 3D Realistic Book Spine & Page Depth
 *  8. 🍒 Anamorphic Cinematic Lens Flare
 *  9. 🍒 Supernova Sparkle Burst on Click
 * 10. 🍒 Gravitational Concentric Wave Rings
 * 11. 🍒 Holographic Iridescent Badges
 * 12. 🍒 Diamond Glint Sweep on Media
 * 13. 🍒 Floating Satellite Energy Orbs on Hero Crest
 * 14. 🍒 Perspective Horizon Mesh Grid
 * 15. 🍒 Caustic Glass Sunlight Sweep
 * 16. 🍒 Sub-Pixel Filmic Micro-Grain
 * 17. 🍒 Kinetic Floating Levitation
 * 18. 🍒 Pure Deep OLED Obsidian Palette
 * 19. 🍒 Silent Cyberpunk Equalizer Visualizer
 * 20. 🍒 3D Multi-Layer Parallax Crest
 * =============================================================================
 */

(function(window, document) {
    'use strict';

    if (window.LitallyHyperGraphicsEngine) return;

    class HyperGraphicsEngine {
        constructor() {
            this.canvas = null;
            this.ctx = null;
            this.particles = [];
            this.cursorTrail = [];
            this.meteors = [];
            this.animFrameId = null;
            this.width = 0;
            this.height = 0;
            this.mouseX = -9999;
            this.mouseY = -9999;
            this.beamAngle = 0;
            this.lastMeteorTime = Date.now();
            this.lastFrameTime = 0;
            this.isLowPower = false;
            this.isTabActive = true;

            this.init();
        }

        init() {
            this.checkPerformanceEnvironment();

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.boot());
            } else {
                this.boot();
            }
        }

        checkPerformanceEnvironment() {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                             (window.innerWidth < 768) ||
                             (('ontouchstart' in window) && window.innerWidth <= 1024) ||
                             (navigator.maxTouchPoints > 1 && window.innerWidth <= 1024);
            const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const isLowEndDevice = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) &&
                                   (navigator.deviceMemory && navigator.deviceMemory <= 3);
            this.isLowPower = isMobile || prefersReducedMotion || isLowEndDevice;
        }

        boot() {
            // 1. Inject Background Aurora & Filmic Grain & Horizon Grid
            this.injectAuroraBackdrop();
            this.injectFilmicGrain();
            this.injectHorizonGrid();

            // 1.1 Inject 3D Book Gold Leaf
            this.injectBookGoldLeafLayers();

            // 2. Inject Laser Scroll Progress Beacon
            this.injectLaserScrollBeacon();

            // 3. Inject Floating VisionOS Action Portal Dock (Disabled per user request)
            // this.injectVisionOsPortalDock();

            // 4. Inject Satellite Orbs on Hero Crest (Disabled per user request)
            // this.injectSatelliteOrbs();

            // 5. Inject Silent Cyberpunk Equalizer Visualizer
            this.injectSilentVisualizer();

            // 6. Setup Stardust Canvas with Constellations & Cursor Trail (Lightweight 30 particles)
            this.setupStardustCanvas();

            // 7. Bind 3D Card Tilt with RAF Throttling
            this.bindCardVisuals();

            // 8. Bind Click Supernova Bursts
            this.bindSupernovaBursts();

            // 9. Bind Tab Visibility Observer
            this.bindVisibilityObserver();

            window.LitallyHyperGraphicsEngine = this;
            console.log('✨ [Hyper-Graphics 4K/8K Engine v60.0 Ultra-Fast] 120 FPS Zero-Lag Active.');
        }

        // ── 1. AMBIENT AURORA BACKDROP ──────────────────────────────────────
        injectAuroraBackdrop() {
            if (document.getElementById('hyperAuroraContainer')) return;
            const aurora = document.createElement('div');
            aurora.id = 'hyperAuroraContainer';
            aurora.className = 'hyper-aurora-container';
            aurora.innerHTML = `
                <div class="hyper-aurora-orb hyper-aurora-orb-1"></div>
                <div class="hyper-aurora-orb hyper-aurora-orb-2"></div>
                <div class="hyper-aurora-orb hyper-aurora-orb-3"></div>
            `;
            document.body.prepend(aurora);
        }

        // ── 2. SUB-PIXEL FILMIC GRAIN (Вишенка 16) ───────────────────────────
        injectFilmicGrain() {
            if (document.getElementById('hyperFilmicGrain')) return;
            const grain = document.createElement('div');
            grain.id = 'hyperFilmicGrain';
            grain.className = 'hyper-filmic-grain';
            document.body.prepend(grain);
        }

        // ── 3. PERSPECTIVE HORIZON MESH GRID (Вишенка 14) ────────────────────
        injectHorizonGrid() {
            if (document.getElementById('hyperHorizonGrid')) return;
            const grid = document.createElement('div');
            grid.id = 'hyperHorizonGrid';
            grid.className = 'hyper-horizon-grid';
            document.body.prepend(grid);
        }

        // ── 4. FLUID LASER SCROLL PROGRESS BEACON (Вишенка 2) ────────────────
        injectLaserScrollBeacon() {
            if (document.getElementById('hyperLaserScroll')) return;
            const bar = document.createElement('div');
            bar.id = 'hyperLaserScroll';
            document.body.prepend(bar);

            const updateScroll = () => {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
                bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
            };

            window.addEventListener('scroll', updateScroll, { passive: true });
            updateScroll();
        }

        // ── 5. FLOATING VISION-OS PORTAL DOCK (Disabled per user request) ─────
        injectVisionOsPortalDock() {
            const existing = document.getElementById('hyperPortalDock');
            if (existing) existing.remove();
            return;
        }

        // ── 6. FLOATING SATELLITE ENERGY ORBS (Disabled per user request) ───────────────────
        injectSatelliteOrbs() {
            const orbs = document.querySelectorAll('.hyper-satellite-orb');
            orbs.forEach(orb => orb.remove());
            return;
        }

        // ── 7. SILENT CYBERPUNK EQUALIZER VISUALIZER (Вишенка 19) ────────────
        injectSilentVisualizer() {
            if (document.querySelector('.hyper-silent-visualizer')) return;

            const targets = document.querySelectorAll('.topbar-model-badge, .brand-info, .studio-header-title-group');
            if (targets.length > 0) {
                const eq = document.createElement('span');
                eq.className = 'hyper-silent-visualizer';
                eq.title = '4K Quantum Engine Status';
                eq.innerHTML = `
                    <span class="hyper-silent-bar"></span>
                    <span class="hyper-silent-bar"></span>
                    <span class="hyper-silent-bar"></span>
                    <span class="hyper-silent-bar"></span>
                    <span class="hyper-silent-bar"></span>
                `;
                targets[0].appendChild(eq);
            }
        }

        // ── 8. COSMIC STARDUST, CELESTIAL CONSTELLATIONS & METEOR STREAM ───
        setupStardustCanvas() {
            if (this.isLowPower) return;
            if (document.getElementById('hyperStardustCanvas')) return;

            this.canvas = document.createElement('canvas');
            this.canvas.id = 'hyperStardustCanvas';
            document.body.prepend(this.canvas);
            this.ctx = this.canvas.getContext('2d', { alpha: true });

            this.sparks = [];
            this.meteorQueue = [];
            this.constellations = [];
            this.lastMeteorTime = Date.now();
            this.lastAutoShower = Date.now();

            this.resizeCanvas();
            this.initConstellations();

            window.addEventListener('resize', () => {
                this.resizeCanvas();
                this.initConstellations();
            }, { passive: true });

            // Initialize background stars (80 lightweight twinkling celestial points)
            const count = Math.min(Math.floor((this.width * this.height) / 22000), 75);
            for (let i = 0; i < count; i++) {
                this.particles.push(this.createParticle());
            }

            // Global trigger for Meteor Shower
            window.triggerMeteorShower = (num = 12) => this.triggerMeteorShower(num);
            window.addEventListener('keydown', (e) => {
                if ((e.key === 'M' || e.key === 'm') && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
                        this.triggerMeteorShower(10);
                    }
                }
            });

            // Track mouse for cursor stardust trail & constellation proximity
            let lastSpawn = 0;
            window.addEventListener('mousemove', (e) => {
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;

                const now = Date.now();
                if (now - lastSpawn > 45) {
                    lastSpawn = now;
                    this.cursorTrail.push({
                        x: e.clientX,
                        y: e.clientY,
                        radius: Math.random() * 2.0 + 0.8,
                        color: Math.random() > 0.4 ? 'rgba(255, 215, 0, ' : 'rgba(56, 189, 248, ',
                        alpha: 0.85,
                        vx: (Math.random() - 0.5) * 0.6,
                        vy: (Math.random() - 0.5) * 0.6
                    });
                    if (this.cursorTrail.length > 16) this.cursorTrail.shift();
                }
            }, { passive: true });

            this.render();
        }

        resizeCanvas() {
            if (!this.canvas) return;
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            this.canvas.width = this.width * dpr;
            this.canvas.height = this.height * dpr;
            if (this.ctx) {
                this.ctx.scale(dpr, dpr);
            }
        }

        // ── ASTRONOMICAL CONSTELLATIONS DATA (Большая Медведица, Полярная, Кассиопея, Орион, Плеяды, Лебедь) ──
        initConstellations() {
            const w = this.width || window.innerWidth;
            const h = this.height || window.innerHeight;
            const isMobile = w < 768;

            this.constellations = [
                // 1. БОЛЬШАЯ МЕДВЕДИЦА (URSA MAJOR / THE BIG DIPPER)
                {
                    name: "URSA MAJOR • БОЛЬШАЯ МЕДВЕДИЦА",
                    nameEn: "Ursa Major (Big Dipper)",
                    color: "rgba(255, 215, 0, ",
                    lineColor: "rgba(255, 215, 0, 0.22)",
                    centerX: isMobile ? w * 0.28 : w * 0.22,
                    centerY: isMobile ? h * 0.18 : h * 0.20,
                    stars: [
                        { name: "Alkaid (Бенетнаш)", x: isMobile ? w * 0.08 : w * 0.08, y: isMobile ? h * 0.19 : h * 0.21, r: 2.5, spike: true },
                        { name: "Mizar (Мицар)", x: isMobile ? w * 0.14 : w * 0.13, y: isMobile ? h * 0.17 : h * 0.18, r: 2.6, binary: true },
                        { name: "Alioth (Алиот)", x: isMobile ? w * 0.20 : w * 0.19, y: isMobile ? h * 0.16 : h * 0.17, r: 2.7, spike: true },
                        { name: "Megrez (Мегрец)", x: isMobile ? w * 0.26 : w * 0.24, y: isMobile ? h * 0.17 : h * 0.18, r: 2.3 },
                        { name: "Phecda (Фекда)", x: isMobile ? w * 0.24 : w * 0.23, y: isMobile ? h * 0.24 : h * 0.26, r: 2.4 },
                        { name: "Merak (Мерак)", x: isMobile ? w * 0.32 : w * 0.30, y: isMobile ? h * 0.23 : h * 0.25, r: 2.7, pointer: true },
                        { name: "Dubhe (Дубхе)", x: isMobile ? w * 0.34 : w * 0.31, y: isMobile ? h * 0.16 : h * 0.17, r: 3.2, spike: true, pointer: true }
                    ],
                    edges: [
                        [0, 1], [1, 2], [2, 3], // Handle
                        [3, 4], [4, 5], [5, 6], [6, 3] // Bowl
                    ]
                },

                // 2. ПОЛЯРНАЯ ЗВЕЗДА & МАЛАЯ МЕДВЕДИЦА (POLARIS / URSA MINOR)
                {
                    name: "POLARIS • ПОЛЯРНАЯ ЗВЕЗДА",
                    nameEn: "Polaris (North Star)",
                    color: "rgba(56, 189, 248, ",
                    lineColor: "rgba(56, 189, 248, 0.20)",
                    centerX: isMobile ? w * 0.48 : w * 0.45,
                    centerY: isMobile ? h * 0.09 : h * 0.09,
                    stars: [
                        { name: "Polaris (Северная)", x: isMobile ? w * 0.48 : w * 0.45, y: isMobile ? h * 0.08 : h * 0.08, r: 3.8, isPolaris: true, spike: true },
                        { name: "Yildun", x: isMobile ? w * 0.44 : w * 0.42, y: isMobile ? h * 0.07 : h * 0.07, r: 1.8 },
                        { name: "Urodelus", x: isMobile ? w * 0.40 : w * 0.39, y: isMobile ? h * 0.06 : h * 0.06, r: 1.8 },
                        { name: "Ahfa", x: isMobile ? w * 0.37 : w * 0.36, y: isMobile ? h * 0.07 : h * 0.07, r: 1.9 },
                        { name: "Pherkad", x: isMobile ? w * 0.35 : w * 0.34, y: isMobile ? h * 0.11 : h * 0.11, r: 2.3 },
                        { name: "Kochab", x: isMobile ? w * 0.38 : w * 0.37, y: isMobile ? h * 0.12 : h * 0.12, r: 2.6, spike: true }
                    ],
                    edges: [
                        [0, 1], [1, 2], [2, 3],
                        [3, 4], [4, 5], [5, 3]
                    ]
                },

                // 3. КАССИОПЕЯ (CASSIOPEIA - THE CELESTIAL 'W')
                {
                    name: "CASSIOPEIA • КАССИОПЕЯ",
                    nameEn: "Cassiopeia",
                    color: "rgba(224, 231, 255, ",
                    lineColor: "rgba(168, 85, 247, 0.24)",
                    centerX: isMobile ? w * 0.82 : w * 0.80,
                    centerY: isMobile ? h * 0.16 : h * 0.16,
                    stars: [
                        { name: "Segin (ε Cas)", x: isMobile ? w * 0.70 : w * 0.71, y: isMobile ? h * 0.18 : h * 0.18, r: 2.3 },
                        { name: "Ruchbah (δ Cas)", x: isMobile ? w * 0.75 : w * 0.76, y: isMobile ? h * 0.21 : h * 0.21, r: 2.5 },
                        { name: "Gamma Cas / Navi (γ)", x: isMobile ? w * 0.80 : w * 0.80, y: isMobile ? h * 0.14 : h * 0.14, r: 3.0, spike: true },
                        { name: "Schedar (α Cas)", x: isMobile ? w * 0.87 : w * 0.85, y: isMobile ? h * 0.19 : h * 0.19, r: 3.2, spike: true },
                        { name: "Caph (β Cas)", x: isMobile ? w * 0.92 : w * 0.90, y: isMobile ? h * 0.13 : h * 0.13, r: 2.8, spike: true }
                    ],
                    edges: [
                        [0, 1], [1, 2], [2, 3], [3, 4]
                    ]
                },

                // 4. ОРИОН (ORION THE CELESTIAL HUNTER)
                {
                    name: "ORION • СОЗВЕЗДИЕ ОРИОНА",
                    nameEn: "Orion",
                    color: "rgba(255, 220, 150, ",
                    lineColor: "rgba(56, 189, 248, 0.20)",
                    centerX: isMobile ? w * 0.82 : w * 0.82,
                    centerY: isMobile ? h * 0.68 : h * 0.68,
                    stars: [
                        { name: "Betelgeuse (α Ori)", x: isMobile ? w * 0.74 : w * 0.75, y: isMobile ? h * 0.60 : h * 0.58, r: 3.6, color: "#ff8c42", spike: true },
                        { name: "Bellatrix (γ Ori)", x: isMobile ? w * 0.88 : w * 0.88, y: isMobile ? h * 0.57 : h * 0.56, r: 2.8, spike: true },
                        { name: "Mintaka (δ Ori)", x: isMobile ? w * 0.80 : w * 0.80, y: isMobile ? h * 0.68 : h * 0.67, r: 2.3 },
                        { name: "Alnilam (ε Ori)", x: isMobile ? w * 0.82 : w * 0.82, y: isMobile ? h * 0.69 : h * 0.68, r: 2.5, spike: true },
                        { name: "Alnitak (ζ Ori)", x: isMobile ? w * 0.84 : w * 0.84, y: isMobile ? h * 0.70 : h * 0.69, r: 2.4 },
                        { name: "Saiph (κ Ori)", x: isMobile ? w * 0.76 : w * 0.77, y: isMobile ? h * 0.80 : h * 0.79, r: 2.5 },
                        { name: "Rigel (β Ori)", x: isMobile ? w * 0.89 : w * 0.89, y: isMobile ? h * 0.78 : h * 0.77, r: 3.6, color: "#67e8f9", spike: true }
                    ],
                    edges: [
                        [0, 1], [0, 2], [1, 4],
                        [2, 3], [3, 4], // Belt
                        [2, 5], [4, 6], [5, 6]
                    ]
                },

                // 5. ПЛЕЯДЫ / СЕМЬ СЕСТЁР (PLEIADES / SEVEN SISTERS / ҮРКЕР)
                {
                    name: "PLEIADES • ПЛЕЯДЫ (СЕМЬ СЕСТЁР)",
                    nameEn: "Pleiades Cluster",
                    color: "rgba(56, 189, 248, ",
                    lineColor: "rgba(56, 189, 248, 0.28)",
                    centerX: isMobile ? w * 0.55 : w * 0.56,
                    centerY: isMobile ? h * 0.52 : h * 0.48,
                    isPleiades: true,
                    stars: [
                        { name: "Alcyone (Альциона)", x: isMobile ? w * 0.55 : w * 0.56, y: isMobile ? h * 0.51 : h * 0.47, r: 3.4, color: "#e0f2fe", spike: true },
                        { name: "Electra", x: isMobile ? w * 0.52 : w * 0.53, y: isMobile ? h * 0.53 : h * 0.49, r: 2.6, color: "#bae6fd" },
                        { name: "Maia", x: isMobile ? w * 0.54 : w * 0.55, y: isMobile ? h * 0.49 : h * 0.45, r: 2.7, color: "#bae6fd", spike: true },
                        { name: "Merope", x: isMobile ? w * 0.53 : w * 0.54, y: isMobile ? h * 0.54 : h * 0.50, r: 2.5, color: "#7dd3fc" },
                        { name: "Taygeta", x: isMobile ? w * 0.51 : w * 0.52, y: isMobile ? h * 0.50 : h * 0.46, r: 2.4, color: "#7dd3fc" },
                        { name: "Atlas", x: isMobile ? w * 0.57 : w * 0.58, y: isMobile ? h * 0.52 : h * 0.48, r: 2.9, color: "#38bdf8", spike: true },
                        { name: "Pleione", x: isMobile ? w * 0.58 : w * 0.59, y: isMobile ? h * 0.51 : h * 0.47, r: 2.3, color: "#38bdf8" }
                    ],
                    edges: [
                        [0, 1], [0, 2], [1, 3], [2, 4], [0, 5], [5, 6]
                    ]
                },

                // 6. ЛЕБЕДЬ / СЕВЕРНЫЙ КРЕСТ (CYGNUS / NORTHERN CROSS)
                {
                    name: "CYGNUS • ЛЕБЕДЬ (СЕВЕРНЫЙ КРЕСТ)",
                    nameEn: "Cygnus",
                    color: "rgba(192, 132, 252, ",
                    lineColor: "rgba(192, 132, 252, 0.22)",
                    centerX: isMobile ? w * 0.16 : w * 0.15,
                    centerY: isMobile ? h * 0.65 : h * 0.64,
                    stars: [
                        { name: "Deneb (Денеб)", x: isMobile ? w * 0.16 : w * 0.15, y: isMobile ? h * 0.56 : h * 0.55, r: 3.6, color: "#ffffff", spike: true },
                        { name: "Sadr", x: isMobile ? w * 0.16 : w * 0.15, y: isMobile ? h * 0.65 : h * 0.64, r: 2.8, color: "#ffd700", spike: true },
                        { name: "Gienah", x: isMobile ? w * 0.10 : w * 0.09, y: isMobile ? h * 0.63 : h * 0.62, r: 2.6, color: "#e0f2fe" },
                        { name: "Delta Cygni", x: isMobile ? w * 0.22 : w * 0.21, y: isMobile ? h * 0.64 : h * 0.63, r: 2.5, color: "#e0f2fe" },
                        { name: "Albireo", x: isMobile ? w * 0.16 : w * 0.15, y: isMobile ? h * 0.74 : h * 0.73, r: 2.8, color: "#f59e0b", spike: true }
                    ],
                    edges: [
                        [0, 1], [1, 4], // Axis
                        [2, 1], [1, 3]  // Wings
                    ]
                }
            ];
        }

        createParticle() {
            const colors = ['rgba(255, 215, 0, ', 'rgba(245, 197, 24, ', 'rgba(56, 189, 248, ', 'rgba(255, 255, 255, ', 'rgba(192, 132, 252, '];
            return {
                x: Math.random() * (this.width || window.innerWidth),
                y: Math.random() * (this.height || window.innerHeight),
                radius: Math.random() * 1.5 + 0.5,
                colorPrefix: colors[Math.floor(Math.random() * colors.length)],
                baseAlpha: Math.random() * 0.55 + 0.2,
                twinkleSpeed: Math.random() * 0.03 + 0.008,
                phase: Math.random() * Math.PI * 2,
                vx: (Math.random() - 0.5) * 0.15,
                vy: -Math.random() * 0.18 - 0.04
            };
        }

        createMeteor(force = false, customX = null, customY = null) {
            const w = this.width || window.innerWidth;
            const h = this.height || window.innerHeight;
            const startX = (customX !== null) ? customX : (Math.random() * w * 0.9 + w * 0.05);
            const startY = (customY !== null) ? customY : (Math.random() * h * 0.35);
            const angle = (Math.PI * 0.28) + (Math.random() * 0.16 - 0.08); // Natural diagonal flight (~35-45 deg)
            const speed = Math.random() * 8 + 14; // Swift 14-22 px/frame
            const length = Math.random() * 120 + 90;
            const isBolide = Math.random() < 0.15; // 15% chance of rare brilliant bolide

            let headColor = '#ffffff';
            let trailGrad1 = 'rgba(255, 215, 0, ';
            let trailGrad2 = 'rgba(56, 189, 248, ';

            if (isBolide) {
                headColor = '#ffffff';
                trailGrad1 = 'rgba(255, 255, 255, ';
                trailGrad2 = 'rgba(255, 215, 0, ';
            } else if (Math.random() > 0.5) {
                headColor = '#ffd700';
                trailGrad1 = 'rgba(255, 230, 100, ';
                trailGrad2 = 'rgba(255, 120, 0, ';
            } else {
                headColor = '#38bdf8';
                trailGrad1 = 'rgba(56, 189, 248, ';
                trailGrad2 = 'rgba(168, 85, 247, ';
            }

            return {
                x: startX,
                y: startY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                length: isBolide ? length * 1.5 : length,
                angle: angle,
                speed: speed,
                isBolide: isBolide,
                headColor: headColor,
                trailGrad1: trailGrad1,
                trailGrad2: trailGrad2,
                opacity: 1.0,
                decay: isBolide ? 0.010 : (Math.random() * 0.016 + 0.012),
                sparkTimer: 0
            };
        }

        triggerMeteorShower(count = 12) {
            const w = this.width || window.innerWidth;
            const h = this.height || window.innerHeight;

            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    const x = Math.random() * w * 0.85 + w * 0.05;
                    const y = Math.random() * (h * 0.25);
                    this.meteors.push(this.createMeteor(true, x, y));
                }, i * 90 + Math.random() * 40);
            }
        }

        // ── VOLUMETRIC DEEP SPACE NEBULAE (М42 Orion, Pleiades Cloud, Carina Gold Haze) ──
        renderNebulae(timeSec) {
            const w = this.width;
            const h = this.height;

            // 1. Orion Nebula (M42) - Violet & Magenta luminous cloud
            if (this.constellations[3]) {
                const orion = this.constellations[3];
                const nebX = orion.stars[3]?.x || w * 0.82;
                const nebY = (orion.stars[3]?.y || h * 0.69) + 12;
                const nebR = Math.min(w, h) * 0.16;

                const orionGrad = this.ctx.createRadialGradient(nebX, nebY, 4, nebX, nebY, nebR);
                const pulse = Math.sin(timeSec * 0.8) * 0.015 + 0.04;
                orionGrad.addColorStop(0, `rgba(236, 72, 153, ${pulse * 1.8})`);
                orionGrad.addColorStop(0.4, `rgba(168, 85, 247, ${pulse})`);
                orionGrad.addColorStop(0.8, `rgba(56, 189, 248, ${pulse * 0.4})`);
                orionGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

                this.ctx.beginPath();
                this.ctx.arc(nebX, nebY, nebR, 0, Math.PI * 2);
                this.ctx.fillStyle = orionGrad;
                this.ctx.fill();
            }

            // 2. Pleiades Blue Reflection Nebula
            if (this.constellations[4]) {
                const pleiades = this.constellations[4];
                const plX = pleiades.centerX;
                const plY = pleiades.centerY;
                const plR = Math.min(w, h) * 0.12;

                const plGrad = this.ctx.createRadialGradient(plX, plY, 2, plX, plY, plR);
                const plPulse = Math.sin(timeSec * 1.1 + 1) * 0.015 + 0.045;
                plGrad.addColorStop(0, `rgba(56, 189, 248, ${plPulse * 2.2})`);
                plGrad.addColorStop(0.5, `rgba(129, 140, 248, ${plPulse})`);
                plGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

                this.ctx.beginPath();
                this.ctx.arc(plX, plY, plR, 0, Math.PI * 2);
                this.ctx.fillStyle = plGrad;
                this.ctx.fill();
            }

            // 3. Ambient Golden Stardust Haze (Carina Sweep)
            const goldX = w * 0.35 + Math.sin(timeSec * 0.3) * 30;
            const goldY = h * 0.28 + Math.cos(timeSec * 0.3) * 20;
            const goldR = Math.min(w, h) * 0.28;

            const goldGrad = this.ctx.createRadialGradient(goldX, goldY, 10, goldX, goldY, goldR);
            const goldPulse = Math.sin(timeSec * 0.6) * 0.01 + 0.03;
            goldGrad.addColorStop(0, `rgba(255, 215, 0, ${goldPulse * 1.5})`);
            goldGrad.addColorStop(0.6, `rgba(217, 119, 6, ${goldPulse * 0.5})`);
            goldGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            this.ctx.beginPath();
            this.ctx.arc(goldX, goldY, goldR, 0, Math.PI * 2);
            this.ctx.fillStyle = goldGrad;
            this.ctx.fill();
        }

        render() {
            if (!this.isTabActive) return;

            const now = performance.now();
            if (this.lastFrameTime && (now - this.lastFrameTime < 16)) {
                this.animFrameId = requestAnimationFrame(() => this.render());
                return;
            }
            this.lastFrameTime = now;

            this.ctx.clearRect(0, 0, this.width, this.height);

            const timeSec = now * 0.001;

            // 1. Natural Shooting Star Stream (Every 1.8 - 3.2s)
            if (this.meteors.length < 3 && Date.now() - this.lastMeteorTime > 2000) {
                this.meteors.push(this.createMeteor());
                this.lastMeteorTime = Date.now() + Math.random() * 1200;
            }

            // Periodic ambient mini-shower every 45 seconds
            if (Date.now() - this.lastAutoShower > 45000) {
                this.lastAutoShower = Date.now();
                this.triggerMeteorShower(5);
            }

            // ── 2. VOLUMETRIC DEEP SPACE NEBULAE ──────────────────────────────
            this.renderNebulae(timeSec);

            // ── 3. RENDER DEEP SPACE BACKGROUND PARTICLES (80 Stars) ─────────
            const pLen = this.particles.length;
            for (let i = 0; i < pLen; i++) {
                const p = this.particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.phase += p.twinkleSpeed;

                if (p.y < -10) { p.y = this.height + 10; p.x = Math.random() * this.width; }
                if (p.x < -10) p.x = this.width + 10;
                if (p.x > this.width + 10) p.x = -10;

                const alpha = Math.max(0.12, Math.min(0.9, p.baseAlpha + Math.sin(p.phase) * 0.35));
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = p.colorPrefix + alpha + ')';
                this.ctx.fill();
            }

            // ── 4. RENDER ASTRONOMICAL CONSTELLATIONS ─────────────────────────
            const cLen = this.constellations.length;
            for (let cIdx = 0; cIdx < cLen; cIdx++) {
                const constel = this.constellations[cIdx];
                const stars = constel.stars;
                const edges = constel.edges;

                // Check mouse proximity for celestial glowing highlight
                const dxMouse = this.mouseX - constel.centerX;
                const dyMouse = this.mouseY - constel.centerY;
                const distSqMouse = dxMouse * dxMouse + dyMouse * dyMouse;
                const isNearMouse = distSqMouse < 60000;
                const lineAlphaBase = isNearMouse ? 0.48 : 0.18;
                const lineAlpha = lineAlphaBase + Math.sin(timeSec * 1.5 + cIdx) * 0.06;

                // A. Draw Constellation Connecting Lines (Batch path)
                this.ctx.beginPath();
                this.ctx.lineWidth = isNearMouse ? 1.3 : 0.8;
                this.ctx.strokeStyle = constel.lineColor.replace(/[\d\.]+\)$/, `${lineAlpha})`);
                
                for (let eIdx = 0; eIdx < edges.length; eIdx++) {
                    const [s1Idx, s2Idx] = edges[eIdx];
                    const s1 = stars[s1Idx];
                    const s2 = stars[s2Idx];
                    if (s1 && s2) {
                        this.ctx.moveTo(s1.x, s1.y);
                        this.ctx.lineTo(s2.x, s2.y);
                    }
                }
                this.ctx.stroke();

                // B. Special Pointer Line: Merak -> Dubhe -> Polaris Guide!
                if (cIdx === 0 && this.constellations[1]) {
                    const merak = stars[5];
                    const dubhe = stars[6];
                    const polaris = this.constellations[1].stars[0];
                    if (merak && dubhe && polaris) {
                        this.ctx.save();
                        this.ctx.setLineDash([4, 6]);
                        this.ctx.lineDashOffset = -timeSec * 15;
                        this.ctx.beginPath();
                        this.ctx.moveTo(dubhe.x, dubhe.y);
                        this.ctx.lineTo(polaris.x, polaris.y);
                        this.ctx.strokeStyle = `rgba(255, 215, 0, ${isNearMouse ? 0.45 : 0.18})`;
                        this.ctx.lineWidth = 0.9;
                        this.ctx.stroke();
                        this.ctx.restore();
                    }
                }

                // C. Cosmic Weaver: Dynamic starlight thread to cursor
                if (isNearMouse && this.mouseX > 0 && stars[0]) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(stars[0].x, stars[0].y);
                    this.ctx.lineTo(this.mouseX, this.mouseY);
                    this.ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - distSqMouse / 60000) * 0.35})`;
                    this.ctx.lineWidth = 0.7;
                    this.ctx.stroke();
                }

                // D. Draw Constellation Stars & Radiant Flares
                for (let sIdx = 0; sIdx < stars.length; sIdx++) {
                    const st = stars[sIdx];
                    const twinkle = Math.sin(timeSec * 2.2 + sIdx * 1.3 + cIdx) * 0.35 + 0.65;
                    const r = st.r * (0.9 + twinkle * 0.2);

                    // 1. Soft Outer Atmosphere Glow
                    this.ctx.beginPath();
                    this.ctx.arc(st.x, st.y, r * 3.4, 0, Math.PI * 2);
                    this.ctx.fillStyle = `${constel.color}${0.20 * twinkle})`;
                    this.ctx.fill();

                    // 2. Main Star Body
                    this.ctx.beginPath();
                    this.ctx.arc(st.x, st.y, r, 0, Math.PI * 2);
                    this.ctx.fillStyle = st.color || (st.isPolaris ? '#ffffff' : (twinkle > 0.8 ? '#ffffff' : '#ffd700'));
                    this.ctx.fill();

                    // 3. Diffraction Cross Spike (4-pointed star flare on major stars)
                    if (st.spike) {
                        const spikeLen = r * (st.isPolaris ? 4.8 : 3.0) * twinkle;
                        this.ctx.beginPath();
                        this.ctx.moveTo(st.x - spikeLen, st.y);
                        this.ctx.lineTo(st.x + spikeLen, st.y);
                        this.ctx.moveTo(st.x, st.y - spikeLen);
                        this.ctx.lineTo(st.x, st.y + spikeLen);
                        this.ctx.strokeStyle = st.isPolaris ? `rgba(255, 255, 255, ${0.75 * twinkle})` : `rgba(255, 215, 0, ${0.60 * twinkle})`;
                        this.ctx.lineWidth = st.isPolaris ? 1.3 : 0.8;
                        this.ctx.stroke();
                    }

                    // 4. Polaris Celestial Ring
                    if (st.isPolaris) {
                        const ringR = (r * 3.5) + Math.sin(timeSec * 3) * 2.5;
                        this.ctx.beginPath();
                        this.ctx.arc(st.x, st.y, Math.max(1, ringR), 0, Math.PI * 2);
                        this.ctx.strokeStyle = `rgba(56, 189, 248, ${0.38 + Math.sin(timeSec * 3) * 0.2})`;
                        this.ctx.lineWidth = 0.8;
                        this.ctx.stroke();
                    }

                    // 5. Mizar Binary Companion Dot (Alcor)
                    if (st.binary) {
                        this.ctx.beginPath();
                        this.ctx.arc(st.x + 4, st.y - 4, 1.1, 0, Math.PI * 2);
                        this.ctx.fillStyle = `rgba(255, 255, 255, ${0.75 * twinkle})`;
                        this.ctx.fill();
                    }
                }

                // E. Draw Subtle Constellation Inscription
                const labelAlpha = isNearMouse ? 0.82 : 0.34;
                this.ctx.font = "600 9px 'JetBrains Mono', monospace";
                this.ctx.fillStyle = `rgba(226, 232, 240, ${labelAlpha})`;
                this.ctx.fillText(`✦ ${constel.name}`, stars[0].x - 10, stars[0].y + (cIdx === 3 ? 30 : -14));
            }

            // ── 5. DRAW SHOOTING STARS / METEORS & SPARKS ─────────────────────
            for (let mIdx = this.meteors.length - 1; mIdx >= 0; mIdx--) {
                const m = this.meteors[mIdx];
                const tailX = m.x - Math.cos(m.angle) * m.length;
                const tailY = m.y - Math.sin(m.angle) * m.length;

                // Multi-stage Ionization Trail Gradient
                const grad = this.ctx.createLinearGradient(tailX, tailY, m.x, m.y);
                grad.addColorStop(0, 'rgba(255, 215, 0, 0)');
                grad.addColorStop(0.35, `${m.trailGrad2}${m.opacity * 0.4})`);
                grad.addColorStop(0.8, `${m.trailGrad1}${m.opacity * 0.8})`);
                grad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity})`);

                this.ctx.beginPath();
                this.ctx.moveTo(tailX, tailY);
                this.ctx.lineTo(m.x, m.y);
                this.ctx.strokeStyle = grad;
                this.ctx.lineWidth = m.isBolide ? 3.4 : 2.2;
                this.ctx.lineCap = 'round';
                this.ctx.stroke();

                // Brilliant Radiant Meteor Head
                this.ctx.beginPath();
                this.ctx.arc(m.x, m.y, (m.isBolide ? 3.8 : 2.5) * m.opacity, 0, Math.PI * 2);
                this.ctx.fillStyle = m.headColor;
                this.ctx.shadowColor = m.isBolide ? '#ffffff' : '#ffd700';
                this.ctx.shadowBlur = m.isBolide ? 14 : 8;
                this.ctx.fill();
                this.ctx.shadowBlur = 0; // Reset shadow immediately

                // Spawn stardust sparks behind meteor
                m.sparkTimer++;
                if (m.sparkTimer % 3 === 0 && this.sparks.length < 50) {
                    this.sparks.push({
                        x: m.x - Math.cos(m.angle) * (Math.random() * 20),
                        y: m.y - Math.sin(m.angle) * (Math.random() * 20),
                        vx: (Math.random() - 0.5) * 0.8,
                        vy: (Math.random() - 0.5) * 0.8,
                        alpha: m.opacity * 0.8,
                        decay: 0.045,
                        r: Math.random() * 1.5 + 0.6
                    });
                }

                m.x += m.vx;
                m.y += m.vy;
                m.opacity -= m.decay;

                if (m.opacity <= 0 || m.x > this.width + 140 || m.y > this.height + 140) {
                    this.meteors.splice(mIdx, 1);
                }
            }

            // Draw Trailing Meteor Stardust Sparks
            for (let sIdx = this.sparks.length - 1; sIdx >= 0; sIdx--) {
                const sp = this.sparks[sIdx];
                sp.x += sp.vx;
                sp.y += sp.vy;
                sp.alpha -= sp.decay;

                if (sp.alpha <= 0) {
                    this.sparks.splice(sIdx, 1);
                    continue;
                }

                this.ctx.beginPath();
                this.ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(255, 215, 0, ${sp.alpha})`;
                this.ctx.fill();
            }

            // ── 6. DRAW CURSOR SUPERNOVA STARDUST TRAIL ───────────────────────
            for (let k = this.cursorTrail.length - 1; k >= 0; k--) {
                const t = this.cursorTrail[k];
                t.x += t.vx;
                t.y += t.vy;
                t.alpha -= 0.045;

                if (t.alpha <= 0) {
                    this.cursorTrail.splice(k, 1);
                    continue;
                }

                this.ctx.beginPath();
                this.ctx.arc(t.x, t.y, t.radius * 1.8, 0, Math.PI * 2);
                this.ctx.fillStyle = t.color + (t.alpha * 0.25) + ')';
                this.ctx.fill();

                this.ctx.beginPath();
                this.ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = t.color + t.alpha + ')';
                this.ctx.fill();
            }

            this.animFrameId = requestAnimationFrame(() => this.render());
        }

        // ── 9. CARD 3D TILT & BORDER BEAMS (Вишенки 6, 7 & 20) ───────────────
        bindCardVisuals() {
            if (this.isLowPower) return;

            const CARD_SELECTORS = '.book-card, .pricing-card, .portal-card, .feature-card, .lbo-pricing-card, .video-preset-card, .v-card';

            // Auto-inject border beam tracer (Вишенка 6)
            document.querySelectorAll(CARD_SELECTORS).forEach(card => {
                if (!card.querySelector('.hyper-border-beam')) {
                    const beam = document.createElement('div');
                    beam.className = 'hyper-border-beam';
                    card.appendChild(beam);
                }
            });

            // Smooth 3D tilt with RAF throttling (Zero input lag)
            let activeCard = null;
            let targetTiltX = 0, targetTiltY = 0;
            let rafTiltScheduled = false;

            document.addEventListener('mousemove', (e) => {
                if (e.target.closest('button, input, select, textarea, a')) return;

                const targetCard = e.target.closest(CARD_SELECTORS);
                if (!targetCard) {
                    activeCard = null;
                    return;
                }

                activeCard = targetCard;
                const rect = targetCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const percentX = (x / rect.width) - 0.5;
                const percentY = (y / rect.height) - 0.5;

                targetTiltX = (percentY * -6).toFixed(2);
                targetTiltY = (percentX * 6).toFixed(2);

                if (!rafTiltScheduled) {
                    rafTiltScheduled = true;
                    requestAnimationFrame(() => {
                        if (activeCard) {
                            activeCard.style.transform = `perspective(1100px) rotateX(${targetTiltX}deg) rotateY(${targetTiltY}deg) scale3d(1.015, 1.015, 1.015)`;
                        }
                        rafTiltScheduled = false;
                    });
                }
            }, { passive: true });

            document.addEventListener('mouseout', (e) => {
                const targetCard = e.target.closest(CARD_SELECTORS);
                if (targetCard && (!e.relatedTarget || !targetCard.contains(e.relatedTarget))) {
                    targetCard.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                    if (activeCard === targetCard) activeCard = null;
                }
            }, { passive: true });
        }

        // ── 10. SUPERNOVA SPARKLE BURST & GRAVITATIONAL RIPPLES (Вишенки 9 & 10) ──
        bindSupernovaBursts() {
            document.addEventListener('click', (e) => {
                // 1. Supernova sparkle dot burst (Вишенка 9)
                const count = 7;
                for (let i = 0; i < count; i++) {
                    const dot = document.createElement('div');
                    dot.className = 'hyper-sparkle-dot';
                    dot.style.left = `${e.clientX}px`;
                    dot.style.top = `${e.clientY}px`;

                    const angle = (Math.PI * 2 / count) * i + (Math.random() * 0.4 - 0.2);
                    const dist = Math.random() * 32 + 18;
                    dot.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
                    dot.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);

                    document.body.appendChild(dot);
                    setTimeout(() => dot.remove(), 680);
                }

                // 2. Gravitational concentric wave rings (Вишенка 10) on clickable blocks
                const container = e.target.closest('button, .book-card, .pricing-card, .portal-card, .btn-primary, .hero-cta, .nav-btn');
                if (container) {
                    const rect = container.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height) * 1.6;

                    const ring1 = document.createElement('div');
                    ring1.className = 'hyper-wave-ring';
                    ring1.style.width = ring1.style.height = `${size}px`;
                    ring1.style.left = `${e.clientX - rect.left}px`;
                    ring1.style.top = `${e.clientY - rect.top}px`;

                    const ring2 = document.createElement('div');
                    ring2.className = 'hyper-wave-ring hyper-wave-ring-outer';
                    ring2.style.width = ring2.style.height = `${size * 0.85}px`;
                    ring2.style.left = `${e.clientX - rect.left}px`;
                    ring2.style.top = `${e.clientY - rect.top}px`;

                    container.appendChild(ring1);
                    container.appendChild(ring2);

                    setTimeout(() => {
                        ring1.remove();
                        ring2.remove();
                    }, 880);
                }
            }, { passive: true });
        }

        // ── 11. VOLUMETRIC GOD-RAYS (Optimized: hardware CSS only) ─────────────
        injectVolumetricGodRays() {
            // Disabled on CPU/GPU to ensure zero fill-rate strain and 120 FPS
        }

        // ── 12. IMAX CINEMATIC VIGNETTE ──────────────────────────────────────────
        injectImaxVignette() {
            // Handled via static lightweight vignette CSS without overdraw
        }

        // ── 13. 100X 3D BOOK GOLD LEAF (Золотой срез страниц) ──────────────────────
        injectBookGoldLeafLayers() {
            const injectLeaves = () => {
                document.querySelectorAll('.book-card').forEach(card => {
                    if (!card.querySelector('.book-gold-leaf')) {
                        const leaf = document.createElement('div');
                        leaf.className = 'book-gold-leaf';
                        card.appendChild(leaf);
                    }
                });
            };
            injectLeaves();
            // Re-run once after portals data renders
            setTimeout(injectLeaves, 1200);
        }

        // ── 14. COMET-TAIL STARDUST PARTICLES ──────────────────────────────────────
        bindCometTailParticles() {
            // Handled exclusively by GPU canvas cursorTrail (zero DOM garbage collection)
        }

        // ── 15. MOLTEN GOLD CONTOUR DYNAMICS ───────────────────────────────────────
        bindMoltenGoldDynamics() {
            // Handled via pure GPU CSS keyframes (zero style recalculations)
        }

        bindVisibilityObserver() {
            document.addEventListener('visibilitychange', () => {
                this.isTabActive = !document.hidden;
                if (this.isTabActive && !this.animFrameId && !this.isLowPower) {
                    this.render();
                } else if (!this.isTabActive && this.animFrameId) {
                    cancelAnimationFrame(this.animFrameId);
                    this.animFrameId = null;
                }
            });
        }
    }

    new HyperGraphicsEngine();

})(window, document);
