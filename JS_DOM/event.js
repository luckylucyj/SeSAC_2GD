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
    if(scrollY>496){
        document.querySelector('.pos').style.opacity="1";
    }
})

const btn=document.querySelector('button');
const input=document.querySelector('input');

btn.addEventListener('click',function(event){
console.log(event);
})

input.addEventListener('keydown',function(event){
    console.log(event.key);
    console.log(event.code);

//방향키 위 아래 왼쪽 오른쪽을 누르면
//각각 누를 때마다 up, down, left, right
if(event.key==='ArrowUp'){
    console.log('up');
}else if(event.key==='ArrowDown'){
    console.log('down');
}else if(event.key==='ArrowLeft'){
    console.log('left');
}else if(event.key==='ArrowRight'){
    console.log('right');
} else{
    console.log('others');
}
});

//변경 이벤트
const chgInput=document.getElementById('change-input');
chgInput.addEventListener('input',()=>{
    console.log('변경중!!!');
    let div=document.querySelector('.box');
    div.innerHTML=chgInput.value;

    /*
    input : 현재 input에 변경사항이 존재하는 순간을 계속 인식
    실시간으로 바로 반영할 수 있음

    shift, ctrl등 입력값이 변하지 않는다면 이벤트 발생x
    */
});
chgInput.addEventListener('change',()=>{
    //'change': input에 변경이 일어나고
    // 다른 요소를 클릭해서 focus out 시키면 이벤트 발생됨
    console.log('변경되었어요!!!!');
});

//폼이 제출되는 이벤트
//'submit' form에 적용하는 이벤트
const todoForm=document.querySelector('#todo-form');
const todos=document.querySelector('.todos');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    //폼이 실제로 제출되지 않도록 이벤트를 막는 것
    //새로고침 방지
    const todoInput=document.querySelector('[name="todo"]');
    console.log(todoInput.value);
    // const todo=todoInput.value;

    // const li=document.createElement('li');
    // // li.textContent=todo;
    // li.append(todo);
    // todos.append(li);
    
    if(todoInput.value.trim() !==''){
        const li=document.createElement('li');
        li.append(todoInput.value);
        todos.append(li);
    }
    todoInput.value='';
    // <li></li>
})
