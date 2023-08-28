const colors = ["red", "pink", "orange"];

const sayHi = () =>
  function () {
    console.log("hi");
  };

function sayName(name) {
  console.log(`my name is` + name);
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

const p1 = new Person("amy", 20);
console.log(p1.getBornYear());

//한번에 exports 시키기(내보내기)!

module.exports = {
  colors,
  sayName,
  Person,
};
//함수지만 내보내는 거기떄문에 이름만 적어도 됨-pm 3:26
// 오브젝트로 내보내짐-pm 3:28

//module.exports를 가장 최하단에 위치하게 함-pm 3:34
//exports에 안 넣으면 불러오라고 해도 못불러와서 에러남-pm 3:35
