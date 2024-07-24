/* ===================================================================
 * CrossOriGenes - Main JS
 *
 * ------------------------------------------------------------------- */

(function ($) {

  const cfg = {
    scrollDuration: 800, // smoothscroll duration
    mailChimpURL: "", // mailchimp url
  };

  const doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  /* smooth scrolling
   * ------------------------------------------------------ */
  const ssSmoothScroll = function () {
    $(".smoothscroll").on("click", function (e) {
      const target = this.hash;
      const $target = $(target);

      e.preventDefault();
      e.stopPropagation();

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          cfg.scrollDuration,
          "swing"
        )
        .promise()
    });
  };

  /* header-nav-list activations
   * ------------------------------------------------------ */
  const ssNavLinkIsActive = function () {
    // $(window).ready(function () {
      $(document).on("scroll", onScroll);

      //smoothscroll
      $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        $('a').each(function () {
          $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');

        var target = this.hash,
          $target = $(target);
        $('html, body').stop().animate({
          scrollTop: $target.offset().top + 2
        }, 500, 'swing', function () {
          $(document).on("scroll", onScroll);
        });
      });
    // });
  }

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.header-nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        if ($('.header-nav ul li a').parent().hasClass("active")) {
          $('.header-nav ul li a').parent().removeClass("active");
        }
        currLink.parent().addClass("active");
      }
      else {
        currLink.parent().removeClass("active");
      }
    });
  }

  // $(window).ready(function () {
    $('a[href^="/"]').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, "normal");
    });
  // })


    /* initialize
     * ------------------------------------------------------ */
    (function ssInit() {
      ssNavLinkIsActive();
      ssSmoothScroll();
    })();
})(jQuery);
