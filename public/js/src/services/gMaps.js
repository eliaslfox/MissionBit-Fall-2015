angular.module("getMeFood").factory("gMaps", [function() {
    return {
        genDirectionsLink: function(from, to, params, callback) {
            data = "https://maps.google.com?saddr=" + from + "&daddr="+to;
            callback(data, params);
        },
        findLocation: function(callback) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                        "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                    },
                    function (results, status) {
                        callback(results[0].formatted_address);
                    });
            });
        }
    };
}]);