const optionsButtonMain = document.querySelector('.options-button--main');
const optionsButtonBottom = document.querySelector('.options-button--bottom');
const optionsButtonClose = document.querySelector('.options__button-close');
const optionsMenu = document.querySelector('.options');
const overlay = document.querySelector('.overlay');

const isEscapeKey = (evt) => evt.key === 'Escape';


const optionsButton = document.querySelector('.options-button');

const optionsList = document.querySelector('.options__list');
// const optionsItem = document.querySelector('.options__item');
// const optionsLink = document.querySelector('.options__link');

const optionsButtonMainIcon = document.querySelector('.candidate-options__button-icon');


const sendOfferOption = () => {

    optionsList.addEventListener('click', (event) => {
        // console.log("нажал кнопку " + event.target.innerText);
        console.log(optionsButton.innerHTML);
        optionsButton.classList.add('options-button--active');
        optionsButtonBottom.classList.add('options-button--active');
        optionsButton.textContent = 'Приглашение отправлено';
        optionsButtonBottom.textContent = 'Приглашение отправлено';

        overlay.classList.remove('overlay--active');
        optionsMenu.classList.remove('options--active');

    }, { once: true });
};



const toggleMenu = function () {
    optionsMenu.classList.toggle('options--active');
    overlay.classList.add('overlay--active');
};

const showCloseCandidateOptions = () => {

    optionsMenu.classList.add('options--active');
    overlay.classList.add('overlay--active');

    const onKeydown = (evt) => {
        if (isEscapeKey(evt)) {
            overlay.classList.remove('overlay--active');
            optionsMenu.classList.remove('options--active');
        }
    };

    overlay.addEventListener('click', (event) => {
        if (event.target.className != 'options') {
            optionsMenu.classList.remove('options--active');
            overlay.classList.remove('overlay--active');
            document.removeEventListener('keydown', onKeydown);
        };

    }, { once: true });

    document.addEventListener('keydown', onKeydown, { once: true });

    optionsButtonClose.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
        optionsMenu.classList.remove('options--active');
        document.removeEventListener('keydown', onKeydown);
    }, { once: true });
};


const closeCandidateOptions = () => {

    const onKeydown = (evt) => {
        if (isEscapeKey(evt)) {
            overlay.classList.remove('overlay--active');
            optionsMenu.classList.remove('options--active');
        }
    };

    overlay.addEventListener('click', (event) => {
        if (event.target.className != 'options') {
            optionsMenu.classList.remove('options--active');
            overlay.classList.remove('overlay--active');
            document.removeEventListener('keydown', onKeydown);
        };

    }, { once: true });

    document.addEventListener('keydown', onKeydown, { once: true });

    optionsButtonClose.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
        optionsMenu.classList.remove('options--active');
        document.removeEventListener('keydown', onKeydown);
    }, { once: true });
};





optionsButtonMain.onclick = function () {
    toggleMenu();

    sendOfferOption();

    closeCandidateOptions();
}

optionsButtonBottom.onclick = function () {

    sendOfferOption();
    showCloseCandidateOptions();
}

