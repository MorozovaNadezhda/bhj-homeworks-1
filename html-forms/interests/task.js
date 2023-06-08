const allLabels = document.querySelectorAll("label");

allLabels.forEach((label) => {
  label.addEventListener("click", () => {
    if (label.nextElementSibling?.querySelectorAll("input")) {
      label.nextElementSibling.querySelectorAll("input").forEach((inp) => (inp.checked = true));
    }
  });
});
