$(document).ready(function(){function t(){$(window).width()<1024?$(".image-scroll").each(function(t,i){e($(i))}):$(".image-scroll").css("transform","translateX(0)")}function e(t){if(t.width()>$(window).width()&&$(window).scrollTop()<t.offset().top+t.height()){var e=t.width()-$(window).width()+20,i=t.css("transform"),o=Number(i.substr(7).slice(0,-1).split(",")[4]),a=($(window).scrollTop()+.3*$(window).height()-t.offset().top)/(t.height()-200)*100;n<=$(window).scrollTop()?$(window).scrollTop()+.3*$(window).height()>t.offset().top&&(!o||-e<=o)&&(a/100*t.width()>e?t.css("transform","translateX(".concat(-e,"px)")):t.css("transform","translateX(".concat(-a,"%)"))):o&&o<=0&&(a/100*t.width()>e?t.css("transform","translateX(".concat(-e,"px)")):0<=a/100*t.width()?t.css("transform","translateX(".concat(-a,"%)")):t.css("transform","translateX(".concat(0,"px)"))),n=$(window).scrollTop()}}function i(){$(".hamburger").toggleClass("is-active"),$(".nav").toggleClass("menu-open"),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$("#menu").slideToggle(100),$("header, main,footer").toggleClass("blur"),$("body").toggleClass("overflow-hidden")}$(window).scroll(function(){return $(".nav").toggleClass("fixed",$(window).scrollTop()>0)}),$("#nav-icon").click(function(){$(".hamburger").toggleClass("is-active"),$(".nav").toggleClass("menu-open"),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$("#menu").slideToggle(100),$("header, main,footer").toggleClass("blur"),$("body").toggleClass("overflow-hidden")}),$(window).resize(function(){console.log($(this).width()),$(this).width()>987?($("#menu").css({display:"flex"}),$("#nav-icon").css({display:"none !important"}),$(".home").removeClass("overflow-hidden")):$("#nav-icon").hasClass("open")?($("#menu").css({display:"block"}),$(".home").addClass("overflow-hidden")):($("#menu").css({display:"none"}),$("#nav-icon").css({display:"block !important"}))}),$(".slider").slick({infinite:!0,arrows:!1,dots:!1,autoplay:!1,fade:!0,swipe:!1,speed:800,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:{dots:!1}},{breakpoint:480,settings:{dots:!1}}]}),$(".buyers-slider").slick({infinite:!0,arrows:!1,dots:!1,autoplay:!0,speed:800,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]}),$(".faq-item ").click(function(){$(this).hasClass("active")?($(".faq-item ").removeClass("active"),$(".faq-item .more").slideUp(200)):($(".faq-item ").removeClass("active"),$(".faq-item .more").slideUp(200),$(this).toggleClass("active"),$(this).find(".more").slideToggle(200))}),$(window).width()<1024?($("#item_2 h3").text("Engagement"),$("#item_3 h3").text("Post purchase")):($("#item_2 h3").text("Automate engagement"),$("#item_3 h3").text("Post purchase flows")),$(window).resize(function(){$(window).width()<1024?($("#item_2 h3").text("Engagement"),$("#item_3 h3").text("Post purchase")):($("#item_2 h3").text("Automate engagement"),$("#item_3 h3").text("Post purchase flows"))});var n=0;$(window).scroll(function(e){t(),n=$(window).scrollTop()}),$(".header__item").click(function(t){const e=$(t.currentTarget).parent();return e.hasClass("expand__item")?(t.preventDefault(),void(e.hasClass("active")?(e.removeClass("active"),e.mouseleave()):($(".expand__item").removeClass("active"),e.addClass("active")))):void($(window).width()<=1023&&i())}),$(".funnels_testimonials-slider").slick({infinite:!0,arrows:!0,dots:!1,autoplay:!1,speed:800,slidesToShow:3,slidesToScroll:1,prevArrow:'<svg class="prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle  cx="20" cy="20" r="19.5" transform="rotate(180 20 20)" fill="white" stroke="#505876"/><path  d="M9.47211 19.4697C9.17922 19.7626 9.17922 20.2374 9.47211 20.5303L14.2451 25.3033C14.538 25.5962 15.0128 25.5962 15.3057 25.3033C15.5986 25.0104 15.5986 24.5355 15.3057 24.2426L11.0631 20L15.3057 15.7574C15.5986 15.4645 15.5986 14.9896 15.3057 14.6967C15.0128 14.4038 14.538 14.4038 14.2451 14.6967L9.47211 19.4697ZM30.0024 19.25L10.0024 19.25L10.0024 20.75L30.0024 20.75L30.0024 19.25Z" fill="#505876"/></svg>',nextArrow:'<svg class="next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" fill="white" stroke="#505876"/><path d="M30.5303 20.5303C30.8232 20.2374 30.8232 19.7626 30.5303 19.4697L25.7574 14.6967C25.4645 14.4038 24.9896 14.4038 24.6967 14.6967C24.4038 14.9896 24.4038 15.4645 24.6967 15.7574L28.9393 20L24.6967 24.2426C24.4038 24.5355 24.4038 25.0104 24.6967 25.3033C24.9896 25.5962 25.4645 25.5962 25.7574 25.3033L30.5303 20.5303ZM10 20.75H30V19.25H10V20.75Z"fill="#505876"/></svg>',responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,adaptiveHeight:!0}}]});var o,a,s,l,c,w,m,d=165,g=610,r=1150,h=1500,p=3.5,H=500;getHeight=$(window).height(),getHeight1=1e3,getAH1=$("#animateText1").height(),getAH2=$("#animateText2").height(),getAH3=$("#animateText3").height(),getAH4=$("#animateText4").height(),getAH5=$("#animateText5").height(),animationH1=d-(getHeight-H)/p,animationH2=g-(getHeight-H)/p,animationH3=r-(getHeight-H)/p,animationH4=h-(getHeight-H)/p,getHeight>1e3&&$(window).width()>1200,$(".funnels_control").bind("mousewheel",function(t){m=t.originalEvent.wheelDelta<0?"down":"up"}),$(".funnels_control").bind("DOMMouseScroll",function(t){m=t.originalEvent.detail>0?"down":"up"}),$(window).width()<1200?($(".funnels_control-item").removeClass("hidden_animation"),$("#animateText1").show(),w=-1):$(window).scroll(function(t){var e=$(window).scrollTop(),i=$(".funnels_control").offset().top;w=e-i,a=2*(w-animationH1)/480,s=2*(w-animationH2)/480,l=2*(w-animationH3)/480,c=2*(w-animationH4)/480,w>-(getHeight-getAH1)/2&&w<animationH1&&$(window).width()>1200&&(o=w/100*-1,$(".funnels_control-item:not(#animateText1)").css("opacity",0),$("#animateText1").css({opacity:o,top:(getHeight-getAH1)/2})),w>animationH1-25&&w<animationH2&&$(window).width()>1200&&$("#animateText1").css({opacity:o-(a+1.3),top:(getHeight-getAH1)/2}),w>animationH1-1&&w<animationH2&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText1, #animateText2)").css("opacity",0),"down"==m?$("#animateText2").css({opacity:a,top:(getHeight-getAH2)/2}):$("#animateText2").css({opacity:-1*a-(s-3),top:(getHeight-getAH2)/2})),w>animationH2-25&&w<animationH3&&$(window).width()>1200&&("down"==m?$("#animateText2").css({opacity:a-(s+2)}):$("#animateText2").css({opacity:-1*a-(s-3)})),w>animationH2-1&&w<animationH3&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText2, #animateText3)").css("opacity",0),"down"==m?$("#animateText3").css({opacity:s,top:(getHeight-getAH3)/2}):$("#animateText3").css({opacity:s-.7,top:(getHeight-getAH3)/2})),w>animationH3-25&&w<animationH4&&$(window).width()>1200&&("down"==m?$("#animateText3").css({opacity:s-(l+2.5)}):$("#animateText3").css({opacity:-1*s-(l-3.3)})),w>animationH3-1&&w<animationH4&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText3, #animateText4)").css("opacity",0),"down"==m?$("#animateText4").css({opacity:l,top:(getHeight-getAH4)/2}):$("#animateText4").css({opacity:l-.4,top:(getHeight-getAH4)/2})),w>animationH4-25&&$(window).width()>1200&&("down"==m?$("#animateText4").css({opacity:l-(c+2.1)}):$("#animateText4").css({opacity:-1*l-(c-2.3)})),w>animationH4&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText4, #animateText5)").css("opacity",0),"down"==m?$("#animateText5").css({opacity:c,top:(getHeight-getAH5)/2}):$("#animateText5").css({opacity:c-.4,top:(getHeight-getAH5)/2}))}),$(window).resize(function(){$(window).width()<1200?($(".funnels_control-item").removeClass("hidden_animation"),$("#animateText1").show(),w=-1):$(window).scroll(function(t){var e=$(window).scrollTop(),i=$(".funnels_control").offset().top;w=e-i,a=2*(w-animationH1)/480,s=2*(w-animationH2)/480,l=2*(w-animationH3)/480,c=2*(w-animationH4)/480,w>-(getHeight-getAH1)/2&&w<animationH1&&$(window).width()>1200&&(o=w/100*-1,$(".funnels_control-item:not(#animateText1)").css("opacity",0),$("#animateText1").css({opacity:o,top:(getHeight-getAH1)/2})),w>animationH1-25&&w<animationH2&&$(window).width()>1200&&$("#animateText1").css({opacity:o-(a+1.3),top:(getHeight-getAH1)/2}),w>animationH1-1&&w<animationH2&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText1, #animateText2)").css("opacity",0),"down"==m?$("#animateText2").css({opacity:a,top:(getHeight-getAH2)/2}):$("#animateText2").css({opacity:-1*a-(s-3),top:(getHeight-getAH2)/2})),w>animationH2-25&&w<animationH3&&$(window).width()>1200&&("down"==m?$("#animateText2").css({opacity:a-(s+2)}):$("#animateText2").css({opacity:-1*a-(s-3)})),w>animationH2-1&&w<animationH3&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText2, #animateText3)").css("opacity",0),"down"==m?$("#animateText3").css({opacity:s,top:(getHeight-getAH3)/2}):$("#animateText3").css({opacity:s-.7,top:(getHeight-getAH3)/2})),w>animationH3-25&&w<animationH4&&$(window).width()>1200&&("down"==m?$("#animateText3").css({opacity:s-(l+2.5)}):$("#animateText3").css({opacity:-1*s-(l-3.3)})),w>animationH3-1&&w<animationH4&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText3, #animateText4)").css("opacity",0),"down"==m?$("#animateText4").css({opacity:l,top:(getHeight-getAH4)/2}):$("#animateText4").css({opacity:l-.4,top:(getHeight-getAH4)/2})),w>animationH4-25&&$(window).width()>1200&&("down"==m?$("#animateText4").css({opacity:l-(c+2.1)}):$("#animateText4").css({opacity:-1*l-(c-2.3)})),w>animationH4&&$(window).width()>1200&&($(".funnels_control-item:not(#animateText4, #animateText5)").css("opacity",0),"down"==m?$("#animateText5").css({opacity:c,top:(getHeight-getAH5)/2}):$("#animateText5").css({opacity:c-.4,top:(getHeight-getAH5)/2}))})}),$(".funnels_lending-slider").slick({arrows:!1,dots:!1,infinite:!0,speed:300,fade:!0,cssEase:"false",autoplay:!0,autoplaySpeed:720})});