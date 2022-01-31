const popupSlider = document.querySelector('.picture-popup');
const popupSliderClose = document.querySelector('.picture-popup__button-close');
const popupSliderOpen = document.querySelector('.gallery__image');
const popupSliderOpenArr = document.querySelectorAll('.gallery__image');
const overlay = document.querySelector('.overlay');
const imageArray = document.querySelectorAll('.gallery__image');
const imageWrapper = document.querySelector('.picture-popup__image-wrapper');
const list = carousel.querySelector('.gallery__list');
const listElems = carousel.querySelectorAll('.gallery__item');
const carouselPrev = document.querySelector('.carousel__control--prev');
const carouselNext = document.querySelector('.carousel__control--next');
const popupImagePrev = document.querySelector('.picture-popup__control--prev');
const popupImageNext = document.querySelector('.picture-popup__control--next');

const imageCounter = document.querySelector('.picture-popup__counter');

const width = 157;
const count = 1;

const isEscapeKey = (evt) => evt.key === 'Escape';

let position = 0;

carouselPrev.addEventListener('click', () => {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
});

carouselNext.addEventListener('click', () => {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
});

function setImageUrl(evt) {
    if (evt.target != list) {
        let newPath = evt.target.getAttribute("src");
        imageWrapper.style.backgroundImage = (" url('." + newPath + "'");
    }
}

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

let imageIndex = 0;

const getimageItemIndex = (event) => {
    let child = event.target.parentNode.parentNode;
    let parent = event.target.parentNode.parentNode.parentNode;
    let index = Array.prototype.indexOf.call(parent.children, child);
    return imageIndex = index;
};

function setImagePrev() {
    if (imageIndex == 0) {
        imageIndex = imageArray.length;
    }
    imageWrapper.style.backgroundImage = (" url('." + imageArray[imageIndex - 1].getAttribute("src") + "'");
    imageIndex--;
}

function setImageNext() {
    if (imageIndex >= imageArray.length - 1) {
        imageIndex = -1;
    }
    imageWrapper.style.backgroundImage = (" url('." + imageArray[imageIndex + 1].getAttribute("src") + "'");
    imageIndex++;
}

function setImageCounter() {
    imageCounter.textContent = ((imageIndex + 1) + "  /  " + imageArray.length);
}

popupSliderOpenArr.forEach(item => {
    item.addEventListener('click', event => {
        getimageItemIndex(event)
        setImageCounter();
        list.addEventListener('click', setImageUrl, false);
        showPopupSlide();
    })
})

popupImagePrev.addEventListener('click', () => {
    setImagePrev();
    setImageCounter();
});

popupImageNext.addEventListener('click', () => {
    setImageNext();
    setImageCounter();
});