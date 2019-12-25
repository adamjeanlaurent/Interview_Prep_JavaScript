class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
} 


function pickWinner(n , k) {
    if(k > n) {
        k = k % n;
    }
    let head = newListNode(0);
    let cur = head;
    for(let i = 0; i < n; i++) {
        cur.next = new ListNode(i + 1);
        cur = cur.next;
    }
    head = head.next;
    cur = head;
    let prev = cur;
    while(cur.next != cur) {
        for(let i = 0; i < k; i++) {
            prev = cur;
            cur = cur.next;
        }
        
    }
}