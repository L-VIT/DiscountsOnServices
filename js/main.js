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

    $('.login, .mobile-login').on('click', function(){
        //відкриття модального вікна авторизації
        $('.login-popup').addClass('popup--active');
    });

    $('.plan__content-btn').on('click', function(){
        //відкриття модального вікна оформлення підписки
        $('.subscription-popup-box').addClass('popup--active');
    });
    
    $('.close, .paid__btn').on('click', function(){
        //закриття модального вікна
        $('.popup--active').removeClass('popup--active');
        
        setTimeout(function(){
            //затримка в 5с, щоб прибрати баг з миттєвим відображенням блоку "application" після закриття модального вікна в блоках payment і paid
            $('.payment, .paid').removeClass('block--active');
            $('.application').addClass('block--active');
        }, 5000);
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

    $('.menu-btn').on('click', function(){
        //відкриття/закриття мобільного меню
        $(this).toggleClass('menu-btn--active');
        $('.mobile__menu-box').toggleClass('mobile__menu-box--active');
    });

    $('.subscription__btn').on('click', function(){
        //переключення по блоках форми оплати підписки
        $('.block--active').removeClass('block--active');
        $(this).parent().parent().next().addClass('block--active');
    });

    // $('.login-input').blur(function () {
    //     if ($(this).val() != '') {
    //         let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    //         if (pattern.test($(this).val())) {
    //             $(this).removeClass('input-notcorect').addClass('input-corect');
    //         } else {
    //             $(this).removeClass('input-corect').addClass('input-notcorect');
    //         }
    //     } else {
    //         $(this).addClass('input-notcorect');
    //     }
    // });

    // $('.password-input').blur(function () {
    //     if ($(this).val() != '') {
    //         $(this).removeClass('input-notcorect').addClass('input-corect');
    //     } else {
    //         $(this).removeClass('input-corect').addClass('input-notcorect');
    //     }
    // });

});