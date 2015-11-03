angular.module("getMeFood")
.factory('api', ["$http",function($http) {
    return {
        get: function(url) {
            return $http.get(url)
                .then(function(result) {
                    return result.data;
                });
        },
        post: function(url, data) {
            return $http.post(url, data)
                .then(function(result) {
                   return result.data;
                });

        }
    };
}]);