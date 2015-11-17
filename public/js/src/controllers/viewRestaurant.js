angular.module("getMeFood").controller("viewRestaurant", ["$scope", "$routeParams", "yelp", "gMaps", "insta", "comments", function($scope, $routeParams, yelp, gMaps, insta, comments){
    $scope.ready = false;
    $scope.mapGenned = false;
    $scope.instaGenned = false;
    yelp.get($routeParams.id).then(function(data) {
        $scope.restaurant = data;
        $scope.ready = true;
        gMaps.genDirectionsLink("Current Location", $scope.restaurant.location.display_address[0], null, function(data) {
            $scope.restaurant.directionsLink = data;
        });
    });
    $scope.genMap = function() {
        $scope.mapGenned = true;
        gMaps.findLocation(function(data) {
            $scope.from = data;
            gMaps.genMap("map", $scope.from, $scope.restaurant.location.display_address[0]+ ", "+$scope.restaurant.location.city);
            $scope.$apply();
        });
    };
    $scope.goToPage = function(url) {
        location.href="http://"+url;
    };
    $scope.genInsta = function() {
        insta.search($scope.restaurant.location.coordinate.latitude, $scope.restaurant.location.coordinate.longitude).then(function(data) {
            $scope.instaData = data;
            $scope.instaGenned = true;
        });
    };
    $scope.showComments = function() {
        $scope.comments = true;
        comments.get($scope.restaurant.id).then(function(data) {
            $scope.commentList = data;
            console.log(data);
        });
    };
    $scope.addComment = function() {
        if ($scope.user != null) {
            comments.add($scope.user.username, /*$scope.user.password,*/ $scope.commentText, $scope.restaurant.id).then(function(data) {
                console.log(data);
                $scope.commmentText = "";
                $scope.showComments($scope.restaurant.id);
            });
        } else {
          alert("You must be logged in to do this");
        }
    };
}]);