function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowParentNode = document.querySelector('.carousel');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');
  const slideCount = slides.length;
  const slideWidth = slides[0].offsetWidth;

  let currentSlide = 0;

  function buttonArrows() {
    arrowLeft.style.display = currentSlide === 0 ? 'none' : '';
    arrowRight.style.display = currentSlide === slideCount - 1 ? 'none' : '';
  }

  buttonArrows();

  arrowParentNode.addEventListener('click', ({ target }) => {
    let arrow = target.closest('.carousel__arrow');

    if (arrow === arrowRight) {
      if (currentSlide < slideCount - 1) {
        currentSlide++;
        carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        buttonArrows()
      }
    }

    if (arrow === arrowLeft) {
      if (currentSlide > 0) {
        currentSlide--;
        carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        buttonArrows()
      }
    }
  })
}
