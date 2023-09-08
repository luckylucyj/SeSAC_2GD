// import {useContext} from 'react';
// import {ThemeContext} from '../contexts/ThemeContext';

// export default function ContextFooter(){
//     // const data = useContext(ThemeContext);
//     const {isDark, setIsDark}=useContext(ThemeContext);
//     // const { isDark } = data;

//     return(
//         <footer className="header"
//         style={{
//             backgroundColor: isDark? 'black':'white',
//         }}>
//             <button onClick={()=>{
//                 setIsDark(!isDark);
//             }}>
//                 모드 변경</button>
//         </footer>
//     )
// }
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextFooter() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <footer
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        모드 변경
      </button>
    </footer>
  );
}
