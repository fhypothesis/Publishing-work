let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 300}px)`;
  currentIndex = index;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

showSlide(currentIndex);
