const form = document.querySelector(".tasks__control");
const input = document.querySelector(".tasks__input");
const taskList = document.querySelector(".tasks__list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    taskList.addEventListener("click", (e) => {
      if (e.target.className === "task__remove") {
        e.target.parentNode.remove();
      }
    });
    taskList.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="task">
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `
    );

    form.reset();
  }
  return;
});
