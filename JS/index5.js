/* 자바스크립트가 기본적으로 가지고 있는 객체
String, Number, Array, Date, Math, Object, ...
 */
// Date 객체
// 시간, 날짜정보를 얻었을 때 사용
let now= new Date();
console.log(now);
console.log(now.getFullYear(), "연도");
console.log(now.getMonth(), "월"); // 0~11 (7월이면 6)
console.log(now.getDate(), "일"); // 1~31
console.log(now.getHours(),"시"); // 0(자정)~23
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds() , "ms");
console.log(now.getDay(), "요일");

// Date 객체를 이용해 오늘 요일을 얻고,
// swithch-case문과 if문으로 오늘이 평일/주말 구별해보자
//-pm 2:57

// let today= new Date();
// if(today.getDay() === "토요일" || today.getDay() === "일요일"){
//     console.log('주말이네요');
// }else{
//     console.log('평일이에요');
// }

// console.log('today2');
// let today2 = new Date();
// switch(today2){
//     case "토요일":
//         console.log('주말 입니다.');
//     case "일요일":
//         console.log('주말 입니  다.');
//     default: 
//     console.log('평일 입니다.');
// }
//내가 한 코드-pm 2:55

const day= new Date().getDay();
// if
if(day===0 || day===6){
console.log('주말');
}else{
    console.log('평일');
}

//switch

switch(day){
    case 0: 
    case 6:
    console.log('주말') ;
    break;

    default:
        console.log('평일');
    break;
}
//switch 할때는 꼭 break;써줄것-pm 3:21

//삼항연산자
console.log(day === 0 || day === 6? "주말":"평일");

// let now=new Date();
let past= new Date(2020, 1, 13, 10, 10, 10);
//new Date(y, m, d, h, m,s)
// 시, 분, 초가 설정되지 않았을 때는 00:00:00
console.log(past);
//초기화 시킬 수 있음-pm 3:23

/* math */
// 수학적인 상수나 함수
console.log(Math.PI);
console.log(Math.E); //자연수
console.log(Math.SQRT2);

console.log(Math.max(100, -1, 30, 20, 5));
console.log(Math.min(100, -1, 30, 20, 5));

console.log(Math.ceil(5.155));
//ceil 천장이라는 뜻, 올림
console.log(Math.floor(5.155));
//floor 바닥 // 내림
console.log(Math.round(5.6));
//반올림
//-pm 3:27

// 난스 생성 - >random number
//0<= num<1;
console.log(Math.random());

// 0<= num <10
console.log(Math.random()*10);

//0.xxx ~ 9.xxx
console.log(Math.floor(Math.random()*10));

// 0 <=x <= 10;
//0 <= x <11
// 0.xxx~10.xxx
console.log(Math.floor(Math.random()*11));


//20<=x<22; 정수 20<= x <23
//0 ~ 3
//0<=x<1
//0<=x<3
console.log(MAth.floor(MAth.random()*3));
console.log(MAth.floor(MAth.random()*3)+20);

//Object
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

console.log(Object.keys(areaNUm));
console.log(Object.values(areaNUm));