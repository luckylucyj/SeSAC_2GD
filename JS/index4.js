/* 함수 선언문
function 함수이름(매개변수){
    함수내용;
}
함수 이름은 camelCase를 이용!
*/

helloWorld1();
console.log("----");

function helloWorld1() {
  console.log("hello world1");
}

helloWorld1();

function helloWorld2() {
  return "hello world2";
}
/* return
-함수의 반환값, 함수 내부 코드의 최종값
*/
console.log(helloWorld2());

function add(num1, num2) {
  console.log(num1 + num2);
}
function add2(num1, num2) {
  console.log("여기만 실행됩니다.");
  return num1 + num2;
  console.log("여기는 실행되지 않아요");
}
add(5, 10);
add2(3, 2);
// helloWorld3();
// 함수 표현식은 선언 이후에 호출해주어야 합니다!

// 함수 표현식
const helloWorld3 = function () {
  console.log("hello world3");
};
helloWorld3();

// 화살표 함수 == 함수표현식
// console.log(helloWorld4());

const helloWorld4 = () => {
  return "hello World4!!";
};
console.log(helloWorld4());

//매개변수가 있는 함수
function sayHello1(name) {
  return "안녕하세요. " + name + " 님";
}
console.log(sayHello1("진형"));

function sayHello2(text, name) {
  console.log(`${text}!! ${name}님`);
}
let 안녕 = "안녕하세요";
sayHello2(안녕, "allie");

function sayHello3(text, name) {
  console.log(`${text}!! ${name}님`);
}
sayHello3("안녕하세요", "지윤");

// console.log("ffff");
// function multifly(num1, num2) {
//   console.log(num1 * num2);

//   return "안녕하세요";
// }

// multifly(3, 3); // 콘솔창에 9가 찍힙니다.
// console.log(multifly(3, 3)); // 콘솔창에 "안녕하세요"가 찍힙니다.
// let value = multifly(2, 2);
// console.log(value); // 안녕하세요
// console.log(multifly(2, 3));

// function square (num1){
//    console.log( num1 ** 2 );
// }
// square(2);

// function multifly(num1, num2){
//     console.log( num1 * num2);
// }
// multifly(3,10);

// function square(num1) {
//   console.log(num1 ** 2);
// }
// square(4);

// 실습
function multifly(num1, num2){
    // console.log(multifly(2,3));
    console.log('type1');
    // console.log(num1* num2);
    return num1 * num2;
//    return  num1 * num2;
}
// let a = 5;
// multifly(2,3)
multifly(2,3);
console.log(multifly(2,3))

// multifly(2,2) == 4
// console.log(multifly(2,2));

function square(num){
 console.log(num **2);
}
square(12);