$(document).ready(function(){function e(){$(window).width()<1024?$(".image-scroll").each(function(e,i){n($(i))}):$(".image-scroll").css("transform","translateX(0)")}function n(e){if(e.width()>$(window).width()&&$(window).scrollTop()<e.offset().top+e.height()){var n=e.width()-$(window).width()+20,i=e.css("transform"),o=Number(i.substr(7).slice(0,-1).split(",")[4]),t=($(window).scrollTop()+.3*$(window).height()-e.offset().top)/(e.height()-200)*100;s<=$(window).scrollTop()?$(window).scrollTop()+.3*$(window).height()>e.offset().top&&(!o||-n<=o)&&(t/100*e.width()>n?e.css("transform","translateX(".concat(-n,"px)")):e.css("transform","translateX(".concat(-t,"%)"))):o&&o<=0&&(t/100*e.width()>n?e.css("transform","translateX(".concat(-n,"px)")):0<=t/100*e.width()?e.css("transform","translateX(".concat(-t,"%)")):e.css("transform","translateX(".concat(0,"px)"))),s=$(window).scrollTop()}}function i(){$(".hamburger").toggleClass("is-active"),$(".nav").toggleClass("menu-open"),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$("#menu").slideToggle(100),$("header, main,footer").toggleClass("blur"),$("body").toggleClass("overflow-hidden")}$(window).scroll(function(){return $(".nav").toggleClass("fixed",$(window).scrollTop()>0)}),$("#nav-icon").click(function(){$(".hamburger").toggleClass("is-active"),$(".nav").toggleClass("menu-open"),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$("#menu").slideToggle(100),$("header, main,footer").toggleClass("blur"),$("body").toggleClass("overflow-hidden")}),$(window).resize(function(){console.log($(this).width()),$(this).width()>987?($("#menu").css({display:"flex"}),$("#nav-icon").css({display:"none !important"}),$(".home").removeClass("overflow-hidden")):$("#nav-icon").hasClass("open")?($("#menu").css({display:"block"}),$(".home").addClass("overflow-hidden")):($("#menu").css({display:"none"}),$("#nav-icon").css({display:"block !important"}))}),$(".slider").slick({infinite:!0,arrows:!1,dots:!1,autoplay:!1,fade:!0,swipe:!1,speed:800,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:{dots:!1}},{breakpoint:480,settings:{dots:!1}}]}),$(".buyers-slider").slick({infinite:!0,arrows:!1,dots:!1,autoplay:!0,speed:800,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]}),$(".faq-item ").click(function(){$(this).hasClass("active")?($(".faq-item ").removeClass("active"),$(".faq-item .more").slideUp(200)):($(".faq-item ").removeClass("active"),$(".faq-item .more").slideUp(200),$(this).toggleClass("active"),$(this).find(".more").slideToggle(200))}),$(window).width()<1024?($("#item_2 h3").text("Engagement"),$("#item_3 h3").text("Post purchase")):($("#item_2 h3").text("Automate engagement"),$("#item_3 h3").text("Post purchase flows")),$(window).resize(function(){$(window).width()<1024?($("#item_2 h3").text("Engagement"),$("#item_3 h3").text("Post purchase")):($("#item_2 h3").text("Automate engagement"),$("#item_3 h3").text("Post purchase flows"))});var s=0;$(window).scroll(function(n){e(),s=$(window).scrollTop()}),$(".header__item").click(function(e){const n=$(e.currentTarget).parent();return n.hasClass("expand__item")?(e.preventDefault(),void(n.hasClass("active")?(n.removeClass("active"),n.mouseleave()):($(".expand__item").removeClass("active"),n.addClass("active")))):void($(window).width()<=1023&&i())}),$(".funnels_testimonials-slider").slick({infinite:!0,arrows:!1,dots:!1,autoplay:!1,speed:800,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,dots:!0,adaptiveHeight:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,adaptiveHeight:!0}}]});var o;$(window).width()<1200?($(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText1").show(),o=-1):$(window).scroll(function(e){var n=$(window).scrollTop(),i=$(".funnels_control").offset().top;o=n-i,console.log(o),o>0&&o<230&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeInLeft").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText1").show()),o>230&&o<610&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeIn").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText2").show()),o>610&&o<1190&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeIn").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText3").show()),o>1190&&o<1400&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeIn").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText4").show()),o>1400&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeIn").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText5").show())}),$(window).resize(function(){$(window).width()<1200?($(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText1").show(),o=-1):($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeInLeft").addClass("hidden_animation"),$(window).scroll(function(e){var n=$(window).scrollTop(),i=$(".funnels_control").offset().top;o=n-i,console.log(o),o>0&&o<230&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeInLeft").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText1").show()),o>230&&o<610&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeIn").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText2").show()),o>610&&o<1190&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeIn").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText3").show()),o>1190&&o<1400&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeIn").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText4").show()),o>1400&&$(window).width()>1200&&($(".funnels_control-item").hide(),$(".funnels_control-item").removeClass("visible animated fadeIn").addClass("hidden_animation"),$(".funnels_control-item").removeClass("hidden_animation").addClass("visible animated fadeIn"),$("#animateText5").show())}))})});