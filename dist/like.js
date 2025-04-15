"use strict";
const button = document.getElementById('like-btn');
const resetButton = document.getElementById('like-btn-reset');
const likes = document.getElementById('like-count');
if (likes) {
    const likeCount = localStorage.getItem('likes');
    likes.innerHTML = likeCount ? likeCount : '0';
}
if (button) {
    button.addEventListener('click', function (event) {
        if (likes) {
            const getCount = parseInt(likes.innerHTML);
            const addCount = getCount + 1;
            localStorage.setItem('likes', addCount.toString());
            likes.innerHTML = addCount.toString();
        }
    });
}
if (resetButton) {
    resetButton.addEventListener('click', function (event) {
        if (likes) {
            likes.innerHTML = '0';
            localStorage.setItem('likes', likes.innerHTML);
        }
    });
}
