

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalBtn: document.querySelector('[data-modal-open-1]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal-header]'),
    };
  
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('header__modal--is-hidden');
      
    }
  })();

//   (() => {
//     const refs = {
//       openMenuBtn:  document.querySelector('[data-modal-open]'),
//       closeMenuBtn:  document.querySelector('[data-modal-close]'),
//       modal: document.querySelector('[data-modal-header]'),
//     };


//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     refs.modal.classList.toggle('header__modal--is-hidden');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Закрываем мобильное меню на более широких экранах
//   // в случае изменения ориентации устройства.
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     refs.modal.classList.remove('header__modal--is-hidden');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })(); 