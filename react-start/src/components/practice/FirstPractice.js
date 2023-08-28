// export default function UseUSX() {
//     let helloStr='hello, first exercise';
//     function strHel(){
//         alert('클릭 됨')
//     }
//     return(
//         <div style={{marginTop:'32px', backgroundColor:'skyblue'}} onClick={() => strHel()}>
//             <div>
//                 {helloStr}
//             </div>
//         </div>
//     )
// }

function FirstPractice() {
  const helloStr = "rr";
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={() => alert("클릭됨")}
    >
      {helloStr}
    </div>
  );
}

export default FirstPractice;
