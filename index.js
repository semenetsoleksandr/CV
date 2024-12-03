const form = document.getElementById("form-contact");
const reset = document.getElementById("form-reset");

const counter = document.getElementById("character-count");
const message = document.getElementById("message");

message.addEventListener('input', onInput);

function onInput(event) {
  event.preventDefault();
  length = event.target.value.length;
  counter.innerText = 100 - length + " characters left…";
  if (length > 100) {
    counter.innerHTML = `<span style="color:red;">Max 100 characters!<\span>`
  }}

form.addEventListener('submit', onFormSubmit );

  function onFormSubmit(event) {
    event.preventDefault();
    form.removeEventListener('submit',onFormSubmit);
     form.style.display = 'none';
    reset.style.display = "inline";
    reset.addEventListener('click', onReset);
  }

  function onReset(event) {
    event.preventDefault();
    reset.removeEventListener('click',onReset);
    form.style.display = "inline";
    reset.style.display = "none";
    form.addEventListener('submit', onFormSubmit);
  }
