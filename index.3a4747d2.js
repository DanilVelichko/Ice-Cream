(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuList:document.querySelector(".site-nav-menu")};function o(){e.menu.classList.toggle("is-hidden"),document.querySelector("body").classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),document.querySelector("body").classList.remove("no-scroll")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-header-modal-open]"),openModalBtnMob:document.querySelector("[data-header-modal-open-mob]"),closeModalBtn:document.querySelector("[data-header-modal-close]"),modal:document.querySelector("[data-header-modal]")};function o(){e.modal.classList.remove("is-hidden")}e.openModalBtn.addEventListener("click",o),e.openModalBtnMob.addEventListener("click",o),e.closeModalBtn.addEventListener("click",(function(){e.modal.classList.add("is-hidden")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-products-modal-open]"),closeModalBtn:document.querySelector("[data-products-modal-close]"),modal:document.querySelector("[data-products-modal]")};e.openModalBtn.addEventListener("click",(function(){e.modal.classList.remove("is-hidden")})),e.closeModalBtn.addEventListener("click",(function(){e.modal.classList.add("is-hidden")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-about-modal-open]"),closeModalBtn:document.querySelector("[data-about-modal-close]"),modal:document.querySelector("[data-about-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-franchise-modal-open]"),closeModalBtn:document.querySelector("[data-franchise-modal-close]"),modal:document.querySelector("[data-franchise-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.3a4747d2.js.map
