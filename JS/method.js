//문자열 관련 메소드
/*
- length(속성)
- toUpperCase
- toLowerCase
- trim()
- slice()
- replace()
- replaceAll()
- repeat()
- indexof()
- split()
*/

let str1="   Strawberry Moon   ";
// 인덱싱
console.log(str1[4]);
console.log(str1[3]+str1[15]+str1[17]);

// 문자열의 길이(공백 포함)
console.log(str1.length);

//양쪽 공백 없애기
let str2=str1.trim();
console.log(str2);
console.log(str2.length);

console.log('대문자로 변경'+ str2.toUpperCase());

console.log('소문자로 변경'+ str2.toLowerCase());

let fruit = 'applemango';
// indexOf('문자열');
console.log(fruit.indexOf('p'));
console.log(fruit.indexOf('mango'));
console.log(fruit.indexOf('z'));// 없는 문자는 -1을 반환함 -am 11:39

// charAt(인덱스 번호)
console.log(fruit.charAt(3));

//slice(인덱스 번호)
console.log(fruit.slice(5)); //5부터 끝까지 출력
console.log(fruit.slice(3,6)); //3부터 5까지 출력
console.log(fruit.slice(-1));
console.log(fruit.slice(-3));// 문자열은 변하지 않아요
//am 11:42

let msg = "Wow~ It is so amazing!!!"
/* replace replaceAll */
console.log(msg.replace('o','a'));
console.log(msg.replaceAll('o','ooo'));
console.log(msg.replace('Wow','hey'));
console.log(msg); // 문자열은 변하지 않아요

let date= "2023.07.03";
//2023-07-03
console.log(date.replaceAll('.','-'));
// 반복
console.log('a'.repeat(5));
// split('') -> 문자열을 배열로 변경하는 메소드
// let date = "2023.07.03"
// [2023, 07, 03]
const dateArr= date.split('');//.까지도 배열에 넣음-am 11:51
console.log(dateArr);

// ================== 여기부터 배열 method

let arr1 = [1, 2, 3, 4, 5];
arr1.push('six');
arr1.push('seven');
console.log(arr1);

arr1.pop();
console.log(arr1.pop());
console.log(arr1);

let arr2=[' quakka', 'puppy','rabbit','hamster'];
arr2.unshift('고양이');
arr2.unshift('쥐');
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

arr2[5]='기린';
arr2[1]='쿼카';
arr2[7]='cat';//empty값이 출력될 수 있기 때문에 주의-pm12:32
console.log(arr2);

arr2=[' quakka', 'puppy','rabbit','hamster'];
/* 배열.includes(요소)
배열에 요소가 있는지 검사! -> true || false 반환*/
console.log(arr2.includes('puppy'));
console.log(arr2.includes('cat'));

console.log(arr2.length);
console.log(arr2.indexOf('puppy'));

arr1=[1,2,3,4,5];
// reverse 기존의 배열 변경시킴, 배열의 순서 뒤집어주는 메소드
arr1.reverse(); //[5,4,3,2,1]
console.log(arr1);

let str3= arr1.join('-') //54321->join 내부에 뭘 넣느냐에 따라 요소마다 넣어줌-pm 12:38
console.log(str3);

/* 반복 */
let arr3 = [6,7,8,9,10];
let alphabets= ['a','b','c','d','e','f'];

for(let i=0; i < arr3.length; i++){
    console.log(arr3[i]);
}

for(let number of arr3){
    console.log(number);
}

for(let alphabet of alphabets){
    console.log(alphabet);
}
 
/* forEach 메소드
배열.forEach(function(요소, 인덱스, 배열){}) 
배열.forEach((value, index, array)=>{}) 
*/
console.log('어레이3')
arr3.forEach(function(number,index,arr){
    console.log(number);
    // console.log(index);
    // console.log(arr);
})

console.log('알파벳')
alphabets.forEach((val, num, array)=>{
    console.log(val);
    console.log(num);
    console.log(array);
})

//-pm 12:50

/* 콘솔값 찍어보면 한요소의 값이 3줄씩 나옴(
    value 값
    인덱스 값
    배열 값
)
- pm 02:23
*/

// map, filter, find!
/*
1. map >> 배열 내의 모든 원소에 대해 함수 호출한 결과를 모아서 새로운 배열 반환
2. filter >> 조건을 맍고하는 요소들을 "배열"로 반환
3. find >>조건을 만족하는 요소중 첫번째 "값"으로 반환
매개변수로 익명함수 (함수표현식, 화살표함수)
배열 자체를 변경시켜주지 않기 때문에 새로운 변수에 저장해서 사용!
 */

/* map */
// [].map(function(value, index, array){})
console.log('map')
let arr4 = [1,2,3,4,5];
// arr4.map(function(num){
//     return num * 2;
// });

arr4.map((num)=> num * 2);

console.log(arr4);
console.log('맵을 화살표 함수')

//-pm 2:11

const multiArr= arr4.map(function(el){
    return el * 2;
});
console.log(multiArr);

/* filter */
arr2=['quakka', 'puppy', 'rabbit', 'hamster'];
arr2.filter(function(el){
    return el.length >=6;
})
console.log(arr2);

let six = arr2.filter(function(el){
    return el.length>=6;
})
console.log(six);
// length 걸때는 el에 걸기-pm 2:16

/* find */
let findResult = multiArr.find(function(el){
    return el > 7;
});

console.log(findResult);

/* 화살표 함수 */
let findResult2= multiArr.find((el)=> el>7);
//화살표 함수에는 중괄호를 쓰지 않아도 됨, 그리고 중괄호를 쓰지 않았을 때는 리턴이 필요없음-pm 2:20

/* for in */
console.log('for in')
const areaNum = {
    Seoul: "02",
    Incheon: "032",
    Daejeon: "042",
    Busan: "051",
    Ulsan: "052",
    Daegu: "053",
    Gwangju: "062",
    Jeju: "064",
  };

  const arr=['a','b','c','d'];
  for(let area in areaNum){
    // console.log(area);
    // areaNum.Seoul
    // areaNum['Seoul']
    //for in 접근할 때 대괄호 접근법으로 접근하기-pm 2:46

    console.log(areaNum[area])
    // area==seoul
    // -pm 2:48

  }