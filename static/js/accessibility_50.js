/**
 * LITALLY 4K — 50 SOVEREIGN ACCESSIBILITY & ASSISTIVE MODALITIES
 * File: static/js/accessibility_50.js
 */

const A11Y_MODES = [
    // 1. Color & Vision Profiles (1-10)
    { id: 1, icon: "👑", category: "vision", name: "High-Contrast Sovereign Gold", desc: "Pure OLED black with luminescent 2px gold outlines for maximum retinal contrast.", cssClass: "a11y-high-contrast" },
    { id: 2, icon: "⚫", category: "vision", name: "Pure Black Ultra-OLED", desc: "True zero-luminance background with ambient particles disabled to protect sensitive eyes.", cssClass: "a11y-pure-black" },
    { id: 3, icon: "🌅", category: "vision", name: "Morning Soft Parchment", desc: "Warm amber-ivory circadian tone eliminating glare during daytime and morning reading.", cssClass: "a11y-morning-parchment" },
    { id: 4, icon: "🔴", category: "vision", name: "Protanopia Compensation", desc: "Real-time spectral shift filter optimizing contrast for red-photoreceptor deficiency.", cssClass: "a11y-protanopia" },
    { id: 5, icon: "🟢", category: "vision", name: "Deuteranopia Compensation", desc: "Specialized color remapping for green-weak color perception.", cssClass: "a11y-deuteranopia" },
    { id: 6, icon: "🔵", category: "vision", name: "Tritanopia Compensation", desc: "Color axis adjustment for blue-yellow color vision deficiency.", cssClass: "a11y-tritanopia" },
    { id: 7, icon: "⚪", category: "vision", name: "Monochrome Sanctuary", desc: "Pure high-contrast grayscale eliminating all color distractions and saturation strain.", cssClass: "a11y-monochrome" },
    { id: 8, icon: "🔍", category: "vision", name: "Cataract Soft Sharpener", desc: "High-acuity edge detection filter sharpening blurry letter contours.", cssClass: "a11y-cataract-sharp" },
    { id: 9, icon: "🔦", category: "vision", name: "Glaucoma Central Focus", desc: "Central field brightness enhancer compensating for peripheral vision reduction.", cssClass: "a11y-glaucoma-focus" },
    { id: 10, icon: "🕶️", category: "vision", name: "Photophobia Anti-Glare Shield", desc: "Deep sepia polaroid layer with 85% reduced brightness for extreme light sensitivity.", cssClass: "a11y-photophobia" },

    // 2. Neuro & Cognitive Ergonomics (11-20)
    { id: 11, icon: "🧠", category: "neuro", name: "AI Easy-to-Read Simplifier", desc: "Neural rewriter: shortens clauses and extracts essence for low cognitive fatigue.", action: "toggleEasyToRead" },
    { id: 12, icon: "⚡", category: "neuro", name: "Bionic Reading Morph", desc: "Bolds initial syllables of every word for lightning-fast cognitive guidance.", action: "toggleBionicReading", cssClass: "a11y-bionic-reading" },
    { id: 13, icon: "📏", category: "neuro", name: "Dyslexia Laser Guide Ruler", desc: "Horizontal illuminated reading guide bar tracking cursor to keep your reading line.", action: "toggleDyslexiaRuler", cssClass: "a11y-dyslexia-ruler" },
    { id: 14, icon: "🔤", category: "neuro", name: "OpenDyslexic Weight Bias", desc: "Specialized weighted baseline typography preventing letter flipping and rotation.", cssClass: "a11y-opendyslexic" },
    { id: 15, icon: "🎯", category: "neuro", name: "ADHD Hyper-Focus Mask", desc: "Softly blurs and dims all page content except the block currently under your cursor.", cssClass: "a11y-adhd-focus" },
    { id: 16, icon: "🛡️", category: "neuro", name: "Sensory Overload Shield", desc: "Instantly terminates all canvas particles, glow pulses, and decorative animations.", cssClass: "a11y-sensory-shield" },
    { id: 17, icon: "🚶", category: "neuro", name: "Cognitive Scroll Pacer", desc: "Locks scroll momentum to gentle reader intervals, preventing disorientation.", action: "toggleScrollPacer" },
    { id: 18, icon: "🖍️", category: "neuro", name: "TTS Karaoke Highlighting", desc: "Synchronously highlights words as they are read aloud by synthetic narration.", action: "toggleTTSHighlight" },
    { id: 19, icon: "🧭", category: "neuro", name: "Cognitive Memory Breadcrumbs", desc: "Displays step-by-step visual waypoints of active modals and visited sections.", action: "toggleBreadcrumbs" },
    { id: 20, icon: "💡", category: "neuro", name: "Jargon & Metaphor Decrypter", desc: "Hovering over complex literary terms reveals simple, plain-language tooltips.", action: "toggleJargonDecrypter" },

    // 3. Optics & Gaze Control (21-27)
    { id: 21, icon: "👁️", category: "gaze", name: "Interactive Virtual Eye-Tracker", desc: "Software eye-tracking emulator magnifying the exact paragraph your gaze inspects.", action: "toggleEyeTracking" },
    { id: 22, icon: "🤏", category: "gaze", name: "Micro-Facial Gesture Engine", desc: "Webcam facial nod to scroll down, eyebrow raise to summon hub menu.", action: "toggleFacialGestures" },
    { id: 23, icon: "⏱️", category: "gaze", name: "Gaze Dwell-Clicker (1.2s)", desc: "Hover cursor over any button for 1.2 seconds to auto-click without physical tapping.", action: "toggleDwellClicker" },
    { id: 24, icon: "🔎", category: "gaze", name: "Optical Loupe Magnifier (2x)", desc: "High-definition floating circular lens with double zoom magnification.", action: "toggleLoupe" },
    { id: 25, icon: "👓", category: "gaze", name: "Peripheral Contrast Amplifier", desc: "Maximizes peripheral boundary clarity to combat field degradation.", cssClass: "a11y-peripheral-amp" },
    { id: 26, icon: "📋", category: "gaze", name: "Line-Focus Letterbox Blinds", desc: "Only exposes 3 lines of prose at a time while shading out surrounding noise.", action: "toggleLetterbox" },
    { id: 27, icon: "✨", category: "gaze", name: "Giant Luminescent Beacon Cursor", desc: "Expands pointer into high-visibility gold beacon with coordinate crosshair.", cssClass: "a11y-beacon-cursor" },

    // 4. Psychoacoustics & 3D Spatial Audio (28-34)
    { id: 28, icon: "🔊", category: "audio", name: "3D Spatial Sound Compass", desc: "Positional stereo audio cues indicating layout location of buttons and menus in space.", action: "toggle3DAudio" },
    { id: 29, icon: "🗣️", category: "audio", name: "Empathetic Emotional AI Narrator", desc: "Nuanced voice synthesis that inflects tone with warmth, suspense, or clarity.", action: "toggleEmotionalTTS" },
    { id: 30, icon: "📯", category: "audio", name: "Sub-Bass Navigational Pulses", desc: "Low-frequency acoustic pings confirming navigation boundaries for the blind.", action: "toggleSubBass" },
    { id: 31, icon: "🧘", category: "audio", name: "Binaural Reading Beats (432Hz)", desc: "Generates calming 432Hz ambient frequency for elevated reading concentration.", action: "toggleBinauralBeats" },
    { id: 32, icon: "🎧", category: "audio", name: "Whisper Sanctuary Voice Guide", desc: "Gentle ASMR-level narration for hyper-sensitive auditory processing.", action: "toggleWhisperGuide" },
    { id: 33, icon: "🔔", category: "audio", name: "Acoustic Earcon Landmarks", desc: "Unique harmonic chimes assigned to modals, buttons, and chapter selections.", action: "toggleEarcons" },
    { id: 34, icon: "🎙️", category: "audio", name: "Hands-Free Voice Commander", desc: "Voice recognition engine: speak 'Read', 'Books', 'Menu', or 'Close' to navigate.", action: "toggleVoiceCommander" },

    // 5. Motor, Tremor & Physical Assist (35-42)
    { id: 35, icon: "✋", category: "motor", name: "Parkinson & Tremor Click Guard", desc: "Expands hitboxes to 56px and filters rapid involuntary multi-clicks.", cssClass: "a11y-tremor-guard" },
    { id: 36, icon: "⌨️", category: "motor", name: "Single-Key Keyboard Matrix", desc: "Cycle through all interactive buttons using solely the Spacebar or Enter.", action: "toggleSingleKey" },
    { id: 37, icon: "🕹️", category: "motor", name: "Virtual Head-Tracking Joystick", desc: "Converts subtle head tilt into smooth directional cursor scrolling.", action: "toggleHeadJoystick" },
    { id: 38, icon: "🧲", category: "motor", name: "Sticky Button Magnetic Snapping", desc: "Mouse pointer magnetically glides to the nearest button center within 40px.", action: "toggleMagneticSnapping" },
    { id: 39, icon: "📱", category: "motor", name: "Giant Touch Targets (64px)", desc: "Enlarges all interactive clickable components to 64px for shaky touch control.", cssClass: "a11y-giant-targets" },
    { id: 40, icon: "💨", category: "motor", name: "Sip-and-Puff Switch Simulator", desc: "Emulates accessibility assistive switches with rhythmic automatic traversal.", action: "toggleSwitchSim" },
    { id: 41, icon: "🐌", category: "motor", name: "Ultra-Slow Kinetic Deceleration", desc: "Reduces scroll inertia by 75% for patients prone to motor vertigo.", action: "toggleSlowScroll" },
    { id: 42, icon: "⚖️", category: "motor", name: "Hand Drift Involuntary Filter", desc: "Algorithmic cursor stabilizer smoothing involuntary hand vibrations.", action: "toggleDriftFilter" },

    // 6. Circadian & Biometric Adaptations (43-46)
    { id: 43, icon: "🕯️", category: "circadian", name: "Circadian Sunset Solar Sync", desc: "Queries real local solar elevation to dynamically warm display temperature.", action: "toggleSolarSync" },
    { id: 44, icon: "🌙", category: "circadian", name: "Melatonin Midnight Amber (<550nm)", desc: "Blocks 100% of blue light spectrum below 550nm for healthy night reading.", cssClass: "a11y-melatonin-amber" },
    { id: 45, icon: "🫁", category: "circadian", name: "4-7-8 Coherence Breathing Aura", desc: "Background ambient aura gently expands and contracts in relaxing yogic rhythm.", action: "toggleBreathingAura" },
    { id: 46, icon: "⏳", category: "circadian", name: "Anti-Panic Stressless Infinite Timers", desc: "Disables all session limits and hidden timeouts to eradicate time-pressure anxiety.", action: "toggleAntiPanic" },

    // 7. Visual De-clutter & Structural Semantics (47-50)
    { id: 47, icon: "🖼️", category: "declutter", name: "Semantic Graphic De-Clutter", desc: "Strips out decorative stock art while preserving informative diagrams and book covers.", action: "toggleDeclutter" },
    { id: 48, icon: "📑", category: "declutter", name: "Screen-Reader Semantic Blueprint", desc: "Renders clear textual visual hierarchy for users navigating with NVDA/JAWS.", action: "toggleSemanticBlueprint" },
    { id: 49, icon: "📳", category: "declutter", name: "Tactile Screen Haptic Pulses", desc: "Vibrates mobile devices with unique micro-pulses as fingers trace letterforms.", action: "toggleHapticReading" },
    { id: 50, icon: "📜", category: "declutter", name: "Pure Sovereign Gutenberg Sheet", desc: "Minimalist monastic layout: purely typography, zero menus, absolute reading immersion.", cssClass: "a11y-gutenberg" }
];

