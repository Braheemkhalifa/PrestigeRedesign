// loading page
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function () {
  $(this).scrollTop(0);
});

// Navbar Scroll

var num = 50; //number of pixels before modifying styles

$(function () {
  if ($(window).scrollTop() > num) {
    $(".navbar-expand-lg").addClass("fixed-nav");
    $(".navbar-expand-lg").addClass("white-nav");
  } else {
    $(".navbar-expand-lg").removeClass("fixed-nav");
    $(".navbar-expand-lg").removeClass("white-nav");
  }
});

$(window).bind("scroll", function () {
  if ($(window).scrollTop() > num) {
    $(".navbar-expand-lg").addClass("fixed-nav");
    $(".navbar-expand-lg").addClass("white-nav");
  } else {
    $(".navbar-expand-lg").removeClass("fixed-nav");
    $(".navbar-expand-lg").removeClass("white-nav");
  }
});

// navbar hover

$(".navbar-expand-lg").hover(
  function () {
    $(this).addClass("white-nav");
  },
  function () {
    if (!$(".navbar-expand-lg").hasClass("fixed-nav")) {
      $(this).removeClass("white-nav");
    }
  }
);

// search show
$(function () {
  $(".search-nav-btn").click(function () {
    if ($(".searchcontainer").hasClass("hidden")) {
      $(".searchcontainer").removeClass("hidden");
      $(".searchcontainer").addClass("show");
    } else if ($(".searchcontainer").hasClass("show")) {
      $(".searchcontainer").removeClass("show");
      $(".searchcontainer").addClass("hidden");
    }
  });
  $(".closesearchbtn").click(function () {
    if ($(".searchcontainer").hasClass("show")) {
      $(".searchcontainer").removeClass("show");
      $(".searchcontainer").addClass("hidden");
    }
  });
});

// shop show

$(".shop-nav-btn").hover(
  function () {
    $(".shop-nav-Section").removeClass("hidden");
    $(".shop-nav-Section").addClass("show");
  },
  function () {
    $(".shop-nav-Section").removeClass("show");
    $(".shop-nav-Section").addClass("hidden");
  }
);

$(".shop-nav-Section").hover(
  function () {
    $(".shop-nav-Section").removeClass("hidden");
    $(".shop-nav-Section").addClass("show");
  },
  function () {
    $(".shop-nav-Section").removeClass("show");
    $(".shop-nav-Section").addClass("hidden");
  }
);

// shop sidebar

$(function () {
  $(".side-nav-btn").click(function () {
    if ($(".sideNav").hasClass("hiddenNav")) {
      $(".sideNav").removeClass("hiddenNav");
      $(".sideNav").addClass("showNav");
    } else {
      $(".sideNav").removeClass("showNav");
      $(".sideNav").addClass("hiddenNav");
    }
  });
});

$(function () {
  $(".sideNav .closesearchbtn").click(function () {
    if ($(".sideNav").hasClass("showNav")) {
      $(".sideNav").removeClass("showNav");
      $(".sideNav").addClass("hiddenNav");
    }
  });
});
// shop sidebar 3 Lists

$(function () {
  $(".openLists").click(function () {
    if ($(".lists-container").hasClass("hidden-lists")) {
      $(".lists-container").removeClass("hidden-lists");
      $(".lists-container").addClass("show-lists");

      $(".openLists .plus").addClass("open");
    } else {
      $(".lists-container").removeClass("show-lists");
      $(".lists-container").addClass("hidden-lists");

      $(".openLists .plus ").removeClass("open");

      $(".section1 ul").removeClass("show-ul");
      $(".section1 ul").addClass("hidden-ul");
      $(".section1 h3 .plus").removeClass("open");

      $(".section2 ul").removeClass("show-ul");
      $(".section2 ul").addClass("hidden-ul");
      $(".section2 h3 .plus").removeClass("open");

      $(".section3 ul").removeClass("show-ul");
      $(".section3 ul").addClass("hidden-ul");
      $(".section2 h3 .plus").removeClass("open");
    }
  });
});
// shop sidebar 3 Lists: list body

