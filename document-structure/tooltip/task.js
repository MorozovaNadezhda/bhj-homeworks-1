const tipsLinks = document.querySelectorAll(".has-tooltip");

document.body.insertAdjacentHTML(
  "afterbegin",
  `<div class="tooltip" style="left: 0; top: 0">
    </div>`
);

const tooltip = document.querySelector(".tooltip");

tipsLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (link.dataset.clicked === "true") {
      tooltip.classList.remove("tooltip_active");
      link.dataset.clicked = false;
      return;
    }
    tooltip.textContent = link.title;
    tooltip.classList.add("tooltip_active");
    tooltip.style.left = `${e.clientX}px`;
    tooltip.style.top = `${e.clientY}px`;
    link.dataset.clicked = "true";
  });
});
