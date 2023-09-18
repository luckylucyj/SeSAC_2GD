function print(a: number, b: number): void {
  console.log(a);
  console.log(b);
}
print(1, 2);
// print(1,2,3);
// print(1);
//매개변수에서는

function print2(a: number, b?: number, c?: number): void {
  console.log("----print2----");
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(1, 2, 3);
print2(1, 2);
print2(1);

function print3(a: number, b: number, c = 5) {
  console.log(a);
  console.log(b);
  console.log(c);
}

//아무것도 리턴해주지 않을 때는 void쓰면 됨, 리턴값이 없어서 텅비어서 보이드라고 함-pm 2:13
print3(1, 2);
print3(1, 2, 3);

function sayHello(): void {
  console.log("안녕");
}

function concatStr(a: string, b: string): string {
  return a + b;
}
// 이건 a도 문자열,b도 문자열이므로 리턴값도 문자열이기때문에 데이터종류가 문자열임-pm 2:17
console.log(concatStr("안녕", "haseyo"));

function circleArea(r: number): number {
  return r * r * Math.PI;
}

const squareArea = (a: number, b: number): number => {
  return a * b;
};

const triangleArea = (w: string, h: string) => (Number(w) * Number(h)) / 2;
console.log("원의 넓이 :" + circleArea(10));
console.log("사각형의 넓이:" + squareArea(3, 4));
console.log(`삼각형의 넓이 :${triangleArea("3", "4")}`);

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const jh: Greet = {
  name: "allie",
  hi() {
    return "hi my name is " + this.name;
  },
  bye(a) {
    return `작별인사를 4{a}번 했습니다.`;
  },
};

console.log(jh.hi());
console.log(jh.bye(5));
// never
function goingon(a: number): never {
  while (true) {
    console.log("go");
    // if(a>10) break;
  }
}

// 실습문제-pm 2:55
// function sum1(a:number, b:number): number{
// return a + b ;
// }

// console.log(sum1(5,11));
function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(5, 11);

// function sum2(a:number, b:number): number{
//   return a+b;
// }
// console.log(sum2(1,2,3,4,10));

function sum2(...num: number[]) {
  let sum = 0;
  // num//사실은 배열
  num.forEach((el) => (sum += el));
  return sum;
}
console.log(sum2(1, 2, 3, 4, 5, 10));

//오버로딩
/* 오버라이딩 vs.오버로딩 */
/*
1. 오버라이딩 overriding 
-클래스의 상속에서의 개념
-하위 클래스가 상위 클래스에게 상속 받을 때, 메소드를 '재정의'하는 방법
-상위 클래스와 같은 이름의 메소드를 사용하지만 다른 내용으로 사용 가능하다.

2. 오버로딩
-함수에서 매개변수의 개수와 타입이 다를 수 있음
-함수의 리턴 타입이 다를 수 있음
-같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
(비슷한 기능일 때만 사용 가능)
-pm 3:19
*/

// function add(x:number|string, y:number|string): number|string{
//   return x+y;
// }->이건 의도된 잘못된 코딩-오류남-pm 3:21

function add(x:string, y:string): string;
function add(x:number, y:number): number;
function add(x:any, y:any){
  return x+y;
}
console.log(add('hello','world'));
console.log(add(10,10));
//-pm 3:29