$(function () {
  $(".section1 h3").click(function () {
    if ($(".section1 ul").hasClass("hidden-ul")) {
      $(".section1 ul").removeClass("hidden-ul");
      $(".section1 ul").addClass("show-ul");

      $(".section1 h3 .plus").addClass("open");
    } else {
      $(".section1 ul").removeClass("show-ul");
      $(".section1 ul").addClass("hidden-ul");

      $(".section1 h3 .plus").removeClass("open");
    }
  });
});

$(function () {
  $(".section2 h3").click(function () {
    if ($(".section2 ul").hasClass("hidden-ul")) {
      $(".section2 ul").removeClass("hidden-ul");
      $(".section2 ul").addClass("show-ul");

      $(".section2 h3 .plus").addClass("open");
    } else {
      $(".section2 ul").removeClass("show-ul");
      $(".section2 ul").addClass("hidden-ul");

      $(".section2 h3 .plus").removeClass("open");
    }
  });
});
$(function () {
  $(".section3 h3").click(function () {
    if ($(".section3 ul").hasClass("hidden-ul")) {
      $(".section3 ul").removeClass("hidden-ul");
      $(".section3 ul").addClass("show-ul");

      $(".section3 h3 .plus").addClass("open");
    } else {
      $(".section3 ul").removeClass("show-ul");
      $(".section3 ul").addClass("hidden-ul");

      $(".section3 h3 .plus").addClass("open");
    }
  });
});

// shop sidebar dropdown

$(function () {
  $(".bottom  div:nth-of-type(2) ").click(function () {
    if ($(".nav-dropdown-menu").hasClass("hidden")) {
      $(".nav-dropdown-menu").removeClass("hidden");
      $(".nav-dropdown-menu").addClass("show");
    } else {
      $(".nav-dropdown-menu").removeClass("show");
      $(".nav-dropdown-menu").addClass("hidden");
    }
  });
});

// add class on click

$(function () {
  $(".section-buttons span:nth-of-type(1)").click(function () {
    if ($(".section-buttons span:nth-of-type(2)").hasClass("active")) {
      $(".section-buttons span:nth-of-type(2)").removeClass("active");
      $(".section-buttons span:nth-of-type(1)").addClass("active");
      if ($(".women-Carouser").hasClass("show")) {
        $(".women-Carouser").addClass("hidden");
        $(".women-Carouser").removeClass("show");

        $(".men-Carouser").addClass("show");
      }
    }
  });

  $(".section-buttons span:nth-of-type(2)").click(function () {
    if ($(".section-buttons span:nth-of-type(1)").hasClass("active")) {
      $(".section-buttons span:nth-of-type(1)").removeClass("active");
      $(".section-buttons span:nth-of-type(2)").addClass("active");

      if ($(".women-Carouser").hasClass("hidden")) {
        $(".men-Carouser").addClass("hidden");
        $(".men-Carouser").removeClass("show");

        $(".women-Carouser").removeClass("hidden");
        $(".women-Carouser").addClass("show");
      }
    }
  });
});

// owlCarousel

(function ($) {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 90,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".carousel").carousel({
    pause: "false",
  });
})(jQuery);

// add class on click to choose color

$(function () {
  $(".color-images img:nth-of-type(1)").click(function () {
    if ($(".color-images img:nth-of-type(2)").hasClass("active-imge")) {
      $(".color-images img:nth-of-type(2)").removeClass("active-imge");
      $(".color-images img:nth-of-type(1)").addClass("active-imge");
    }

    // change color word
    if ($(".color span:nth-of-type(2)").hasClass("active-Color-word")) {
      $(".color span:nth-of-type(2)").removeClass("active-Color-word");
      $(".color span:nth-of-type(1)").addClass("active-Color-word");
    }
    // change image
    if ($(".product-image img:nth-of-type(2)").hasClass("show")) {
      $(".product-image img:nth-of-type(2)").removeClass("show");
      $(".product-image img:nth-of-type(2)").addClass("hidden");

      $(".product-image img:nth-of-type(1)").removeClass("hidden");
      $(".product-image img:nth-of-type(1)").addClass("show");
    }
  });

  $(".color-images img:nth-of-type(2)").click(function () {
    if ($(".color-images img:nth-of-type(1)").hasClass("active-imge")) {
      $(".color-images img:nth-of-type(1)").removeClass("active-imge");
      $(".color-images img:nth-of-type(2)").addClass("active-imge");
    }
    // change color word
    if ($(".color span:nth-of-type(1)").hasClass("active-Color-word")) {
      $(".color span:nth-of-type(1)").removeClass("active-Color-word");
      $(".color span:nth-of-type(2)").addClass("active-Color-word");
    }
    // change image
    if ($(".product-image img:nth-of-type(1)").hasClass("show")) {
      $(".product-image img:nth-of-type(1)").removeClass("show");
      $(".product-image img:nth-of-type(1)").addClass("hidden");

      $(".product-image img:nth-of-type(2)").removeClass("hidden");
      $(".product-image img:nth-of-type(2)").addClass("show");
    }
  });
});

