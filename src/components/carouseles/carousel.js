let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const nextButton = document.querySelector('.next-button') 
const prevButton = document.querySelector('.prev-button') 
function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const displacement = -currentIndex * 100;
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.style.transform = `translateX(${displacement}%)`;
  }
}

nextButton.addEventListener('click', () => {
   moveCarousel(1)
   console.log('next')
});

prevButton.addEventListener('click', () => {
    moveCarousel(-1)
    console.log('next')
});