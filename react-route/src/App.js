// import { Route, Routes } from "react-router-dom";
// import { Profiler } from "./page/Profiler";
// import { Board } from "./page/Board";
// import {Index} from './page/Index';
// import {NotFound} from './page/NotFound';
// import BoardDetail from './page/BoardDetail';

// function App() {
//   return (
//     <>
//       {/* <nav>
//         <ul>
//           <li>
//             <a href="/profile">프로필</a>
//           </li>
//           <li>
//             <a href="/board">게시판</a>
//           </li>
//         </ul>
//       </nav> */}
//       <Routes>
//         <Route path="/" element={<Index></Index>}></Route>
//         <Route path="/profile" element={<Profiler />}></Route>
//         <Route path="/board" element={<Board />}></Route>
//         <Route path="*" element={<NotFound></NotFound>}></Route>
//         <Route path="/board/:boardID" element={<BoardDetail></BoardDetail>}></Route>
//         {/* <Route path="/boar/100" element={<Board1></Board1>}></Route>
//         <Route path="/boar/200" element={<Board3></Board3>}></Route> */}
//       </Routes>
//     </>
//   );
// }

// export default App;

import  "./styles/global.css";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./page/Profile";
import { Board } from "./page/Board";
import { Index } from "./page/Index";
import { NotFound } from "./page/NotFound";
import BoardDetail from "./page/BoardDetail";
import Navigate from "./components/Navigate";
import StudentMe from "./components/StudentMe";
import Practice from "./page/Practice";
import Student from './page/Student';

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <a href="/profile">프로필</a>
          </li>
          <li>
            <a href="/board">게시판</a>
          </li>
        </ul> 
      </nav> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="/practice" element={<Practice/>}></Route>
        {/* 실습 라우팅 */}
        <Route path="/student/:name" element={<Student />}></Route>
        <Route path="*" element={<NotFound />} />
        {/* 파라미터는 :boardID값에 담겨있음, :이 중요함-pm 4:13 */}
      </Routes>
      {/* <Navigate></Navigate> */}
      {/* <Student></Student> */}
    </>
  );
}

export default App;
