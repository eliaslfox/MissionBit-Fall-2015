angular.module("getMeFood")
    .controller("getFood", ["$scope", "yelp", "gMaps", function($scope, yelp, gMaps) {
        $scope.updateActive("getFood");
        $scope.mode = "SEARCH";
        $scope.search = function() {
            $scope.mode= "LIST";
            yelp.search($scope.location, $scope.term).then(function(data) {
                $scope.restaurants = data;
            });
        };
        $scope.foods = [
            "Sushi",
            "Tacos",
            "Coffee"
        ];
        $scope.genDirectionsLink = function(to, index) {
            gMaps.genDirectionsLink("Current Location", to, index, function (data, index) {
                $scope.restaurants[index].directionsLink = data;
            });
        };
        $scope.findMe = function() {
            $scope.location = gMaps.findLocation(function(data) {
                $scope.location = data;
                $scope.$apply();
            });
        };
        $scope.findFood = function($index) {
            console.log($scope.foods[$index]);
            $scope.term = $scope.foods[$index];
        };
        $scope.selectRestaurant = function(index) {
            return "/viewRestaurant/"+ $scope.restaurants[index].id;
        }
    }]);