const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const starRating = document.querySelector(".stars");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");

  stars.forEach(function (star) {
    star.addEventListener("click", function () {
      const rating = parseInt(star.getAttribute("data-rating"));

      stars.forEach(function (innerStar, index) {
        if (index < rating) {
          innerStar.classList.add("filled");
        } else {
          innerStar.classList.remove("filled");
        }
      });
    });
  });
});

// document.addEventListener("DOMContentLoaded", clickStar);

// const stars = document.querySelectorAll(".star");

// function clickStar() {
//   console.log("clickStar");
//   stars.addEventListener("click").classList.add("filled");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const stars = document.querySelectorAll(".star");

//   stars.forEach(function (star) {
//     star.addEventListener("click", function () {
//       console.log("clickStar");
//       star.classList.add("filled");
//     });
//   });
// });
