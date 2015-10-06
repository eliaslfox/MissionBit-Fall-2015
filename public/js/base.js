var getLocation = function() {
    alert("This doesn't work yet :(");
};

var getFood = function() {
    $.ajax({
        url: "/yelp/search",
        data: {
            term: $("#term").val(),
            location: $("#location").val(),
        },
        method: "GET",
        success: function(data) {
            $(".well").html(JSON.stringify(data));
        },
    });
};
