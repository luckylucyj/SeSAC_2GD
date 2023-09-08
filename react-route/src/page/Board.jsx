import { Link } from "react-router-dom";

export const Board = () => {
  return (
    <>
      <h1> 게시판 페이지 입니다.</h1>
      <Link to="/board/1">1번 게시물</Link>
      {/* /부터 시작하면 root부터 시작함-pm 4:04 */}
      <Link to="2">2번 게시물</Link>
      {/* 2로 지정하면 board부터 시작해서 지정함-pm 4:04 */}
    </>
  );
};
