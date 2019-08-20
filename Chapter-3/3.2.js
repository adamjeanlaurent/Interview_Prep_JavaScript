/*
Stack Min: How would you design a stack which, in addition to push and pop, 
has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.

My solution was to keep track of the smallest number as it became the smallest number. But, I stored it in an array, because 
if for example the stack was [2,3,4,5,1], and 1 was popped, 2 would become the smallest element, and with a single variable we can't
account for that. So, when the smallest elemnet is popped, the minNums array is also popped, min returns the minNums[minNums.length - 1] 
element.

Time: O(1)
Space: O(N)

Another solution could of been to have each item be an object that holds the local min and value of the item.
*/

class Stack {
    constructor() {
        this.items = [];
        this.minNums = [];
    }

    pushStack(data) {
        if(this.items.length == 0) {
           this.minNums.push(data);
        }

        if(data < this.minNums[this.minNums.length - 1]) {
            this.minNums.push(data);
        }

        this.items.push(data);
    } 

    popStack() {
        if(this.items[this.items.length - 1] == this.minNums[this.minNums.length - 1]) {
            this.minNums.pop();
        }

        this.items.pop();
    }

    min() {
        return this.minNums[this.minNums.length - 1];
    }
}

let stack = new Stack();
stack.pushStack(1);
stack.pushStack(2);
stack.pushStack(3);
stack.pushStack(4);
stack.pushStack(5);

stack.popStack();
stack.popStack();
stack.popStack();
stack.popStack();
stack.popStack();

stack.pushStack(10);

console.log(stack.min());

console.log(stack.items);
