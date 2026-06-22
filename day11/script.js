let form = document.querySelector("form");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let street = document.querySelector("#street");
let lm = document.querySelector("#lm");
let users = document.querySelector(".users");

let usersData = [];



form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userObj = {
    name: name.value,
    email: email.value,
    phone: mobile.value,
    street: street.value,
    landMark: lm.value,
  };

  usersData.push(userObj);

  form.reset();
});
