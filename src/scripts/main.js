$(document).ready(function() {
    // header script
    $('header').scrollToFixed({
        zIndex: 1000,
    });

    if ($(window).width() < 1200) {
        $('header .menu').insertAfter('header .col-right');
        $('header .contact').insertAfter('.menu .menu-wrap');
    }

    $('.btn-showmenu').click(function() {
        $('.menu').addClass('open');
        $('.overlay').fadeIn(500);
    })
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
    })

    // BANNER
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        fade: true,
    });

    // Partner slide
    $('.partner-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
    });

    // Award slide
    $('.award-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        infinite: true,
    });

    // Gallery slide
    $('.gallery-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: false,
        speed: 300,
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '200px'
    });

    // history slide
    $('.history-event').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.history-slide'
    });
    $('.history-year').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.history-slide',
        focusOnSelect: true,
        arrows: true,
        dots: false,
    });

    // Product slide
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // SERVICE TOGGLE
    $('.feature .feature-name').click(function() {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active')
            $(this).parent().find('.feature-des').slideUp(500);
        } else {
            $('.feature').removeClass('active');
            $('.feature').find('.feature-des').slideUp(500);
            $(this).parent().addClass('active')
            $(this).parent().find('.feature-des').slideDown(500);
        }
    });

    // top nav fixed
    $('.top-nav ul').scrollToFixed({
        marginTop: 80,
        zIndex: 100,
    });

    // Page scroll to id
    $('.top-nav a').mPageScroll2id({
        offset: 120,
        highlightClass: 'active',
        forceSingleHighlight: true,
    });

});