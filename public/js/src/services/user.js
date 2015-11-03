angular.module("getMeFood").factory("user", ["api", function(api) {
    return {
        signup: function(username, email) {
            return api.get('/api/user/add?username='+username+'&&email='+email)
                .then(function(result) {
                    return result;
                });
        },
        login: function(username, password) {
            return api.post('/api/user/login', {username: username, password: password})
                .then(function(result) {
                    return result;
                });
        },
        gen: function(username) {
            return api.get('/api/user/gen?username='+username)
                .then(function(result) {
                    return result;
                });
        }
    };
}]);