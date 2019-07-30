
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
    let newKeyValuePair = new KeyValuePair(key, value);
    // check if a linkedlist exists at that index
    // if not, create one and insert the value at that index
    if(!this.table[hashOfKey]) {
      this.table[hashOfKey] = new LinkedList();
      this.table[hashOfKey].insertAtEnd(newKeyValuePair);
    }
  }
  // function to lookup if a key exists in a table
  checkIfKeyIsInTable(newKeyValuePair) {
    // compute hashcode of key
    let hashOfKey = hashCode(newKeyValuePair.key);
    // if there exists no linked list at this index, then return false
    if(!this.table[hashOfKey]) {
      return false;
    }
    // traverse through the linked list to find the value passed in
    else {
      return this.table[hashOfKey].find(newKeyValuePair);
      }
    }
  }

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtEnd(newKeyValuePair) {
    let newNode = new Node(newKeyValuePair.key, newKeyValuePair.value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  find(newKeyValuePair) {
    let cur = this.head;
    while(cur) {
      if(cur.data == newKeyValuePair.value && cur.key == newKeyValuePair.key) {
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

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

let myHashTable = new HashTable();
let newKeyValuePair = new KeyValuePair("name", "adam");
myHashTable.insert(newKeyValuePair.key, newKeyValuePair.value);
console.log(myHashTable.checkIfKeyIsInTable(newKeyValuePair));
console.log(myHashTable.checkIfKeyIsInTable(new KeyValuePair("bob", "adam")));
