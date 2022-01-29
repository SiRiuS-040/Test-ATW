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


// const imageArray = document.querySelectorAll('.gallery__image');
// let imagePopup = document.getElementsByClassName('.picture-popup__image');


// document.getElementById("myImage").src = "img/slide-7x4.png";

// // imagePopup.src = './img/slide-7x4.png';

// // imagePopup = imageArray[1];

// console.log(imagePopup);

// // imagePopup = imageArray[3];

// // console.log(imagePopup);

// // console.log(imageArray[3]);
// // console.log(imagePopup);

// // imagePopup.src = "./img/slide-7x4.png";