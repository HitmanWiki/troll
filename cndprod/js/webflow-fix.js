// webflow-fix.js
(function() {
    // Define missing functions based on usage patterns
    window.ef = window.ef || function() {
        return function(value) {
            return value != null && value !== false && value !== '';
        };
    };
    
    window.rf = window.rf || function(obj, prop) {
        return obj && obj[prop];
    };
    
    // Also define E if missing (from earlier errors)
    window.E = window.E || function(factory) {
        var module = { exports: {} };
        factory(module.exports, module);
        return module.exports;
    };
})();