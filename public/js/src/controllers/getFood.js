angular.module("getMeFood").controller("getFood", ["$scope", "yelp", function($scope, yelp) {
        yelp.search("San Francisco", "Tacos", function(data) {
            $scope.restaurants = data;
            console.log($scope.restaurants);
        });
    }]);