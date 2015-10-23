angular.module("getMeFood").service("api", [function() {
    var apiSearch = function(url, data, callback) {
        $.ajax({
            url: url,
            method: "GET",
            data: data,
            complete: callback
        });
    };
    this.yelp = function(location, term, callback) {
      apiSearch("/test", {
         location: location,
          term: term
      }, callback);
    };
}]);