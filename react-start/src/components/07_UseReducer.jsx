// import { useState, useReducer } from "react";
// export default function UseReducer() {
//   const [number, setNumber] = useState(0);
//   // const [스테이트, 디스패치] =useReducer(리듀서, 스테이트 초기값);
//   const reducer = (state, action) => {};
//   const [money, dispatch] = useReducer(reducer, 0);
//   // 디스패치=요구 액션은 행동-am 11:14
//   // action = {type:'~' , payload:~}
//   switch (action.type) {
//     case 'deposit': //예금: 기존 state에서 number를 더한다.
//     return state + action.payload;
//     case 'withdraw': // 출금: 기존 state에서 number를 더한다.
//     return state- action.payload;
//     default: 
//     return state;
//   }

//   return (
//     <>
//       <h4>useReducer</h4>
//       <p>잔고 {money} 원</p>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => {
//           setNumber(Number(e.target.value));
//         }}
//         step="1000"
//       />
//       {/* step='1000'은 천씩 늘어나라는 뜻임-am 11:11 */}
//       <button
//         onClick={() => {
//           dispatch(
//             { type: "deposit", payload: number }
//             // 어떤 행동을 전달할지 {}에 넣으면 됨-am 11:15
//           );
//         }}
//       >
//         예금
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "withdraw", payload: number });
//           // 위의 값의 리듀서 전달되고 리듀서의 액션으로 전달됨-am 11:17
//         }}
//       >
//         출금
//       </button>
//       {/* dispatch는 어떤 요구를 전달하고 싶을 때 사용하는 거임-am 11:17 */}
//     </>
//   );
// }


import { useReducer, useState } from "react";

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  //   const [스테이트, 디스패치] = useReducer(리듀서, 스테이트 초기값);
  const reducer = (state, action) => {
    // action = {type:'~', payload: ~}
    switch (action.type) {
      case "deposit": //예금: 기존 state에서 number를 더한다.
        return state + action.payload;
      case "withdraw": //출금: 기존 state에서 number를 뺀다.
        return state - action.payload;
      default:
        return state;
    }
  };
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h4>useReducer</h4>
      <p>잔고 {money} 원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number });
        }}
      >
        출금
      </button>
    </>
  );
}





