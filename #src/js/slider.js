const width = 150; // ширина картинки
const count = 2; // видимое количество изображений

const list = carousel.querySelector('.gallery__list');
const listElems = carousel.querySelectorAll('.gallery__item');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.carousel__control--prev').onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.carousel__control--next').onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};