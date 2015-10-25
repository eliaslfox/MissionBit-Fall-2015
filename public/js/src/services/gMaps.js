angular.module("getMeFood").factory("gMaps", [function() {
    return {
        genDirectionsLink: function(from, to, params, callback) {
            data = "https://maps.google.com?saddr=" + from + "&daddr="+to;
            callback(data, params);
        }
    };
}]);