// add class on click to  brand slider

$(function () {
  $(".indicators .indicator1").click(function () {
    if (
      $(".indicators .indicator2").hasClass("active") ||
      $(".indicators .indicator3").hasClass("active")
    ) {
      $(".indicators .indicator3").removeClass("active");
      $(".indicators .indicator2").removeClass("active");
      $(".indicators .indicator1").addClass("active");
    }

    if (
      $(".content .indicator2").hasClass("active") ||
      $(".indicators .indicator3").hasClass("active")
    ) {
      $(".indicators .indicator3").removeClass("active");
      $(".indicators .indicator2").removeClass("active");
      $(".indicators .indicator1").addClass("active");
    }

    if (
      $(".content .slide2").hasClass("show") ||
      $(".content .slide3").hasClass("show")
    ) {
      $(".content .slide2").removeClass("show");
      $(".content .slide3").removeClass("show");

      $(".content .slide2").addClass("hidden");
      $(".content .slide3").addClass("hidden");

      $(".content .slide1").addClass("show");
    }
  });

  $(".indicators .indicator2").click(function () {
    if (
      $(".indicators .indicator1").hasClass("active") ||
      $(".indicators .indicator3").hasClass("active")
    ) {
      $(".indicators .indicator3").removeClass("active");
      $(".indicators .indicator1").removeClass("active");
      $(".indicators .indicator2").addClass("active");
    }
    if (
      $(".content .slide3").hasClass("show") ||
      $(".content .slide1").hasClass("show")
    ) {
      $(".content .slide3").removeClass("show");
      $(".content .slide1").removeClass("show");

      $(".content .slide3").addClass("hidden");
      $(".content .slide1").addClass("hidden");

      $(".content .slide2").addClass("show");
    }
  });

  $(".indicators .indicator3").click(function () {
    if (
      $(".indicators .indicator1").hasClass("active") ||
      $(".indicators .indicator2").hasClass("active")
    ) {
      $(".indicators .indicator1").removeClass("active");
      $(".indicators .indicator2").removeClass("active");
      $(".indicators .indicator3").addClass("active");
    }
    if (
      $(".content .slide2").hasClass("show") ||
      $(".content .slide1").hasClass("show")
    ) {
      $(".content .slide1").removeClass("show");
      $(".content .slide2").removeClass("show");

      $(".content .slide1").addClass("hidden");
      $(".content .slide2").addClass("hidden");

      $(".content .slide3").addClass("show");
    }
  });
});

// years slider

