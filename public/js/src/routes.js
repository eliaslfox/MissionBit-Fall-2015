angular.module("getMeFood").config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.jade',
                controller: 'HomeController'
            }).
            when('/home', {
                redirectTo: '/'
            }).
            when('/getFood', {
                templateUrl: 'partials/getFood.jade',
                controller: 'getFood'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);