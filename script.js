document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const items = document.querySelectorAll('.carousel-item');

let index = 0;
const itemWidth = items[0].offsetWidth + 16; // larghezza item + gap

function updateCarousel() {
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (index < items.length - 3) { // mostra 3 per volta su desktop
    index++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Swipe mobile
let startX = 0;
track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
track.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && index < items.length - 3) {
    index++;
    updateCarousel();
  } else if (endX - startX > 50 && index > 0) {
    index--;
    updateCarousel();
  }
});
