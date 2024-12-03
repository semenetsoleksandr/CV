const formAddSkil = document.getElementById("add-skills")
const newSkill = document.getElementById("new-skill")
const skills = document.getElementById("skills")
const form = document.getElementById("add-skills")

formAddSkil.addEventListener('submit', addSkill);
  
function addSkill(event) {
    event.preventDefault();
    if (newSkill.value != 0) {
    let li = document.createElement('li')
    let close = document.createElement('button');
    close.setAttribute('type', 'button')
    close.innerHTML = "&times"
    li.innerHTML = newSkill.value;
    skills.appendChild(li)
    li.appendChild(close)
    close.addEventListener('click', () => {
        skills.removeChild(li)
    })
    newSkill.value = ""
}}
