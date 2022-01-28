
const buttonToggleResponseList = document.querySelector('.response-history__button');
const responseHistoryList = document.querySelector('.response-history__list');
const responseHistoryIcon = document.querySelector('.response-history__icon');


const toggleResponseList = function () {
    responseHistoryList.classList.toggle('response-history__list--closed');
    responseHistoryIcon.classList.toggle('response-history__icon--closed');
};

buttonToggleResponseList.onclick = function () {
    toggleResponseList();
}
