/*
Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks. push() and SetOfStacks. 
pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were 
just a single stack).
FOLLOW UP
Implement a function pop At(int index)which performs a pop operation on a specific sub-stack.

My Solution: To have an array of stacks, where push, pushes a value onto the last stack in the array, and where push pushes off the last 
stack in the array. If the last array is empty during one of theses operations, then the last stack is popped from the array, and the
operation carries over to the previous stack.

Regarding the follow up, if the operation can't be performed on a stack at that index, then all the indexes are moved down and the operation
will take place after.

Time: PopOffStack is O(1), PushOntoStack is O(1), PopAt is O(N), because it possible that you have to move everything down
space: O(N)
*/

class SetOfStacks {
    constructor(stackSize) {
        this.stacks = [[]];
        this.maxStackSize = stackSize;
    }

    popOffStack() {
        let numOfStacks = this.stacks.length - 1;
        let currentStack = this.stacks[numOfStacks];

        if(currentStack.length == 0) {
            this.stacks.pop();
            currentStack = this.stacks[numOfStacks - 1];
        }
        return currentStack.pop();
    }
    
    pushOntoStack(num) {
        let numOfStacks = this.stacks.length - 1;
        let currentStack = this.stacks[numOfStacks];

        if(currentStack.length == this.maxStackSize) {
            this.stacks.push([num]);
            return (this.stacks.length * this.maxStackSize) - 2;
            
        }
        else {
            currentStack.push(num);
            return (numOfStacks * this.maxStackSize) + currentStack.length;
        }
    }
    popAt(n) {
        let currentStack = this.stacks[n];
        if(currentStack.length == 0 && currentStack != this.stacks[this.stacks.length - 1]) {
            this.moveEveryThingDown(n);
        }

        else if(currentStack.length == 0 && currentStack == this.stacks[this.stacks.length -1 ]) {
            return this.popOffStack();
        }

        return currentStack.pop();
    }

    moveEveryThingDown(n) {
        for(let i = n; i < this.stacks.length; i++) {
            this.stacks[i] = this.stacks[i +1];
        }
            this.stacks.pop();
    }
}

let sos = new SetOfStacks(3);
console.log('pushing:  ======= ');
console.log(sos.pushOntoStack(1));
console.log(sos.pushOntoStack(2));
console.log(sos.pushOntoStack(3));
console.log(sos.pushOntoStack(4));
console.log(sos.pushOntoStack(5));
console.log(sos.pushOntoStack(6));
console.log(sos.pushOntoStack(7));

// console.log('popping:  ======= ');

// console.log(sos.popOffStack());
// console.log(sos.popOffStack());
// console.log(sos.popOffStack());
// console.log(sos.popOffStack());
// console.log(sos.popOffStack());

console.log(sos.popAt(1));
console.log(sos.popAt(1));
console.log(sos.popAt(1));
console.log(sos.popAt(1));
console.log(sos.popAt(1));
console.log(sos.popAt(1));


console.log(sos);