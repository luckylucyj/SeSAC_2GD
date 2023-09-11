import { useSelector, useDispatch } from "react-redux";

export default function Test() {
  const number = useSelector((state) => state);
  //아래의 내용을 함축하면 위의 코드가 된다. -pm 2:49
  // //  const number=useSelector((state)=>{
  //  return state;
  // // })
  const dispatch=useDispatch();

  return (
    <>
      <h2>store의 state 가져오기 (useSelector 이용)</h2>
      <p>store에 저장되어 있는 state는 {number}</p>
      <h2>store의 state 변경</h2>
      <button onClick={()=>dispatch({type: "증가"})}>+</button>
      <button onClick={()=>dispatch({type: "감소"})}>-</button>
    </>
  );
}
