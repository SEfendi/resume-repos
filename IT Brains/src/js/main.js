window.addEventListener("load", (event) => {
  $(".preloader").fadeOut();
  $("body").css("overflow", "auto");
});

let nav = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 130) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

let openNav = $("#Nav-open-btn");
let closeNav = $("#Nav-close-btn");

openNav.click(function (e) {
  $("#nav-mobile-1").addClass("show");
  e.stopPropagation();
});
closeNav.click(function () {
  $("#nav-mobile-1").removeClass("show");
});


$(".owl-graduated").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    950: {
      items: 3,
    },
    1400: {
      items: 3,
    },
  },
});

let teacher = $("#teacher");
let student = $("#student");

teacher.click(function () {
  $("#teacherImages").css("display", "flex");
  $("#studentImages").css("display", "none");
  // e.stopPropagation();
});
student.click(function () {
  $("#studentImages").css("display", "flex");
  $("#teacherImages").css("display", "none");
});

