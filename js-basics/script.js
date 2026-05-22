let body = document.body;
let div = document.querySelector("div");
let btn = document.querySelector("button");

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.flexDirection = "column";
body.style.gap = "10px";
body.style.alignItems = "center";

div.style.height = "30%";
div.style.width = "20%";
div.style.borderRadius = "50%";

div.style.backgroundColor = "red";

let toggle = true;

btn.addEventListener("click", () => {
  if (toggle) {
    div.style.backgroundColor = "yellow";
    btn.textContent = "off";
    console.log("ok");
    toggle = false;
  } else {
    div.style.backgroundColor = "red";
    btn.textContent = "On";
    console.log("not ok");
    toggle = true;
  }
});
