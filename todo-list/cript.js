let btn = document.querySelector("#add");
let inp = document.querySelector("input");
let tasks = document.querySelector(".tasks");

btn.addEventListener("click", () => {
  let value = inp.value;

  if (!value) return 

    tasks.innerHTML += `      <div class="li">
        <h2>${value}</h2>
        <div>
          <button id="edit">Edit</button>
          <button id="del">Delete</button>
        </div>
      </div>`;

  inp.value = "";
});
