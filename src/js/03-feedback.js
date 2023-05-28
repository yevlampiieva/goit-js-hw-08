import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
let formData = {};
const { email, message } = form.elements;

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

reloadPage();

function onInput(evt) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  console.log({ email: email.value, message: message.value });
}

function reloadPage() {
  const localSavedData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (localSavedData) {
    email.value = localSavedData.email;
    message.value = localSavedData.message;
  }
}
