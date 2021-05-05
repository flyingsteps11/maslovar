$(document).ready(function () {
    const owl = $('#oil-carousel').owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        items: 1
    });

    $('.oil-carousel-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.oil-carousel-prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });

    const owl1 = $('#comment-carousel').owlCarousel({
        dots: false,
        nav: false,
        margin: 10,
        items: 1
    });

    $('.comment-carousel-next').click(function () {
        owl1.trigger('next.owl.carousel');
    });

    $('.comment-carousel-prev').click(function () {
        owl1.trigger('prev.owl.carousel', [300]);
    });
    document.addEventListener('scroll', () => {
        if (scrollY > 75) {
            const header = document.querySelector('header');
            header.style.background = "#1a1a1a";
        }
        if (scrollY < 75) {
            const header = document.querySelector('header');
            header.style.background = "transparent";
        }
    });
    $('.item1').click(function () {
        $('.item1').addClass('active');
        $('.item2').removeClass('active');
        $('.item4').removeClass('active');
        $('.text2').removeClass('display');
        $('.text1').removeClass('display-none');
        $('.text3').removeClass('display');
        $('.item3').removeClass('active');
        $('.text4').removeClass('display');
    });
    $('.item2').click(function () {
        $('.item1').removeClass('active');
        $('.item2').addClass('active');
        $('.item3').removeClass('active');
        $('.item4').removeClass('active');
        $('.text1').addClass('display-none');
        $('.text2').addClass('display');
        $('.text3').removeClass('display');
        $('.text4').removeClass('display');
    });
    $('.item3').click(function () {
        $('.item1').removeClass('active');
        $('.item2').removeClass('active');
        $('.item4').removeClass('active');
        $('.item3').addClass('active');
        $('.text3').addClass('display');
        $('.text1').addClass('display-none');
        $('.text2').removeClass('display');
        $('.text4').removeClass('display');
    });
    $('.item4').click(function () {
        $('.item4').addClass('active');
        $('.item1').removeClass('active');
        $('.item2').removeClass('active');
        $('.item3').removeClass('active');
        $('.text1').addClass('display-none');
        $('.text2').removeClass('display');
        $('.text3').removeClass('display');
        $('.text4').addClass('display');
    });
});