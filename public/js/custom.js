/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets
});


/* HTML document is loaded. DOM is ready.
-------------------------------------------*/

$(document).ready(function () {


    /*-------------------------------------------------------------------------------
      Isotope Filter - Portfolio Section
    -------------------------------------------------------------------------------*/


    /*-------------------------------------------------------------------------------
      Hide mobile menu after clicking on a link
    -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });


    /*-------------------------------------------------------------------------------
      jQuery easy piechart
    -------------------------------------------------------------------------------*/

    $(window).scroll(function () {
        $('.chart').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $('.chart').easyPieChart({
                    scaleColor: false,
                    trackColor: '#ebedee',
                    barColor: function (percent) {
                        var ctx = this.renderer.getCtx();
                        var canvas = this.renderer.getCanvas();
                        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                        gradient.addColorStop(0, "#a1c45a");
                        gradient.addColorStop(1, "#53cde2");
                        return gradient;
                    },
                    lineWidth: 5,
                    lineCap: 'butt',
                    size: 150,
                    animate: 1000
                });
            }
        });
    });


    /*-------------------------------------------------------------------------------
      Back top Top
    -------------------------------------------------------------------------------*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*-------------------------------------------------------------------------------
      wow js - Animation js
    -------------------------------------------------------------------------------*/

    new WOW({mobile: false}).init();


});

