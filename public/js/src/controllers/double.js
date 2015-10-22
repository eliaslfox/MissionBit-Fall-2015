angular.module("getMeFood").controller('DoubleController', ['$scope', function($scope) {
    $scope.double = function(value) { return value * 2; };
}]);