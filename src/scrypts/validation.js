export const nameInput = document.getElementById('name'),
  email = document.getElementById('email'),
  phone = document.getElementById('phone'),
  btn = document.querySelector('.form__button'),
  text = document.getElementById('text'),
  postResult = document.getElementById('result'),
  maskOptions = {
    mask: '+{375}(00)000-00-00',
  },
  mask = new IMask(phone, maskOptions);

export const validateForm = () => {
  const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  if (!nameInput.value) {
    nameInput.classList.add('input__error');
    document.getElementById('name-error').style.display = `block`;
    return false;
  }

  if (!regex.test(email.value)) {
    email.classList.add('input__error');
    document.getElementById('email-error').style.display = `block`;
    return false;
  }

  if (phone.value.length !== 17) {
    phone.classList.add('input__error');
    document.getElementById('phone-error').style.display = `block`;
    return false;
  }

  if (!text.value) {
    text.classList.add('input__error');
    document.getElementById('text-error').style.display = `block`;
    return false;
  }
  return true;
};
