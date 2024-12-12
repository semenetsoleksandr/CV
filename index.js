const form = document.getElementById('form-contact');
const reset = document.getElementById('form-reset');
const counter = document.getElementById('character-count');
const message = document.getElementById('message');
const maxlength = parseInt(message.getAttribute('maxlength'), 10);

message.addEventListener('input', onInput);

function onInput(event) {
    let length = event.target.value.length;
    counter.innerText = maxlength - length + ' characters left…';
    if (length >= maxlength) {
        counter.innerHTML = `<span style='color:red;'>Max ${maxlength} characters!<\span>`
    }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    form.removeEventListener('submit', onFormSubmit);
    form.style.display = 'none';
    reset.style.display = 'block';
    reset.addEventListener('click', onReset);
}

function onReset(event) {
    reset.removeEventListener('click', onReset);
    form.style.display = 'block';
    reset.style.display = 'none';
    form.addEventListener('submit', onFormSubmit);
    }
