
var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
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
}])

myApp.controller('AlertController', ['$scope','notify', function ($scope, notify) {
        $scope.callNotify = function(msg) {
            notify(msg);
        };
}]);
myApp.factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
        msgs.push(msg);
        if (msgs.length == 3) {
            win.alert(msgs.join("\n"));
            msgs = [];
        }
    };
}]);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/greeting', {
                templateUrl: 'partials/greeting.html',
                controller: 'GreetingController'
            }).
            when('/spicy', {
                templateUrl: 'partials/spicy.html',
                controller: 'SpicyController'
            }).
            when('/double', {
                templateUrl: 'partials/double.html',
                controller: 'DoubleController'
            }).
            when('/alert', {
                templateUrl: 'partials/alert.html',
                controller: 'AlertController'
            }).
            otherwise({
                redirectTo: '/greeting'
            });
    }]);
