angular.module("getMeFood").factory("insta", ["api", function(api) {
    return {
        search: function(lat, lng) {
            return api.get('/api/insta/show?lat='+lat+'&&lng='+lng)
                .then(function(result) {
                    var out = [];
                    for (var i = 0; i<result.length; i++) {
                        out.push(result[i].images.standard_resolution.url);
                    }
                    return out;
                });
        }
    };
}]);