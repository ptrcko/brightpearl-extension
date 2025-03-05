class Store {
    constructor(name, defaults) {
        this.name = name;
        if (defaults !== undefined) {
            this.initDefaults(defaults);
        }
    }

    initDefaults(defaults) {
        chrome.storage.local.get(null, (storedData) => {
            let newDefaults = {};
            for (let key in defaults) {
                if (!storedData.hasOwnProperty(key)) {
                    newDefaults[key] = defaults[key];
                }
            }
            if (Object.keys(newDefaults).length > 0) {
                chrome.storage.local.set(newDefaults);
            }
        });
    }

    get(name, callback) {
        chrome.storage.local.get(name, (data) => {
            const value = data[name] !== undefined ? data[name] : undefined;
            if (typeof callback === "function") {
                callback(value);
            } else {
                // No callback given – do nothing or you can store in a cache if needed.
            }
        });
    }

    set(name, value, callback) {
        let obj = {};
        obj[name] = value;
        chrome.storage.local.set(obj, () => {
            if (typeof callback === "function") {
                callback();
            }
        });
    }

    remove(name, callback) {
        chrome.storage.local.remove(name, () => {
            if (typeof callback === "function") {
                callback();
            }
        });
    }

    removeAll(callback) {
        chrome.storage.local.clear(() => {
            if (typeof callback === "function") {
                callback();
            }
        });
    }

    toObject(callback) {
        chrome.storage.local.get(null, (data) => {
            if (typeof callback === "function") {
                callback(data);
            }
        });
    }

    fromObject(values, merge = false, callback) {
        if (!merge) {
            this.removeAll(() => {
                chrome.storage.local.set(values, () => {
                    if (typeof callback === "function") {
                        callback();
                    }
                });
            });
        } else {
            chrome.storage.local.set(values, () => {
                if (typeof callback === "function") {
                    callback();
                }
            });
        }
    }
}
