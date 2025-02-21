const mainImages = document.querySelectorAll(".main-images");

mainImages.forEach((image) => {
  image.addEventListener("mouseover", function () {
    this.style.transform = "rotate(180deg)";
  });

  image.addEventListener("mouseout", function () {
    this.style.transform = "rotate(0deg)"; 
  });
});