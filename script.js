'use strict';

var sections = ['#1Slide', '#2Slide', '#3Slide', '#4Slide', '#lastSlide'];
var currentPos = 0;
var headerHeight = 120;
var scrollSpeed = 300;
$(function() {
  $('.slide').css({
    'height': window.innerHeight - headerHeight,
    'paddingTop': headerHeight,
  });

  $(window).resize(() => {
    $('.slide').css({
      'height': window.innerHeight - headerHeight,
      'paddingTop': headerHeight,
    });
  });

  scrollListen();

});


function scrollListen () {
  $(window).on('scroll', function(){
    $(window).off('scroll');

    let origin = $(window).scrollTop();
    let delta = 0;

    $(window).on('scroll', () => {
      delta = origin - $(window).scrollTop();

      if(Math.abs(delta) > 25){
        $(window).off('scroll');
        if(delta < 0 && sections[currentPos + 1]){
          
            //arrow direction based on slide
            if(sections[currentPos+1] == "#1Slide"){
              $('.arrow-down').css({
                'display': "inline",
              });
              $('.arrow-right').css({
                'display': "none",
              }); 
            }
            else{
              $('.arrow-down').css({
                'display': "none",
              });
              $('.arrow-right').css({
                'display': "inline",
              }); 
            }
            if(sections[currentPos+1] == "#1Slide"){
              $('.slider-li:nth-of-type(1)').css({'color': "black",});
              $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

              $('.nmi-review').css({'fontWeight':'normal'});
              $('.nmi-journal').css({'fontWeight':'normal'});
              $('.nmi-about').css({'fontWeight':'normal'});
            }
            if(sections[currentPos+1] == "#2Slide"){
              $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(2)').css({'color': "black",});
              $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

              $('.nmi-review').css({'fontWeight':'bold'});
              $('.nmi-journal').css({'fontWeight':'normal'});
              $('.nmi-about').css({'fontWeight':'normal'});
            }
            if(sections[currentPos+1] == "#3Slide"){
              $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(3)').css({'color': "black",});
              $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

              $('.nmi-review').css({'fontWeight':'normal'});
              $('.nmi-journal').css({'fontWeight':'bold'});
              $('.nmi-about').css({'fontWeight':'normal'});
            }
            if(sections[currentPos+1] == "#4Slide"){
              $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(4)').css({'color': "black",});

              $('.nmi-review').css({'fontWeight':'normal'});
              $('.nmi-journal').css({'fontWeight':'normal'});
              $('.nmi-about').css({'fontWeight':'bold'});
            }
            
          currentPos++;
          //console.log("scrolling down");
          setTimeout(function() {
            $('html, body').animate({scrollTop: $(sections[currentPos]).offset().top}, scrollSpeed, function() {
              scrollListen();
            });
          }, scrollSpeed);

        }else if(delta > 0 && sections[currentPos - 1]){
            if(currentPos == 1){
              $('.slider-li:nth-of-type(1)').css({'color': "black",});
              $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
              $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

              $('.nmi-review').css({'fontWeight':'normal'});
              $('.nmi-journal').css({'fontWeight':'normal'});
              $('.nmi-about').css({'fontWeight':'normal'});
            }

            //arrow direction based on slide 
            if(sections[currentPos-1] == "#1Slide"){
              $('.arrow-down').css({
                'display': "inline",
              });
              $('.arrow-right').css({
                'display': "none",
              }); 
            }
            else{ 
              $('.arrow-down').css({
                'display': "none",
              });
              $('.arrow-right').css({
                'display': "inline",
              }); 

              if(sections[currentPos-1] == "#2Slide"){
                $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
                $('.slider-li:nth-of-type(2)').css({'color': "black",});
                $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
                $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

                $('.nmi-review').css({'fontWeight':'bold'});
                $('.nmi-journal').css({'fontWeight':'normal'});
                $('.nmi-about').css({'fontWeight':'normal'});
              }
              if(sections[currentPos-1] == "#3Slide"){
                $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
                $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
                $('.slider-li:nth-of-type(3)').css({'color': "black",});
                $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

                $('.nmi-review').css({'fontWeight':'normal'});
                $('.nmi-journal').css({'fontWeight':'bold'});
                $('.nmi-about').css({'fontWeight':'normal'});
              }
              if(sections[currentPos-1] == "#4Slide"){
                $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
                $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
                $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
                $('.slider-li:nth-of-type(4)').css({'color': "black",});
                
                $('.nmi-review').css({'fontWeight':'normal'});
                $('.nmi-journal').css({'fontWeight':'normal'});
                $('.nmi-about').css({'fontWeight':'bold'});
              }
            }
            currentPos--;
            setTimeout(function() {
              $('html, body').animate({scrollTop: $(sections[currentPos]).offset().top}, scrollSpeed, function() {
  
                scrollListen();
              });
            }, scrollSpeed);
        }

      }
    });
  });
}

