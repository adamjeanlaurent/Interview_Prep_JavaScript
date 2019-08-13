/*
Remove Dups! Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

/*
My first solution removeDupsWithSet() walk through the linked list with cur, check if the element is in a set,
if so, then it's a duplicate and I remove it, if not then it's not a duplicate and I add it to the set and move prev and cur

Time: O(N)
Space: O(N)

The second solution is one where we use two pointers, we move cur once, then check all other nodes to see if there is a node that 
has the same data as cur, if so, we remove it

Time: O(N^2) because for each element in the linked list we have to check every subsequent element
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

    removeDupsWithSet() {
        if(this.head) {
            let cur = this.head;
            let prev = this.head;

           let set = new Set();

            while(cur) {
                if(set.has(cur.data)) {
                    this.remove(cur, prev);
                    cur = prev.next;
                }
                else {
                    set.add(cur.data);
                    prev = cur;
                    cur = cur.next;
                }
            }

        }
    }

    removeDupsNoExtraMemory() {
        if(this.head) {
            let cur = this.head;
            while(cur) {
                let runner = cur;
                while(runner.next) {
                    if(runner.next.data == cur.data) {
                        runner.next = runner.next.next;
                    }
                    else {
                        runner = runner.next;
                    }
                }
                cur = cur.next;
            }

        }
    }

    remove(cur, prev) {
        prev.next = cur.next;
        cur.next = null;
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
}

let LL = new LinkedList();


LL.insert(3);
LL.insert(3);
LL.insert(3);
LL.insert(3);
LL.insert(3);
LL.insert(3);
LL.insert(3);
LL.insert(3);
LL.insert(3);
LL.insert(3);


LL.removeDupsWithSet();


LL.printList();