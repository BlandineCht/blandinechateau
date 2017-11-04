$(document).ready(function() {
  $('nav a, #accueil a').on('click', function() {
    var page = $(this).attr('href');
    var speed = 750;
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
    return false;
  });
  changeExpHeight();
});

$(function(){
  $(window).scroll(function () {
    var about = Math.round($('#banner-container').offset().top);
    var aboutLi = $('#navbar li:first-child');
    var exp = Math.round($('#experiences').offset().top);
    var expLi = $('#navbar li:nth-child(2)');
    var com = Math.round($('#competences').offset().top);
    var comLi = $('#navbar li:nth-child(3)');
    var pro = Math.round($('#projets').offset().top);
    var proLi = $('#navbar li:nth-child(4)');
    var con = Math.round($('#contact').offset().top);
    var conLi = $('#navbar li:nth-child(5)');
    if ($(this).scrollTop() < about - 50) {
      if (aboutLi.hasClass('active')) {
        aboutLi.removeClass('active');
      }
    }
    if ($(this).scrollTop() < exp - 200 && $(this).scrollTop() > about - 50) {
      if (!aboutLi.hasClass('active')) {
        aboutLi.addClass('active');
        aboutLi.siblings().removeClass('active');
      }
    }
    else if ($(this).scrollTop() < com - 200 && $(this).scrollTop() > exp - 200) {
      if (!expLi.hasClass('active')) {
        expLi.addClass('active');
        expLi.siblings().removeClass('active');
      }
    }
    else if ($(this).scrollTop() < pro - 200 && $(this).scrollTop() > com - 200) {
      if (!comLi.hasClass('active')) {
        comLi.addClass('active');
        comLi.siblings().removeClass('active');
      }
    }
    else if ($(this).scrollTop() < con - 200 && $(this).scrollTop() > pro - 200) {
      if (!proLi.hasClass('active')) {
        proLi.addClass('active');
        proLi.siblings().removeClass('active');
      }
    }
    else if ($(this).scrollTop() > con - 200) {
      if (!aboutLi.hasClass('active')) {
        conLi.addClass('active');
        conLi.siblings().removeClass('active');
      }
    }
  });
});

function changeExpHeight() {
  if ($(document).innerWidth() > 767) {
    var h = $('#experiences > .row > div:last-child > div ').css('height');
    $('#experiences > .row > div:first-child > div ').css('height', h);
  } else {
    $('#experiences > .row > div:first-child > div ').css('height', 'auto');
  }
}

$(window).resize(changeExpHeight);