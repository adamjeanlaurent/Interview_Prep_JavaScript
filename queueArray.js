
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        for(let i = this.items.length - 1; i >= 0; i--) {
            console.log("Element #" + i + " = " + this.items[i]);
        }
    }
}

let myQ = new Queue();

myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(4);
myQ.enqueue(5);
myQ.dequeue();

myQ.printQueue();
