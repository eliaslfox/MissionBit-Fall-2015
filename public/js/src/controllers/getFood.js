angular.module("getMeFood")
    .controller("getFood", ["$scope", "yelp", function($scope, yelp) {
        $scope.mode = "INPUT";
        $scope.search = function() {
            $scope.mode= "OUTPUT";
            yelp.get($scope.location, $scope.term).then(function(data) {
                $scope.restaurants = data;
            });
        }
        $scope.initMap = function() {
            console.log("HI");
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });
        }
    }]);