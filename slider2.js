const gap2 = 16;

const carousel2 = document.querySelector(".carousel2"),
  content2 = document.querySelector(".carousel__content2"),
  next2 = document.querySelector(".next2"),
  prev2 = document.querySelector(".prev2");
 


next2.addEventListener("click", e => {
  carousel2.scrollBy(width2 + 1, 0);

  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "block";
  }
  if (content2.scrollWidth - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carousel2.scrollBy(-(width2 + gap2), 0);
  if (carousel2.scrollLeft - width2 - gap2 <= 0) {
    prev2.style.display = "none";
  }
  if (!content.scrollWidth - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "block";
  }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));



