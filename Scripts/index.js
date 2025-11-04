const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  changeSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(currentIndex - 1);
});

function changeSlide(index) {
  slides[currentIndex].classList.remove('active');
  currentIndex = (index + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Optional: auto-slide every 5 seconds
setInterval(() => changeSlide(currentIndex + 1), 5000);