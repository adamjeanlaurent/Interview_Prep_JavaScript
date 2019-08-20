
/*
Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit.
The digits are stored in reverse order, such that the 1 's digit is at the head of the list. 
Write a function that adds the two numbers and returns the sum as a linked list.
*/

// BAD VERY BAD
// see other solution
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

    addLists(LL1, LL2) {
        let LL1AsStr = this.LLToStr(LL1);
        let LL2AsStr = this.LLToStr(LL2);
        let sum = String(parseInt(LL1AsStr) + parseInt(LL2AsStr));

        let LLToReturn = new LinkedList();

        for(let i = sum.length - 1; i >= 0; i--) {
            LLToReturn.insert(sum[i]);
        }

        return LLToReturn;

    }

    LLToStr(LL) {
        let cur = LL.head;
        let str = '';
        while(cur) {
            str += cur.data;
            cur = cur.next;
        }
        return str.split('').reverse().join('');
    }

    insert(data) {
        let cur = this.head;
        let newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            return;
        }
        while(cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
    }

    printList() {
        let cur = this.head;
        while(cur) {
            console.log('value: ' + cur.data);
            cur = cur.next;
        }
    }
}


'use strict';

import { createNode } from './helpers';

/**
 * Walk through both lists in step summing each digit. Where the sum is greater
 * than 10 then maintain a carry value. Where one list is longer than the other
 * then copy the rest of the digits across adding any carry values.
 *
 * N = max(|list1|, |list2|)
 * Time: O(N)
 * Additional space: O(N) - algorithm doesn't require additional storage in
 * general, additional space is used to create the new list.
 */
export function sumListsReverseOrder(list1, list2) {
  let head = { next: null }, // pseudo node
    tail = head,
    carry = 0,
    node1 = list1,
    node2 = list2,
    sum;

  while (node1 && node2) {
    sum = node1.val + node2.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    node1 = node1.next;
    node2 = node2.next;
  }

  node1 = node1 || node2; // go through whatever is remaining of the longer list
  while (node1) {
    sum = node1.val + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = createNode(sum);
    node1 = node1.next;
  }

  if (carry > 0) { // check for any remaining carry
    tail.next = createNode(carry);
  }

  return head.next;
}

let LL1 = new LinkedList();
let LL2 = new LinkedList();

LL1.insert(7);
LL1.insert(1);
LL1.insert(6);

LL2.insert(5);
LL2.insert(9);
LL2.insert(2);

(LL1.addLists(LL1, LL2)).printList();

