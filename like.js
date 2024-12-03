const button = document.getElementById("like-btn");
const resetButton = document.getElementById("like-btn-reset");
const likes = document.getElementById("like-count");
let countLike = 0;
likes.innerHTML = '0';

button.addEventListener('click', function (event) {
    event.preventDefault();
    likes.innerHTML = ++countLike;
})
resetButton.addEventListener('click', function (event) {
    event.preventDefault();
    likes.innerHTML = '0';
    countLike = 0;
})