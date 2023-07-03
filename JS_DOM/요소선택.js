console.log(document); //document는 문서 전체라고도 할 수 있음 -pm 4:16
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

// getElementByID
console.log(document.getElementById("red")); // 찍으면 null 나옴-왜? 헤드에 설정해서 먼저 읽고 찾느라 빈값으로 나옴-pm 4:19
console.log(document.getElementById('green')); // 따옴표 안쓰면 변수로 알아들음-pm 4:22

// getElementsByclassName
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName("pink")[1]);

// getElementsByTagName
console.log(document.getElementsByTagName("div")[5]);

// getElementsByName
console.log(document.getElementsByName('id'));

// querySelector
/* CSS에서 사용했던 선택자를 이용해서 요소 선택
선택자와 일치하는 첫번째 요소를 반환 */
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="id"]')); //감싸는 따옴표가 외부와 내부가 달라야됨-pm 4:32

console.log('==========');
// querySelectorAll
const divs = document.querySelectorAll('div');
console.log(divs);

const pinks=document.querySelectorAll('.pink');
console.log(pinks);

for(let i=0; i<pinks.length; i++){
    console.log(pinks[i]);
}

// for of 문 사용해보기!
console.log('for of 문')
for(let pink of pinks){
    console.log(pink);
}