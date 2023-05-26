const popup = document.querySelector("#modal_main");
const popupSuccess = document.querySelector("#modal_success");
const popupCloseBtn = document.querySelector(".modal__close");
const popupCloseShowBtn = document.querySelector(".show-success");
const activePopupClassName = "modal_active";

popup.classList.add(activePopupClassName);

popupCloseBtn.addEventListener("click", () => popup.classList.remove(activePopupClassName));

popupCloseShowBtn.addEventListener("click", () => popupSuccess.classList.add(activePopupClassName));
