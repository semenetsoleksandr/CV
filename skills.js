const formAddSkil = document.getElementById('add-skills')
const newSkill = document.getElementById('new-skill')
const skills = document.getElementById('skills')

function main() {
    fetch('http://localhost:8080/skills')
        .then(res => res.json())
        .then(res => {
            for (let skills in res) {
                createListSkill(res[skills].skill, res[skills].id)
            }
        })
        .catch(error => console.error(error));
}

formAddSkil.addEventListener('submit', addSkill)

function addSkill() {
    if (newSkill.value != "") {
        fetch('http://localhost:8080/skills/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"skill": newSkill.value})
        });
    } else {
        alert("Add skill field cannot be empty")
    }
}

function createListSkill(data, id) {
    const li = document.createElement('li')
    skills.appendChild(li)
    li.innerHTML = `<span style="color:darkblue;" class="fa-li" ><i class="fa-solid fa-check-square"></i></span>${data} `
    clsBtn(li, id)
}

function clsBtn(li, id) {
    const close = document.createElement('button')
    close.setAttribute('type', 'button')
    close.setAttribute('id', id)
    close.innerHTML = '<i class="fa-regular fa-circle-xmark fa-lg"></i>'
    li.appendChild(close)
    close.addEventListener('click', () => {
        skills.removeChild(li)
        let id = close.getAttribute('id')
        delSkill(id)
    })
}

function delSkill(id) {
    fetch(`http://localhost:8080/skills/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
}

main()
