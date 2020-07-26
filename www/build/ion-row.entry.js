import { r as registerInstance, h, l as Host } from './index-1837c15a.js';
import { g as getIonMode } from './ionic-global-3c553627.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: getIonMode(this) }, h("slot", null)));
    }
};
Row.style = rowCss;

export { Row as ion_row };
