import {flr, getFlr} from './ES6_module1.js';

console.log(flr[0]);
console.log(getFlr(3));

// import * as animals from './ES6_module2.js';
// animals.showAnimals();

import {showAnimals, animals} from './ES6_module2.js';
console.log(animals[1]);
showAnimals();

import sayHi from './module.js';
sayHi();

// console.log(getFlr(0));
// console.log(getFlowers(3)); 잘못된 인덱스용 코드(테스트용)-pm 3:50

// import {flowers, getFlowers} from './ES6_module1';