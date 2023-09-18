//1. number type
let num: number = 1;
num = 2;

//처음에 설정할 때만 타입을 설정함-am 11:05

// 2. string type
let str1: string = "안녕하세요";
console.log(str1, num);

//3. boolean, null, undefined
let isTrue: boolean = true;
let undef: undefined;
const empty: null = null;

// 4. object
const obj1: object = {
  name: "jiyun",
};

// 5. array
let numArr: number[] = [1, 2, 3, 4, 5];
//배열의 요소들이 어떤 타입인지 설정해줘야 함-am 11:10
let arr2: string[] = ["a", "b"];
let arr3: Array<string> = ["a", "b"];

let arr4: Array<string | number> = [1, 2, 3, "apple", "kiwi"];
let arr5: (string | number)[] = [1, 2, 3, "apple", "kiwi"];

//boolean, null, number arr가 요소로 들어가는 배열 arr6

let arr6: Array<boolean | null | number[]> = [true, null, [1, 2, 3]];
let arr7: (boolean | null | number[])[] = [true, null, [1, 2, 3]];
console.log(arr6[0]);
arr6[1] = [5, 6, 7];
// arr6[2]="str"; //선언할 때 부여한 type이 아니라면(string) 오류를 보여줌-am 11:17

let arrAny:any[]=[1,2,'apple',null, true, undefined];//any는 어떤 타입이든 들어갈 수 있음-am 11:18

