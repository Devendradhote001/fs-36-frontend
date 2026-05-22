let arr = ["rahul", "abhijeet", "kamlesh", "jitendra", "modi", "melody"];

let img = document.createElement("img");
let div = document.querySelector("div");
let btn = document.querySelector("button");

img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"
);

div.appendChild(img);






btn.addEventListener("click", () => {
  let box = document.createElement("div");
  box.style.height = "100px";
  box.style.width = "100px";
  box.style.backgroundColor = "red";

  document.body.appendChild(box);
});
