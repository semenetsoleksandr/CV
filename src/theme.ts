const bodyTheme = document.querySelector('body') as HTMLElement
const mainColor = document.querySelector('main') as HTMLElement
const changeTheme = document.getElementById('toggle-theme') as HTMLElement

changeTheme.addEventListener('click', darkTheme);

function darkTheme(event:MouseEvent) {
    event.preventDefault();
    bodyTheme.classList.add('dark-theme');
    changeTheme.innerText = 'Dark Mode'
    changeTheme.removeEventListener('click', darkTheme);
    changeTheme.addEventListener('click', lightTheme);
}

function lightTheme(event:MouseEvent) {
    event.preventDefault();
    bodyTheme.classList.remove('dark-theme');
    changeTheme.innerText = 'Light Mode'
    changeTheme.removeEventListener('click', lightTheme);
    changeTheme.addEventListener('click', darkTheme);
}
