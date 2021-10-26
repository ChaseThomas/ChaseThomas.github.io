$(document).ready(function(){
    
    $("#page_effect").delay(500).fadeIn(1500, function(){
        $("#twitter").animate({opacity:1}, 1000);
        $("#linkedin").delay(500).animate({opacity:1}, 1000);
        $("#instagram").delay(1000).animate({opacity:1}, 1000);
        $("#email").delay(1500).animate({opacity:1}, 1000);
        //$(".myButton").delay(2000).animate({opacity:1}, 1000);
    });
    $("#portfolio").fadeIn(1500);
});
