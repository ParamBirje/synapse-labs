// Locomotive smooth scroll
let scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

// Swiper.js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

// Adding hover listeners to all the project items
let fixedImage = document.querySelector("#fixed_image");

let projectItems = document.querySelectorAll(".element");
projectItems.forEach((item) => {
  let currentImage = item.getAttribute("data-image");

  item.addEventListener("mouseenter", function () {
    fixedImage.style.display = "block";
    fixedImage.style.backgroundImage = `url(${currentImage})`;
  });

  item.addEventListener("mouseleave", function () {
    fixedImage.style.display = "none";
  });
});
