angular.module("getMeFood").config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.jade',
                controller: 'HomeController'
            }).
            when('/spicy', {
                templateUrl: 'partials/spicy.jade',
                controller: 'SpicyController'
            }).
            when('/double', {
                templateUrl: 'partials/double.jade',
                controller: 'DoubleController'
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