$(document).ready(function () {
    $('div.typewriter').click(function () {
        $('html, body').animate({
            scrollTop: $("div.slide1").offset().top
        }, 1000)
    })
    $('div.slide1').click(function () {
        $('html, body').animate({
           scrollTop : $("div.slide2").offset().top
        }, 1000)
    }),
    $('div.slide2').click(function () {
        $('html, body').animate({
            scrollTop: $("div.slide3").offset().top
        }, 1000)
    }),
    $('div.slide3').click(function () {
        $('html, body').animate({
                scrollTop: $("div.slide4").offset().top
        }, 1000)
    })
    $('div.slide4').click(function () {
        $('html, body').animate({
            scrollTop: $("div.slide5").offset().top
        }, 1000)
    })
    $('div.slide5').click(function () {
        $('html, body').animate({
            scrollTop: $("div.slide6").offset().top
        }, 1000)
    })
    $('div.slide6').click(function () {
        $('html, body').animate({
            scrollTop: $("div.slide7").offset().top
        }, 1000)
    })
    $('div.slide7').click(function () {
        $('html, body').animate({
            scrollTop: $("div.typewriter").offset().top
        }, 1000)
    })
});