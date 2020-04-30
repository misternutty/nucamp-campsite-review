$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            // this was $(".carousel") which references the carousel object by its class. That works, but seems like bad form since it would be an issue if
            // you had more than one carousel on the page. I switched it to reference the carousel Id.
            $("#homeCarousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $("#homeCarousel").carousel("cycle");
            $("#carouselButton").children("i").addClass("fa-pause");
            $("#carouselButton").children("i").removeClass("fa-play");
        }
    });
});