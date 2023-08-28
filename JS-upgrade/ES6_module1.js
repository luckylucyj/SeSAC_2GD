const flowers = ['rose','sunflower','tulip'];
//호출은 리콰이어 하는 곳에서 해야 됨-pm 3:42
function getFlowers(idx){
    if(idx>=flowers.length||idx<0) return '잘못된 index';
    return flowers[idx];
}

// es6에서 module을 내보내는 방법

//as 이용 별칭
export { flowers as flr, getFlowers as getFlr};
//조건 중에 확실히 이것만 된다 하는 경우가 없는 경우도 더러 있어서
//안되는 조건도 생각해보고 짜기-pm 3:44