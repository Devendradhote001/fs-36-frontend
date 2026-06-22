const main = document.querySelector("main");
const samay = document.querySelector("#samay");
const scoree = document.querySelector("#scoree");

const box = document.querySelector(".box");
const btn = document.querySelector("button");

let interval;
let time = 0;
let score = 0;

btn.addEventListener("click", () => {
  let mH = main.clientHeight;
  let mW = main.clientWidth;

  interval = setInterval(() => {
    time += 1;
    samay.textContent = time;

    let rY = Math.random() * mH;
    let rX = Math.random() * mW;

    box.style.top = `${rY}px`;
    box.style.left = `${rX}px`;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
});

box.addEventListener("click", () => {
  score += 1;
  scoree.textContent = score;
});
