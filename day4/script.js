let inp = document.querySelector("input");v
let btn = document.querySelector("button");
console.log("btn", btn0); v7

btn.addEventListener("click", () => {
  if (inp.getAttribute("type") == "password") {
    inp.setAttribute("type", "text");
    btn.textContent = "Hide";
  } else {
    inp.setAttribute("type", "password");
    btn.textContent = "Show";
  }
});
