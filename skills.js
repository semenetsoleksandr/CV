const formAddSkil = document.getElementById('add-skills')
const newSkill = document.getElementById('new-skill')
const skills = document.getElementById('skills')
const form = document.getElementById('add-skills')


fetch('./skills.json')
    .then(response => response.json())
    .then(el => {
        el.skills.forEach((el) => {
            const li = document.createElement('li')
            const close = document.createElement('button')
            close.setAttribute('type', 'button')
            close.innerHTML = '&times'
            skills.appendChild(li)
            li.innerText = el
            li.appendChild(close)
            close.addEventListener('click', () => {
                skills.removeChild(li)
            })
        });
    })
    .catch(error => console.error(error));

formAddSkil.addEventListener('submit', addSkill)

function addSkill(event) {
    event.preventDefault();
    if (newSkill.value != 0) {
        let li = document.createElement('li')
        let close = document.createElement('button')
        close.setAttribute('type', 'button')
        close.innerHTML = '&times'
        li.innerText = newSkill.value
        skills.appendChild(li)
        li.appendChild(close)
        close.addEventListener('click', () => {
            skills.removeChild(li)
        })
        newSkill.value = ''
    }
}
