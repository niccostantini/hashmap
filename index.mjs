import { Node, LinkedList } from "./linkedList.mjs";
import HashMap from "./hashMap.mjs"
import HashSet from "./hashSet.mjs";

let test = new HashSet();

test.set('apple')
test.set('banana')
test.set('carrot')

console.log(test.has("lion"))


console.log(test)
console.log(test.keys())