import './addnote.js';

const optionsButtonMain = document.querySelector('.options-button--main');
const optionsButtonBottom = document.querySelector('.options-button--bottom');

const optionsButtonClose = document.querySelector('.options__button-close');
const optionsMenu = document.querySelector('.options');
const overlay = document.querySelector('.overlay');


const isEscapeKey = (evt) => evt.key === 'Escape';

const showCandidateOptions = () => {

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


optionsButtonMain.onclick = function () {
    showCandidateOptions();
}

optionsButtonBottom.onclick = function () {
    showCandidateOptions();
}

