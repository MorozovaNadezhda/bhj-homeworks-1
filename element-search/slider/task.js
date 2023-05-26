const slides = document.querySelectorAll(".slider__item");
const prevBtn = document.querySelector(".slider__arrow_prev");
const nextBtn = document.querySelector(".slider__arrow_next");
const activeClassName = "slider__item_active";

prevBtn.addEventListener("click", () => {
  const currentIdx = Array.from(slides).indexOf(Array.from(slides).filter((el) => el.classList.contains("slider__item_active"))[0]);
  if (currentIdx == 0) {
    slides[currentIdx].classList.remove(activeClassName);
    slides[+slides.length - 1].classList.add(activeClassName);
    return;
  } else {
    slides[currentIdx].classList.remove(activeClassName);
    slides[currentIdx - 1].classList.add(activeClassName);
    return;
  }
});
nextBtn.addEventListener("click", () => {
  const currentIdx = Array.from(slides).indexOf(Array.from(slides).filter((el) => el.classList.contains("slider__item_active"))[0]);
  if (currentIdx == +slides.length - 1) {
    slides[currentIdx].classList.remove(activeClassName);
    slides[0].classList.add(activeClassName);
    return;
  } else {
    slides[currentIdx].classList.remove(activeClassName);
    slides[currentIdx + 1].classList.add(activeClassName);
    return;
  }
});
