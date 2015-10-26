angular.module("getMeFood").controller("viewRestaurant", ["$scope", "$routeParams", "yelp", "gMaps", "insta", function($scope, $routeParams, yelp, gMaps, insta){
    $scope.ready = false;
    $scope.mapGenned = false;
    $scope.instaGenned = false;
    yelp.get($routeParams.id).then(function(data) {
        $scope.restaurant = data;
        $scope.ready = true;
        gMaps.genDirectionsLink("Current Location", $scope.restaurant.location.display_address[0], null, function(data) {
            $scope.restaurant.directionsLink = data;
        })
    });
    $scope.genMap = function() {
        $scope.mapGenned = true;
        gMaps.findLocation(function(data) {
            $scope.from = data;
            gMaps.genMap("map", $scope.from, $scope.restaurant.location.display_address[0]+ ", "+$scope.restaurant.location.city);
            $scope.$apply();
        });
    };
    $scope.genJsLink = function(data) {
        return "location.href='"+data +"'";
    };
    $scope.goToPage = function(url) {
        location.href=url;
    };
    $scope.genInsta = function() {
        insta.search($scope.restaurant.location.coordinate.latitude, $scope.restaurant.location.coordinate.longitude).then(function(data) {
            $scope.instaData = data;
            $scope.instaGenned = true;
        });
    };
}]);