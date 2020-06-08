/**
 * Author:    Chen Mamaril
 * Created:   04/4/2019
 * 
 * (c) Copyright by Mosed Corp.
 **/




new WOW().init();

$(document).ready(function () {
    myParaxify = paraxify('.paraxify');
});


// VIDEO CLICK
$(document).ready(function () {
    console.log("e");
    $(".video-cont > #click-video").click(function () {
        console.log("#click-video");
        $("#villavideo").get(0).play();
        $("#villavideo").css({
            "opacity": "1",
            "cursor": "pointer"
        }).fadeIn();
        $('#click-video').fadeOut();
        $('.video-cont').css("background", "none").fadeIn();
    });

    $('#villavideo').parent().click(function () {
        $("#villavideo").get(0).pause();
        $("#villavideo").css("opacity", "0");
        $('#click-video').fadeIn();
        $(".video-cont").css({
            "background-image": "url('../villcarminaSite/images/video/video-img.jpg')",
            "background-position": "50% 0",
            "background-size": "cover",
            "background-attachment": "fixed"
        }).fadeIn();
    });
});


// Scroll to top 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });
});


// SCROLL TO DIV
$(document).ready(function () {
    $('.scrollto').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700);
        // return false;
    });
});



$(document).ready(function () {
    $("#date-picker-start").datepicker();
});

$(document).ready(function () {
    $("#date-picker-end").datepicker();
});



// For Push Collapsible Menu 
$(document).ready(function () {
    $('#open-nav').click(function () {
        $('.menu-list-side').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '285px'
        }, 250);
        $('.overlay').show();

    });
    $('#close-nav').click(function () {
        $('.menu-list-side').animate({
            left: '-285px'
        }, 200);
        $('body').animate({
            left: '0px'
        }, 200);
        $('.overlay').hide();
    });
});


// Book Now dropdown 
$(document).ready(function () {
  $(".book-now-side > button").click(function(){
    $(".second-head").slideToggle();
  });
});



const bg = [
    'background: linear-gradient(135deg, rgba(235, 235, 235, 1) 0%, rgba(245, 245, 245, 1) 100%);',
    'color: #BE9B19',
    'padding: 5px 20px',
    'line-height: 25px',
  ].join(';');
  console.log('%c⚡︎ Coded by Chen Mamaril ⚡︎', bg);
  


  $(document).ready(function () {
    $(window).scroll(function(){
        $(".top").css({
        'opacity' : 1 - $(window).scrollTop() / 250,
        'transform': 'scale(1.5)' - $(window).scrollTop() / 250
        });
      });
  });




  