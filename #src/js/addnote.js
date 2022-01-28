const addNoteButton = document.querySelector('.open-note--main');
const addNoteHeaderButton = document.querySelector('.open-note--header');
const overlay = document.querySelector('.overlay');
const popupAddNote = document.querySelector('.popup-addnote');
const popupAddNoteClose = document.querySelector('.popup-addnote__button--cancel');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showPopupAddNote = () => {

    overlay.classList.add('overlay--active');
    popupAddNote.classList.add('popup-addnote--active');

    const onKeydown = (evt) => {
        if (isEscapeKey(evt)) {
            overlay.classList.remove('overlay--active');
            popupAddNote.classList.remove('popup-addnote--active');
        }
    };


    overlay.addEventListener('click', (event) => {
        if (event.target.className != 'popup-addnote') {
            overlay.classList.remove('overlay--active');
            popupAddNote.classList.remove('popup-addnote--active');
            document.removeEventListener('keydown', onKeydown);
        };

    }, { once: true });

    document.addEventListener('keydown', onKeydown, { once: true });

    popupAddNoteClose.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
        popupAddNote.classList.remove('popup-addnote--active');
        document.removeEventListener('keydown', onKeydown);
    }, { once: true });
};


addNoteButton.onclick = function () {
    showPopupAddNote();
}

addNoteHeaderButton.onclick = function () {
    showPopupAddNote();
}
