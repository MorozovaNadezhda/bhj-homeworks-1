const toggleMenuBtn = document.querySelector(".dropdown__value");
const dropDownMenu = document.querySelector(".dropdown__list");
const dropDownMenuItems = document.querySelectorAll(".dropdown__item");
const acitveMenuClassName = "dropdown__list_active";

toggleMenuBtn.addEventListener("click", () => dropDownMenu.classList.add(acitveMenuClassName));

dropDownMenuItems.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenuBtn.textContent = e.target.textContent;
    dropDownMenu.classList.remove(acitveMenuClassName);
  })
);