$(function () {
  $(".indecaors-years span:nth-of-type(1)").click(function () {
    if ($(".indecaors-years span:nth-of-type(2)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(2)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(3)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(3)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(4)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(4)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(5)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(5)").removeClass("active");
    }

    $(".indecaors-years span:nth-of-type(1)").addClass("active");

    $(".images-container img").addClass("hidden");
    $(".images-container img").removeClass("show");
    $(".images-container img:nth-of-type(1)").removeClass("hidden");
    $(".images-container img:nth-of-type(1)").addClass("show");

    $(".content div").addClass("hidden");
    $(".content div").removeClass("show");
    $(".content div:nth-of-type(1)").removeClass("hidden");
    $(".content div:nth-of-type(1)").addClass("show");
  });

  $(".indecaors-years span:nth-of-type(2)").click(function () {
    if ($(".indecaors-years span:nth-of-type(1)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(1)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(3)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(3)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(4)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(4)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(5)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(5)").removeClass("active");
    }

    $(".indecaors-years span:nth-of-type(2)").addClass("active");
    $(".images-container img").addClass("hidden");
    $(".images-container img").removeClass("show");
    $(".images-container img:nth-of-type(2)").removeClass("hidden");
    $(".images-container img:nth-of-type(2)").addClass("show");

    $(".content div").addClass("hidden");
    $(".content div").removeClass("show");
    $(".content div:nth-of-type(2)").removeClass("hidden");
    $(".content div:nth-of-type(2)").addClass("show");
  });

  $(".indecaors-years span:nth-of-type(3)").click(function () {
    if ($(".indecaors-years span:nth-of-type(2)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(2)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(1)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(1)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(4)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(4)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(5)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(5)").removeClass("active");
    }

    $(".indecaors-years span:nth-of-type(3)").addClass("active");
    $(".images-container img").addClass("hidden");
    $(".images-container img").removeClass("show");
    $(".images-container img:nth-of-type(3)").removeClass("hidden");
    $(".images-container img:nth-of-type(3)").addClass("show");

    $(".content div").addClass("hidden");
    $(".content div").removeClass("show");
    $(".content div:nth-of-type(3)").removeClass("hidden");
    $(".content div:nth-of-type(3)").addClass("show");
  });

  $(".indecaors-years span:nth-of-type(4)").click(function () {
    if ($(".indecaors-years span:nth-of-type(2)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(2)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(3)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(3)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(1)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(1)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(5)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(5)").removeClass("active");
    }

    $(".indecaors-years span:nth-of-type(4)").addClass("active");
    $(".images-container img").addClass("hidden");
    $(".images-container img").removeClass("show");
    $(".images-container img:nth-of-type(4)").removeClass("hidden");
    $(".images-container img:nth-of-type(4)").addClass("show");

    $(".content div").addClass("hidden");
    $(".content div").removeClass("show");
    $(".content div:nth-of-type(4)").removeClass("hidden");
    $(".content div:nth-of-type(4)").addClass("show");
  });

  $(".indecaors-years span:nth-of-type(5)").click(function () {
    if ($(".indecaors-years span:nth-of-type(2)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(2)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(3)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(3)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(4)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(4)").removeClass("active");
    } else if ($(".indecaors-years span:nth-of-type(1)").hasClass("active")) {
      $(".indecaors-years span:nth-of-type(1)").removeClass("active");
    }

    $(".indecaors-years span:nth-of-type(5)").addClass("active");
    $(".images-container img").addClass("hidden");
    $(".images-container img").removeClass("show");
    $(".images-container img:nth-of-type(5)").removeClass("hidden");
    $(".images-container img:nth-of-type(5)").addClass("show");

    $(".content div").addClass("hidden");
    $(".content div").removeClass("show");
    $(".content div:nth-of-type(5)").removeClass("hidden");
    $(".content div:nth-of-type(5)").addClass("show");
  });
});

// our lock carousel

$("#carouselOurLook").carousel({
  interval: false,
});

$(function () {
  $(".indecaors span:nth-of-type(1)").click(function () {
    if ($(".indecaors span:nth-of-type(2)").hasClass("active")) {
      $(".indecaors span:nth-of-type(2)").removeClass("active");
      $(".indecaors span:nth-of-type(1)").addClass("active");

      // circle
      $(".carousel-item .left .c2").removeClass("active-circle");
      $(".carousel-item .left .c1").addClass("active-circle");

      // img
      $(".carousel-item .right .bag-item:nth-of-type(2)").removeClass("show");
      $(".carousel-item .right .bag-item:nth-of-type(2)").addClass("hidden");
      $(".carousel-item .right .bag-item:nth-of-type(1)").removeClass("hidden");
      $(".carousel-item .right .bag-item:nth-of-type(1)").addClass("show");
    }
  });

  $(".indecaors span:nth-of-type(2)").click(function () {
    if ($(".indecaors span:nth-of-type(1)").hasClass("active")) {
      $(".indecaors span:nth-of-type(1)").removeClass("active");
      $(".indecaors span:nth-of-type(2)").addClass("active");

      // circle
      $(".carousel-item .left .c1").removeClass("active-circle");
      $(".carousel-item .left .c2").addClass("active-circle");

      // img
      $(".carousel-item .right .bag-item:nth-of-type(1)").removeClass("show");
      $(".carousel-item .right .bag-item:nth-of-type(1)").addClass("hidden");
      $(".carousel-item .right .bag-item:nth-of-type(2)").removeClass("hidden");
      $(".carousel-item .right .bag-item:nth-of-type(2)").addClass("show");
    }
  });
});

