const form = document.getElementById('form-contact') as HTMLElement
const reset = document.getElementById('form-reset') as HTMLElement
const counter = document.getElementById('character-count') as HTMLElement
const message = document.getElementById('message') as HTMLTextAreaElement
const maxlength: number = parseInt(<string>message.getAttribute('maxlength'), 10);

message.addEventListener('input', onInput);

function onInput(event) {
    let length = event.target.value.length;
    counter.innerText = maxlength - length + ' characters left…';
    if (length >= maxlength) {
        counter.innerHTML = `<span style='color:red;'>Max ${maxlength} characters!<\span>`
    }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    form.removeEventListener('submit', onFormSubmit);
    form.style.display = 'none';
    reset.style.display = 'block';
    reset.addEventListener('click', onReset);
    localStorage.removeItem('area')
    message.value = ''
    counter.innerText = '';
}

function onReset(event: MouseEvent) {
    reset.removeEventListener('click', onReset);
    form.style.display = 'block';
    reset.style.display = 'none';
    form.addEventListener('submit', onFormSubmit);
}

if (message) {
    const areaLocal = localStorage.getItem('area')
    if (areaLocal != null) {
        message.value = areaLocal
    }
}
message.oninput = () => {
    localStorage.setItem('area', message.value)
}
