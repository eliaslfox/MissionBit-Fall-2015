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
        success: function(data) {
            var each = data.businesses;
            $(".jumbotron").hide()
            for (i=0; i<3; i++) {
                $('#resturants').append("<div class='col-md-4'><div class='panel panel-default' id='food" +i+ "'></div></div>");
                $("#food"+i).append("<div class='panel-heading'> <h3 class='panel-title'>" +each[i].name+ "</h3></div>");
                $("#food"+i).append("<div class='panel-body' id=foodBody" +i+ ">" +each[i].location.display_address[0]+ "</div>");
                $("#foodBody"+i).prepend("<img src='" +each[i].rating_img_url+ "' /><br />");
                $("#foodBody"+i).prepend("<img src='" +each[i].image_url+ "' /><br />");
                $("#foodBody"+i).append("<p><a href=" +each[i].url+">Yelp Site</a></p>");
            };
        },
    });
};
