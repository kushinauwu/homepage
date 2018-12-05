$(document).ready(function() {
    $('body').fadeIn(500);
    
    if($(window).width() >= 1024){
        $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {   
            $('.news-section').css({'opacity':'1'});
            /*$('.news-image').css({'transform':'translateX(100%)'});*/
        }
        
        if ($(this).scrollTop() > 850) {    
            $('.fellowships-section').css({'opacity':'1'}); 
            /*$('.fellowships-background-image').css({'transform':'translateX(-100%)'});*/
        }
        
        if ($(this).scrollTop() > 1500) {    
            $('.projects-section').css({'opacity':'1'}); 
        }
        
        if ($(this).scrollTop() > 2500) {    
            $('.events-section').css({'opacity':'1'}); 
        }
    });
    }    
});