// Active set of enabled accessibility modes
let activeA11yModes = new Set(JSON.parse(localStorage.getItem('litally_active_a11y') || '[]'));

/**
 * Toggles an accessibility mode on or off
 */
function toggleA11yMode(id) {
    const item = A11Y_MODES.find(m => m.id === id);
    if (!item) return;

    if (activeA11yModes.has(id)) {
        activeA11yModes.delete(id);
        if (item.cssClass) document.body.classList.remove(item.cssClass);
        if (typeof playChime === 'function') playChime(420);
    } else {
        activeA11yModes.add(id);
        if (item.cssClass) document.body.classList.add(item.cssClass);
        if (typeof playChime === 'function') playChime(880);
    }

    // Execute interactive custom logic if available
    executeA11yAction(item, activeA11yModes.has(id));

    localStorage.setItem('litally_active_a11y', JSON.stringify(Array.from(activeA11yModes)));
    renderA11yGrid();
    updateA11yBadge();
}

/**
 * Executes special interactive logic for advanced modalities
 */
function executeA11yAction(item, isEnabled) {
    switch(item.action) {
        case "toggleBionicReading":
            applyBionicReading(isEnabled);
            break;
        case "toggleDyslexiaRuler":
            setupDyslexiaRuler(isEnabled);
            break;
        case "toggleEasyToRead":
            applyEasyToRead(isEnabled);
            break;
        case "toggle3DAudio":
            if (isEnabled && typeof playChime === 'function') {
                playChime(520);
                setTimeout(() => playChime(780), 200);
            }
            break;
        case "toggleBreathingAura":
            document.body.classList.toggle('a11y-breathing-active', isEnabled);
            break;
        case "toggleAntiPanic":
            if (typeof resetAdminSessionTimeout === 'function') {
                resetAdminSessionTimeout();
            }
            break;
    }
}

