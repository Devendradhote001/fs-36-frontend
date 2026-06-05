let btn = document.querySelector("#add");
let inp = document.querySelector("input");
let tasksDiv = document.querySelector(".tasks");

let arr = [];

let chacha = () => {
  tasksDiv.innerHTML = null;
  arr.forEach((value, index) => {
    tasksDiv.innerHTML += `<div class="li">
            <h2>${value}</h2>
            <button onclick={deleteTask(${index})} id="del">delete</button>
          </div>`;
  });
};

btn.addEventListener("click", () => {
  let value = inp.value;

  if (!value) return;

  arr.push(value);

  chacha();

  inp.value = "";
});

function deleteTask(index) {
  arr.splice(index, 1);

  chacha();
}
