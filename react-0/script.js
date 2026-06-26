// // // console.log("hello");

// // // let a = 40;

// // // let sum = (num1, num2) => {
// // //   let response = num1 + num2;
// // //   return response;
// // // };

// // // let c = sum(46, 91);

// // // let fn = (...args) => {
// // //   console.log(args);
// // //   //   return a;
// // // };

// // // let res = fn(4, 6, 7, 8, 9);

// // // console.log(res);

// // // destructuring...

// // // let { age, address } = obj;

// // // console.log(age, address);

// // // let p = {
// // //   id: 1,
// // //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// // //   price: 109.95,
// // //   description:
// // //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// // //   category: "men's clothing",
// // //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// // //   rating: {
// // //     rate: 3.9,
// // //     count: 120,
// // //   },
// // // };

// // // let {
// // //   rating: { rate },
// // //   id,
// // //   price,
// // // } = p;

// // // console.log(rate, id, price);

// // // let arr = [
// // //   "zeel",
// // //   "toi",
// // //   {
// // //     name: "rahul",
// // //   },
// // // ];

// // // let arr = [56, 90];

// // // let [point, score] = arr;

// // // console.log(score, point);

// // let fn = ({ name, age }) => {
// //   console.log(name, age);
// // };

// // fn({
// //   name: "Raghav",
// //   age: 89,
// //   address: "Saket nagar",
// //   company: "Google",
// // });

// // // let obj = {
// // //   name: "Raghav",
// // //   age: 89,
// // //   address: "Saket nagar",
// // //   company: "Google",
// // // };

// // // console.log(obj);

// // let arr1 = [2, 4, 5, 6];

// // let arr2 = ["hello", "polo", "taigun"];

// // let newArr = arr1;

// // console.log(newArr);

// // let a = 70;

// // console.log(a);

// // setTimeout(() => {
// //   console.log("chle jaa");
// // }, 0);

// // console.log("ajaaa");

// // promises------

// console.log("start");

// const prom = new Promise((res, rej) => {
//   let party = false;

//   if (party) {
//     return res({
//       data: {
//         nam: "TAj",
//       },
//     });
//   }
//   return rej("no, pese nahi hai...");
// });

// console.log("mid");

// prom.then((val) => {
//     console.log("then->", val);
//   })
//   .catch((err) => {
//     console.log("catch->", err);
//   });

// console.log(prom);

// console.log("end");

// let suspense = new Promise((res, rej) => {
//   let bool = false;

//   if (bool) {
//     return res("ok");
//   }

//   return rej("error");
// });

// suspense.then((val) => console.log(val)).catch((err) => console.log(err));

// new version async/await

// let fn = () => {
//   return 30;
// };

// console.log(fn());

// let fn = async () => {
//   try {

//     let res = await suspense;
//     console.log(res);

//   } catch (error) {

//     console.log(error);

//   }
// };

// fn();

console.log("first");

let response = fetch("https://fakestoreapi.com/products");

console.log("second");

setTimeout(() => {
  console.log("fourth");
}, 2000);

const res = async () => {
  console.log("hello");
  let result = await response;
  console.log("third");
};

console.log(response);

console.log(res());

console.log("last");
