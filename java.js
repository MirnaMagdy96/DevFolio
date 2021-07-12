$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    let homeHeight = $("#home").height();
    let offsetAboutSec = $("#about").offset().top;

    console.log("home", homeHeight);
    console.log("scroll", scrollTop);

    if (scrollTop >= offsetAboutSec) {
        $("nav").addClass("stickynav");
        $('.btn-up').fadeIn(1000);

    } else {
        $("nav").removeClass("stickynav");
        $('.btn-up').fadeOut(1000);

    }
});


$('.btn-up').click(function() {
    let homeSec = $('#home').offset().top;
    $('body , html').animate({
        scrollTop: homeSec
    }, 2000)
});

$('.parent-option i').click(function() {

    let boxWidth = $('.options').innerWidth();

    console.log(boxWidth)

    let x = $('.parent-option').css('left');

    console.log(x);

    if (x == '0px') //el box bara
    {
        $('.parent-option').animate({
            left: `-${boxWidth}px`
        }, 3000)

    } else {
        //atl3o bra
        $('.parent-option').animate({
            left: '0px'
        }, 3000)
    }

















})





$(".options li").click(function() {
    let bgColorLi = $(this).css('backgroundColor');
    console.log(bgColorLi);


    $("i , h4 , h1 , h2 , h3").css('color', bgColorLi);
})



$('.options img').click(function() {
    let imgSrc = $(this).attr('src');

    $('.home').css('backgroundImage', `url(${imgSrc})`);
    $('.home').css({
        backgroundImage: `url(${imgSrc})`,
        transition: 'all 2s'

    });

})