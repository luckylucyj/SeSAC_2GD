// import { useState } from "react";
// import ContextComp from './08_ContextComp';
// import '../styles/context.css';
// import {ThemeContext} from '../contexts/ThemeContext';

// export default function ContextTheme(){
//     const [isDark, setIsDark]=useState(false);
//     return(
//         <>
//         <h4>useContext</h4>
//         {isDark ? '다크입니다.' : '라이트모드입니다.'}
//         <ThemeContext.provider value={{isDark, setIsDark}}>
//             <ContextComp/>
//         </ThemeContext.provider>
//         {/* <ContextComp isDark={isDark} setIsDark={setIsDark}></ContextComp> */}
//         </>
//     );
// }
import { useState } from "react";
import ContextComp from "./08_ContextComp";
import "../styles/context.css";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextTheme() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <h4>useContext</h4>
      {isDark ? "다크모드입니다." : "라이트모드입니다."}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <ContextComp />
      </ThemeContext.Provider>
    </>
  );
}