// CONTACTS MODAL
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-contacts-modal-open]"),
    // openModalBtnMob: document.querySelector("[data-products-modal-open-mob]"),
    closeModalBtn: document.querySelector("[data-contacts-modal-close]"),
    modal: document.querySelector("[data-contacts-modal]"),
  };

  refs.openModalBtn.addEventListener('click', remove);
  // refs.openModalBtnMob.addEventListener('click', remove);
  refs.closeModalBtn.addEventListener("click", add);

  function remove() {
    refs.modal.classList.remove('is-hidden');
  }

  function add() {
    refs.modal.classList.add('is-hidden');
  }

})();