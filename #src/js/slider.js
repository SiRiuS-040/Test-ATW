const popupSlider = document.querySelector('.picture-popup');
const popupSliderClose = document.querySelector('.picture-popup__button-close');
const popupSliderOpen = document.querySelector('.gallery__image');
const popupSliderOpenArr = document.querySelectorAll('.gallery__image');
const overlay = document.querySelector('.overlay');
const imageArray = document.querySelectorAll('.gallery__image');
const imageWrapper = document.querySelector('.picture-popup__image-wrapper');
const list = carousel.querySelector('.gallery__list');
const listElems = carousel.querySelectorAll('.gallery__item');

const width = 157;
const count = 1;

const isEscapeKey = (evt) => evt.key === 'Escape';

// Карусель
let position = 0;
carousel.querySelector('.carousel__control--prev').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.carousel__control--next').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

// Окно просмотра изображения
// Ловим и устанавливаем новый путь

function setImageUrl(evt) {
    if (evt.target != list) {
        let newPath = evt.target.getAttribute("src");
        imageWrapper.style.backgroundImage = (" url('." + newPath + " '");
    }
}

// Открытие всплывающего окна

const showPopupSlide = () => {
    overlay.classList.add('overlay--active');
    popupSlider.classList.add('picture-popup--active');
    const onKeydown = (evt) => {
        if (isEscapeKey(evt)) {
            overlay.classList.remove('overlay--active');
            popupSlider.classList.remove('picture-popup--active');
        }
    };
    overlay.addEventListener('click', (event) => {
        if (event.target.className != 'popup-addnote') {
            overlay.classList.remove('overlay--active');
            popupSlider.classList.remove('picture-popup--active');
            document.removeEventListener('keydown', onKeydown);
        };
    }, { once: true });
    document.addEventListener('keydown', onKeydown, { once: true });
    popupSliderClose.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
        popupSlider.classList.remove('picture-popup--active');
        document.removeEventListener('keydown', onKeydown);
    }, { once: true });
};

popupSliderOpenArr.forEach(item => {
    item.addEventListener('click', event => {
        list.addEventListener('click', setImageUrl, false);
        showPopupSlide();
    })
})
