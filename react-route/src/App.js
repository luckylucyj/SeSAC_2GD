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

import { Route, Routes } from "react-router-dom";
import { Profile } from "./page/Profile";
import { Board } from "./page/Board";
import { Index } from "./page/Index";
import { NotFound } from "./page/NotFound";
import BoardDetail from "./page/BoardDetail";

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
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        {/* 파라미터는 :boardID값에 담겨있음, :이 중요함-pm 4:13 */}
      </Routes>
    </>
  );
}

export default App;
