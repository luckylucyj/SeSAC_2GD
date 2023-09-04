import PororoObj from "./PororoObj";
import { useState } from "react";
export default function ChangeObj({ objArr }) {
  // const[index, setIndex]=useState(0);
  // let obj=objArr[index]
  // // const[name, setName]=useState('뽀로로');
  // // const[age, setAge]=useState(7);
  // // const[nickName, setNickName]=useState('사고뭉치');
  // // 1. map 사용하지 않고 바꾸기
  // function changeProfile(){
  //     if(index===objArr.length-1){
  //         setIndex(0);
  //     }
  //     else{
  //         setIndex(index+1);
  //     }
  // }
  // return(
  //     <>
  //     <h4>이름:{obj.name}</h4>
  //     <h4>나이:{obj.age}</h4>
  //     <h4>별명:{obj.nickName}</h4>
  //     <button onClick={()=>changeProfile()}>멤버 바꾸기</button>
  //     </>
  // )

  // 2. width map
  const [idx, setIdx] = useState(0);

  return (
    <>
      {objArr.map((data, index) => {
        return (
          index === idx && (
            <div key={index}>
              <div>이름: {data.name}</div>
              <div>나이: {data.age}</div>
              <div>별명: {data.nickName}</div>
            </div>
          )
        );
      })}
      <button
        onClick={() => {
          idx === objArr.length - 1 ? setIdx(0) : setIdx(idx + 1);
        }}
      >
        change
      </button>
    </>
  );
}
