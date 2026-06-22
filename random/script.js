const btn = document.querySelector("button");
const main = document.querySelector("main");

let arr = ["Good", "Accha", "Thikhai", "Hmmm", "Bye", "Ok"];

let colors = ["red", "green", "blue", "pink", "gray", "yellow"];

// btn.addEventListener("click", () => {
//   let random = Math.random() * arr.length;
//   let number = Math.floor(random);

//   console.log(arr[number]);

//   const p = document.createElement("p");
//   p.textContent = arr[number];
//   p.style.color = colors[number];
//   main.append(p);
// });

btn.addEventListener("click", (events) => {
  console.log("button triggered...");
});

main.addEventListener("click", () => {
  console.log("main triggered...");
});

document.body.addEventListener("click", () => {
  console.log("body triggered...");
});
