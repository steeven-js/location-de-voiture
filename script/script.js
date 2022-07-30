$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active')
        $(".line").toggleClass("active");
        $(".line").toggleClass("active");
        $(".line").toggleClass("active");
    })
    $('ul li').click(function () {
        $(this).siblings().removeClass('active'); /*ISSOU LA CHANCLA*/
        $(this).toggleClass('active');
    })
})