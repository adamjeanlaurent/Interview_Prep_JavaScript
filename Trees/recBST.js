class BSTNode {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// TODO comment these functions so that you understand them

function insert(root, data) {
    if(root == null) {
        root = new BSTNode(data);
    }
     
    else if(data <= root.data) {
        root.left = insert(root.left, data);
    }

    else {
        root.right = insert(root.right, data);
        // console.log(root.right);
    }
    return root;
}

function inorder(node){
    if(node){
       inorder(node.left);
       console.log(node.data);
       inorder(node.right);
    }
 }

function search(root, data) {
    if(root == null) return false;
    else if(root.data == data) return true;
    if(data => root.data) return search(root.right, data);
    else return search(root.left, data);
}

function deleteNode(root, data) {
    if(root == null) return root;
    else if(data < root.data) root.left = deleteNode(root.left, data);
    else if(data > root.data) root.right = deleteNode(root.right, data);
    
    // node to delete found
    else {
        // CASE 1: Node to delete has no children
        if(root.left == null && root.right == null) {
            root = null;
            return root;
        }
        // CASE 2: Node to delete has one child
        else if(root.right == null) {
            /*
            - move a ptr to the child
            - delete the root
            - return temp
            */

            let temp = root.left;
            root = null;
            return temp;
        }

        else if (root.left == null) {
            let temp = root.right;
            root = null;
            return temp;
        }

        else {
            let successor = findMin(root.right);
            root.data = successor.data;
            root.right = deleteNode(root.right, successor.data);
            return root;
        }
    }
    return root;
}

let root = null;
root = insert(root,10);
root = insert(root,20);
root = insert(root,30);
root = insert(root,40);
root = insert(root,38);
root = insert(root,42);

root = deleteNode(root, 40);
inorder(root);