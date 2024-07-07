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

// Hamburger menu
let hamburger = document.querySelector("#hamburger");
let isOpen = false;
hamburger.addEventListener("click", function () {
  let fullHam = document.querySelector("#full_scr_hamburger");

  if (isOpen) {
    isOpen = false;
    fullHam.style.top = "-100%";
    hamburger.textContent = "Menu";
    return;
  }

  fullHam.style.top = 0;
  hamburger.textContent = "Close";
  isOpen = true;
});
