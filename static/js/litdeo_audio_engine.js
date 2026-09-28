/**
 * =============================================================================
 * LITDEO — PROCEDURAL CINEMATIC WEB AUDIO API SYNTHESIZER ENGINE
 * File: static/js/litdeo_audio_engine.js
 * Description: Generative ambient music, soundscapes, baby lullabies, and SFX.
 *              Full Web Audio API graph with MediaStreamDestination for video export.
 * =============================================================================
 */

(function(window) {
    'use strict';

    let audioCtx = null;
    let masterGain = null;
    let analyserNode = null;
    let streamDestination = null;
    let isPlaying = false;
    let isMuted = false;
    let currentTheme = 'cyberpunk';
    let currentAge = 45;
    let loopTimer = null;
    let activeNodes = [];

    function initAudio() {
        if (audioCtx) return audioCtx;
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioClass) return null;

        audioCtx = new AudioClass();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.35, audioCtx.currentTime);

        // Analyser for real-time visual spectrum equalizer
        analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 64;
        analyserNode.smoothingTimeConstant = 0.8;

        masterGain.connect(analyserNode);

        // Connect to speakers
        analyserNode.connect(audioCtx.destination);

        // Connect to MediaStream destination for recording into video file!
        if (audioCtx.createMediaStreamDestination) {
            streamDestination = audioCtx.createMediaStreamDestination();
            masterGain.connect(streamDestination);
        }

        return audioCtx;
    }

    function ensureContext() {
        const ctx = initAudio();
        if (ctx && ctx.state === 'suspended') {
            ctx.resume();
        }
        return ctx;
    }

    function clearActiveNodes() {
        if (loopTimer) {
            clearInterval(loopTimer);
            loopTimer = null;
        }
        activeNodes.forEach(node => {
            try {
                if (node.stop) node.stop();
                if (node.disconnect) node.disconnect();
            } catch(e) {}
        });
        activeNodes = [];
    }

    // ── 1. BABY LULLABY MUSIC BOX (AGES 1 - 3) ────────────────────────────────
    function startBabyLullaby(ctx) {
        // Pentatonic gentle lullaby frequencies (C5, D5, E5, G5, A5, C6)
        const notes = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
        let noteIdx = 0;

        const playChime = () => {
            if (!isPlaying || isMuted) return;
            const now = ctx.currentTime;
            const freq = notes[noteIdx % notes.length];
            noteIdx = (noteIdx + Math.floor(Math.random() * 2) + 1);

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);

            // Music box envelope
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

            osc.connect(gain);
            gain.connect(masterGain);

            osc.start(now);
            osc.stop(now + 2.3);
            activeNodes.push(osc);
        };

        playChime();
        loopTimer = setInterval(playChime, 1400);
    }

    // ── 2. KIDS PLAYFUL MELODY (AGES 4 - 7) ──────────────────────────────────
    function startKidsMelody(ctx) {
        const chords = [
            [261.63, 329.63, 392.00], // C
            [349.23, 440.00, 523.25], // F
            [392.00, 493.88, 587.33], // G
            [220.00, 261.63, 329.63]  // Am
        ];
        let step = 0;

        const playBounce = () => {
            if (!isPlaying || isMuted) return;
            const now = ctx.currentTime;
            const triad = chords[step % chords.length];
            step++;

            triad.forEach((f, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(f * (i === 0 ? 1 : 2), now + i * 0.12);

                gain.gain.setValueAtTime(0.14, now + i * 0.12);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 0.7);

                osc.connect(gain);
                gain.connect(masterGain);

                osc.start(now + i * 0.12);
                osc.stop(now + i * 0.12 + 0.75);
                activeNodes.push(osc);
            });
        };

        playBounce();
        loopTimer = setInterval(playBounce, 1100);
    }

    // ── 3. CYBERPUNK / SCI-FI ANALOG DRONE ─────────────────────────────────────
    function startCyberDrone(ctx) {
        const now = ctx.currentTime;

        // Sub bass oscillator
        const sub = ctx.createOscillator();
        const subGain = ctx.createGain();
        sub.type = 'sawtooth';
        sub.frequency.setValueAtTime(55, now); // A1

        // Lowpass filter with sweep
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, now);
        filter.Q.setValueAtTime(4, now);

        subGain.gain.setValueAtTime(0.2, now);

        sub.connect(filter);
        filter.connect(subGain);
        subGain.connect(masterGain);

        sub.start(now);
        activeNodes.push(sub);

        // LFO modulating filter
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.25, now); // 4 second cycle
        lfoGain.gain.setValueAtTime(180, now);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start(now);
        activeNodes.push(lfo);

        // Intermittent cyber synth pulse
        let pulseStep = 0;
        const arps = [220, 277.18, 329.63, 440, 554.37];
        const playArp = () => {
            if (!isPlaying || isMuted) return;
            const t = ctx.currentTime;
            const f = arps[pulseStep % arps.length];
            pulseStep++;

            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(f, t);

            g.gain.setValueAtTime(0.08, t);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);

            osc.connect(g);
            g.connect(masterGain);
            osc.start(t);
            osc.stop(t + 0.5);
            activeNodes.push(osc);
        };

        loopTimer = setInterval(playArp, 750);
    }

    // ── 4. COSMIC SPACE SHIMMER & BLACK HOLE DRONE ────────────────────────────
    function startSpaceShimmer(ctx) {
        const now = ctx.currentTime;

        // Ultra deep cosmic rumble
        const rumble = ctx.createOscillator();
        const rumbleGain = ctx.createGain();
        rumble.type = 'sine';
        rumble.frequency.setValueAtTime(43.65, now); // F0
        rumbleGain.gain.setValueAtTime(0.25, now);

        rumble.connect(rumbleGain);
        rumbleGain.connect(masterGain);
        rumble.start(now);
        activeNodes.push(rumble);

        // Celestial harmonics
        const celestialNotes = [349.23, 523.25, 698.46, 880.00, 1046.50];
        let cIdx = 0;
        const playSpaceChime = () => {
            if (!isPlaying || isMuted) return;
            const t = ctx.currentTime;
            const f = celestialNotes[cIdx % celestialNotes.length];
            cIdx++;

            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, t);

            g.gain.setValueAtTime(0.001, t);
            g.gain.linearRampToValueAtTime(0.12, t + 0.6);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);

            osc.connect(g);
            g.connect(masterGain);
            osc.start(t);
            osc.stop(t + 4.6);
            activeNodes.push(osc);
        };

        playSpaceChime();
        loopTimer = setInterval(playSpaceChime, 2200);
    }

    // ── 5. OCEAN WAVES & NATURE SURF ──────────────────────────────────────────
    function startNatureSurf(ctx) {
        // Pink/white noise buffer for natural ocean waves
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.11;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        const swellGain = ctx.createGain();
        swellGain.gain.setValueAtTime(0.15, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(swellGain);
        swellGain.connect(masterGain);

        whiteNoise.start();
        activeNodes.push(whiteNoise);

        // LFO for periodic wave swell
        const swellLfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        swellLfo.type = 'sine';
        swellLfo.frequency.setValueAtTime(0.2, ctx.currentTime); // 5 sec wave period
        lfoGain.gain.setValueAtTime(0.12, ctx.currentTime);

        swellLfo.connect(lfoGain);
        lfoGain.connect(swellGain.gain);
        swellLfo.start();
        activeNodes.push(swellLfo);
    }

    // ── 6. COZY FIREPLACE & RELAX ─────────────────────────────────────────────
    function startRelaxSoundscape(ctx) {
        const now = ctx.currentTime;

        // Warm 432Hz healing resonance chord
        [216, 432, 648].forEach((f, i) => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now);
            g.gain.setValueAtTime(0.08 / (i + 1), now);

            osc.connect(g);
            g.connect(masterGain);
            osc.start(now);
            activeNodes.push(osc);
        });

        // Fire ember crackles
        const crackle = () => {
            if (!isPlaying || isMuted) return;
            const t = ctx.currentTime;
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(1200 + Math.random() * 2000, t);

            g.gain.setValueAtTime(0.04, t);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);

            osc.connect(g);
            g.connect(masterGain);
            osc.start(t);
            osc.stop(t + 0.05);
            activeNodes.push(osc);
        };

        loopTimer = setInterval(crackle, 280);
    }

    // ── 7. CINEMATIC VIP 4K MASTER SOUNDSCAPE ─────────────────────────────────
    function startCinematicMaster(ctx) {
        const now = ctx.currentTime;

        // Cinematic root drone
        const root = ctx.createOscillator();
        const rootGain = ctx.createGain();
        root.type = 'sine';
        root.frequency.setValueAtTime(65.41, now); // C2
        rootGain.gain.setValueAtTime(0.22, now);

        root.connect(rootGain);
        rootGain.connect(masterGain);
        root.start(now);
        activeNodes.push(root);

        // Fifth harmonic
        const fifth = ctx.createOscillator();
        const fifthGain = ctx.createGain();
        fifth.type = 'sine';
        fifth.frequency.setValueAtTime(98.00, now); // G2
        fifthGain.gain.setValueAtTime(0.12, now);

        fifth.connect(fifthGain);
        fifthGain.connect(masterGain);
        fifth.start(now);
        activeNodes.push(fifth);

        // Subtly changing chord pads
        const padChords = [261.63, 311.13, 392.00, 466.16];
        let padIdx = 0;
        const playPad = () => {
            if (!isPlaying || isMuted) return;
            const t = ctx.currentTime;
            const f = padChords[padIdx % padChords.length];
            padIdx++;

            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, t);

            g.gain.setValueAtTime(0.001, t);
            g.gain.linearRampToValueAtTime(0.09, t + 1.2);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 5.0);

            osc.connect(g);
            g.connect(masterGain);
            osc.start(t);
            osc.stop(t + 5.1);
            activeNodes.push(osc);
        };

        playPad();
        loopTimer = setInterval(playPad, 3000);
    }

    // Main Audio Controller
    const LitdeoAudio = {
        play: function(themeId, age) {
            currentTheme = themeId || currentTheme;
            currentAge = age !== undefined ? parseInt(age, 10) : currentAge;
            isPlaying = true;

            const ctx = ensureContext();
            if (!ctx) return;

            clearActiveNodes();
            if (isMuted) return;

            // Select soundscape based on Age Tier & Theme
            if (currentAge <= 3) {
                startBabyLullaby(ctx);
            } else if (currentAge <= 7) {
                startKidsMelody(ctx);
            } else if (currentTheme === 'black_hole' || currentTheme === 'supernova' || currentTheme === 'orion_nebula' || currentTheme === 'space') {
                startSpaceShimmer(ctx);
            } else if (currentTheme.includes('cyber') || currentTheme.includes('matrix') || currentTheme.includes('tron') || currentTheme.includes('synthwave')) {
                startCyberDrone(ctx);
            } else if (currentTheme.includes('ocean') || currentTheme.includes('rain') || currentTheme.includes('waterfall') || currentTheme.includes('aurora')) {
                startNatureSurf(ctx);
            } else if (currentTheme.includes('fire') || currentTheme.includes('campfire') || currentTheme.includes('zen') || currentTheme.includes('candle') || currentTheme.includes('relax')) {
                startRelaxSoundscape(ctx);
            } else {
                startCinematicMaster(ctx);
            }
        },

        pause: function() {
            isPlaying = false;
            clearActiveNodes();
        },

        setThemeAndAge: function(themeId, age) {
            currentTheme = themeId || currentTheme;
            if (age !== undefined) currentAge = parseInt(age, 10);
            if (isPlaying && !isMuted) {
                this.play(currentTheme, currentAge);
            }
        },

        toggleMute: function() {
            isMuted = !isMuted;
            if (masterGain && audioCtx) {
                masterGain.gain.setValueAtTime(isMuted ? 0.0001 : 0.35, audioCtx.currentTime);
            }
            if (isPlaying && !isMuted) {
                this.play(currentTheme, currentAge);
            }
            return isMuted;
        },

        isMuted: function() {
            return isMuted;
        },

        getFrequencyData: function(dataArray) {
            if (analyserNode && dataArray) {
                analyserNode.getByteFrequencyData(dataArray);
                return true;
            }
            return false;
        },

        // Connect to video recorder: merges canvas video stream with audio stream
        getExportStream: function(canvas, fps = 60) {
            ensureContext();
            const videoStream = canvas.captureStream ? canvas.captureStream(fps) : null;
            if (!videoStream) return null;

            if (streamDestination && streamDestination.stream) {
                const audioTracks = streamDestination.stream.getAudioTracks();
                if (audioTracks.length > 0) {
                    return new MediaStream([
                        ...videoStream.getVideoTracks(),
                        ...audioTracks
                    ]);
                }
            }
            return videoStream;
        }
    };

    window.LitdeoAudio = LitdeoAudio;

})(window);
