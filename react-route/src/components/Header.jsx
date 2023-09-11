import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>home으로</Link>
        </li>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
          {/* a태그 보다 Link to를 쓰는게 더 많다고 함-pm 3:23 */}
        </li>
        <li>
          <Link to="/practice">실습문제</Link>
        </li>
      </ul>
    </nav>
  );
}
