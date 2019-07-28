

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
       for(let i = 0; i < this.items.length; i++) {
           console.log("Element #" + i + " = " + this.items[i]);
       }
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
myStack.printStack();
