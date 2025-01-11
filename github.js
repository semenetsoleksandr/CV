const url = 'https://api.github.com/users/semenetsoleksandr'
const gitLogin = document.getElementById('github-name')
const gitBio = document.getElementById('github-bio')
const gitLink = document.getElementById('github-link')
const gitMainName = document.getElementById('git-main-name')
const gitFooterName = document.getElementById('git-footer-name')
const getAvatar = document.getElementById('avatar')
const getTown = document.getElementById('git-town')


fetch(url)
    .then(res => res.json())
    .then(data => {
        gitData(data)
    })

function gitData(data) {
    gitLogin.innerText = data.name
    gitBio.innerText = data.bio
    gitLink.setAttribute('href', data.html_url)
    gitLink.innerText = data.login
    gitMainName.innerText = data.name
    gitFooterName.innerText = `Autor: ${data.name}`
    getAvatar.setAttribute('src', data.avatar_url)
    getAvatar.style.borderRadius = '50%'
    getTown.innerHTML = `<strong>Town: </strong>${data.location}`
}
