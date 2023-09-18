//tuple
/**
 tuple = 배열
 -길이와 타입이 지정되어 있는 배열.
 */
let drink:[string, string]=['콜라', '사이다'];
drink[0]="cola";
console.log(drink);
// drink[1]=2; string 요소를 number로 바꾸려고 한다면 error!
drink.push('str');
console.log(drink);

let drink2:readonly [string, number]=['콜라',2500];
// drink2.push('사이다'); //readonly 새로운 요소 추가 error!
// drink2[0]="cola"; //readonly 요소 변경 error!
console.log(drink2[0]);
console.log(drink2[1]);

//enum
enum Auth{
  admin=0,
  user=1,
  guest=2,
};

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

enum Cafe{
  americano='아메리카노',
  latte='카페라떼',
}
console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake{
  choco,//0
  vanilla=10,
  strawberry,
  kiwi="kiwi",
}
console.log(Cake.choco, Cake.vanilla, Cake.strawberry);

//쓴다면 export enum Cake 형식으로 쓸 것 같음-am 11:35


// let olimpick_newgame:readonly (boolean | object)[] = [{
//   name: '쇼트트랙',
//   type: '혼성 계주',
// },true,];
let olimpick_newgame:readonly [object, boolean] = [{
  name: '쇼트트랙',
  type: '혼성 계주',
},true,];
// let olimpick_newgame: Array<boolean | null | number[]> = [true, null, [1, 2, 3]];
// olimpick_newgame[1]=false;

/* interface & type */
interface Student{
  name: string;
  isPassed:boolean;
}

const student1:Student={
  name: 'jh',
  isPassed: false
};

type Score ="A+"| "A"|"B"|"C"|"D"|"F";
interface 야구부 extends Student{
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number;//backnumber는 들어올 수도 있고 안들어 올 수 있다는 의미=? -pm 12:13
  //바꾸면 안된다는 readonly는 여기에 interface안의 키이름에 붙여줌-pm 12:16
  [grade:number]: Score;
  //grade가 의미하는 건 숫자의 의미-pm 12:19
  //배열을 넣는것도 가능함-pm 12:21
}

const otani :야구부={
  name:'오타니',
  isPassed:true,
  position:'pitcher',
  weight: 95.3,
  height: 193,
  backNumber:17,
  1: 'A',
  2: 'A+',
  3: 'F',
}
otani.position='투수';
console.log(otani);
//-pm 12:14
otani['1']="B";
console.log(otani);

interface Toy{
  name: string;
  start():void;
}

interface Car{
  name: string;
  color: string;
  price:number;
}

const toyCar :Toy &Car={
  name:'타요',
  start(){
    console.log('이름은' + this.name + '입니다.');
  },
  color :'blue',
  price: 50000
}

toyCar.start();

type Person={
  name: string; 
  age?: number;
  like? : string[];
  gender: string;
}
//type은 interface와 달리 {}앞에 =을 써준다-pm 12:27

let daniel:Person={
  name: "Daniel",
  gender: "Female",
  age: 20,
}

type Gender='Female'|'Male';
type Person2={
  name: string; 
  age?: number;
  like? : string[];
  gender: Gender;
}

let albert:Person2={
  name: '알버트 덤블도어',
  gender: "Male",
}
console.log(albert);

// 실습문제-pm 12:34
interface Game{
  title: string;
  price: number;
  desc?:string;
  category: string;
  platform :string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

console.log(heroGame_A, heroGame_B);