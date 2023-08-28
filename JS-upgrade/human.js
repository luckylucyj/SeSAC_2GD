const human = ['철수','영희'];
//호출은 리콰이어 하는 곳에서 해야 됨-pm 3:42

// function showName(idx){
//     if(idx>=names.length||idx<0) return '잘못된 index';
//     return names[idx];
// }
// 위에가 내가 한거-pm 4:24

const showName=()=>{
    human.forEach((el)=>{
        console.log(el);
    })
}

// es6에서 module을 내보내는 방법

//as 이용 별칭
// export { names as NS, showName as SN};

export {
    human, showName
};