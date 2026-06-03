let btn = document.querySelector("#add");
let inp = document.querySelector("input");
let tasksDiv = document.querySelector(".tasks");

let arr = [];

console.log("outer->", arr);

let ui = () => {
  arr.forEach((value) => {
    tasksDiv.innerHTML += `<div class="li">
            <h2>${value}</h2>
            <button onclick={onDelete()} id="del">delete</button>
          </div>`;
  });
};

btn.addEventListener("click", () => {
  let value = inp.value;
  arr.push(value);

  tasksDiv.innerHTML = null;
  ui();

  inp.value = "";
});

let onDelete = () => {
  console.log("delete...");

  //   delete logic

  arr.pop();
  tasksDiv.innerHTML = null;
  ui();
};
