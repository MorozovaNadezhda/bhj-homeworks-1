const bigFontSizeClassName = "book_fs-big";
const smallFontSizeClassName = "book_fs-small";
const activeFontSizeClassName = "font-size_active";

const book = document.querySelector("#book");
const controls = document.querySelector(".book__control");
const fontSizesTogglers = controls.querySelectorAll(".font-size");

fontSizesTogglers.forEach((toggler) => {
  toggler.addEventListener("click", (e) => {
    e.preventDefault();
    fontSizesTogglers.forEach((toggler) => toggler.classList.remove(activeFontSizeClassName));
    toggler.classList.add(activeFontSizeClassName);
    if (toggler.dataset.size === "small") {
      book.classList.remove(bigFontSizeClassName);
      book.classList.add(smallFontSizeClassName);
      return;
    } else if (toggler.dataset.size === "big") {
      book.classList.add(bigFontSizeClassName);
      book.classList.remove(smallFontSizeClassName);
      return;
    } else {
      book.classList.remove(bigFontSizeClassName);
      book.classList.remove(smallFontSizeClassName);
    }
  });
});
