const button = document.querySelector("button");

const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

let logic = () => {
  red.style.backgroundColor = "red";

  setTimeout(() => {
    red.style.backgroundColor = "white";
    yellow.style.backgroundColor = "yellow";
  }, 2000);

  setTimeout(() => {
    yellow.style.backgroundColor = "white";
    green.style.backgroundColor = "green";
  }, 4000);
};

button.addEventListener("click", () => {
  logic();

  setInterval(() => {
    green.style.backgroundColor = "white";
    logic();
  }, 6000);
});
