import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.showcase-carousel', {

    loop: true,
    slidesPerView: 2.2,
    spaceBetween: 10,
    speed: 1000,
    breakpointsBase: 'container',
    initialSlide: 1,
    // normalizeSlideIndex: true,
    setWrapperSize: true,
});

