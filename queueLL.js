
class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class QueueLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    dequeue() {
        if(!this.head) {
            console.log("There's Nothing To Dequeue! The Queue Is Empty.");
        }
        else {
            /* If the tail and head are the same, this means that there is only one element in the queue, 
            and if we want garbage collection to pick it we need to remove all references to it
            */
            if(this.head == this.tail) {
                this.head = null;
                this.tail = null;
            }
            // if there is more than one thing in the queue we can just move the head pointer
            else {
                this.head = this.head.next;
            }
        }
    }

    enqueue(data) {
        let newNode = new Node(data);

        if(!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    printQueue() {
        let cur = this.head;

        if(!cur) {
            console.log("The Queue Is Empty! Nothing To Print.")
        }

        else {
            while(cur) {
                console.log("Value: " + cur.data);
                cur = cur.next;
            }
        }
    }
}


let myQ = new QueueLL();

myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(4);
myQ.enqueue(5);
myQ.dequeue();
myQ.dequeue();
myQ.dequeue();
myQ.dequeue();

myQ.printQueue();