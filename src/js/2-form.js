'use strict';

const formData = {
  email: "",
  message: "" 
}

const form = document.querySelector('.feedback-form'),
  input = form.elements.email,
  textArea = form.elements.message,
  localStorageKey = 'feedback-form-state';

const localFormData = JSON.parse(localStorage.getItem(localStorageKey));
 if (localFormData) {
  input.value = localFormData.email;
  textArea.value = localFormData.message;
  formData.email = localFormData.email;
  formData.message = localFormData.message;
}

form.addEventListener('input', e => {
    formData.email = input.value.trim();
    formData.message = textArea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value.trim() !== '' && textArea.value.trim() !== '') {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill out all fields!');
  }
});