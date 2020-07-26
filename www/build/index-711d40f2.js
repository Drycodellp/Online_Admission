import './ionic-global-3c553627.js';
import './utils-4b19976c.js';
import './animation-b7b16b67.js';
import './index-448cee6c.js';
import './ios.transition-fcc76cee.js';
import './md.transition-046d9b23.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './index-6abadc7c.js';
import './overlays-d2e4bc4c.js';

const setupConfig = (config) => {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
const getMode = () => {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};
