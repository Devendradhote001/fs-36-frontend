const btn = document.querySelector("button");
const inp = document.querySelector("input");
let main = document.querySelector("main");
const diff = document.querySelector("#diff");

let arr = JSON.parse(localStorage.getItem("arr")) || [];
console.log(arr);

let ui = () => {
  main.innerHTML = "";

  arr.forEach((elem) => {
    let h1 = document.createElement("h1");
    h1.textContent = elem;
    main.append(h1);
  });
};

ui();

btn.addEventListener("click", () => {
  console.log("running...");

  let value = inp.value;
  arr.push(value);
  localStorage.setItem("arr", JSON.stringify(arr));
  ui();
  inp.value = "";
});

let users = [
  {
    name: "rahul",
  },
  {
    name: "Piyush",
  },
  {
    name: "Prateek",
  },
];

localStorage.setItem("key", "value in string");
let lsd = localStorage.getItem("key");

// agr data convcer krna hoga to

localStorage.setItem("key", JSON.stringify(data));
let lsd1 = JSON.parse(localStorage.getItem("key"));
