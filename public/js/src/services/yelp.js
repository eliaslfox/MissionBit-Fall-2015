angular.module("getMeFood").factory("yelp", ["api", function(api) {
    var search = function(location, term, callback) {
        return api.yelp(location, term, callback);
    };
    return {search: search};
}]);