function printSome<T>(x: T){
  return x;
}
//T=x에대한 데이터 타입을 안받음, 사용이유는 any를 써도 되지만 any는 사용을 지양해야 되기 때문에 씀-pm 3:32

printSome<string>('a');
printSome<boolean>(true);
printSome<number[]>([1,2,3,4,5]);

function printSome2<T>(x:T, y:T): void{
  console.log(x);
  console.log(y);
}
printSome2<number>(1,2);
printSome2<string>('안녕','hello');

function printSome3<T, K>(x:T, y:K): void{
  console.log(x);
  console.log(y);
}
//<>안의 T는 예시로 쓰는 거고 대문자든 소문자든 어떤 문자든 상관없음-pm 3:38
//자료형까지 인자로 불러올 수 있음-pm 3:38
printSome3<string, boolean>('hello', false);

const arrLength=<T>(arr:T[]):number=>{
  return arr.length;//왜 number냐면 length는 숫자니까-pm 3:45
};

const arr_1=[1,2,3,5,6];//number[]
const arr_2=['pineapple','mango'];//string[]
const arr_3=[[12,13],[20,21],[10]];//number[number[]]-pm 3:41
console.log(arrLength<number>(arr_1));
console.log(arrLength<string>(arr_2));
console.log(arrLength<number[]>(arr_3));
//generic-타입을 여러개를 전달 할 수 있음-pm 3:47

//실습문제
function arrElement<T>(arr:T[], index:number): T|boolean{
  //arr의 길이보다 index가 크거나 같다면
  
  if(arr.length<=index){
    return false
    //그냥 쓰면 오류나는데 오류나는 이유는 false를 리턴하기 때문에 타입이 달라서 그런거임, T| boolean이라고 쓸 때 |를 유니온
  }
  return arr[index];
}
console.log(arrElement<number>([1,2,3,4,5,6,7,8],5));
console.log(arrElement<boolean>([true, false],0));