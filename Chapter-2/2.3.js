/*
Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
EXAMPLE
lnput:the node c from the linked lista->b->c->d->e->f
Result: nothing is returned, but the new linked list looks likea->b->d->e- >f

Here, you are only given access to a pointer to the node, you can't access head or tail or anything, so you can't just walk through
First thing you do, is check if the node exists, and isn't the last node in the list, then you create a temp pointer to the next node,
copy the data from the next node into the current node, and set the current nodes next to the next node's next node
so essentially, you copy over the data from the next node to the current node, then you pointer the current node to the next node's next node.
So essentially you moved a node down

Time: O(1)
Space: O(1)

*/



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList { 
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        }
        else {
            let cur = this.head;
            while(cur.next) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
    }
    deleteCurNode(node) {
        if(!node || node.next) {
            return false;
        }
        let nextNode = node.next;
        node.data = nextNode.data;
        node.next = nextNode.next;
        return true;
    }
}