let previousBtn = document.querySelector(".btn-previous");
let nextBtn = document.querySelector(".btn-next");
let slideNumbersContainer = document.querySelector(".slide-numbers-container");
let allSlideButtons = slideNumbersContainer.childNodes;

img1 = "url('./images/1.png')";
img2 = "url('./images/2.png')";
img3 = "url('./images/3.png')";
img4 = "url('./images/4.jpg')";
img5 = "url('./images/5.png')";
let imagesArray = [img1, img2, img3, img4, img5];
let imagesCant = imagesArray.length - 1;

let slideNumbersButtons = [];
for (let i = 0; i <= imagesCant; i++) {
  slideNumbersButtons[i] = document.createElement("button");
  let buttonNumber = i + 1;
  slideNumbersButtons[i].innerHTML = buttonNumber;
}

for (let i = 0; i < imagesArray.length; i++) {
  slideNumbersContainer.appendChild(slideNumbersButtons[i]);
}

//functions for change buttons style
function changeBorder(style, btnIndex) {
  if (style == "current") {
    slideNumbersButtons[btnIndex].style.border = "inset";
  }
  if (style == "default") {
    slideNumbersButtons[btnIndex].style.border = "solid";
  }
}

function resetButtonsStyle() {
    allSlideButtons.forEach((button) => {
      button.style.border = "solid"
    });
  }  

//change background given an image index
function changeBackground(imgIndex) {
    document.querySelector(".image-container").style.backgroundImage =
    imagesArray[imgIndex];
}

let currentImg = 0;
changeBorder("current", currentImg);

nextBtn.addEventListener("click", () => {
  if (currentImg != imagesCant) {
    changeBorder("default", currentImg);
    currentImg++;
    changeBackground(currentImg);
    changeBorder("current", currentImg);
  }
});

previousBtn.addEventListener("click", () => {
  if (currentImg != 0) {
    changeBorder("default", currentImg);
    currentImg--;
    changeBackground(currentImg);
    changeBorder("current", currentImg);
  }
});

allSlideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentButton = button.textContent - 1;
    resetButtonsStyle();
    changeBorder("current", currentButton);
    currentImg = currentButton;
    changeBackground(currentImg);
  });
});
