const popup = document.querySelector("#modal_main");
const popupSuccess = document.querySelector("#modal_success");
const popupCloseBtns = document.querySelectorAll(".modal__close");
const popupCloseShowBtn = document.querySelector(".show-success");
const activePopupClassName = "modal_active";

popup.classList.add(activePopupClassName);

popupCloseBtns.forEach((btn) => btn.addEventListener("click", (e) => e.target.closest(".modal").classList.remove(activePopupClassName)));

popupCloseShowBtn.addEventListener("click", () => popupSuccess.classList.add(activePopupClassName));
