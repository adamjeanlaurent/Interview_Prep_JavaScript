class BSTNode {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

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

function search(root, data)

let root = null;
root = insert(root,10);
root = insert(root,20);
root = insert(root,30);
root = insert(root,40);
// console.log(root);