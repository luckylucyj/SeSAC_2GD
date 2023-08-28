//

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];
console.log(arr1);
console.log(arr2);

for (let el of arr1) {
  console.log(el);
}

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log(...arr1);
console.log(...arr2);
console.log(...[2, 3, 4]);

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr4);

// 1-2 문자열에 전개연산자 접근해보기
const str = "alliehigh"; //['a','b','c',....]
let strToArr = str.split("");
let strToArr2 = [...str];
console.log(strToArr);
console.log(strToArr2);

/* 
split(''): string to arr(split의 매개변수로 들어가는 문자열을 기준으로 배열로 변경) 
join(): arr to string
*/

console.log(str);
for (let el of str) {
  console.log(el); //문자열도 배열처럼 접근 가능
}

//1-3. 오브젝트에 전개연산자 사용하기
let me1 = {
  name: "ellie",
  height: 163,
  married: false,
  friend: null,
};

let me2 = {
  name: "진형",
  like: ["slepping", "놀기"],
  friend: {
    name: "지윤",
    hate: ["바퀴벌레", "매미"],
  },
  greeting: function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고요, 키는 ${this.height}입니다.`
    );
  },
};

let me = {
  ...me1,
  ...me2,
  gender: "F",
};
console.log(me);
console.log(me.name);
me.greeting();

const word1 = "abc";
const word2 = "xyz";

const word3 = word1.concat(word2).split("");
const word4 = [...word1, ...word2];

//위에 두개는 내가 한거-am 11:15

const word5 = (word1 + word2).split("");
const word6 = word1.split("").concat(word2.split(""));

console.log(word3);
console.log(word4);
console.log(word5);
console.log(word6);

/* 2. 구조 분해 할당 */
// 2-1. 배열의 구조 분해 할당
const arr5 = ["tomato", "kiwi", "banana"];
const [val1, kiwi, banana] = arr5;
console.log(val1);
// let val1=arr5[0];
// let kiwi=arr5[1];
// let banana=arr5[2];

const arr6 = ["빨강", "주황", "노랑", "분홍"];
const [red, orange, , pink] = arr6;
// 요소보다 선언된 변수의 갯수가 많아도
//error가 발생하지 않아요! undefined!
const [v1, v2, v3 = "default", v4, v5 = "green"] = arr6;
console.log(pink);
console.log(v5);

// 변수 교환해보기
let value1 = "second";
let value2 = "first";

// value1=value2;//v1 first
// value2=value1;//v2 first

let temp;
temp = value1;
value1 = value2;
value2 = temp;
console.log(value1, value2);

//구조 분해 할당을 이용해서 교환하기
value1 = "second";
value2 = "first";
[value1, value2] = [value2, value1];
console.log(value1, value2);

//이게 좀더 간편하고 알아보기 쉬움-am 11:33

//2-2 오브젝트의 구조 분해 할당
let obj = {
  title: "제목",
  content: "내용",
  num: 0,
};
console.log(obj.title);
console.log(obj["title"]);
// 대괄호로 불러들일 때 키값을 괄호안에 넣어둬야 한다. -am 11:36

const { num, content, title } = obj;
console.log(num);
console.log(content);
console.log(title);

// const {t1,c1, n1}=obj;
// console.log(t1); //key와 다른 이름으로 할당하면 undefined

//키와 다른 이름으로 할당하는 방법
const { title: t2, content: c2, num: n2 } = obj;
console.log(t2);

const { key5, key2, ...obj2 } = {
  key1: "v1",
  key2: 2,
  key3: "v3",
  key4: "v4",
  key5: 5,
};

console.log(key2, key5);
console.log(obj2);

/* ....rest */
function test(...val) {
  const [a, b, c, ...rest] = val;
}

// test(1,2,3,4,5,6,7);
// const q=1;
// const b=2;
// const c=3;
// const rest
function test(...val) {
  const [a, b, c, ...rest] = val;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}
//여러개의 매개변수를 넣을 수도 있다.am 11:47

test(1, 2, 3, 4, 5, 6, 7, 8, 9);

// quiz
//  매개변수가 몇 개 들어오든 합해주는 함수 addNumber
function addNumber(...arr) {
//   console.log(arr);
  //arr=[1,2,3,4,5]
  let sum = 0;
  arr.forEach((el) => {
    sum = sum + el;
  });
  return sum;
  //for문안에서 return하면 안됨-포문이 끝나고나서 return하는게 인지상정-pm 12:28
  //foreach할 때 each가 Each다. 잘못 적었더니 에러 났다-pm 12:30
}
console.log(addNumber(1, 2, 15, 20, 25));
const result=addNumber(1,2,3,4,5,6);
console.log(result);

function introduce(name, like='빵', hate, goodAt){
    console.log(`내 이름은 ${name}입니다.`);
    console.log(`좋아하는 것은 ${like}입니다.`);
    console.log(`싫어하는 것은 ${hate}입니다.`);
    console.log(`저는 ${goodAt}을 잘합니다.`);
}

introduce('a','b','c','d','e');