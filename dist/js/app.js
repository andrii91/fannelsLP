$(document).ready(function(){function t(){$(window).width()<1024?$(".image-scroll").each(function(t,i){e($(i))}):$(".image-scroll").css("transform","translateX(0)")}function e(t){if(t.width()>$(window).width()&&$(window).scrollTop()<t.offset().top+t.height()){var e=t.width()-$(window).width()+20,i=t.css("transform"),n=Number(i.substr(7).slice(0,-1).split(",")[4]),s=($(window).scrollTop()+.3*$(window).height()-t.offset().top)/(t.height()-200)*100;o<=$(window).scrollTop()?$(window).scrollTop()+.3*$(window).height()>t.offset().top&&(!n||-e<=n)&&(s/100*t.width()>e?t.css("transform","translateX(".concat(-e,"px)")):t.css("transform","translateX(".concat(-s,"%)"))):n&&n<=0&&(s/100*t.width()>e?t.css("transform","translateX(".concat(-e,"px)")):0<=s/100*t.width()?t.css("transform","translateX(".concat(-s,"%)")):t.css("transform","translateX(".concat(0,"px)"))),o=$(window).scrollTop()}}function i(){$(".hamburger").toggleClass("is-active"),$(".nav").toggleClass("menu-open"),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$("#menu").slideToggle(100),$("header, main,footer").toggleClass("blur"),$("body").toggleClass("overflow-hidden")}$(window).scroll(function(){return $(".nav").toggleClass("fixed",$(window).scrollTop()>0)}),$("#nav-icon").click(function(){$(".hamburger").toggleClass("is-active"),$(".nav").toggleClass("menu-open"),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$("#menu").slideToggle(100),$("header, main,footer").toggleClass("blur"),$("body").toggleClass("overflow-hidden")}),$(window).resize(function(){console.log($(this).width()),$(this).width()>987?($("#menu").css({display:"flex"}),$("#nav-icon").css({display:"none !important"}),$(".home").removeClass("overflow-hidden")):$("#nav-icon").hasClass("open")?($("#menu").css({display:"block"}),$(".home").addClass("overflow-hidden")):($("#menu").css({display:"none"}),$("#nav-icon").css({display:"block !important"}))}),$(".slider").slick({infinite:!0,arrows:!1,dots:!1,autoplay:!1,fade:!0,swipe:!1,speed:800,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:{dots:!1}},{breakpoint:480,settings:{dots:!1}}]}),$(".buyers-slider").slick({infinite:!0,arrows:!1,dots:!1,autoplay:!0,speed:800,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]}),$(".faq-item ").click(function(){$(this).hasClass("active")?($(".faq-item ").removeClass("active"),$(".faq-item .more").slideUp(200)):($(".faq-item ").removeClass("active"),$(".faq-item .more").slideUp(200),$(this).toggleClass("active"),$(this).find(".more").slideToggle(200))}),$(window).width()<1024?($("#item_2 h3").text("Engagement"),$("#item_3 h3").text("Post purchase")):($("#item_2 h3").text("Automate engagement"),$("#item_3 h3").text("Post purchase flows")),$(window).resize(function(){$(window).width()<1024?($("#item_2 h3").text("Engagement"),$("#item_3 h3").text("Post purchase")):($("#item_2 h3").text("Automate engagement"),$("#item_3 h3").text("Post purchase flows"))});var o=0;$(window).scroll(function(e){t(),o=$(window).scrollTop()}),$(".header__item").click(function(t){const e=$(t.currentTarget).parent();return e.hasClass("expand__item")?(t.preventDefault(),void(e.hasClass("active")?(e.removeClass("active"),e.mouseleave()):($(".expand__item").removeClass("active"),e.addClass("active")))):void($(window).width()<=1023&&i())}),$(".funnels_testimonials-slider").slick({infinite:!0,arrows:!1,dots:!1,autoplay:!1,speed:800,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,adaptiveHeight:!0}}]});var n,s,a,l,c,d,r,m=165,w=610,g=1150,h=1500,p=3.5,f=500;getHeight=$(window).height(),getHeight1=1e3,getAH1=$("#animateText1").height(),getAH2=$("#animateText2").height(),getAH3=$("#animateText3").height(),getAH4=$("#animateText4").height(),getAH5=$("#animateText5").height(),animationH1=m-(getHeight-f)/p,animationH2=w-(getHeight-f)/p,animationH3=g-(getHeight-f)/p,animationH4=h-(getHeight-f)/p,getHeight>1e3&&$(window).width()>1200,$(".funnels_control").bind("mousewheel",function(t){r=t.originalEvent.wheelDelta<0?"down":"up"}),$(".funnels_control").bind("DOMMouseScroll",function(t){r=t.originalEvent.detail>0?"down":"up"}),$(window).width()<1200?($(".funnels_control-item").removeClass("hidden_animation"),$("#animateText1").show(),d=-1):$(window).scroll(function(t){var e=$(window).scrollTop(),i=$(".funnels_control").offset().top;d=e-i,s=2*(d-animationH1)/480,a=2*(d-animationH2)/480,l=2*(d-animationH3)/480,c=2*(d-animationH4)/480,d>-(getHeight-getAH1)/2&&d<animationH1&&$(window).width()>1200&&(n=d/100*-1,$(".funnels_control-item:not(#animateText1)").css("opacity",0),$("#animateText1").css({opacity:n,top:(getHeight-getAH1)/2})),d>animationH1-25&&d<animationH2&&$(window).width()>1200&&$("#animateText1").css({opacity:n-(s+1.3),top:(getHeight-getAH1)/2}),d>animationH1-1&&d<animationH2&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText1, #animateText2)").css("opacity",0),"down"==r?$("#animateText2").css({opacity:s,top:(getHeight-getAH2)/2}):$("#animateText2").css({opacity:-1*s-(a-3),top:(getHeight-getAH2)/2})),d>animationH2-25&&d<animationH3&&$(window).width()>1200&&("down"==r?$("#animateText2").css({opacity:s-(a+2)}):$("#animateText2").css({opacity:-1*s-(a-3)})),d>animationH2-1&&d<animationH3&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText2, #animateText3)").css("opacity",0),"down"==r?$("#animateText3").css({opacity:a,top:(getHeight-getAH3)/2}):$("#animateText3").css({opacity:a-.7,top:(getHeight-getAH3)/2})),d>animationH3-25&&d<animationH4&&$(window).width()>1200&&("down"==r?$("#animateText3").css({opacity:a-(l+2.5)}):$("#animateText3").css({opacity:-1*a-(l-3.3)})),d>animationH3-1&&d<animationH4&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText3, #animateText4)").css("opacity",0),"down"==r?$("#animateText4").css({opacity:l,top:(getHeight-getAH4)/2}):$("#animateText4").css({opacity:l-.4,top:(getHeight-getAH4)/2})),d>animationH4-25&&$(window).width()>1200&&("down"==r?$("#animateText4").css({opacity:l-(c+2.1)}):$("#animateText4").css({opacity:-1*l-(c-2.3)})),d>animationH4&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText4, #animateText5)").css("opacity",0),"down"==r?$("#animateText5").css({opacity:c,top:(getHeight-getAH5)/2}):$("#animateText5").css({opacity:c-.4,top:(getHeight-getAH5)/2}))}),$(window).resize(function(){}),$(".funnels_lending-slider").slick({arrows:!1,dots:!1,infinite:!0,speed:800,fade:!0,cssEase:"false",autoplay:!0,autoplaySpeed:720})});