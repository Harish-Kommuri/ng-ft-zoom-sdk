export var Responses = {
    notAvailable: {
        code: 0,
        state: "plugin_not_installed",
        available: false
    },
    available: {
        code: 1,
        state: "plugin_installed",
        available: true
    },
    notInitialized: {
        code: 0,
        status: "plugin_not_initialized",
        initialized: false
    },
    initialized: {
        code: 1,
        status: "plugin_initalized",
        initialized: true
    },
    requiredMsg: "zoOm is not installed or deviceready fired not evenly."
};
//# sourceMappingURL=responses.js.map