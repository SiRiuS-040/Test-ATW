// Карусель

const width = 157; // ширина картинки
const count = 1; // видимое количество изображений

const list = carousel.querySelector('.gallery__list');
const listElems = carousel.querySelectorAll('.gallery__item');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.slide--prev').onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.slide--next').onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};


// Окно просмотра изображения


const popupSlider = document.querySelector('.picture-popup');
const popupSliderClose = document.querySelector('.picture-popup__button-close');
const popupSliderOpen = document.querySelectorAll('.gallery__image');
const overlay = document.querySelector('.overlay');
const isEscapeKey = (evt) => evt.key === 'Escape';

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

popupSliderOpen.forEach(item => {
    item.addEventListener('click', event => {
        showPopupSlide();
    })
})


