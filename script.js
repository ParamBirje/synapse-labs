// let scroll = new LocomotiveScroll({
//   el: document.querySelector("main"),
//   smooth: true,
// });

let fixedImage = document.querySelector("#fixed_image");

// Adding hover listeners to all the project items
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
