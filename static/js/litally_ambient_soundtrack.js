/**
 * =============================================================================
 * LITALLY AUDIO SANCTUARY - DEACTIVATED BY USER REQUEST
 * File: static/js/litally_ambient_soundtrack.js
 * =============================================================================
 */
(function(window, document) {
    'use strict';
    try {
        localStorage.removeItem('litally_ambient_playing');
        const dock = document.getElementById('ambientSanctuaryDock');
        if (dock) dock.remove();
        if (window.LitallyAmbientAudio && window.LitallyAmbientAudio.audioElement) {
            window.LitallyAmbientAudio.audioElement.pause();
        }
    } catch(e) {}
    window.LitallyAmbientAudio = null;
})(window, document);
