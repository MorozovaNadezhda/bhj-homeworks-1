const tipsLinks = document.querySelectorAll(".has-tooltip");
const tooltip = document.querySelector(".tooltip");

tipsLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (link.dataset.clicked === "true") {
      tooltip.classList.remove("tooltip_active");
      link.dataset.clicked = false;
      return;
    }
    console.log(e);
    tooltip.textContent = link.title;
    tooltip.classList.add("tooltip_active");
    tooltip.style.left = `${e.clientX}px`;
    tooltip.style.top = `${e.clientY}px`;
    link.dataset.clicked = "true";
  });
});
