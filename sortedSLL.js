// In this file is sorted singly linked list
class Node {
    constructor(data) {
        this.data = data; 
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    printList() {
        let cur = this.head;
        while(cur) {
            console.log("Value: " + cur.data);
            cur = cur.next;
        }

    }

    insert(newNode) {
        let cur = this.head;
        let prev = this.head;

        // if the list is empty
        if(!this.head) {
            this.head = newNode;
            return;
        }
        /*  
        cases to look out for
        - head is greater than newNode (insert before head)
        - newNode has to go inbetween two nodes
        - newNode goes at the end 
        */
        else {
            while(cur) {

                if(cur.data >= newNode.data) {
                    
                    // if you need to insert before the head
                    if(cur == this.head) {
                        newNode.next = this.head;
                        this.head = newNode;
                        return;
                    }

                    else {
                        prev.next = newNode;
                        newNode.next = cur;
                        return;
                    }

                }

                // if you reach the end
                else if(cur.next == null) {
                    cur.next = newNode;
                    return;
                }
                prev = cur;
                cur = cur.next;
            }
        }

    }
}

let LL = new Linkedlist();

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

LL.insert(node3);
LL.insert(node1);
LL.insert(node5);
LL.insert(node4);
LL.insert(node2); 

LL.printList();
