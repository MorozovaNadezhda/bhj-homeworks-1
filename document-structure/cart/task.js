const allCard = document.querySelectorAll(".product");
const cart = document.querySelector(".cart__products");

allCard.forEach((card) => {
  const cardMinusBtn = card.querySelector(".product__quantity-control_dec");
  const cardPlusBtn = card.querySelector(".product__quantity-control_inc");
  const cardCounter = card.querySelector(".product__quantity-value");
  const addCartBtn = card.querySelector(".product__add");
  const cardtitle = card.querySelector(".product__title");
  const cardImg = card.querySelector(".product__image");
  card.addEventListener("click", (e) => {
    if (e.target === cardMinusBtn) {
      if (cardCounter.textContent > 1) {
        cardCounter.textContent = +cardCounter.textContent - 1;
      }
    }
    if (e.target === cardPlusBtn) {
      cardCounter.textContent = +cardCounter.textContent + 1;
    }

    if (e.target === addCartBtn) {
      if (cart.querySelector(`div[data-id="${card.dataset.id}"]`)) {
        const counter = cart.querySelector(`div[data-id="${card.dataset.id}"]`).querySelector(".cart__product-count");
        counter.textContent = +counter.textContent + +cardCounter.textContent;

        cardCounter.textContent = 1;
        return;
      }
      cart.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="cart__product" data-id="${card.dataset.id}">
        <img class="cart__product-image" src="${cardImg.src}">
        <div class="cart__product-count">${cardCounter.textContent}</div>
      </div>
      `
      );
      cardCounter.textContent = 1;
    }
  });
});
