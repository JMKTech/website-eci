$(document).ready(function() {
    // navigation click actions
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});
// scroll function
function scrollToID(id, speed){
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}

// Navbar appear on scrolling
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 70) { /* distance of scrolling from top */
                $('#nav').fadeIn(500); /* fade in speed rate */
            } else {
                $('#nav').fadeOut(300); /* fade out speed rate */
            }
        });
    });
})(jQuery);

// Background Scrolling Parallex
$(document).ready(function(){

var top_header = $('.frontPage');
top_header.css({'background-position':'center center'}); // better use CSS

$(window).scroll(function () {
var st = $(this).scrollTop();
top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
});
});
