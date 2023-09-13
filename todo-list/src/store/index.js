import { combineReducers } from "redux";
import {todo} from "./modules/todo";
// export dafault가 아니고 export로 시켜서 오브젝트형태로 변경함-am 11:31

export default combineReducers({
  todo,
});
// index에 import될 거임-am 10:28
