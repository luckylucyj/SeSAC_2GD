export default function EventObj(){
  function handleClick(e:React.MouseEvent<HTMLElement>){
    console.log(e);
    console.log(e.target);
  }
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target);
    console.log(e.target.value);
    //htmlinputelement라고 적은 건 e.target.value는 input에만 있기 때문에 쓴 거임-am 11:51
  }
  function handleKeyDown(e:React.KeyboardEvent<HTMLElement>){
    console.log(e.key);
    console.log(e.code);
    console.log(e.keyCode);
    //keycode는 사용을 지양하셈-am 11:54
  }
  return(
    <>
    <h2>이벤트 객체 타입 확인</h2>
    <div onClick={(e)=>{
      console.log(e);
    }}>onClick</div>
    <div onClick={(event)=> handleClick(event)}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      {/* click에서는 target요소를 자주씀, 위에 핸들클릭이라고 적힌건 자식요소를 클릭하면 자식요소를 인식함-부모에다가 지정해서 그럼-am 11:44 */}
    </div>
    <div>
      onChange
      <input type="text" onChange={(e)=>handleChange(e)}></input>
    </div>

    <div>onKeyDown
      <input type="text" onKeyDown={(e)=>(handleKeyDown(e))} />
    </div>

    <span onDrag={(e)=>handleClick(e)} style={{backgroundColor:'greenyellow'}}>Drag</span>
    </>
  )
}