/**
 * 1. Bionic Reading Syllable Converter
 */
function applyBionicReading(enabled) {
    const paragraphs = document.querySelectorAll('.hero-statement-box, .custom-card p, .reader-modal-body p');
    paragraphs.forEach(p => {
        if (enabled) {
            if (!p.dataset.origHtml) p.dataset.origHtml = p.innerHTML;
            const words = p.innerText.split(' ');
            p.innerHTML = words.map(w => {
                if (w.length <= 1) return w;
                const mid = Math.ceil(w.length / 2);
                return `<span class="bionic-bold">${escapeA11yHTML(w.slice(0, mid))}</span>${escapeA11yHTML(w.slice(mid))}`;
            }).join(' ');
        } else {
            if (p.dataset.origHtml) {
                p.innerHTML = p.dataset.origHtml;
                delete p.dataset.origHtml;
            }
        }
    });
}

/**
 * 2. Dyslexia Laser Guide Ruler tracking cursor
 */
function setupDyslexiaRuler(enabled) {
    let ruler = document.getElementById('dyslexiaGuideRuler');
    if (!ruler) {
        ruler = document.createElement('div');
        ruler.id = 'dyslexiaGuideRuler';
        document.body.appendChild(ruler);
    }
    if (enabled) {
        window.addEventListener('mousemove', moveRuler);
    } else {
        window.removeEventListener('mousemove', moveRuler);
    }
}

