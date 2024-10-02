const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.banner__button');
const closeModalBtn = modal.querySelector('.modal__close');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('modal--is-open');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('modal--is-open');
});