angular.module("getMeFood").controller("nav", ["$scope", function($scope) {
    $scope.updateActive = function(page) {
        $( "#nav-bar" ).each(function( index ) {
            $("li").each(function(index) {
                $(this).removeClass("active");
            });
        });
        $("#"+page).addClass("active");
    };
    $scope.setUser = function(username, password) {
        $scope.user = {
            username: username,
            password: password
        }
    };
    $scope.loggoutUser = function() {
      $scope.user = null;
    };
}]);