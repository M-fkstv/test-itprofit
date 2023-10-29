import './styles/index.scss';

const closeModal = document.querySelector('.modal__close'),
  openModal = document.getElementById('modal-button'),
  modalContent = document.querySelector('modal__content'),
  modal = document.getElementById('modal'),
  scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth + 'px';

openModal.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  if (scrollbarWidth != 0) {
    document.body.style.marginRight = scrollbarWidth;
  }
  modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
  document.body.style.overflow = 'auto';
  document.body.style.marginRight = '0';

  modal.classList.remove('active');
});

document.body.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.marginRight = '0';
    document.body.style.overflow = 'auto';
  }
});

//form validation

const nameInput = document.getElementById('name'),
  email = document.getElementById('email'),
  phone = document.getElementById('phone'),
  btn = document.querySelector('.form__button'),
  text = document.getElementById('text'),
  postResult = document.getElementById('result'),
  maskOptions = {
    mask: '+{375}(00)000-00-00',
  },
  mask = new IMask(phone, maskOptions);

const validateForm = () => {
  const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  if (!nameInput.value) {
    nameInput.classList.add('input__error');
    document.getElementById('name-error').style.display = `block`;
    return false;
  } else {
    nameInput.classList.remove('input__error');
    document.getElementById('name-error').style.display = `none`;
  }

  if (!regex.test(email.value)) {
    email.classList.add('input__error');
    document.getElementById('email-error').style.display = `block`;
    return false;
  } else {
    email.classList.remove('input__error');
    document.getElementById('email-error').style.display = `none`;
  }

  if (phone.value === 0 && phone.value !== 17) {
    phone.classList.add('input__error');
    document.getElementById('phone-error').style.display = `block`;
    return false;
  } else {
    phone.classList.remove('input__error');
    document.getElementById('phone-error').style.display = `none`;
  }

  if (!text.value) {
    text.classList.add('input__error');
    document.getElementById('text-error').style.display = `block`;
    return false;
  } else {
    text.classList.remove('input__error');
    document.getElementById('text-error').style.display = `none`;
  }
};

const body = {
  name: nameInput.value,
  email: email.value,
  phone: phone.value,
  text: text.value,
};


btn.addEventListener('click', async (event) => {
  event.preventDefault();

  validateForm();

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

    mask.value = '';
    nameInput.value = '';
    email.value = '';
    text.value = '';
  }
});
