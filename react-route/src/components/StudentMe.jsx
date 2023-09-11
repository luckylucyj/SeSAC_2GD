import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Student() {
  const wrap={display:'flex', backgroundColor: '#FEFAE0', padding: '1rem', alignItems:'center'};
  const style={ listStyle:'none', marginLeft: '3rem'};
  const ul={ display:'flex', };
  const navigate = useNavigate();

  return(
    < >
    <div style={wrap}>
      <h2>ReactRouter 실습</h2>
      <nav>
        <ul style={ul}>
          <li style={style} onClick={()=> navigate("/Sean")}>
            <Link to="/page/sean">학생</Link>
          </li>
          <li style={style}>
            <Link to="/page/codingon">코딩온</Link>
          </li>
          <li style={style}>
            <Link to="/page/new?name=jisu">searchParams</Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  )
}