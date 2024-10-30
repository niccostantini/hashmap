import { Node, LinkedList } from "./linkedList.mjs";
import hash from "./murmur3.mjs";

class HashMap {
    constructor () { //create empty array of 13 linked lists
        this.buckets = Array.from({ length: 13 }, () => new LinkedList())
    }

    checkLength(index) { //function to check if we are trying to access index out of bound and stop if that's the case
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
          }
    }

    set(key, value) {
        const index = hash(key) % this.buckets.length;
        for (let list of this.buckets) {
            if(!list.head) {
                list.append([index, value])
            } else {
                
            }
        }
    }
}

export default HashMap