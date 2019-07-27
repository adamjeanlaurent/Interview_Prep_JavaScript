class node {
    constructor(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

class CDBLL {
    constructor() {
        this.head = null;
    }  
    // inserts a new node at end of CDBLL
    insertAtEnd(newNode) {
        let cur = this.head;
        // if there is no head, insert newNode there and pointer prev and next to itself
        if(!cur) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        }
        else {

            // traverse list till end
            while(cur) {
                // if at end
                if(cur.next == this.head) {
                    // point end next to new node
                    cur.next = newNode;
                    // point new node prev to previous last node
                    newNode.prev = cur;
                    // point new node next to head to make it ciruclar
                    newNode.next = this.head;
                    // pointer head prev to new node to keep it circular
                    this.head.prev = newNode;
                    console.log("Value: " + cur.data);
                    return;
                }

                cur = cur.next;
            }
        }
    }

    printListForwards() {
        let cur = this.head;
        if(cur != null) {
            do {
                console.log("Value: " + cur.data);
                cur = cur.next;
            }
            while(cur != this.head);
        }
    }

    // wtf is going on here
    printListBackwards() { 
        let cur = this.head.prev;
        if(cur != null) {
            do {
                console.log("Value: " + cur.data);
                cur = cur.prev;
            }
            while(cur != this.head.prev);
        }
    }
}

let node1 = new node(1);
let node2 = new node(2);
let node3 = new node(3);
let node4 = new node(4);
let node5 = new node(5);


let list = new CDBLL();

list.insertAtEnd(node1);
list.insertAtEnd(node2);
list.insertAtEnd(node3);
list.insertAtEnd(node4);
list.insertAtEnd(node5);

list.printListForwards();
console.log('--------------');
list.printListBackwards();