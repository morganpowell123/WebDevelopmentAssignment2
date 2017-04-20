jQuery(document).ready(function ($) {
  
	var slideCount = $('.slider ul li').length;
	var slideWidth = $('.slider ul li').width();
	var slideHeight = $('.slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.slider').css({ width: slideWidth, height: slideHeight });
	
	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider1 ul li:last-child').prependTo('#slider1 ul');

    function moveLeftSlider1() {
        $('#slider1 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider1 ul li:last-child').prependTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    };

    function moveRightSlider1() {
        $('#slider1 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider1 ul li:first-child').appendTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    };

    $('#prev1').click(function () {
        moveLeftSlider1();
    });

    $('#next1').click(function () {
        moveRightSlider1();
    });
  
  
  
  
  $('#slider2 ul li:last-child').prependTo('#slider2 ul');
  
  function moveLeftSlider2() {
        $('#slider2 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider2 ul li:last-child').prependTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    function moveRightSlider2() {
        $('#slider2 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider2 ul li:first-child').appendTo('#slider2 ul');
            $('#slider2 ul').css('left', '');
        });
    };

    $('#prev2').click(function () {
        moveLeftSlider2();
    });

    $('#next2').click(function () {
        moveRightSlider2();
    });

  
  
  
  
  $('#slider3 ul li:last-child').prependTo('#slider3 ul');
  
    function moveLeftSlider3() {
        $('#slider3 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider3 ul li:last-child').prependTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    function moveRightSlider3() {
        $('#slider3 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider3 ul li:first-child').appendTo('#slider3 ul');
            $('#slider3 ul').css('left', '');
        });
    };

    $('#prev3').click(function () {
        moveLeftSlider3();
    });

    $('#next3').click(function () {
        moveRightSlider3();
    });

});    
