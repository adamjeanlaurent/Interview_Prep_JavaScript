

class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(data) {
        // declare variable here because javascript is garbage collected
        let newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode; 
        }
    }

    pop() {
        if(!this.head) {
            console.log("There's Nothing To Pop");
        }

        else {
            let cur = this.head;
            this.head = cur.next;
            cur = null;
        }
    }

    printStack() {
        let cur = this.head;
        if(!cur) console.log("The Stadck Is Empty, Nothing To Print");
        while(cur) {
            console.log("Value: " + cur.data);
            cur = cur.next;
        }
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.printStack();