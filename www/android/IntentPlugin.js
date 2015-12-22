function IntentPlugin() {
    'use strict';
}

IntentPlugin.prototype.getCordovaIntent = function(successCallback, failureCallback) {
    'use strict';

    return cordova.exec (
        successCallback,
        failureCallback,
        "IntentPlugin",
        "getCordovaIntent",
        []
    );
};

IntentPlugin.prototype.setNewIntentHandler = function(method) {
    'use strict';

    var defaults = {
        method: method
    };

    cordova.exec (
        null,
        null,
        "IntentPlugin",
        "setNewIntentHandler",
        [defaults]
    );
};

var intentInstance = new IntentPlugin();
module.exports = intentInstance;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.intent) {
    window.plugins.intent = intentInstance;
}