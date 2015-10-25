angular.module("getMeFood")
    .controller("getFood", ["$scope", "yelp", "gMaps", function($scope, yelp, gMaps) {
        $scope.mode = "SEARCH";
        $scope.search = function() {
            $scope.mode= "LIST";
            yelp.get($scope.location, $scope.term).then(function(data) {
                $scope.restaurants = data;
            });
        };
        $scope.genDirectionsLink = function(to, index) {
            gMaps.genDirectionsLink("Current Location", to, index, function(data, index) {
                $scope.restaurants[index].directionsLink = data;
            });
        }
    }]);