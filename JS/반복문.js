/* 
for문
for(변수 초기화; 조건식(어디까지 증가? 감소?);증감){
    반복할 코드
}
index++; index= index+1; i+=1;
*/
// for(let i=0; i<10; i=i+1){
//     console.log('안녕하세요 😊');
// }

// for(let i=0; i<10; i++){
//     console.log('안녕하세요 😊');
// }

// for(let i=0; i<10; i+=2){
//     console.log(`${i+1}번째`)
// }

// // 1~5까지 출력하는 방법
// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

// for(let i = 1; i<6; i++){
//     console.log(i);
// }

// for(let i=0; i<5; i++){
//     console.log(i+1);
// }

// console.log('minus')
// for(let i= 5; i>0; i--){
//     console.log(i);
// }

// 1~ n까지 더하는 프로그램 만들기
let n = 10; //55
let sum = 0;
for(let i=1; i<=n; i++) {
    sum = sum+i;
}

console.log(sum);

//배열과 for문 같이 써보기
let fruits=[ '사과', '망고', '수박', '바나나'];
for(let i = 0; i<fruits.length; i++){
    console.log(`I like ${fruits[i]}`);
}

//배열에 들어가 있는 Number 형 데이터의 합 구하기
console.log('newsum');

let numArr = [100, 200, 99, 58, 77, 23];
let numSum = 0;
for(let i=0; i<numArr.length; i++){
    numSum = numSum + numArr[i];
}
console.log(numSum);

/* if문과 for문 같이 쓰기 */
/* if(){
    for(){}
} 
for(){
    if(){}
}
*/
// for(i=0; i<21; i++){
//     if(i %2 === 0){
//         console.log(i);
//     }
// }

// for(i=0; i<21;i+=2){
//     console.log(i);
// }

// for(i=0; i<10000; i+=13){
//     if(i%2===1){
//         console.log(i);
//     };
// }