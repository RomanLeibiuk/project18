// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-mobile-open]'),
//     closeModalBtn: document.querySelector('[data-mobile-close]'),
//     modal: document.querySelector('[data-mobile]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('about__modal--is-hidden');
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open-about]'),
    closeModalBtn: document.querySelector('[modal-close-about]'),
    modal: document.querySelector('[modal-about]'),
    scrollBtn: document.querySelector('.scroll-up'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.style.transition = 'opacity 500ms cubic-bezier(0.88, -0.13, 0.58, 1) 0s';
    refs.modal.classList.toggle('is-open');
  }
})();
