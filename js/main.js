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
        $('.popup').addClass('scrol');
        $('body').addClass('no-scrol');
    });

    $('.plan__content-btn').on('click', function(){
        //відкриття модального вікна оформлення підписки
        $('.subscription-popup-box').addClass('popup--active');
        $('.popup').addClass('scrol');
        $('body').addClass('no-scrol');
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

    $('.popup__body').on('click', function () {
        //закриття меню по кліку в пусте місце
        if (!event.target.closest('.popup__content')) {
          $('.popup--active').removeClass('popup--active');
          $('.popup').removeClass('scrol');
          $('body').removeClass('no-scrol');
        }
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

   
// ######### Валідація форми для авторизації ##########
    $('.login-input').blur(function () {
        // підсвічення поля вводу ел.пошти при правильному чи неправильному заповненні без натискання на кнопку відправки
        if ($(this).val() != '') {
            let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                $(this).removeClass('input-notcorect').addClass('input-corect');
            } else {
                $(this).removeClass('input-corect').addClass('input-notcorect');
            }
        } else {
            $(this).addClass('input-notcorect');
        }
    });

    $('.password-input').blur(function () {
        // підсвічення поля вводу пароля в залежності від того пусте поле чи заповнене без натискання на кнопку відправки
        if ($(this).val() != '') {
            $(this).removeClass('input-notcorect').addClass('input-corect');
        } else {
            $(this).removeClass('input-corect').addClass('input-notcorect');
        }
    });

    $('.login-form').submit(function(){{
        // валідація форми при натисненні на кнопку відправки
        let loginError = true;
        let passError = true;

        if ($('.login-input').val() != '') {
            let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($('.login-input').val())) {
                $('.login-input').removeClass('input-notcorect').addClass('input-corect');
                loginError = false;
                if (loginError == false && passError == false) {
                    $('.login-btn').removeAttr('disabled');
                }
            } else {
                $('.login-input').removeClass('input-corect').addClass('input-notcorect');
                loginError = true;
            }
        } else {
            $('.login-input').addClass('input-notcorect');
            loginError = true;
        }

        if ($('.password-input').val() != '') {
            $('.password-input').removeClass('input-notcorect').addClass('input-corect');
            passError = false;
            if (loginError == false && passError == false) {
                $('.login-btn').removeAttr('disabled');
            }
        } else {
            $('.password-input').removeClass('input-corect').addClass('input-notcorect');
            passError = true;
        }

        if(loginError==false && passError==false){
            $('.login-form').post();
        }else{
            return false;
        }
    }});

});