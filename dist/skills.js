"use strict";
const formAddSkill = document.getElementById('add-skills');
const newSkill = document.getElementById('new-skill');
const skills = document.getElementById('skills');
function main() {
    fetch('http://localhost:8080/skills')
        .then(res => res.json())
        .then(res => {
        for (let skills in res) {
            createListSkill(res[skills].skill, res[skills].id);
        }
    })
        .catch(error => console.error(error));
}
formAddSkill.addEventListener('submit', addSkill);
function addSkill() {
    if (newSkill.value != "") {
        fetch('http://localhost:8080/skills/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ "skill": newSkill.value })
        });
    }
    else {
        alert("Add skill field cannot be empty");
    }
}
function editSkill(id, editSkillData) {
    if (editSkillData != 0) {
        fetch(`http://localhost:8080/skills/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ "skill": editSkillData })
        });
    }
    else {
        alert("Edit skill field cannot be empty");
    }
}
function delSkill(id) {
    fetch(`http://localhost:8080/skills/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
}
function createListSkill(skill, id) {
    const li = document.createElement('li');
    skills.appendChild(li);
    li.innerHTML = `<span style="color:darkblue;" class="fa-li" ><i class="fa-solid fa-check-square"></i></span>${skill}`;
    clsBtn(li, id);
    editBtn(li, id);
}
function editBtn(li, id) {
    const edit = document.createElement('button');
    edit.setAttribute('type', 'button');
    edit.setAttribute('id', id);
    edit.innerHTML = '<i class="fa-solid fa-edit"></i>';
    li.appendChild(edit);
    function clickEditBtn() {
        const id = edit.getAttribute('id');
        editForm(li, id);
        edit.removeEventListener('click', clickEditBtn);
    }
    edit.addEventListener('click', clickEditBtn);
}
function clsBtn(li, id) {
    const close = document.createElement('button');
    close.setAttribute('type', 'button');
    close.setAttribute('id', id);
    close.innerHTML = '<i class="fa-regular fa-circle-xmark fa-lg"></i>';
    li.appendChild(close);
    close.addEventListener('click', () => {
        skills.removeChild(li);
        let id = close.getAttribute('id');
        delSkill(id);
    });
}
function editForm(li, id) {
    const editSkillData = document.createElement('input');
    li.appendChild(editSkillData);
    editSkillData.value = li.innerText;
    editSkillData.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            editSkill(id, editSkillData.value);
            li.removeChild(editSkillData);
            location.reload();
        }
        if (event.key === "Escape") {
            li.removeChild(editSkillData);
            location.reload();
        }
    });
}
main();
