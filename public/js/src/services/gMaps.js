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
        },
        genMap: function(id, from, to) {
            var map;
            map = new google.maps.Map(document.getElementById(id), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });


            var directionsService = new google.maps.DirectionsService();
            var directionsRequest = {
                origin: from,
                destination: to,
                travelMode: google.maps.DirectionsTravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC
            };

            directionsService.route(
                directionsRequest,
                function(response, status)
                {
                    if (status == google.maps.DirectionsStatus.OK) {
                        new google.maps.DirectionsRenderer({
                            map: map,
                            directions: response
                        });
                    }
                }
            );


        }
    };
}]);