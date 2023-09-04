import FunctionProps from "./FunctionProps";

export default function PropsMap({ arr }) {
console.log(arr);
// arr = [
//     {name: 'peach', krPrice: 10000, count:5},
//     {name: 'strawberry', krPrice: 14000, count:1},
//     {name: 'pear', krPrice: 5000, count:6},
//     {name: 'apple', krPrice: 10000, count:10},
//   ];
const numArr=[10, 20, 30, 40, 50];
// map은 새로운 배열을 만들어준다. 배열의 연산을 할 수 있음-am 10:41
const newArr=numArr.map((data)=>{
    return data*3;
})
console.log(newArr);

return(
    <>
    <h4>가격표</h4>
    {/** */}
    {/* <FunctionProps name={arr[0].name} krPrice={arr[0].krPrice} number={arr[0].number}/>
    <FunctionProps name={arr[1].name} krPrice={arr[1].krPrice} number={arr[1].number}/>
    <FunctionProps name={arr[2].name} krPrice={arr[2].krPrice} number={arr[2].number}/>
    <FunctionProps name={arr[3].name} krPrice={arr[3].krPrice} number={arr[3].number}/> */}
    {arr.map((data, index)=>{
        return <FunctionProps name={data.name} krPrice={data.krPrice} number={data.count} key={index} />
    })}
    {/* array에 새로운 연산을 해줌, 배열과 함께 쓸 때는 map과 함께 쓰면 좋다-am 10:48 */}
    </>
)
};