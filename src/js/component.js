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
    infinite: false,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<svg class="prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle  cx="20" cy="20" r="19.5" transform="rotate(180 20 20)" fill="white" stroke="#505876"/><path  d="M9.47211 19.4697C9.17922 19.7626 9.17922 20.2374 9.47211 20.5303L14.2451 25.3033C14.538 25.5962 15.0128 25.5962 15.3057 25.3033C15.5986 25.0104 15.5986 24.5355 15.3057 24.2426L11.0631 20L15.3057 15.7574C15.5986 15.4645 15.5986 14.9896 15.3057 14.6967C15.0128 14.4038 14.538 14.4038 14.2451 14.6967L9.47211 19.4697ZM30.0024 19.25L10.0024 19.25L10.0024 20.75L30.0024 20.75L30.0024 19.25Z" fill="#505876"/></svg>',
    nextArrow: '<svg class="next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" fill="white" stroke="#505876"/><path d="M30.5303 20.5303C30.8232 20.2374 30.8232 19.7626 30.5303 19.4697L25.7574 14.6967C25.4645 14.4038 24.9896 14.4038 24.6967 14.6967C24.4038 14.9896 24.4038 15.4645 24.6967 15.7574L28.9393 20L24.6967 24.2426C24.4038 24.5355 24.4038 25.0104 24.6967 25.3033C24.9896 25.5962 25.4645 25.5962 25.7574 25.3033L30.5303 20.5303ZM10 20.75H30V19.25H10V20.75Z"fill="#505876"/></svg>',
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

  var scrollAnim, directionScroll
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


  //IE, Opera, Safari
  $('.funnels_control').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta < 0) {
      directionScroll = 'down';
    } else {
      directionScroll = 'up';
    }
    //prevent page fom scrolling
    //     return false;
  });


  //Firefox
  $('.funnels_control').bind('DOMMouseScroll', function (e) {
    if (e.originalEvent.detail > 0) {
      directionScroll = 'down';
    } else {
      directionScroll = 'up';
    }

  });

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
      opacity2 = (scrollAnim - animationH1) * 2 / 480;
      opacity3 = (scrollAnim - animationH2) * 2 / 480;
      opacity4 = (scrollAnim - animationH3) * 2 / 480;
      opacity5 = (scrollAnim - animationH4) * 2 / 480;





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


        $('#animateText1').css({
          'opacity': (opacity1 - (opacity2 + 1.3)),
          //            'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity2 * getHeight + ')',
          'top': (getHeight - getAH1) / 2
        });

      }


      if (scrollAnim > (animationH1 - 1) && scrollAnim < animationH2 && $(window).width() > 1200) {
        $('.funnels_control-item:not(#animateText1, #animateText2)').css('opacity', 0);

        if (directionScroll == "down") {
          $('#animateText2').css({
            'opacity': opacity2,
            'top': (getHeight - getAH2) / 2
          });

        } else {
          $('#animateText2').css({
            'opacity': (-1 * opacity2 - (opacity3 - 3)),
            'top': (getHeight - getAH2) / 2
            //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
          });
        }

      }

      if (scrollAnim > (animationH2 - 25) && scrollAnim < animationH3 && $(window).width() > 1200) {

        if (directionScroll == "down") {
          $('#animateText2').css({
            'opacity': (opacity2 - (opacity3 + 2)),
            //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
          });

        } else {
          $('#animateText2').css({
            'opacity': (-1 * opacity2 - (opacity3 - 3)),
            //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
          });
        }

      }


      if (scrollAnim > (animationH2 - 1) && scrollAnim < animationH3 && $(window).width() > 1200) {
        $('.funnels_control-item:not(#animateText2, #animateText3)').css('opacity', 0);



        if (directionScroll == "down") {
          $('#animateText3').css({
            'opacity': opacity3,
            'top': (getHeight - getAH3) / 2
          });

        } else {
          $('#animateText3').css({
            'opacity': opacity3 - 0.7,
            'top': (getHeight - getAH3) / 2
          });
        }



      }

      if (scrollAnim > (animationH3 - 25) && scrollAnim < animationH4 && $(window).width() > 1200) {




        if (directionScroll == "down") {

          $('#animateText3').css({
            'opacity': (opacity3 - (opacity4 + 2.5)),
            //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity4 *  getHeight + ')'
          });

        } else {
          $('#animateText3').css({
            'opacity': (-1 * opacity3 - (opacity4 - 3.3)),
            //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
          });
        }



      }

      if (scrollAnim > (animationH3 - 1) && scrollAnim < animationH4 && $(window).width() > 1200) {
        $('.funnels_control-item:not(#animateText3, #animateText4)').css('opacity', 0);


        if (directionScroll == "down") {

          $('#animateText4').css({
            'opacity': opacity4,
            'top': (getHeight - getAH4) / 2
          });

        } else {
          $('#animateText4').css({
            'opacity': opacity4 - 0.4,
            'top': (getHeight - getAH4) / 2
          });
        }



      }
      if (scrollAnim > (animationH4 - 25) && $(window).width() > 1200) {


        if (directionScroll == "down") {

          $('#animateText4').css({
            'opacity': (opacity4 - (opacity5 + 2.1)),
            //           'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity5 *  getHeight + ')'
          });
        } else {
          $('#animateText4').css({
            'opacity': (-1 * opacity4 - (opacity5 - 2.3)),
            //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
          });
        }




      }

      if (scrollAnim > animationH4 && $(window).width() > 1200) {

        $('.funnels_control-item:not(#animateText4, #animateText5)').css('opacity', 0);


        if (directionScroll == "down") {

          $('#animateText5').css({
            'opacity': opacity5,
            'top': (getHeight - getAH5) / 2
          });

        } else {
          $('#animateText5').css({
            'opacity': opacity5 - 0.4,
            'top': (getHeight - getAH5) / 2
          });
        }




      }


    })

  }

  $(window).resize(function () {

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
        opacity2 = (scrollAnim - animationH1) * 2 / 480;
        opacity3 = (scrollAnim - animationH2) * 2 / 480;
        opacity4 = (scrollAnim - animationH3) * 2 / 480;
        opacity5 = (scrollAnim - animationH4) * 2 / 480;





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


          $('#animateText1').css({
            'opacity': (opacity1 - (opacity2 + 1.3)),
            //            'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity2 * getHeight + ')',
            'top': (getHeight - getAH1) / 2
          });

        }


        if (scrollAnim > (animationH1 - 1) && scrollAnim < animationH2 && $(window).width() > 1200) {
          $('.funnels_control-item:not(#animateText1, #animateText2)').css('opacity', 0);

          if (directionScroll == "down") {
            $('#animateText2').css({
              'opacity': opacity2,
              'top': (getHeight - getAH2) / 2
            });

          } else {
            $('#animateText2').css({
              'opacity': (-1 * opacity2 - (opacity3 - 3)),
              'top': (getHeight - getAH2) / 2
              //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
            });
          }

        }

        if (scrollAnim > (animationH2 - 25) && scrollAnim < animationH3 && $(window).width() > 1200) {

          if (directionScroll == "down") {
            $('#animateText2').css({
              'opacity': (opacity2 - (opacity3 + 2)),
              //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
            });

          } else {
            $('#animateText2').css({
              'opacity': (-1 * opacity2 - (opacity3 - 3)),
              //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
            });
          }

        }


        if (scrollAnim > (animationH2 - 1) && scrollAnim < animationH3 && $(window).width() > 1200) {
          $('.funnels_control-item:not(#animateText2, #animateText3)').css('opacity', 0);



          if (directionScroll == "down") {
            $('#animateText3').css({
              'opacity': opacity3,
              'top': (getHeight - getAH3) / 2
            });

          } else {
            $('#animateText3').css({
              'opacity': opacity3 - 0.7,
              'top': (getHeight - getAH3) / 2
            });
          }



        }

        if (scrollAnim > (animationH3 - 25) && scrollAnim < animationH4 && $(window).width() > 1200) {




          if (directionScroll == "down") {

            $('#animateText3').css({
              'opacity': (opacity3 - (opacity4 + 2.5)),
              //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity4 *  getHeight + ')'
            });

          } else {
            $('#animateText3').css({
              'opacity': (-1 * opacity3 - (opacity4 - 3.3)),
              //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
            });
          }



        }

        if (scrollAnim > (animationH3 - 1) && scrollAnim < animationH4 && $(window).width() > 1200) {
          $('.funnels_control-item:not(#animateText3, #animateText4)').css('opacity', 0);


          if (directionScroll == "down") {

            $('#animateText4').css({
              'opacity': opacity4,
              'top': (getHeight - getAH4) / 2
            });

          } else {
            $('#animateText4').css({
              'opacity': opacity4 - 0.4,
              'top': (getHeight - getAH4) / 2
            });
          }



        }
        if (scrollAnim > (animationH4 - 25) && $(window).width() > 1200) {


          if (directionScroll == "down") {

            $('#animateText4').css({
              'opacity': (opacity4 - (opacity5 + 2.1)),
              //           'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity5 *  getHeight + ')'
            });
          } else {
            $('#animateText4').css({
              'opacity': (-1 * opacity4 - (opacity5 - 2.3)),
              //          'transform': 'matrix(1, 0, 0, 1, 0, -' +opacity3 * getHeight + ')'
            });
          }




        }

        if (scrollAnim > animationH4 && $(window).width() > 1200) {

          $('.funnels_control-item:not(#animateText4, #animateText5)').css('opacity', 0);


          if (directionScroll == "down") {

            $('#animateText5').css({
              'opacity': opacity5,
              'top': (getHeight - getAH5) / 2
            });

          } else {
            $('#animateText5').css({
              'opacity': opacity5 - 0.4,
              'top': (getHeight - getAH5) / 2
            });
          }




        }


      })

    }


  })


  $('.funnels_lending-slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'false',
    autoplay: true,
    autoplaySpeed: 720,

  });



});