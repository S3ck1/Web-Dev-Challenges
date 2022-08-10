const decrementBtn = document.querySelector(".decrement-btn");
const incrementBtn = document.querySelector(".increment-btn");
const count = document.querySelector(".count");

decrementBtn.addEventListener("click", () => {
  if (count.textContent >= 1) {
    count.textContent--;
  }
});

incrementBtn.addEventListener("click", () => {
  count.textContent++;
});
