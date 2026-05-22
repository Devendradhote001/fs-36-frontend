let h1 = document.querySelector("h1");

let btn = document.querySelector("button");

let toggle = true;

btn.addEventListener("click", () => {
  if (toggle) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";

    toggle = false;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    toggle = true;
  }
});
