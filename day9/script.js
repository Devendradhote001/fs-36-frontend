let arr = [];

let btn = document.querySelector("button");
let div = document.querySelector("div");

let users = [
  {
    name: "Rahul",
  },
  {
    name: "Rahul",
  },
  {
    name: "Rahul",
  },
  {
    name: "Rahul",
  },
];

btn.addEventListener("click", () => {
  users.forEach((value) => {
    div.innerHTML += `<h1>${value.name}</h1>`;
  });
});
