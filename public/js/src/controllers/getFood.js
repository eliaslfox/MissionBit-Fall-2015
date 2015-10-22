angular.module("getMeFood")
    .factory("yelp", function() {
        var search = function(location, term) {
            return "Yelp data";
        };
        return {search: search};
    })
    .controller("getFood", ["$scope", "yelp", function($scope, yelp) {
        $scope.yelpData = yelp.search("San Francisco", "Tacos");
    }]);