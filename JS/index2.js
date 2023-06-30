// console.log('안녕하세요');

// alert('안녕하세요!');
// confirm('js 재밌지 않나요?');
// prompt('당신의 이름은?');

/* 1. 문자열, String */
let myName="진형";
let mycity='seoul';
console.log(myName);
// 내 이름은 진형이고요, 사는 곳은 seoul이에요.

console.log("내 이름은", myName, "이고요, 사는 곳은", mycity, "이예요");
console.log("내 이름은 "+ myName + "이고요, 사는 곳은 "+ mycity + "이예요");
console.log(`내 이름은 ${myName}이고요, 사는 곳은 ${mycity}이예요`);

let myInfo1 = "내 이름은 "+ myName + "이고요, 사는 곳은 "+ mycity + "이예요";
let myInfo2 = `내 이름은 ${myName}이고요, 사는 곳은 ${mycity}이예요`;
// let myInfo3 = "내 이름은", myName, "이고요, 사는 곳은", mycity, "이예요";
// > 쉼표를 이용해서 문자열을 연결하는 것은 안됩니다!
console.log(myInfo1);
console.log(myInfo2);

/* 2. Number */
// 연산 가능

let num1 = 100;
let num2 = 3.14;

console.log(num1 + num2);
console.log(myName + num1);
// 숫자와 문자열의 덧셈 = 숫자가 문자열 취급되어 연결됨
console.log(myName - num1);
// 숫자와 문자열의 뺄샘= NaN(not a Number)

/* 3. Boolean */
let checked=true;
let isShow=false;

console.log(checked);
console.log(isShow);

/* 4. undefined & null */
let undef;
console.log(undef);

let empty = null;
console.log(empty);

/* 5. Array 배열 */
let fruits=["orange", "kiwi","mango", "apple"];
let fruits2 = new Array('orange', 'kiwi', 'mango', 'apple');
console.log(fruits);
console.log(fruits2);

console.log(fruits[2]);

// 이차원 배열, 배열 안에 배열이 있는 상태
let kr = [
    ['가', '나','다'],
    ['갸', '냐', '댜'],
    ['거','너','더']
];

console.log(kr[0][1]);
console.log(kr[2][2]);

const letters = [
    ["사", "스", "자", "크"],
    ["진", "안", "리", "이"],
    ["가", "수", "림", "나"],
    ["아", "으", "차", "운"],
];

console.log(letters[3][0]+letters[1][3]+letters[0][1]+letters[0][3]+letters[2][2]);

/* 6. object */
// 배열은 순서가 있는 반면에
// 오브젝트는 키-값 형태로 저장, 키의 이름으로 접근
let cat={
    name: '나비',
    age: 1,
    isCute: true,
};

console.log(cat);
// 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
// 대괄호 표기법
console.log(cat['name']);
console.log(cat['age']);
console.log(cat['isCute']);

cat.name='딸랑이';
console.log(cat);

cat['gender']='f';
console.log(cat);
// 순서는 중요하지 않음 -object에 추가되서 나옴-pm 4:15

cat['parents']=['mom','dad'];
console.log(cat);
console.log(cat.parents[0]);

let introduce={
    name: '김지윤',
    age: 28,
    gender: 'f',
    live : 'seoul',
    인사법: function(){
        return '안녕하세요';
    }
}
console.log(introduce);

console.log('-----typeof-----');
let und;
console.log(typeof '문자');
console.log(typeof 245);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof und);
console.log(typeof function () {});
// let likeNum = prompt('가장 좋아하는 숫자는?');
// likeNum=Number(likeNum);
// console.log(likeNum + 10);

let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));
// 저 콘솔 되는 순간만 string이 됨-pm 4:36

console.log('-----typeof1-----');
console.log(typeof str1.toString());

// 2. 숫자
let n1 =true; //boolean
let n2 = false; //boolean
let n3= 123; //number
let n4="3.14"; //string

console.log(Number(n1)); //true -> 1
console.log(Number(n2)); //false -> 0

console.log(typeof Number(n4)); //3.14
console.log(Number(n4)); //3.14
console.log(typeof parseInt(n4)); // 정수형 변경-pm 4:39
console.log(parseInt(n4));
