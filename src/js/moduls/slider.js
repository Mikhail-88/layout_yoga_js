function slider() {
  const slides = document.querySelectorAll('.slider-item');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const dotsWrap = document.querySelector('.slider-dots');
  const dots = document.querySelectorAll('.dot');
  let slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('dot-active'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active')
  }

  prev.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
  });

  next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
  });

  dotsWrap.addEventListener('click', ({ target }) => {
    dots.forEach((dot, i) => {
      if (target.classList.contains('dot') && target === dot) {
        showSlides(slideIndex = i + 1);
      }
    });
  });
}

module.exports = slider;