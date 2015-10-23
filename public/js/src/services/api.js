angular.module("getMeFood")
.factory('api', ["$http",function($http) {
    return {
        get: function(url) {
            return $http.get(url)
                .then(function(result) {
                    return result.data;
                });
        }
    };
}]);