// 오브젝트를 생성
/* 
속성과 
    만들어진 연도 year
    집의 이름 name
    창문의 개수 window
함수
    만들어진 연도를 콘솔창에 출력하는 '건물의 나이'메소드를 만들거임
    창문의 갯수를 콘솔창에 출력하는 함수

*/
class House{
    constructor(year, name, window){
        this.name= name;
        this.year= year;
        this.window= window;
        //위에가 속성을 정의하는 부분-pm 12:42
    }

    getAge(){
        console.log(`${this.name}은 건축한지 ${2023 - this.year}년 지났어요`);
    }

    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

const house1=new House(1789, 'old', 1);
console.log(house1);
house1.getAge();
house1.getWindow();

console.log('-------------')
const house2=new House(2022, '자이', 10);
house2.getAge();
house2.getWindow();
console.log(house2.name);

console.log('-------상속------');

/* 
추가할 속성
    층수 floor
    창문 제조업체 windowMaker
추가할 함수
    aptInfo() 아파트 정보를 나타내는 메소드
*/
class Apartment extends House{
    constructor(year, name, window, floor, windowMaker){
        super(year, name, window);
        this.floor=floor;
        this.windowMaker=windowMaker;
        //상속 받으면 super라는 메소드를 써야함 -pm 12:53
    }

    getAptInfo(){
        return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}에서 만들었습니다.`;
    }
    //overriding- 클래스를 사용해서 부모에서 상속받아와서 쓰는데 메소드 재정의-pm 1:00- 쉽게 말해서 내용을 덮는다.
}
//아파트먼트가 자식 하우스가 엄마, 엄마로부터 상속받는 자식을 각각 지정-pm 12:50

const apt1=new Apartment(2020, 'raemian', 6 ,19, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());
apt1.getAge();
// apt1.getWindow();
// console.log(apt1.getWindow());

// 실습문제2-pm 2:13
/* Shape 클래스
속성: width, height
함수: gerArea()
 */
class Shape{
    constructor(width, height){
        this.width= width;
        this.height= height;
    }
    
    getArea(){
       return this.width * this.height;
    //    console.log(this.width * this.height); 나는 위에 예시를 따라하다보니 console.log로 했는데 어떨대는 return인것 같다-pm 2:36
       
    }
}

let recl=new Shape(3,4);
console.log(recl.getArea());

// Retangle 클래스
class Rectangle extends Shape{
    // 속성 추가를 하지 않는다면 constuctor로 정의하지 않아도 됨
    getDiagonal(){
        return Math.sqrt(this.width**2 + this.height**2);
    }
    // getDiagonal은 대각선 길이 구하는 함수-pm 2:37
}
const rectangle2= new Rectangle(6,8);
console.log(rectangle2.getArea());
console.log(rectangle2.getDiagonal());

//Triangle 클래스
class Triangle extends Shape{
    //overriding
    //함수의 이름은 같지만 기능은 다르게 쓰고 싶을 때
    //overloading은 자바스크립트에서는 없는 개념-pm 2:42
    getArea(){
        return(this.width * this.height)/2;
    }
}
const triangle1=new Triangle(3,4);
console.log(triangle1.getArea());
// 결과값으로 6이 나오면 맞음-pm 2:44

class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height);
        this.radius=radius;
    }
    //overriding
    getArea(){
        return this.radius **2 *Math.PI;
    }
}

const circle = new Circle(1,1,5);
console.log(circle.getArea());