function moveRuler(e) {
    const ruler = document.getElementById('dyslexiaGuideRuler');
    if (ruler) ruler.style.top = `${e.clientY - 19}px`;
}

/**
 * 3. Easy-to-Read Neural Simplifier
 */
function applyEasyToRead(enabled) {
    const heroStatement = document.getElementById('displayHeroStatement');
    if (!heroStatement) return;
    if (enabled) {
        if (!heroStatement.dataset.fullText) heroStatement.dataset.fullText = heroStatement.innerText;
        heroStatement.innerText = "Welcome to Litally! We help writers publish books with smart AI tools. Readers can explore books, read stories, and chat with AI characters. Enjoy your time here!";
    } else {
        if (heroStatement.dataset.fullText) {
            heroStatement.innerText = heroStatement.dataset.fullText;
            delete heroStatement.dataset.fullText;
        }
    }
}

function escapeA11yHTML(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Renders the 50 Accessibility cards in the modal
 */
function renderA11yGrid(category = 'all', searchQuery = '') {
    const container = document.getElementById('a11yMatrixGrid');
    if (!container) return;

    let filtered = A11Y_MODES;
    if (category !== 'all') {
        filtered = filtered.filter(m => m.category === category);
    }
    if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(m => m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q) || String(m.id).includes(q));
    }

    container.innerHTML = filtered.map(m => {
        const isActive = activeA11yModes.has(m.id);
        return `
            <div class="a11y-card ${isActive ? 'active' : ''}" onclick="toggleA11yMode(${m.id})">
                <div class="a11y-card-header">
                    <span class="a11y-card-icon">${m.icon}</span>
                    <span class="a11y-card-badge">${isActive ? 'ACTIVE' : '#' + m.id}</span>
                </div>
                <div class="a11y-card-title">${escapeA11yHTML(m.name)}</div>
                <div class="a11y-card-desc">${escapeA11yHTML(m.desc)}</div>
            </div>
        `;
    }).join('');
}

function updateA11yBadge() {
    const count = activeA11yModes.size;
    const btn = document.getElementById('navBtnA11y');
    if (btn) {
        btn.innerHTML = `♿ Accessibility (${count > 0 ? count + '/50' : '50'})`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Restore all active CSS classes & actions
    activeA11yModes.forEach(id => {
        const item = A11Y_MODES.find(m => m.id === id);
        if (item) {
            if (item.cssClass) document.body.classList.add(item.cssClass);
            executeA11yAction(item, true);
        }
    });
    updateA11yBadge();
});
