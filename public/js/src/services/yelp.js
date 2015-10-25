angular.module("getMeFood")
.factory('yelp', ["$http","api", function($http, api) {
    return {
        search: function(location, term) {
            return api.get('/api/yelp/search?location='+location+'&&term='+term)
                .then(function(result) {
                    return result.businesses;
                });
        },
        get: function(id) {
            return api.get('/api/yelp/get?id='+id)
                .then(function(result) {
                    return result
                });
        }
    };
}]);