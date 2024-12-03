const bodyTheme = document.querySelector('body');
const mainColor = document.querySelector('main');
const changeTheme = document.getElementById('toggle-theme');

changeTheme.addEventListener('click', darkTheme );

function darkTheme(event) {
    event.preventDefault();
    bodyTheme.classList.add("dark-theme");
    changeTheme.innerText = "Dark Mode"
    changeTheme.removeEventListener('click', darkTheme);
    changeTheme.addEventListener('click', lightTheme);
    }
                        
function lightTheme(event) {
    event.preventDefault();
    bodyTheme.classList.remove("dark-theme");
    changeTheme.innerText = "Light Mode"
    changeTheme.removeEventListener('click', lightTheme);
    changeTheme.addEventListener('click', darkTheme);
    }
