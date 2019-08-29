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

function inorder(root){
    if(root){
       inorder(root.left);
       console.log(root.data);
       inorder(root.right);
    }
 }

 function preorder(node) {
    if(root) {
        console.log(root.data);
        preorder(root.left);
        preorder(root.right);
    }
 }

 function postorder(root) {
     if(root) {
         postorder(root.left);
         postorder(root.right);
         console.log(root.data);
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
            let temp = root.left;   
            root = null;
            return temp;
        }

        else if (root.left == null) {
            let temp = root.right;
            root = null;
            return temp;
        }

        // CASE 3: Node to delete has two children
        else {
            let successor = findMin(root.right);
            root.data = successor.data;
            root.right = deleteNode(root.right, successor.data);
            return root;
        }
    }
    return root;
}

function findMin(root) {
    if(root == null) return root;
    if(root.left) root = findMin(root.left);
    if(root.left == null) return root;
}

let root = null;
root = insert(root,10);
root = insert(root,20);
root = insert(root,30);
root = insert(root,40);
root = insert(root,38);
root = insert(root,42);

postorder(root);

// root = deleteNode(root, 40);
// inorder(root);