// ---------------------------------------------------------------------- detailed page ----------------------------------------------------------------------

$(".info div").hover(
  function () {
    $(".info div  ").addClass("show");
    $(".info div  ").removeClass("hidden");
  },
  function () {
    $(".info div  ").addClass("hidden");
    $(".info div  ").removeClass("show");
  }
);

// plus icons

$(function () {
  $(".Description-accordion #headingOne button").click(function () {
    if (
      $(".Description-accordion #headingOne button .plus").hasClass("open-plus")
    ) {
      $(".Description-accordion #headingOne button .plus").removeClass(
        "open-plus"
      );
    } else {
      $(".Description-accordion #headingOne button .plus").addClass(
        "open-plus"
      );
    }

    if (
      $(".Description-accordion #headingTwo button .plus").hasClass("open-plus")
    ) {
      $(".Description-accordion #headingTwo button .plus").removeClass(
        "open-plus"
      );
    }

    if (
      $(".Description-accordion #headingThree button .plus").hasClass(
        "open-plus"
      )
    ) {
      $(".Description-accordion #headingThree button .plus").removeClass(
        "open-plus"
      );
    }
  });

  $(".Description-accordion #headingTwo button").click(function () {
    if (
      $(".Description-accordion #headingTwo button .plus").hasClass("open-plus")
    ) {
      $(".Description-accordion #headingTwo button .plus").removeClass(
        "open-plus"
      );
    } else {
      $(".Description-accordion #headingTwo button .plus").addClass(
        "open-plus"
      );
    }

    if (
      $(".Description-accordion #headingOne button .plus").hasClass("open-plus")
    ) {
      $(".Description-accordion #headingOne button .plus").removeClass(
        "open-plus"
      );
    }

    if (
      $(".Description-accordion #headingThree button .plus").hasClass(
        "open-plus"
      )
    ) {
      $(".Description-accordion #headingThree button .plus").removeClass(
        "open-plus"
      );
    }
  });

  $(".Description-accordion #headingThree button").click(function () {
    if (
      $(".Description-accordion #headingThree button .plus").hasClass(
        "open-plus"
      )
    ) {
      $(".Description-accordion #headingThree button .plus").removeClass(
        "open-plus"
      );
    } else {
      $(".Description-accordion #headingThree button .plus").addClass(
        "open-plus"
      );
    }

    if (
      $(".Description-accordion #headingOne button .plus").hasClass("open-plus")
    ) {
      $(".Description-accordion #headingOne button .plus").removeClass(
        "open-plus"
      );
    }

    if (
      $(".Description-accordion #headingTwo button .plus").hasClass("open-plus")
    ) {
      $(".Description-accordion #headingTwo button .plus").removeClass(
        "open-plus"
      );
    }
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 100) {
    //clearHeader, not clearheader - caps H
    $(".detailed .right").addClass("position-fixed");
    $(".detailed .indecator-images").addClass(" indecator-fixed");
  } else {
    $(".detailed .right").removeClass("position-fixed");
    $(".detailed .indecator-images").removeClass(" indecator-fixed");
  }

  if (scroll >= document.querySelector(".detailed .left").clientHeight - 550) {
    //clearHeader, not clearheader - caps H
    $(".detailed .right").removeClass("position-fixed");
    $(".detailed .right").addClass("position-absolute");
  } else {
    $(".detailed .right").removeClass("position-absolute");
  }

  if (scroll >= document.querySelector(".detailed .left").clientHeight - 1050) {
    //clearHeader, not clearheader - caps H

    $(".detailed .indecator-images").removeClass(" indecator-fixed");
    $(".detailed .indecator-images").addClass(" indecator-absolute");
  } else {
    $(".detailed .indecator-images").removeClass(" indecator-absolute");
  }

  if (scroll > document.querySelector(".detailed .left").clientHeight - 850) {
    //clearHeader, not clearheader - caps H

    $(".linkto .more-info").removeClass("show");
    $(".linkto .view-img").addClass("show");
  } else {
    $(".linkto .view-img").removeClass("show");

    $(".linkto .more-info").addClass("show");
  }

  if (scroll >= 80 && scroll <= 580) {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img1").addClass("active-image");
  } else if (scroll >= 580 && scroll <= 1080) {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img2").addClass("active-image");
  } else if (scroll >= 1080 && scroll <= 1580) {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img3").addClass("active-image");
  } else if (scroll >= 1580 && scroll <= 2080) {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img4").addClass("active-image");
  } else if (scroll >= 2080 && scroll <= 2580) {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img5").addClass("active-image");
  } else if (scroll >= 2580) {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img6").addClass("active-image");
  }
}); //missing );

// product crousel

$(function () {
  $(".indecator-images .indecator-img1").click(function () {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img1").addClass("active-image");
  });

  $(".indecator-images .indecator-img2").click(function () {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img2").addClass("active-image");
  });
  $(".indecator-images .indecator-img3").click(function () {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img3").addClass("active-image");
  });

  $(".indecator-images .indecator-img4").click(function () {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img4").addClass("active-image");
  });
  $(".indecator-images .indecator-img5").click(function () {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img5").addClass("active-image");
  });
  $(".indecator-images .indecator-img6").click(function () {
    $(".indecator-images a").removeClass("active-image");

    $(".indecator-images .indecator-img6").addClass("active-image");
  });
});

// gallery
$(function () {
  $(".product #img1").click(function () {
    $(".product #div-img1").addClass("fullScreenImage");
  });
  $(".product #img2").click(function () {
    $(".product #div-img2").addClass("fullScreenImage");
  });

  $(".product #img3").click(function () {
    $(".product #div-img3").addClass("fullScreenImage");
  });
  $(".product #img4").click(function () {
    $(".product #div-img4").addClass("fullScreenImage");
  });
  $(".product #img5").click(function () {
    $(".product #div-img5").addClass("fullScreenImage");
  });
  $(".product #img6").click(function () {
    $(".product #div-img6").addClass("fullScreenImage");
  });

  $(" .product .close").click(function () {
    $(".product .img-container").removeClass("fullScreenImage");
    $(".product .img-container .image").removeClass("zoomImage");
    $(".product .img-container .image").addClass("zoomImageback");
  });
});

if ($(".product .img-container").is(":last-child")) {
  $(".product .img-container:last-child .next").addClass("hidden");
}
if ($(".product .img-container").is(":first-child")) {
  $(".product .img-container:first-child .before").addClass("hidden");
}

// indecator

$(function () {
  $(".product .img-container .next").click(function () {
    $(".product .img-container.fullScreenImage")
      .next()
      .addClass("fullScreenImage");
    $(".product .fullScreenImage").prev().removeClass("fullScreenImage");
  });

  $(".product .img-container .before").click(function () {
    $(".product .fullScreenImage").prev().addClass("fullScreenImage");
    $(".product .img-container.fullScreenImage")
      .next()
      .removeClass("fullScreenImage");
  });
});

// zoom
$(function () {
  $(".product .img-container .image").dblclick(function () {
    if ($(".product .img-container .image").hasClass("zoomImage")) {
      $(".product .img-container .image").removeClass("zoomImage");
      $(".product .img-container .image").addClass("zoomImageback");
    } else {
      $(".product .img-container .image").addClass("zoomImage");
      $(".product .img-container .image").removeClass("zoomImageback");
    }
  });
  $(".image").draggable({
    classes: {
      "ui-draggable": "move",
    },
  });
});

// zooom

// document.querySelector(".image").addEventListener("click", function (event) {
//   event.preventDefault();
//   zoom.to({ element: document.querySelector("img"), x: 100, y: 200, scale: 3 });
// });
