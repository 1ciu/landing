$(document).ready(function() {
    
    var width=$('.slider-box').width();
    $('.slider').css('margin-left', -width);
   setInterval(function() {
       var margin=parseInt($('.slider').css('margin-left'));
    
       if (margin !=(-width * 4)) {
        margin = margin - width;

       } else {
        $('.slider').css('margin-left', -width);
        margin = -width*2;

       }
       $('.slider').animate({marginLeft:margin}, 1000);
       
   },2000);

   
});