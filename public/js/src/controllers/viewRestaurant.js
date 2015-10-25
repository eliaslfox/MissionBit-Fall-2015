angular.module("getMeFood").controller("viewRestaurant", ["$scope", "$routeParams", "yelp", "gMaps", function($scope, $routeParams, yelp, gMaps){
    $scope.ready = false;
    yelp.get($routeParams.id).then(function(data) {
        $scope.restaurant = data;
        $scope.ready = true;
        gMaps.genDirectionsLink("Current Location", $scope.restaurant.location.display_address[0], null, function(data) {
            $scope.restaurant.directionsLink = data;
        })
    });
    $scope.genMap = function() {
        gMaps.findLocation(function(data) {
            $scope.from = data;
            gMaps.genMap("map", $scope.from, $scope.restaurant.location.display_address[0]+ ", "+$scope.restaurant.location.city);
            $scope.$apply();
        });
    };
}]);