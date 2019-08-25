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

    /*
        - pass the data of the node to delete, find the node in the tree
        - if it has two children, traverse to the left most node of it's right subtree
        - if it has one child, replace it with it's one child
        - if it has one children, just delete it
    */

    remove(data) {
        let cur = find(data);
        let tempPtr = cur;
        if(cur) {
            // if node to delete has two children
            if(cur.left && cur.right) {
                // start at the right subtree
                let tempPtr = cur.right;

                // traverse until the second to last lest node
                while(tempPtr.left.left) {
                    tempPtr = tempPtr.left;
                }
                
                // set cur's data to the successor's
                cur.data = tempPtr.left.data;
                // remove successor node
                tempPtr.left = null;
            }

            else if(cur.left || cur.right) {   
                if(cur.left) {
                    cur.data = cur.left.data;
                    cur.left = cur.left.left;
                }
            }
        }
        return null;
    }

    /*
    - start at root, check is == to root
    - if less go left and check
    - if greater go right and check
    */

    find(data) {
        if(!this.root) {
            return null;
        }
        let cur = this.root;

        while(cur) {
            if(cur.data == data) return cur;

            if(cur.data > data) {
                if(cur.left) {
                    cur = cur.left;
                }
            }

            else if(cur.data < data) {
                if(cur.right) {
                    cur = cur.right;
                }
            }
        }
        return null;  
    }

    isPresent(data) {
        if(!this.root) {
            return true;
        }
        let cur = this.root;

        while(cur) {
            if(cur.data == data) return true;

            if(cur.data > data) {
                if(cur.left) {
                    cur = cur.left;
                }
            }

            else if(cur.data < data) {
                if(cur.right) {
                    cur = cur.right;
                }
            }
        }
        return false; 
    }
    
    // go left as much as possible from the root
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

    // go right as much as possible from the root
    findMax() {
        if(!this.root) {
            return null;
        }

        let cur = this.root;

        while(cur.right) {
            cur = cur.right;
        }
        return cur.data;
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

// function traverse(root, num) {

//     if(root == null) return null;

//     if(root.data == data) return data;

//     if(num > root.data) {
//         return traverse(root.right, num);
//     }
    
//     else {
//         return traverse(root.left, num);
//     }
// }