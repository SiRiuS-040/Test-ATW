const buttonsFavoriteArray = document.querySelectorAll('.candidate-options__button-favorites');
// const buttonFavorite = document.querySelector('.candidate-options__button-favorites');

const toggleLikes = function () {
    buttonsFavoriteArray.forEach((element) => {
        if (element.classList.contains('candidate-options__button-favorites--active')) {

            element.classList.remove('candidate-options__button-favorites--active');
        } else {
            element.classList.add('candidate-options__button-favorites--active');
        }
    })
};

buttonsFavoriteArray.forEach(item => {
    item.addEventListener('click', event => {
        toggleLikes();
    })
})

