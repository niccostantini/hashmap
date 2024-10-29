import { HashMap } from './hashMap.mjs';

const test = new HashMap();

let value = "alumnus";

console.log("Adding John Doe to the HashMap with value " + value);
test.set('John Doe', value)
console.log("Added");

console.log("Adding Maria Callas to the HashMap with value singer");
test.set('Maria Callas', 'singer')
console.log("Added");

console.log("Adding Alessandro Pertini to the HashMap with value scientist");
test.set('Alessandro Pertini', 'scientist')
console.log("Added");

console.log("Get value for John Doe: " + test.get('John Doe'));
console.log("Get value for Maria Callas: " + test.get('Maria Callas'));
console.log("Number of stored keys: " + test.length())

console.log(test.values())