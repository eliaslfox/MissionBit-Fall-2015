angular.module("getMeFood").controller("nav", ["$scope", function($scope) {
    $scope.updateActive = function(page) {
        $( "#nav-bar" ).each(function( index ) {
            $("li").each(function(index) {
                $(this).removeClass("active");
            });
        });
        $("#"+page).addClass("active");
    };
}]);