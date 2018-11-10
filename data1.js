$(document).ready(function() {
    
    var texts = ['Text 1','Text 2','Text 3'];

    $('button').click(function() {
        $(this).addClass('active');

        $(this).siblings().removeClass('active');

        var text_id = $(this).data('text-id');
        var text = texts[text_id];
        $('#text').text(text);


    });
});