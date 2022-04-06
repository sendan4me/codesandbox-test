import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<p>hello my world by Kenny</p>
`;
// //分割代入
// const myProfile = {
//   name: "kenny",
//   age: 38
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile1 = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}歳です。`;
// console.log(message3);

// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// //デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello();

/**
 * スプレット構文
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1)
// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sayHello();
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [...arr3] = arr2;
// //console.log(num1);
// console.log(...arr3);

/**
 * 三項演算子
 */

const var1 = 1 > 0 ? "true" : "false";
console.log(var1);

const num = 1500;
//console.log(num.toLocaleString());
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "Please input numeric";
console.log(formattedNum);
