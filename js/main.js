$(function () {

    $('.link__item').on('click', function(){
        $(this).addClass('link__item--active');
    });

    $('.copy_text').click(function () {
        var $text_copy = $(this);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($text_copy.text()).select();
        document.execCommand("copy");
        $temp.remove();
        $('.copy_link_mess').fadeIn(400);
        setTimeout(function () { $('.copy_link_mess').fadeOut(400); }, 5000);
    });

    $('.faq__list-item').on('click', function(){
        $(this).toggleClass('faq__list-item--active');
        $(this).children('.faq__list-content').children('.faq__list-title').toggleClass('faq__list-title--active');
        $(this).children('.faq__list-content').children('.faq__list-title').next().slideToggle('200');
    });

    $('.login ').on('click', function(){
        $('.login-popup').addClass('popup--active');
    });
    
    $('.close').on('click', function(){
        $('.popup--active').removeClass('popup--active');
    });

});