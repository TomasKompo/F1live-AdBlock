
(() => {
    // Blokování automaticky otevíraných oken
    const originalOpen = window.open;

    window.open = function(url, target, features) {
        console.log("[Flive Blocker] Blocked popup:", url);
        return null;
    };

    console.log("[Flive Blocker] Activated");
})();
