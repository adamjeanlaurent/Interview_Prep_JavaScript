class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    findMin() {
        if(!this.root) {
            return null;
        }
        
        let cur = this.root;

        while(cur.left) {
            cur = cur.left;
        }
        return cur.data;
    }

    findMax() {
        if(!this.root) {
            return null;
        }

        let cur = 
    }
    insert(data) {
        let newNode = new Node(data);

        if(!this.root) {
            this.root = newNode;
        }

        let cur = this.root;

        /*
            - if new node data is greater than cur node data go right
                - if right is not null ^ 
                - if right is pull place is there 
            - if new node data is less than cur node data go left
                - if left is not null ^ 
                - if left is pull place is there 
            - lets ignore equal nodes for now
        */

        while(cur) {
            if(newNode.data > cur.data) {
                if(cur.right) {
                    cur = cur.right;
                }
                else {
                    cur.right = newNode;
                    break;
                }
            }

            else if(newNode.data < cur.data) {
                if(cur.left) {
                    cur = cur.left;
                }
                else {
                    cur.left = newNode;
                    break;
                }
            }
        }
    }
}