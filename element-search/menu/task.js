const links = document.querySelectorAll(".menu__link");

links.forEach((l) => {
  l.addEventListener("click", (e) => {
    if (l.nextElementSibling) {
      e.preventDefault();
      l.nextElementSibling.classList.toggle("menu_active");
    }
  });
});
