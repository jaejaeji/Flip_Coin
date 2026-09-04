
const button = document.getElementById("flipBtn");

const coin = document.getElementById("coin");

const resultText = document.getElementById("result");

const flipCountText = document.getElementById("flipCount");
const headCountText = document.getElementById("headCount");
const tailCountText = document.getElementById("tailCount");

let flipCountNumber = 0;
let headCountNumber = 0;
let tailCountNumber = 0;

const headPercentText = document.getElementById("headPercent");
const tailPercentText = document.getElementById("tailPercent");
let headPercent = 0;
let tailPercent = 0;

let rotation = 0;

button.addEventListener("click", function() {
  const result = Math.random() <
    0.5 ? "Heads" : "Tails";

  resultText.textContent = result;

  flipCountNumber += 1;
  flipCountText.textContent = flipCountNumber;

  //Start the animation
  coin.classList.remove("flip-heads","flip-tails");

  // Forces browser to recognize that the class was removed
  void coin.offsetWidth;

  // Add "flip" class again
  if (result === "Heads") {
    headCountNumber += 1;
    coin.classList.add("flip-heads");
  } else {
    tailCountNumber += 1;
    coin.classList.add("flip-tails");
  }

  // rotation += 1080;

  // if (result === "Tails") {
    // rotation += 180;
  // }

  // coin.style.transform = `rotateY(${rotation}deg)`;
  
  headCountText.textContent = headCountNumber;
  tailCountText.textContent = tailCountNumber;

  headPercent = (headCountNumber/flipCountNumber) * 100;
  tailPercent = (tailCountNumber/flipCountNumber) * 100;

    headPercentText.textContent = headPercent.toFixed(2);
  tailPercentText.textContent = tailPercent.toFixed(2);
});
  
