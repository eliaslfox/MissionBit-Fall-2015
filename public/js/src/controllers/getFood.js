angular.module("getMeFood")
.factory('myService', function($http) {
    return {
        getFoos: function() {
            //return the promise directly.
            return $http.get('/test')
                .then(function(result) {
                    //resolve the promise as the data
                    return result.data;
                });
        }
    };
})
.controller("getFood", ["$scope", "myService", function($scope, myService) {
        myService.getFoos().then(function(foos) {
            $scope.restaurants = foos;
        });
    }]);