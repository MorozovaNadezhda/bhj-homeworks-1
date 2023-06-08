const elems = document.querySelectorAll(".reveal");

function elemInViewport(elem, full) {
  var box = elem.getBoundingClientRect();
  var top = box.top;
  var left = box.left;
  var bottom = box.bottom;
  var right = box.right;
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;
  var maxWidth = 0;
  var maxHeight = 0;
  if (full) {
    maxWidth = right - left;
    maxHeight = bottom - top;
  }
  return Math.min(height, bottom) - Math.max(0, top) >= maxHeight && Math.min(width, right) - Math.max(0, left) >= maxWidth;
}

window.addEventListener("scroll", () => {
  elems.forEach((el) => {
    if (elemInViewport(el)) {
      console.log(el);
      el.classList.add("reveal_active");
    } else {
      el.classList.remove("reveal_active");
    }
  });
});
