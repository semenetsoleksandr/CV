const button = document.getElementById('like-btn') as HTMLButtonElement;
const resetButton = document.getElementById('like-btn-reset') as HTMLButtonElement;
const likes = document.getElementById('like-count') as HTMLLabelElement ;

if (likes) {
    const likeCount = localStorage.getItem('likes');
    likes.innerHTML = likeCount ? likeCount : '0'
}

if (button) {
    button.addEventListener('click', function (event) {
        if (likes) {
            const getCount = parseInt(likes.innerHTML)
            const addCount = getCount + 1;
            localStorage.setItem('likes', addCount.toString())
            likes.innerHTML =  addCount.toString()
        }
    })
}
if (resetButton) {
    resetButton.addEventListener('click', function (event) {
        if (likes) {
            likes.innerHTML = '0';
            localStorage.setItem('likes', likes.innerHTML)
        }
    })
}

