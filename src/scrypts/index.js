import { fetchFunction } from './fetch';
import { btn, validateForm } from './validation';

import '../styles/index.scss';

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

btn.addEventListener('click', async (event) => {
  event.preventDefault();

  if (validateForm()) {
    fetchFunction();
  }
});
