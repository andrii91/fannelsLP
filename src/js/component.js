$(document).ready(function () {
  $(window).scroll(function () {
    console.log($(window).scrollTop())
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



  var scrollAnim;
  var opacity1, opacity2, opacity3, opacity4, opacity5, opacity6;

  if ($(window).width() < 1200) {
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText1').show();
        scrollAnim = -1;
  } else {


    $(window).scroll(function (e) {

      var s = $(window).scrollTop(),
        topSection = $('.funnels_control').offset().top;

      scrollAnim = s - topSection;

      console.log(scrollAnim);

        $('#fix').css({
          'position' : 'absolute',
          'max-width' : $('.funnels_control-items').width(),
          'top' : '0px',
          
        })

      if (scrollAnim > 0 && scrollAnim < 130 && $(window).width() > 1200) {
        
        $('#ptfix').css('padding-top', $('#fix').height())
        
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

/*
        opacity1 = scrollAnim * 2 / 330;
        $('.funnels_control-item').css('opacity', 0);

         $('#animateText1').css({
            'opacity': 1,
            'transform': 'matrix(1, 0, 0, 1, 0, 0)'
          });*/
        $('.funnels_control-item').hide();
        $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText1').show();
      }
      if (scrollAnim > 129 && scrollAnim < 610 && $(window).width() > 1200) {
//        $('.funnels_control-item').css('opacity', 0);
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

        opacity2 = (scrollAnim - 130) * 2 / 480;

        /*$('#animateText1').css({
            'opacity': (opacity1 - (opacity2 + 0.3)),
            'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity2 *  $(window).height() + ')'
          });

        $('#animateText2').css('opacity', opacity2);*/

        $('.funnels_control-item').hide();
        $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText2').show();
      }
      if (scrollAnim > 609 && scrollAnim < 940 && $(window).width() > 1200) {

//        $('.funnels_control-item').css('opacity', 0);
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

        /*opacity3 = (scrollAnim - 610) * 2 / 330;

        $('#animateText2').css({
          'opacity': (opacity2 - (opacity3 + 1)),
          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 *  $(window).height() + ')'
        });


        $('#animateText3').css('opacity', opacity3);*/


         $('.funnels_control-item').hide();
         $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
         $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
         $('#animateText3').show();
      }
      if (scrollAnim > 939 && scrollAnim < 1400 && $(window).width() > 1200) {

//        $('.funnels_control-item').css('opacity', 0);
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

       /* opacity4 = (scrollAnim - 940) * 2 / 460;

        $('#animateText3').css({
          'opacity': (opacity3 - (opacity4 + 0.7)),
          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity4 *  $(window).height() + ')'
        });



        $('#animateText4').css('opacity', opacity4);*/


        $('.funnels_control-item').hide();
        $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText4').show();
      }
      if (scrollAnim > 1399 && $(window).width() > 1200) {

//        $('.funnels_control-item').css('opacity', 0);
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

        /*opacity5 = (scrollAnim - 1400) * 2 / 425;

        $('#animateText4').css({
          'opacity': (opacity4 - (opacity5 + 1.5)),
          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity5 *  $(window).height() + ')'
        });


        $('#animateText5').css('opacity', opacity5);
*/

        $('.funnels_control-item').hide();
        $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText5').show();
      }
      if (scrollAnim > 1576 && $(window).width() > 1200) {
        $('#fix').css({
          'position' : 'absolute',
          'top' : '1576px',
          
        })
      }
    })

  }

  $(window).resize(function () {

      if ($(window).width() < 1200) {
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText1').show();
        scrollAnim = -1;
  } else {


    $(window).scroll(function (e) {

      var s = $(window).scrollTop(),
        topSection = $('.funnels_control').offset().top;

      scrollAnim = s - topSection;

      console.log(scrollAnim);

        $('#fix').css({
          'position' : 'absolute',
          'max-width' : $('.funnels_control-items').width(),
          'top' : '0px',
          
        })

      if (scrollAnim > 0 && scrollAnim < 130 && $(window).width() > 1200) {
        
        $('#ptfix').css('padding-top', $('#fix').height())
        
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

/*
        opacity1 = scrollAnim * 2 / 330;
        $('.funnels_control-item').css('opacity', 0);

         $('#animateText1').css({
            'opacity': 1,
            'transform': 'matrix(1, 0, 0, 1, 0, 0)'
          });*/
        $('.funnels_control-item').hide();
        $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText1').show();
      }
      if (scrollAnim > 129 && scrollAnim < 610 && $(window).width() > 1200) {
//        $('.funnels_control-item').css('opacity', 0);
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

        opacity2 = (scrollAnim - 130) * 2 / 480;

        /*$('#animateText1').css({
            'opacity': (opacity1 - (opacity2 + 0.3)),
            'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity2 *  $(window).height() + ')'
          });

        $('#animateText2').css('opacity', opacity2);*/

        $('.funnels_control-item').hide();
        $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText2').show();
      }
      if (scrollAnim > 609 && scrollAnim < 940 && $(window).width() > 1200) {

//        $('.funnels_control-item').css('opacity', 0);
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

        /*opacity3 = (scrollAnim - 610) * 2 / 330;

        $('#animateText2').css({
          'opacity': (opacity2 - (opacity3 + 1)),
          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 *  $(window).height() + ')'
        });


        $('#animateText3').css('opacity', opacity3);*/


         $('.funnels_control-item').hide();
         $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
         $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
         $('#animateText3').show();
      }
      if (scrollAnim > 939 && scrollAnim < 1400 && $(window).width() > 1200) {

//        $('.funnels_control-item').css('opacity', 0);
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

       /* opacity4 = (scrollAnim - 940) * 2 / 460;

        $('#animateText3').css({
          'opacity': (opacity3 - (opacity4 + 0.7)),
          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity4 *  $(window).height() + ')'
        });



        $('#animateText4').css('opacity', opacity4);*/


        $('.funnels_control-item').hide();
        $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText4').show();
      }
      if (scrollAnim > 1399 && $(window).width() > 1200) {

//        $('.funnels_control-item').css('opacity', 0);
        $('#fix').css({
          'position' : 'fixed',
          'top' : '80px',
          
        })

        /*opacity5 = (scrollAnim - 1400) * 2 / 425;

        $('#animateText4').css({
          'opacity': (opacity4 - (opacity5 + 1.5)),
          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity5 *  $(window).height() + ')'
        });


        $('#animateText5').css('opacity', opacity5);
*/

        $('.funnels_control-item').hide();
        $('.funnels_control-item').removeClass('visible animated fadeIn').addClass('hidden_animation')
        $('.funnels_control-item').removeClass('hidden_animation').addClass('visible animated fadeIn')
        $('#animateText5').show();
      }
      if (scrollAnim > 1576 && $(window).width() > 1200) {
        $('#fix').css({
          'position' : 'absolute',
          'top' : '1576px',
          
        })
      }
    })

  }

  })





});