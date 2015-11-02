angular.module("getMeFood").controller("account", ["$scope", "user", function($scope, user) {
    $scope.message = "It Works";
    $scope.mode = "signup";
    if ($scope.user != null) {
        $scope.mode = "loggedin";
    }
    $scope.setPage = function(page) {
        $( "#page-nav" ).each(function( index ) {
            $("li").each(function(index) {
                $(this).removeClass("active");
            });
        });
        $("#"+page).addClass("active");
        $scope.mode = page;
    };
    $scope.signup = function() {
        user.signup($scope.username, $scope.email).then(function(data) {
            $scope.result = data;
            $scope.mode = "result";
            $scope.info = "loginInfo";
        });
    };
    $scope.login = function() {
        user.login($scope.username, $scope.password).then(function(data) {
            $scope.result = data;
            if (data == "Success") {
                $scope.setUser($scope.username, $scope.password);
                $scope.mode = "loggedin";
                return;
            }
        });
    };
    $scope.gen = function() {
        user.gen($scope.username).then(function(data) {
            $scope.result = data;
            $scope.mode = "result";
        });
    };
    $scope.logout = function() {
        $scope.loggoutUser();
        $scope.mode = "signup";
    };
    $scope.goToLogin = function() {
        $scope.mode = "login";
        $scope.info = null;
        $scope.setPage("login");
    }
}]);