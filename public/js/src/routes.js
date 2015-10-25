angular.module("getMeFood").config(['$routeProvider', "$locationProvider",
    function($routeProvider, $locationProvider) {
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
            })
            .when('/viewRestaurant/:id', {
                templateUrl: 'partials/viewRestaurant.jade',
                controller: 'viewRestaurant'
            });
        $locationProvider.html5Mode(true);
    }]);