import { Node, LinkedList } from "./linkedList.mjs";
import HashMap from "./hashMap.mjs"

let test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.get("lion"))
test.set("lion", "crap")
test.set('moon', 'silver')

console.log(test)
console.log(test.entries())