const div1 = document.getElementById("div1");
/*
1. 태그 내부 내용
    -innerText : 요소안의 텍스트를 가져오거나 수정
    -innerHTML : 요소안의 '코드'를 가져오거나 수정
    -textContent : innerTExt처럼 텍스트 정보 표시
*/

console.log(div1.textContent);
console.log(div1.innerText); //태그 무시하고 글자만 출력
console.log(div1.innerHTML); // 요소에 태그 추가해서 출력
// -am 10:21

div1.innerText = "여기는 <b>첫번째</b> div 태그입니다! &hearts;"; //태그가 문자로 인식됨
div1.innerHTML = "여기는 <b>첫번째</b> div 태그입니다! &hearts;"; //태그가 문자가 아닌 태그로 인식됨
console.log(div1.innerText);
div1.textContent = "여기는 <b>첫번째</b> div 태그입니다! &hearts;";
console.log(div1.textContent);

// -am 10:23
/* 2. 속성 */
/* 
-setAttribute(): 속성값 설정
-getAttribute(): 속성값 가져오기
-점(.)으로 접근하고 속성값도 변경할 수 있음
*/

// 메소드로 속성에 접근후 변경
const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh");

// naver.setAttribute(속성이름, 속성값)
naver.setAttribute("href", "https://google.com"); // setAttribute는 두개
naver.innerText = "구글";

console.log(pooh.getAttribute("src")); // getAttribute는 하나만
// 점으로 속성에 접근후 변경
console.log(pooh.src);
console.log(pooh.alt);
pooh.alt = "푸 사진입니다!!!!";

/* 3. CSS 지정 */
const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li");

// 3-1. style 속성 사용
// for(let li of list){
//     console.log(li);
//     li.style.backgroundColor='pink';
//     li.style.color='#fff';
//     li.style.fontSize='1.3rem';
// }

// 3-2. classList 사용- style속성으로 지정해도 되지만 인라인으로 지정하는거라 개수가 많아지면 일일이 타이핑한다는 단점이 있는데 그걸 대체할 수 있음-am 10:53
console.log(h1.classList);
h1.classList.add("add-h1");
// h1.classList.remove('add-h1');
console.log(h1.classList.contains("add-h1"));

// if(h1.classList.contains('add-h1')){
//     h1.classList.remove('add-h1');
// } else{
//     h1.classList.add('add-h1');
// }
// h1.classList.toggle('add-h1');

// li 태그(4개)에 friends 클래스 추가해보기-am 11:01
console.log(list);

//  그냥 리스트 자체에 add클래스 주면 에러남-am 11:13
for (let el of list) {
  el.classList.add("friends");
}
//for each로도 할 수 있음-am 11:21

/* 4. 요소 생성, 추가, 삭제, 접근 */
// 요소에 접근하기
const friends = document.getElementById("friends");
const tigger = document.getElementById("tigger");
// console.log(friends);
// console.log(tigger);

// 자식 노드에 접근
console.log("-----자식노드 접근------");
console.log(friends.children);
console.log(friends.children[0]);

// 부모 노드에 접근
console.log("-----부모노드에 접근-----");
console.log(tigger.parentNode);

// 형제 노드에 접근
console.log("-----형제노드에 접근-----");
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

// 4-1. 요소 생성
const container = document.querySelector(".container");
const p = document.createElement("p");
p.innerText = "추가한 p";
p.style.fontWeight = "bold";
p.style.backgroundColor = "red";
console.log(p);

// 4-2. 요소 추가
container.append(p); //선택된 요소의 자식요소로 들어감-pm 2:38

const p2 = document.createElement("p"); //
p2.innerText = "p2";
p2.classList.add("p2");

const p3 = document.createElement("p");
p3.innerText = "p3";
p3.classList.add("p3");

container.append(p2);
container.prepend(p3);

const h2 = document.createElement("h2");
h2.innerText = "추가된 h2";
h1.before(h2);

const h3 = document.createElement("h3");
h3.innerText = "h333333";
h1.after(h3);

//appendChild 사용-pm 3:02
const p4 = document.createElement("p");
p4.innerText = "p4";
p4.classList.add("p2");
const p5 = document.createElement("p");
p5.innerText = "p5";
p5.classList.add("p3");

container.append(p4, p5, "안녕하세요"); //,를 이용해 여러개를 붙일 수 있음
// container.appendChild(p4,p5,'안녕하세요'); //appendChild는 잘 안쓰고 append 씀

//container안에 div가 있고
// 그 div안에 img와 span-안녕 나는 피글렛이야를 넣어야 됨
const divs = document.createElement("div");
container.append(divs);

const pig = document.createElement("img");
pig.setAttribute("src", "./img/piglet.png");
pig.alt = "피글렛!";

const pigs = document.createElement("span");
pigs.innerHTML = '안녕~~~~ 나는 <b style="color:pink;"> 피글렛</b>이야';
divs.append(pig, pigs);
// divs.append(pigs);
//-pm 3:32

/* 4-3.요소 삭제 */
// remove, removeChild
const firstLi = document.querySelector("li");
// console.log(firstLi);

// firstLi.remove();
friends.removeChild(firstLi);
//삭제 방법 두가지: 자신을 지울 것인지, 부모의 자식요소로 지정해서 지울 것 인지-pm 3:37

