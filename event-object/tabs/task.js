const tabsTogglers = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");
const activeTabClassName = "tab_active";
const activeTabContenClassName = "tab__content_active";

tabsTogglers.forEach((tabBtn, idx) =>
  tabBtn.addEventListener("click", () => {
    tabsTogglers.forEach((tab) => tab.classList.remove(activeTabClassName));
    tabContents.forEach((tab) => tab.classList.remove(activeTabContenClassName));
    tabBtn.classList.add(activeTabClassName);
    tabContents[idx].classList.add(activeTabContenClassName);
  })
);
