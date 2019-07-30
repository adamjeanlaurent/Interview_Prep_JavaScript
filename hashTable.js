
// hash function to create index in array
hashCode = function(string) {
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash >>> 0;
};

// Hash table class
class HashTable {
  constructor() {
    this.table = [];
  }

  // function to insert a key value pair into hash table
  insert(key, value) {
    // compute hash code of key
    let hashOfKey = hashCode(key);
    // check if a linkedlist exists at that index
    // if not, create one and insert the value at that index
    if(!this.table[hashOfKey]) {
      this.table[hashOfKey] = new LinkedList();
      this.table[hashOfKey].insertAtEnd(key, value);
    }
  }
  // function to lookup if a key exists in a table
  checkIfKeyIsInTable(key, value) {
    // compute hashcode of key
    let hashOfKey = hashCode(key);
    // if there exists no linked list at this index, then return false
    if(!this.table[hashOfKey]) {
      return false;
    }
    // traverse through the linked list to find the value passed in
    else {
      return this.table[hashOfKey].find(key, value);
      }
    }
  }

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // inserts a node at the end of the list
  insertAtEnd(key, value) {
    let newNode = new Node(key, value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // checks if a key value pair exists in the list
  find(key, value) {
    let cur = this.head;
    while(cur) {
      if(cur.data == value && cur.key == key) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }
}

class Node {
  constructor(key, value) {
    this.data = value;
    this.key = key;
    this.next = null;
  }
}

let myHashTable = new HashTable();
myHashTable.insert("name", "adam");
console.log(myHashTable.checkIfKeyIsInTable("name", "adam"));
console.log(myHashTable.checkIfKeyIsInTable("name", "bob"));
