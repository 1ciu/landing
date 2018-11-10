$(document).ready(function() {

    var quests = [
        ['вопрос 1', 'ответ 1'],
        ['вопрос 2', 'ответ 2'],
        ['вопрос 3', 'ответ 3']
        
    ];
    
    
    quests.forEach(function(quest, i) {
        
        
        $('.quests-block').append(
            '<div>' +
            '<h1>' + quest[0] + '</h1>' + 
            '<p>' + quest[1] + '</p>' +
            '<button1>' + 'Показать ответ' + '</button1>' + 
            '</div>'
        );

    });

   
    $('button1').click(function() {
        var answer = $(this).prev();
        if ( answer.is(':visible')){
            answer.slideUp(5000);
            $(this).text('Показать ответ');
        } else {
            answer.slideDown(5000); 
            $(this).text('Скрыть ответ');
        }
    });

//     var width=$('.slider-box').width();
//     $('.slider').css('margin-left', -width);
//    setInterval(function() {
//        var margin=parseInt($('.slider').css('margin-left'));
    
//        if (margin !=(-width * 4)) {
//         margin = margin - width;

//        } else {
//         $('.slider').css('margin-left', -width);
//         margin = -width*2;

//        }
//        $('.slider').animate({marginLeft:margin}, 1000);
       
//    },2000);

   


});