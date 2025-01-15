const gap1 = 16;

const carousel1 = document.querySelector(".carousel1"),
  content1 = document.querySelector(".carousel__content1"),
  next1 = document.querySelector(".next1"),
  prev1 = document.querySelector(".prev1");
 


next1.addEventListener("click", e => {
  carousel1.scrollBy(width1 + 1, 0);

  if (carousel1.scrollWidth !== 0) {
    prev1.style.display = "block";
  }
  if (content1.scrollWidth - width1 - gap1 <= carousel1.scrollLeft + width1) {
    next1.style.display = "none";
  }
});
prev1.addEventListener("click", e => {
  carousel1.scrollBy(-(width1 + gap1), 0);
  if (carousel1.scrollLeft - width1 - gap1 <= 0) {
    prev1.style.display = "none";
  }
  if (!content.scrollWidth - width1 - gap1 <= carousel1.scrollLeft + width1) {
    next1.style.display = "block";
  }
});

let width1 = carousel1.offsetWidth;
window.addEventListener("resize", e => (width1 = carousel1.offsetWidth));



