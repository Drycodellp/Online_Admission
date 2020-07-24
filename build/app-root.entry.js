import { r as registerInstance, h } from './index-1837c15a.js';

const appRootCss = "";

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ggg = false;
    }
    checkUser() {
        let user = window.localStorage.getItem('user_details');
        if (user) {
            let jsonP = JSON.parse(user);
            if (jsonP[0].s_name && !jsonP[0].school_name) {
                return 'app-home';
            }
            else if (!jsonP[0].s_name && jsonP[0].school_name) {
                return 'app-school-dashboard';
            }
        }
        else {
            return 'app-school-register';
        }
    }
    render() {
        return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { url: "/", component: this.checkUser() }), h("ion-route", { url: "/student-dashboard", component: "app-home" }), h("ion-route", { url: "/school-registration", component: "app-student-register" }), h("ion-route", { url: "/application-section", component: "app-application-section" }), h("ion-route", { url: "/school-dashboard", component: "app-school-dashboard" }), h("ion-route", { url: "/applicant-details", component: "app-applicant-details" }), h("ion-route", { url: "/profile/:name", component: "app-profile" })), h("ion-nav", null)));
    }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
