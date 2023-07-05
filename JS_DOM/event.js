const btn1=document.querySelector('.btn--black');
const btn2=document.querySelector('.btn--green');
const btn3=document.querySelector('.btn--blue');
const btn4=document.querySelector('.btn--red');

/* btn1 */
btn1.addEventListener('click',function(){
    alert('버튼 1을 클릭하셨군요!');
});
//이벤트 동작이름도 문자열로적기=pm 4:06

btn1.addEventListener('mouseover',function(){
    btn1.style.backgroundColor='gray';
})//mouseover가 hover와 다른점-mouseover는 한번 호버하고 벗어난 뒤에도 스타일 유지됨-pm4:09

const container=document.getElementById('container');

/* btn2 */
console.log(container);
btn2.addEventListener('click',()=>{
    const div= document.createElement('div');
    div.innerText='안녕';
    div.style.backgroundColor="pink";
    container.append(div);
});

/* btn3 */
function changeColor(){
    const divs=document.querySelectorAll('#container div');
    for(let div of divs){
        div.style.backgroundColor='skyblue';           
    }
    divs[divs.length - 1].style.backgroundColor='red';
}
btn3.addEventListener('click',changeColor);
//가로했을 때는 즉시 실행-pm4:18 클릭했을때만 호출하기 위해서는 가로가 없어야함

/*btn4 */
function changeBtnColor(){
    // btn4.style.backgroundColor='yellow';
    // btn4.style.color="#000";
    this.style.backgroundColor='yellow';
    this.style.color="#000";
}
btn4.addEventListener('click',changeBtnColor);

// click 외의 많은 동작들
console.log(window);
window.addEventListener('scroll',()=>{
    console.log(scrollY);
    if(scrollY>296){
        document.querySelector('.pos').style.opacity="1";
    }
})