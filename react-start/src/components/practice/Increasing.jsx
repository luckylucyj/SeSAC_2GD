// import { Component } from "react";

// class increasing extends Component{
//     state={
//         num: 0,
//     };
//     render(){
//         const { state } =this.state;
//         return(
//             <div>
//                 {/* <div>{this.state.num}</div> */}
//                 <button onClick={()=> this.setState({num: 'banana'})}>증가</button>
//                 <button onClick={()=> this.setState({num: 'banana'})}>감소</button>
//             </div>
//         );
//     }
// }
// export default increasing;

import { useState } from "react";
  
export default function Increasing() {
  const [number, setNumber] = useState(0);

  let variable = 0;
  function setVariable() {
    variable = variable + 1;
    console.log(`변수 (variable) : ${variable} / 스테이트(number):${number}`);
  }
  return (
    <div>
      <div>
        {number}
        {number > 7 ? "🎈" : "😄"}
      </div>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </div>
  );
}
