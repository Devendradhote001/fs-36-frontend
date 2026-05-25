let arr = [
  {
    name: "Piyush",
    age: 78,
  },
  {
    name: "Riteshwar",
    age: 19,
  },
  {
    name: "Prateek",
    age: 25,
  },
];

let main = document.querySelector("main");

arr.forEach((elem) => {
  console.log(elem.age);
  main.innerHTML += elem.age;
});
