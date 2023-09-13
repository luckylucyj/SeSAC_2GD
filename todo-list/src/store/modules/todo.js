const initialState = {
  list: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "척추의 요정이 말합니다! 척추 펴기!",
      done: false,
    },
    {
      id: 2,
      text: "운동하기",
      done: false,
    },
  ],
};

//id 전역 관리를 위한 initialState.nextID-pm 12:37
let count=initialState.list.length;
initialState['nextID']=count;

//액션 타입 정의하기-am 11:25- 대문자로 해야함
const CREATE="todo/CREATE";
const DONE="todo/DONE";

export function create(payload){
  return{
    type: CREATE,
    payload,//object-am 11:30
  }
};
export function done(id){
  return{
    type: DONE,
    id,//number
  }
};
 
export function todo(state = initialState, action) {
  /**
   action={
    type: 'todo/CREATE',
    payload:{
      id:3,
      text:'점심먹기'
    }
   }

   action={
    type: 'tpdp/DONE,
    id:0,
   }-am 11:49
   */
  switch(action.type){
    case CREATE:
      return{
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false
        }),
        //concat은 이어써주는 기능을 가지고 있음-am 11:46
        nextID: action.payload.id+1,
      };
    case DONE:
      //기존의 list
      return {
        ...state,
        list: state.list.map((el)=>{
          if(el.id === action.id){
            return{
              ...el,
            done:true,
            }
          }else{
            return el;//el자체가 객체여서 이렇게 써도됨-pm 12:21
          }
        })
      };
    break;//return이 없기때문에 break씀-am 11:34
    default:
      return state;
  }
  return state;
}
// todo라는 리듀서 만든거임 -pm 10:25
