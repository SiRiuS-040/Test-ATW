const buttonToggleDuties = document.querySelector('.button-hider--duties');
const buttonToggleAchievements = document.querySelector('.button-hider--achievements');
const buttonToggleReasonss = document.querySelector('.button-hider--reasons');
const buttonToggle = document.querySelector('.button-hider');
const listDuties = document.querySelector('.duties');
const listAchievements = document.querySelector('.achievements');
const listReasons = document.querySelector('.reasons');

buttonToggleDuties.textContent = ('Скрыть');
buttonToggleAchievements.textContent = ('Показать полность...');
buttonToggleReasonss.textContent = ('Показать полность...');

const toggleInfoD = function () {
    listDuties.classList.toggle('last-job__info-list--minimized');
    if (buttonToggleDuties.textContent == 'Показать полность...') {
        buttonToggleDuties.textContent = 'Скрыть';
        listDuties.classList.remove('last-job__info-list--minimized');
    } else {
        buttonToggleDuties.textContent = 'Показать полность...';
        listDuties.classList.add('last-job__info-list--minimized');
    }
};

const toggleInfoA = function () {
    listAchievements.classList.toggle('last-job__info-list--minimized');
    if (buttonToggleAchievements.textContent == 'Показать полность...') {
        buttonToggleAchievements.textContent = 'Скрыть';
        listAchievements.classList.remove('last-job__info-list--minimized');
    } else {
        listAchievements.classList.add('last-job__info-list--minimized');
        buttonToggleAchievements.textContent = 'Показать полность...';
    }
};

const toggleInfoR = function () {
    listReasons.classList.toggle('last-job__info-list--minimized');
    if (buttonToggleReasonss.textContent == 'Показать полность...') {
        buttonToggleReasonss.textContent = 'Скрыть';
        listReasons.classList.remove('last-job__info-list--minimized');
    } else {
        listReasons.classList.add('last-job__info-list--minimized');
        buttonToggleReasonss.textContent = 'Показать полность...';
    }
};

buttonToggleDuties.addEventListener('click', () => {
    toggleInfoD();
});

buttonToggleAchievements.addEventListener('click', () => {
    toggleInfoA();
});

buttonToggleReasonss.addEventListener('click', () => {
    toggleInfoR();
});
