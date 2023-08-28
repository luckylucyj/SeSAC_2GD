const module1 = require("./commonJS_module.js");
console.log(module1);
console.log(module1.colors);

const soojung = new module1.Person("수정", 20);
console.log(soojung);
//아직은 그냥 펄슨으로는 접근 못해서 키값으로 접근함-pm 3:32

const { sayName } = require("./commonJS_module.js");
const { sayName2, sayhi2 } = require("./commonJS_module2.js");
sayName(" jiyun");

sayName2('지윤');
sayhi2();
//함수 자동 완성으로 require가 자동으로 생김-pm 3:38-와 대다내
