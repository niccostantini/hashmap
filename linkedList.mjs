class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    append(value) {
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    size() {
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (count === index) {
                return currentNode;
            }

            count++;
            currentNode = currentNode.next;
        }

        return null;
    }

    pop() {

        let currentNode = this.head;
        let prevNode = this.head;

        // If there is no node in the list
        // then return null
        if (!this.head) {
            return alert('No node in the list');
        }

        while (currentNode) { // Traverse the list until the end
            if (!currentNode.next) { // If this is the last node
                prevNode.next = null; // Remove the reference to the last node
                this.tail = prevNode; // Update the tail to the previous node
                return this;
            }

            prevNode = currentNode; // Move the previous node to the current node
            currentNode = currentNode.next; // Move the current node to the next node
        }

        return this;
    }

    contains(value) {
        let currentNode = this.head;

        while(currentNode) {
            if (currentNode.value == value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }

        return false;
    }

    find(value) {
        let currentNode = this.head;
        let count = 0;
         while(currentNode) {
            if (currentNode.value == value) {
                return count;
            } else {
                currentNode = currentNode.next;
                count++;
            }
         }

         throw new Error('Value not found');
    }

    toString() {
        let currentNode = this.head;
        let result = '';

        while(currentNode) {
            if (currentNode.next === null) {
                result += `( ${currentNode.value} ) -> null`;
            } else {
                result += `( ${currentNode.value} ) -> `;
            }
            currentNode = currentNode.next;
        }

        return result;
    }

    insertAt(value, num) {
        let newNode = new Node(value);
        let index = num;
        let currentNode = this.head;

        if(index > (this.size()-1)) throw new Error('Index out of bounds');

        else {
            

            if (index === 0) {
                this.prepend(value);
            } else if (index === this.size() - 1) {
                this.append(value);
            }

            let count = 0;
            let prevNode = this.head;

            while (currentNode) {
                if (count === index) {
                    prevNode.next = newNode;
                    newNode.next = currentNode;
                    return this;
                }

                count++;
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
                
        }
        
    }

    clear() { // Clear the list
        this.head = null;
        this.tail = null;
    }

}

export {LinkedList, Node};