import { Node, LinkedList } from "./linkedList.mjs";
import hash from "./murmur3.mjs";

class HashMap {
    constructor () { //create empty array of 13 linked lists
        this.buckets = Array.from({ length: 13 }, () => new LinkedList())
        this.__size = 0;
    }

    checkLength(index) { //function to check if we are trying to access index out of bound and stop if that's the case
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
          }
    }

    expand() {
        let __fillRatio = this.__size / this.buckets.length;
        const threshold = 0.75;
    
        if (__fillRatio > threshold) {
            // Step 1: Create new buckets with double the original length
            let newBuckets = Array.from({ length: this.buckets.length * 2 }, () => new LinkedList());
    
            // Step 2: Rehash all existing key-value pairs
            for (const bucket of this.buckets) {
                let currentNode = bucket.getHead();
                while (currentNode) {
                    const { key, value } = currentNode.value;
    
                    // Calculate new index in the expanded array
                    const newIndex = hash(key) % newBuckets.length;
    
                    // Insert into the appropriate linked list in newBuckets
                    newBuckets[newIndex].append({ key, value });
                    
                    currentNode = currentNode.next;
                }
            }
    
            // Step 3: Replace old buckets with newBuckets
            this.buckets = newBuckets;
        }
    }

    set(key, value) {
        const index = hash(key) % this.buckets.length;
        const bucket = this.buckets[index];
        
        // Traverse the linked list to check if the key exists
        let currentNode = bucket.getHead();
        while (currentNode) {
            if (currentNode.value.key === key) {
                // If key exists, update its value
                currentNode.value.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        
        // If key does not exist, append a new { key, value } object
        bucket.append({ key, value });
        this.__size++
    }

    get(key) {
        const index = hash(key) % this.buckets.length;
        const bucket = this.buckets[index];

        let currentNode = bucket.getHead();
        while (currentNode) {
            if (currentNode.value.key === key) {
                // If key exists, update its value
                return currentNode.value.value;
            }
            currentNode = currentNode.next;
        }

        return undefined;
    }

    has(key) {
        const index = hash(key) % this.buckets.length;
        const bucket = this.buckets[index];

        let currentNode = bucket.getHead();
        while (currentNode) {
            if (currentNode.value.key === key) {
                // If key exists, update its value
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    remove(key) {
        const index = hash(key) % this.buckets.length;
        const bucket = this.buckets[index];
    
        let currentNode = bucket.getHead();
        let prevNode = null;
    
        while (currentNode) {
            if (currentNode.value.key === key) {
                // If we're removing the head node
                if (prevNode === null) {
                    bucket.head = currentNode.next;
                } else {
                    // Bypass the current node
                    prevNode.next = currentNode.next;
                }
    
                // If the node is the tail, update the tail reference
                if (currentNode === bucket.tail) {
                    bucket.tail = prevNode;
                }
    
                this.__size--; // Decrement size
                return true; // Successful removal
            }
    
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    
        return false; // Key not found
    }
}

export default HashMap