// import UseJSX from "./components/UseJSX.js";
// import FirstPractice from "./components/practice/FirstPractice.js";
// import ClassCom from "./components/ClassCom.js"
// import FunctionState from "./components/FunctionState.jsx";

import FunctionProps from "./components/FunctionProps";
import { ClassProps, ClassProps2 } from "./components/practice/ClassProps";
/*클래스로 할 때는 익스포트 디포트가 아니라서 객체로 불러옴-pm 4:20 */
import PracticeProps from "./components/practice/PracticeProps";

// import ClassState from "./components/ClassState.jsx"
// import Increasing from "./components/practice/Increasing.jsx";
function App() {
  return (
    <div>
      {/* <UseJSX />
      <FirstPractice />
      <ClassCom></ClassCom>
      <FunctionState></FunctionState>
      <ClassState></ClassState>
      <Increasing></Increasing> */}

      <FunctionProps name='사과' krPrice={5000} number={10}></FunctionProps>
      <FunctionProps name='샤인머스켓' krPrice={35000} number={3}></FunctionProps>
      <FunctionProps name='복숭아' children="안녕하세요 칠드런"></FunctionProps>
      <FunctionProps>여기가 children입니다!</FunctionProps>
      <PracticeProps day='오늘 '></PracticeProps>
      <ClassProps name='뽀로로' nickname='사고뭉치' color='#0186cb'></ClassProps>
      <ClassProps2 name='루피' nickname='공주' bgColor='#ed9095'></ClassProps2>
    </div>
  );
}

export default App;