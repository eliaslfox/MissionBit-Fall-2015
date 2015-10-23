angular.module("getMeFood")
    .controller("getFood", ["$scope", "yelp", function($scope, yelp) {
        $scope.mode = "INPUT";
        $scope.search = function() {
            $scope.mode= "OUTPUT";
            yelp.get($scope.location, $scope.term).then(function(data) {
                $scope.restaurants = data;
            });
        }
    }]);