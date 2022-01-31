const optionsButtonClose = document.querySelector('.options__button-close');
const optionsMenu = document.querySelector('.options');
const overlay = document.querySelector('.overlay');
const optionsButton = document.querySelector('.options-button');
const optionsButtonArray = document.querySelectorAll('.options-button');
const optionsList = document.querySelector('.options__list');
const optionsButtonMainIcon = document.querySelector('.candidate-options__button-icon');

const isEscapeKey = (evt) => evt.key === 'Escape';

const sendOfferOption = () => {
    optionsList.addEventListener('click', (event) => {
        optionsButtonArray.forEach(item => {
            item.classList.add('options-button--active');
            item.textContent = 'Приглашение отправлено';
        })
        overlay.classList.remove('overlay--active');
        optionsMenu.classList.remove('options--active');
    }, { once: true });
};

const toggleMenu = function () {
    optionsMenu.classList.toggle('options--active');
    overlay.classList.toggle('overlay--active');
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

optionsButtonArray.forEach(item => {
    item.addEventListener('click', event => {
        toggleMenu();
        sendOfferOption();
        closeCandidateOptions();
    })
})
