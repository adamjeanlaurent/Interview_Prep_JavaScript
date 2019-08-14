
/*
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

My Solution: Run a pointer through the whole list, keeping a count of the size, when you reach the end of the list,
move the pointer back to the head , and move it count - k spots, then return that element, this will also protect from if k is
bigger than the count

Time: O(N)
Space: O(1) // if the linked list is larger than the count this will no longer work 

OTHER SOLUTION: have two pointer, move p1 k times, then move them both at the same time until p1 == null; that way,
p2 will be k steps from the end and return k

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

    printList() {
        if(this.head) {
            let cur = this.head;
            while(cur) {
                console.log("Value: " + cur.data);
                cur = cur.next;
            }
        }
    }

    KTHLast(n) {
        if(this.head) {
            let cur = this.head;
            let cnt = 0;
            while(cur.next) {
                cur = cur.next;
                cnt++;
            }
            cur = this.head;
            // if n is bigger, it will always return the first element (cnt - n)
            for(let i = 0; i < cnt - n; i++) {
                cur = cur.next;
            }
            return cur.data;
        }
        return null;
    }
}


let list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);

// list.printList();

console.log(list.KTHLast(7));



// // This algorithm takes O(n) time and 0(1) space.
// LinkedListNode nthTolast(LinkedListNode head, int k) {
    // LinkedlistNode pl head;
    // LinkedlistNode p2 = head;
// /* Move pl k nodes into the list.*/
    // for (int i= 0; i < k; i++) {
        // if (pl == null) return null; // Out of bounds
        // pl = pl.next;
// /* Move them at the same pace. When pl hits the end, p2 will be at the right
// * element. */
    // while (pl!= null) {
        // pl pl.next;
        // p2 = p2.next;
    // return p2;