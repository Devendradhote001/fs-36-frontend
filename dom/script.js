let box = document.querySelector(".boxes");

let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let pink = document.querySelector("#pink");
let blue = document.querySelector("#blue");

window.addEventListener("keydown", (e) => {
  console.log(e);
});

red.addEventListener("click", () => {j
  let div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = "red";

  box.appendChild(div);
});

yellow.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = "yellow";

  box.appendChild(div);
});

pink.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = "pink";

  box.appendChild(div);
});

blue.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = "blue";

  box.appendChild(div);
});
