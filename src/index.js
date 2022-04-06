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
//分割代入
const myProfile = {
  name: "kenny",
  age: 38
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

const myProfile1 = ["じゃけぇ", 28];

const message3 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}歳です。`;
console.log(message3);

const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);

//デフォルト値、引数など
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
sayHello();
