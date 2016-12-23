/**
 * Created by liu on 2016/11/8.
 */
$(function () {
    $('.searchinput').focus(function () {
        $(this).animate({
            'width':'150px'
        });
    }).blur(function () {
        if(!$(this).val()) {
            $(this).animate({
                'width': '76px'
            });
        }
    });

});

