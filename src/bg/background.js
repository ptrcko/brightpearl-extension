console.log('Service Worker Loaded');

// Default settings (define your actual defaults here)
const defaultSettings = {
    summaryReports: true,
    invoice7days: false,
    invoice10days: false,
    invoice14days: false,
    invoice30days: false,
    invoice30Eom: false,
    supplierInvoiceDate: false,
    ordersList: false,
    updatePrices: false,
    enableFastSearch: false,
    extendSalesDetails: false,
    hideEmail: false,
    goodsOutEmail: "",
    missingPhone: false,
    missingEmail: false,
    deliveryDate: false
};

// Ensure settings exist in storage on install
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(null, (storedSettings) => {
        if (Object.keys(storedSettings).length === 0) {
            console.log("No settings found, initializing default settings...");
            chrome.storage.local.set(defaultSettings);
        }
    });
});

// Handle messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "settings") {
        chrome.storage.local.get(null, (storedSettings) => {
            if (chrome.runtime.lastError) {
                console.error("Storage access error:", chrome.runtime.lastError);
                sendResponse(defaultSettings); // Send defaults if error
            } else {
                sendResponse(storedSettings || defaultSettings);
            }
        });
        return true; // ✅ Required to keep the message channel open for async response
    }

    if (request.action === "setSettings") {
        let data = {};
        data[request.key] = request.value;
        chrome.storage.local.set(data, () => {
            if (chrome.runtime.lastError) {
                console.error("Storage write error:", chrome.runtime.lastError);
            }
            sendResponse({ success: true });
        });
        return true; // ✅ Required for async response
    }
});
