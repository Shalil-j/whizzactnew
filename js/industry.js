$("#medical").click(function() {
    $('html,body').animate({
        scrollTop: $("#medical-div").offset().top-100},
        '1000');
});
$("#manif").click(function() {
    $('html,body').animate({
        scrollTop: $("#manif-div").offset().top-100},
        'slow');
});
$("#education").click(function() {
    $('html,body').animate({
        scrollTop: $("#education-div").offset().top-100},
        'slow');
});
$("#retailer").click(function() {
    $('html,body').animate({
        scrollTop: $("#retailer-div").offset().top-100},
        'slow');
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 10){
            $(".navbar-expand-lg").css({"background-color":"white"});
            $(".navbar-expand-lg").addClass('shadow');
            $(".navbar-expand-lg").removeClass('shadow-0');
            $(".service-link").addClass('text-black'); 
            $(".service-link").removeClass('text-white'); 
            $(".links").addClass('text-black'); 
            $(".links").removeClass('text-white');    
        }
        else{
            $(".navbar-expand-lg").css({"background-color":"white"});
            $(".navbar-expand-lg").addClass('shadow-0');
            $(".navbar-expand-lg").removeClass('shadow');
            $(".service-link").addClass('text-black'); 
 
            $(".links").addClass('text-black'); 
            $(".links").removeClass('text-white'); 

        }

    })
})