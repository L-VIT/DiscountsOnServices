$(function () {

    $('.link__item').on('click', function(){
        $(this).addClass('link__item--active');
    });

    $('.copy_text').click(function () {
        //копіювання тексту по кліку на елемент (в разі потреби переробити під копіювання посилання з атрибуту href)
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
        //список з контентом, що відкривається після кліку на заголовок
        $(this).toggleClass('faq__list-item--active');
        $(this).children('.faq__list-content').children('.faq__list-title').toggleClass('faq__list-title--active');
        $(this).children('.faq__list-content').children('.faq__list-title').next().slideToggle('200');
    });

    $('.login ').on('click', function(){
        //відкриття модального вікна
        $('.login-popup').addClass('popup--active');
    });
    
    $('.close').on('click', function(){
        //закриття модального вікна
        $('.popup--active').removeClass('popup--active');
    });

    $('.password-img-box').on('click', function(){
        //Відкриття/закриття паролю по кліку на кнопку
        $(this).toggleClass('password-img-box--active');
        
        if ($(this).prev().attr('type') == 'password') {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });

    $('.tab').on('click', function(e){
        //Робота табів
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs__wrapper').siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

});