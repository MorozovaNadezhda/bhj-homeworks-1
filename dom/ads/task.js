const activeRotatorClassName = "rotator__case_active";
const rotator = document.querySelector(".rotator");
const rotatorItems = rotator.querySelectorAll(".rotator__case");

setInterval(() => {
  const idx = Array.from(rotatorItems).indexOf(Array.from(rotatorItems).filter((item) => item.classList.contains(activeRotatorClassName))[0]);
  if (idx == rotatorItems.length - 1) {
    rotatorItems[idx].classList.remove(activeRotatorClassName);
    rotatorItems[0].classList.add(activeRotatorClassName);
    return;
  }
  rotatorItems[idx].classList.remove(activeRotatorClassName);
  rotatorItems[idx + 1].classList.add(activeRotatorClassName);
}, 1000);
