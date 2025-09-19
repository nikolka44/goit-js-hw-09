const formData = { email: '', message: '' };
const FORM_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', handleSubmit);
populateInput();

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function populateInput() {
  const message = JSON.parse(localStorage.getItem(FORM_KEY));
  if (message) {
    inputEl.value = message.email;
    textareaEl.value = message.message;
    formData.email = message.email;
    formData.message = message.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  if (
    elements.email.value.trim() === '' ||
    elements.message.value.trim() === ''
  ) {
    return alert('«Fill please all fields»');
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem(FORM_KEY);
  formData.email = '';
  formData.message = '';
}
