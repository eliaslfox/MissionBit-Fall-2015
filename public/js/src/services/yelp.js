angular.module("getMeFood")
.factory('yelp', ["$http","api", function($http, api) {
    return {
        get: function(location, term) {
            return api.get('/api/yelp/search?location='+location+'&&term='+term)
                .then(function(result) {
                    return result.businesses;
                });
        }
    };
}]);