import { getDevice } from "framework7/lite-bundle";
import cordovaApp from "../js/cordova-app";
import routes from "../js/routes";
import store from "../js/store";

export const device = getDevice();
// Framework7 Parameters
export const f7params = {
	name: "Meek", // App name
	theme: "auto", // Automatic theme detection

	id: "io.framework7.myapp", // App bundle ID
	panel: {
		swipe: true,
	  },
	// App store
	store: store,
	// App routes
	routes: routes,

	// Input settings
	input: {
		scrollIntoViewOnFocus: device.cordova && !device.electron,
		scrollIntoViewCentered: device.cordova && !device.electron,
	},
	// Cordova Statusbar settings
	statusbar: {
		iosOverlaysWebView: false,
		androidOverlaysWebView: false,
		iosTextColor: "#ffffff",
		androidTextColor: "#ffffff",
	},
	iosTranslucentBars: false,
	iosTranslucentModals: false,
};

export const f7readyAnother = () => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
        StatusBar.styleLightContent();
        StatusBar.backgroundColorByHexString("#E1284B");
        cordovaApp.init(f7);
    }

    // Call F7 APIs here
};