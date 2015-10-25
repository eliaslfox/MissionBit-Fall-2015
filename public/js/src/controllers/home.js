angular.module("getMeFood").controller('HomeController', ['$scope', function($scope) {
    $scope.updateActive("home");
    $scope.greeting = 'Welcome!';
}]);