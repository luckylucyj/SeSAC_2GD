import ListChild from "./ListChild";

function PracticeProps(){
    return(
        <div>
            <h1>오늘 해야할 일</h1>
            {/* <h2>리액트 공부하기</h2>
            <p>state 사용법 익히기</p>
            <hr />
            <h2>저녁 먹기</h2>
            <p>스타필드 맛집 정복!!</p>
            <hr /> */}
            <ListChild title='블로그 쓰기' content='블로그 두개 쓰기'></ListChild>
            <ListChild title='리액트 공부하기' content='state 사용법 익히기'></ListChild>
            <ListChild title='저녁 먹기' content='스타필드 맛집 정복!!!'></ListChild>
        </div>
    )
}
export default PracticeProps;