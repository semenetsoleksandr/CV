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
            close.innerHTML = '<i class="fa-regular fa-circle-xmark fa-lg"></i>'
            skills.appendChild(li)
            li.innerHTML = `<span style="color:darkblue;" class="fa-li" ><i class="fa-solid fa-check-square"></i></span>${el} `
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
        close.innerHTML = '<i class="fa-regular fa-circle-xmark fa-lg"></i>'
        li.innerHTML = li.innerHTML = `<span style="color:darkblue;" class="fa-li"><i class="fa-solid fa-check-square"></i></span>${newSkill.value} `
        skills.appendChild(li)
        li.appendChild(close)
        close.addEventListener('click', () => {
            skills.removeChild(li)
        })
        newSkill.value = ''
    }
}
