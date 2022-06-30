$(function () {

    $('.link__item').on('click', function(){
        $(this).addClass('link__item--active');
    });

    jQuery(document).ready(function ($) {
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
    });

});