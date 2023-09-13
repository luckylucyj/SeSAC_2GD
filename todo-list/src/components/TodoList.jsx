import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";
export default function TodoList() {
  const list = useSelector((state) => state.todo.list); //list안에는 배열이 담겨져 있음-pm 12:25
  //다만 list에는 done의 값이 트루인것도 폴스인것도 같이 있는데 이걸 컴포넌트 별로 분리해야함-pm 12:26
  const todoList = list.filter((el) => el.done === false);
  const input = useRef();
  const dispatch = useDispatch();
  // state.todo=initialState를 뜻함-am 11:01
  const nextId = useSelector((state) => state.todo.nextID); //전역적인

  return (
    <>
      <h1>TodoList</h1>
      <div>
        <input
          type="text"
          ref={input}
          onKeyDown={(e) => {
            if (e.key === "enter") {
              dispatch(create({ id: list.length, text: input.current.value }));
              
            }
          }}
        />
        <button
          onClick={(e) => {
            if (input.current.value.trim() !== "") {
              dispatch(create({ id: list.length, text: input.current.value }));
            }
            input.current.value = "";
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button
                onClick={() => {
                  dispatch(done(el.id));

                  /**
                   * 완료 클릭한 요소를 클릭한 요소의 아이디를 찾아 done의
                   * 값을 변경해주세요-pm 12:20
                   */
                }}
              >
                완료
              </button>
              {/* el안에  initialState 요소가 들어있음- am 11:50*/}
            </li>
          );
        })}
      </ul>
    </>
  );
}
