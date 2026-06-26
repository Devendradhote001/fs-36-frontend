// const div = document.createElement("div");

// const h1 = document.createElement("h1");
// h1.setAttribute("id", "txt");
// h1.textContent = "hello";

// div.append(h1);

// document.body.append(div);

const div = React.createElement(
  "div",
  {},
  React.createElement("h1", { id: "txt" }, "hello")
);
console.log(div);
