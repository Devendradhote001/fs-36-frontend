let arr = [
  {
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Piyush",
    age: 78,
  },
  {
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Riteshwar",
    age: 19,
  },
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Prateek",
    age: 25,
  },
];

let main = document.querySelector("main");

let count = 5;

arr.forEach((elem) => {
  main.innerHTML += `<div class="box">
        <div class="img">
          <img
            src=${elem.url}
            alt=""
        </div>
          />
        <h2>Name - ${elem.name}</h2>
        <p>Age - ${elem.age}</p>
      </div>`;
});