// landing 

$("#slider-li-landing").click(function(){
  landingSlide();
});
$(".nmi-landing").click(function(){
  landingSlide();
});


function landingSlide(){
  $(document).ready(function() {
    setTimeout(function() {
      $('html, body').animate({scrollTop: $("#1Slide").offset().top}, scrollSpeed, function() {
        currentPos = 0;
        $('.slider-li:nth-of-type(1)').css({'color': "black",});
        $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

        $('.nmi-review').css({'fontWeight':'normal'});
        $('.nmi-journal').css({'fontWeight':'normal'});
        $('.nmi-about').css({'fontWeight':'normal'});

        $('.arrow-down').css({
          'display': "inline",
        });
        $('.arrow-right').css({
          'display': "none",
        }); 
        
      });
    }, scrollSpeed);
  });
}

$("#slider-li-review").click(function(){
  reviewSlide();
});
$(".nmi-review").click(function(){
  reviewSlide();
});
$("#slider-li-review-arrow").click(function(){
  reviewSlide();
});

function reviewSlide(){
  $(document).ready(function() {
    setTimeout(function() {
      $('html, body').animate({scrollTop: $("#2Slide").offset().top}, scrollSpeed, function() {
        currentPos = 1;
        $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(2)').css({'color': "black",});
        $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

        $('.nmi-review').css({'fontWeight':'bold'});
        $('.nmi-journal').css({'fontWeight':'normal'});
        $('.nmi-about').css({'fontWeight':'normal'});
      });
    }, scrollSpeed);
  });
}

$("#slider-li-journal").click(function(){
  journalSlide();
});
$(".nmi-journal").click(function(){
  journalSlide();
});


function journalSlide(){
  $(document).ready(function() {
    setTimeout(function() {
      $('html, body').animate({scrollTop: $("#3Slide").offset().top}, scrollSpeed, function() {
        currentPos = 2;
        $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(3)').css({'color': "black",});
        $('.slider-li:nth-of-type(4)').css({'color': "#B6B6B6",});

        $('.nmi-review').css({'fontWeight':'normal'});
        $('.nmi-journal').css({'fontWeight':'bold'});
        $('.nmi-about').css({'fontWeight':'normal'});
      });
    }, scrollSpeed);
  });
}

$("#slider-li-about").click(function(){
  aboutSlide();
});
$(".nmi-about").click(function(){
  aboutSlide();
});

function aboutSlide(){
  $(document).ready(function() {
    setTimeout(function() {
      $('html, body').animate({scrollTop: $("#4Slide").offset().top}, scrollSpeed, function() {
        currentPos = 3;
        $('.slider-li:nth-of-type(1)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(2)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(3)').css({'color': "#B6B6B6",});
        $('.slider-li:nth-of-type(4)').css({'color': "black",});

        $('.nmi-review').css({'fontWeight':'normal'});
        $('.nmi-journal').css({'fontWeight':'normal'});
        $('.nmi-about').css({'fontWeight':'bold'});
      });
    }, scrollSpeed);
  });
}