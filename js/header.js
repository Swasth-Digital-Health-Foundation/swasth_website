$(document).ready(function(){
    $('.menu li').click(function(){
        $(this).children('ul').slideToggle('fast');
        $(this).siblings().children('ul').css('display','none');
    });
    $('main').click(function(){
        $('.menu li ul').hide();
    });
    $('.hamburger').click(function(){
        $('#off-canvas-menu').addClass('show');
    });
    $('.close').click(function(){
        $('#off-canvas-menu').removeClass('show');
    });
    $('.overlay li').click(function(){
        $(this).children('ul').slideToggle('fast');
        $(this).siblings().children('ul').css('display','none');
    });
});