import { useSelector } from "react-redux";
import NoneTodo from "../components/NoneTodo";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (el)=>el.done===true);
  return (
    <>
      <h1>DoneList</h1>
      <ul>
        {list.map((el,i) => {
          return <li key={el.id}>{el.text}</li>;
        })}
        <NoneTodo/>
      </ul>
    </>
  );
}
