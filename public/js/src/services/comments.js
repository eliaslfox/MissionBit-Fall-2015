angular.module("getMeFood").factory("comments", ["api", function(api) {
    return {
        get: function(place) {
            return api.post('/api/comments/list', {place: place})
                .then(function(result) {
                    return result;
                });
        },
        add: function(username, text, place) {
            return api.post('/api/comments/add', {author: username, text: text, place: place})
                .then(function(result) {
                    return result;
                });
        }
    };
}]);