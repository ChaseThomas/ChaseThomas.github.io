$(document).ready(function(){
    $("#page_effect").fadeIn(1500, function(){
        $("#github").animate({opacity:1}, 1000);
        $("#linkedin").delay(500).animate({opacity:1}, 1000);
        $("#email").delay(1000).animate({opacity:1}, 1000);
    });
});