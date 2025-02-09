const button = document.getElementById('like-btn');
const resetButton = document.getElementById('like-btn-reset');
const likes = document.getElementById('like-count');
likes.innerHTML = localStorage.getItem('likes');

button.addEventListener('click', function (event) {
    likes.innerHTML++;
    localStorage.setItem('likes', likes.innerHTML)
})
resetButton.addEventListener('click', function (event) {
    likes.innerHTML = '0';
    localStorage.setItem('likes', likes.innerHTML)
})

