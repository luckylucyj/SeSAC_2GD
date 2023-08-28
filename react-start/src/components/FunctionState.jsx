import { useState } from "react";

export default function FunctionState() {
    const [showEnglish, setShowEnglish]=useState(true);
    // let showEnglish=ture;
    return(
        <div>
            <div>{showEnglish? 'apple':'사과'}</div>
            <button onClick={()=>setShowEnglish(!showEnglish)}>
                {showEnglish? '한글':'영어'}로 변경
            </button>
        </div>
    )
    /*-pm 12:51  state를 활용해서 값을 바꾸기 */
  // let apple = '사과';
  // function inEng(){
  //     const content=document.querySelector('.state .apple');
  //     content.innerText='apple';
  //     apple='apple';
  //     console.log(apple);
  // }
  // return (
  //     <div className="state">
  //         <div className="apple">사과</div>
  //         <div>{apple}</div>
  //         <button onClick={()=>inEng()}>영어로 바꾸기</button>
  //     </div>

  // )

  // const [apple, setApple]=useState('사과');
  // // set변수이름인 건 이름을 바꿀 수 있는 변수명이다-pm 12:35
  // return(
  //     <div>
  //         <div>{apple}</div>
  //         <button onClick={()=> setApple('apple')}>영어로 변경</button>
  //     </div>
  // -pm 12:38
  // )

//   function changeLang() {
//     const apple = document.querySelector(".state div");
//     apple.innerText === "사과"
//       ? (apple.innerText = "apple")
//       : (apple.innerText = "사과");
//   }
//   return (
//     <div className="state">
//       <div>사과</div>
//       <button onClick={() => changeLang()}>언어 변경</button>
//     </div>
//   );
}
