
var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('HomeController', ['$scope', function($scope) {
    $scope.greeting = 'Welcome!';
}]);

myApp.controller('DoubleController', ['$scope', function($scope) {
    $scope.double = function(value) { return value * 2; };
}]);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.customSpice = "wasabi";
    $scope.spice = 'very';

    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };
}]);

myApp.config(['$routeProvider',
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
            otherwise({
                redirectTo: '/'
            });
    }]);
