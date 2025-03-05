document.addEventListener("DOMContentLoaded", function () {
    new FancySettings.initWithManifest(function (settings) {
        const store = new Store("settings"); // Initialize store

        // Load settings from storage
        chrome.storage.local.get(null, function (storedSettings) {
            if (chrome.runtime.lastError) {
                console.error("Error loading settings:", chrome.runtime.lastError);
                return;
            }

            console.log("Loaded settings:", storedSettings); // Debugging log

            // Apply stored settings to UI
            for (let key in storedSettings) {
                if (settings.manifest[key]) {
                    settings.manifest[key].set(storedSettings[key]);
                }
            }
        });

        // Save settings when changed
        settings.onChange = function (key, value) {
            let updateObj = {};
            updateObj[key] = value;
            chrome.storage.local.set(updateObj, function () {
                if (chrome.runtime.lastError) {
                    console.error("Error saving setting:", key, chrome.runtime.lastError);
                } else {
                    console.log("Saved setting:", key, value);
                }
            });
        };
    });
});
