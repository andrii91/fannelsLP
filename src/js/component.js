$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('#nav-icon').click(function () {
    $('.hamburger').toggleClass('is-active')
    $('.nav').toggleClass('menu-open')

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle(100);
    $('header, main,footer').toggleClass('blur');
    $('body').toggleClass('overflow-hidden')

  });



  $(window).resize(function () {
    console.log($(this).width());
    if ($(this).width() > 987) {
      $('#menu').css({
        'display': 'flex'
      })
      $('#nav-icon').css({
        'display': 'none !important'
      })

      $('.home').removeClass('overflow-hidden')
    } else {
      if (!$('#nav-icon').hasClass('open')) {
        $('#menu').css({
          'display': 'none'
        })
        $('#nav-icon').css({
          'display': 'block !important'
        })
      } else {
        $('#menu').css({
          'display': 'block'
        })
        $('.home').addClass('overflow-hidden')
      }
    }
  })


  $(".slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    fade: true,
    //    cssEase: 'linear',
    swipe: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
    },
      {
        breakpoint: 480,
        settings: {
          dots: false,
        }
    }
  ]
  });


  $(".buyers-slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
    }
  ]
  });



  $('.faq-item ').click(function () {

    if ($(this).hasClass('active')) {
      $('.faq-item ').removeClass('active');
      $('.faq-item .more').slideUp(200);
    } else {
      $('.faq-item ').removeClass('active');
      $('.faq-item .more').slideUp(200);
      $(this).toggleClass('active');
      $(this).find('.more').slideToggle(200);
    }

  });


  if ($(window).width() < 1024) {
    $('#item_2 h3').text('Engagement')
    $('#item_3 h3').text('Post purchase')
  } else {
    $('#item_2 h3').text('Automate engagement')
    $('#item_3 h3').text('Post purchase flows')
  }

  $(window).resize(function () {
    if ($(window).width() < 1024) {
      $('#item_2 h3').text('Engagement')
      $('#item_3 h3').text('Post purchase')
    } else {
      $('#item_2 h3').text('Automate engagement')
      $('#item_3 h3').text('Post purchase flows')
    }
  })

  var scrollBefore = 0;

  function imageLoop() {
    $(window).width() < 1024 ? $(".image-scroll").each(function (e, a) {
      scrollBlock($(a))
    }) : $(".image-scroll").css("transform", "translateX(0)")
  }

  function scrollBlock(e) {
    if (e.width() > $(window).width() && $(window).scrollTop() < e.offset().top + e.height()) {
      var a = e.width() - $(window).width() + 20,
        s = e.css("transform"),
        i = Number(s.substr(7).slice(0, -1).split(",")[4]),
        r = ($(window).scrollTop() + .3 * $(window).height() - e.offset().top) / (e.height() - 200) * 100;
      scrollBefore <= $(window).scrollTop() ? $(window).scrollTop() + .3 * $(window).height() > e.offset().top && (!i || -a <= i) && (r / 100 * e.width() > a ? e.css("transform", "translateX(".concat(-a, "px)")) : e.css("transform", "translateX(".concat(-r, "%)"))) : i && i <= 0 && (r / 100 * e.width() > a ? e.css("transform", "translateX(".concat(-a, "px)")) : 0 <= r / 100 * e.width() ? e.css("transform", "translateX(".concat(-r, "%)")) : e.css("transform", "translateX(".concat(0, "px)"))), scrollBefore = $(window).scrollTop()
    }
  }

  $(window).scroll(function (e) {
    imageLoop(), scrollBefore = $(window).scrollTop()
  })



  /*=========================*/


  $('.header__item').click(function (e) {
    const parent = $(e.currentTarget).parent();

    if (parent.hasClass('expand__item')) {
      e.preventDefault();

      if (parent.hasClass('active')) {
        parent.removeClass('active');
        parent.mouseleave();
      } else {
        $('.expand__item').removeClass('active');
        parent.addClass('active');
      }

      return;
    }

    if ($(window).width() <= 1023) toggleMenu()
  })


  function toggleMenu() {
    $('.hamburger').toggleClass('is-active')
    $('.nav').toggleClass('menu-open')

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle(100);
    $('header, main,footer').toggleClass('blur');
    $('body').toggleClass('overflow-hidden');
  }




  /*new*/

  /*  $('.funnels_control-item').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
      classToRemove: 'hidden_animation',
      repeat: false,
      offset: '50%',
      invertBottomOffset: true,
      callbackFunction: function (elem, action) {

      },
    });*/

  $('.funnels_testimonials-slider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          adaptiveHeight: true

        }
    }
  ]
  });

  var opacity1, opacity2, opacity3, opacity4, opacity5, opacity6;

  var scrollHeight1 = 165;
  var scrollHeight2 = 610;
  var scrollHeight3 = 1150;
  var scrollHeight4 = 1500;
  var scrollCoof = 3.5;
  var constnt = 500;

  var scrollAnim,
    getHeight = $(window).height(),
    getHeight1 = 1000,
    getAH1 = $('#animateText1').height(),
    getAH2 = $('#animateText2').height(),
    getAH3 = $('#animateText3').height(),
    getAH4 = $('#animateText4').height(),
    getAH5 = $('#animateText5').height(),

    animationH1 = scrollHeight1 - ((getHeight - constnt) / scrollCoof),
    animationH2 = scrollHeight2 - ((getHeight - constnt) / scrollCoof),
    animationH3 = scrollHeight3 - ((getHeight - constnt) / scrollCoof),
    animationH4 = scrollHeight4 - ((getHeight - constnt) / scrollCoof);

  if (getHeight > 1000 && $(window).width() > 1200) {
    //    getHeight = getHeight1;
  }



  if ($(window).width() < 1200) {
    $('.funnels_control-item').removeClass('hidden_animation') /*.addClass('visible animated fadeIn')*/
    $('#animateText1').show();
    scrollAnim = -1;
  } else {
    $(window).scroll(function (e) {

      var s = $(window).scrollTop(),
        topSection = $('.funnels_control').offset().top;

      scrollAnim = s - topSection;

      //      console.log(scrollAnim);
      //      console.log(getHeight);



      if (scrollAnim > (-(getHeight - getAH1) / 2) && scrollAnim < animationH1 && $(window).width() > 1200) {

        opacity1 = (scrollAnim / 100) * -1;

        $('.funnels_control-item:not(#animateText1)').css('opacity', 0);

        $('#animateText1').css({
          'opacity': opacity1,
          //          'transform': 'matrix(1, 0, 0, 1, 0, 0)',
          'top': (getHeight - getAH1) / 2
        });
      }

      if (scrollAnim > (animationH1 - 25) && scrollAnim < animationH2 && $(window).width() > 1200) {
        opacity2 = (scrollAnim - animationH1) * 2 / 480;

        $('#animateText1').css({
          'opacity': (opacity1 - (opacity2 + 1.3)),
          //            'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity2 * getHeight + ')',
          'top': (getHeight - getAH1) / 2
        });

      }


      if (scrollAnim > (animationH1 - 1) && scrollAnim < animationH2 && $(window).width() > 1200) {
        $('.funnels_control-item:not(#animateText1, #animateText2)').css('opacity', 0);
        $('#animateText2').css({
          'opacity': opacity2,
          'top': (getHeight - getAH2) / 2
        });
      }

      if (scrollAnim > (animationH2 - 25) && scrollAnim < animationH3 && $(window).width() > 1200) {
        opacity3 = (scrollAnim - animationH2) * 2 / 480;

        $('#animateText2').css({
          'opacity': (opacity2 - (opacity3 + 1.7)),
          //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
        });
      }


      if (scrollAnim > (animationH2 - 1) && scrollAnim < animationH3 && $(window).width() > 1200) {
         $('.funnels_control-item:not(#animateText2, #animateText3)').css('opacity', 0);

        $('#animateText3').css({
          'opacity': opacity3,
          'top': (getHeight - getAH3) / 2
        });
      }

      if (scrollAnim > (animationH3 - 25) && scrollAnim < animationH4 && $(window).width() > 1200) {
        opacity4 = (scrollAnim - animationH3) * 2 / 480;

        $('#animateText3').css({
          'opacity': (opacity3 - (opacity4 +  2.1)),
          //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity4 *  getHeight + ')'
        });
      }

      if (scrollAnim > (animationH3 - 1) && scrollAnim < animationH4 && $(window).width() > 1200) {
        $('.funnels_control-item:not(#animateText3, #animateText4)').css('opacity', 0);
        $('#animateText4').css({
          'opacity': opacity4,
          'top': (getHeight - getAH4) / 2
        });
      }
      if (scrollAnim > (animationH4 - 25) && $(window).width() > 1200) {
        opacity5 = (scrollAnim - animationH4) * 2 / 480;
        $('#animateText4').css({
          'opacity': (opacity4 - (opacity5 + 2.1)),
          //           'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity5 *  getHeight + ')'
        });

      }

      if (scrollAnim > animationH4 && $(window).width() > 1200) {

        $('.funnels_control-item:not(#animateText4, #animateText5)').css('opacity', 0);
        $('#animateText5').css({
          'opacity': opacity5,
          'top': (getHeight - getAH5) / 2
        });
      }
      

    })

  }

  $(window).resize(function () {


  })





});