const widget = document.querySelector(".chat-widget");
const chatInput = document.querySelector("#chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
const answers = ["Вы не купили ни одного товара у нас, чтобы так с нами разговаривать!", "Кто тут?", "Где ваша совесть?", "К сожалению, все наши операторы заняты"];
widget.addEventListener("click", () => widget.classList.add("chat-widget_active"));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value) {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
    <div class="message__text">
      ${chatInput.value}
    </div>
  </div>`;
    messages.innerHTML += `
  <div class="message">
    <div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
    <div class="message__text">
      ${answers[getRandomInt(0, answers.length - 1)]}
    </div>
  </div>
`;
    chatInput.value = "";
  }
});
