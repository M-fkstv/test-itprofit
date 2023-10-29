import { email, nameInput, phone, postResult, text } from './validation';

export const fetchFunction = async () => {
  const body = {
    name: nameInput.value,
    email: email.value,
    phone: phone.value,
    text: text.value,
  };
  if (phone.value && nameInput.value && email.value && text.value) {
    const response = await fetch('http://localhost:9090/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    postResult.textContent = result.message;

    const errors = document.querySelectorAll('.error');

    errors.forEach((error) => {
      error.textContent = '';
      error.style.display = `none`;
    });

    const inputs = document.querySelectorAll('.input');
    inputs.forEach((input) => {
      input.classList.remove('input__error');
    });

    phone.value = '';
    nameInput.value = '';
    email.value = '';
    text.value = '';
  }
};
