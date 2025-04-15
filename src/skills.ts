const formAddSkill = document.getElementById('add-skills') as HTMLButtonElement 
const newSkill = document.getElementById('new-skill') as HTMLInputElement
const skills = document.getElementById('skills') as HTMLDListElement

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

formAddSkill.addEventListener('submit', addSkill)

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

function createListSkill(data:string, id:string) {
    const li = document.createElement('li')
    skills.appendChild(li)
    li.innerHTML = `<span style="color:darkblue;" class="fa-li" ><i class="fa-solid fa-check-square"></i></span>${data} `
    clsBtn(li, id)
}

function clsBtn(li: HTMLLIElement, id: string) {
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

function delSkill(id: string|null) {
    fetch(`http://localhost:8080/skills/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
}

main()
