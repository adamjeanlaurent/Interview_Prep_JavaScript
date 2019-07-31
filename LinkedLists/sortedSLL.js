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

    insert(data) {
        // declare variable here because javascript is garbage collected
        let newNode = new Node(data);
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

LL.insert(1);
LL.insert(2);
LL.insert(3);
LL.insert(4);
LL.insert(5); 

LL.printList();
