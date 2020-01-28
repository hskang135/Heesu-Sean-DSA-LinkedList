class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
          tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  makeCyclical(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
          tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, this.head);
    }
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head.value === key) {
      this.insertFirst(item);
    } else {
      while((currNode !== null) && (currNode.value !== key)) {
        prevNode = currNode
        currNode = currNode.next
      }
    }
    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head.value === key) {
      this.insertFirst(item);
    } else {
      while((currNode !== null) && (currNode.value !== key)) {
        prevNode = currNode
        currNode = currNode.next
      }
    }
    currNode.next = new _Node(item, prevNode.next.next);
  }

  insertAt(item, position){
    
    let currNode = this.head
    let prevNode = this.head
    let counter = 0

    while((currNode !== null)&&(counter !== (position))) {
        prevNode = currNode
        currNode = currNode.next
        counter++
    }
    prevNode.next = new _Node(item, currNode.next)
    return currNode
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
        /* Return null if it's the end of the list 
        and the item is not on the list */
        if (currNode.next === null) {
          return null;
        }
        else {
          // Otherwise, keep looking 
          currNode = currNode.next;
        }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      //console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

class _NodeDLL {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
  }

  insertFirst(item) {
    this.head = new _NodeDLL(item, this.head, null);
    this.tail = this.head
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      this.tail.next = new _NodeDLL(item, null, this.tail);
      this.tail = this.tail.next
    }
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head.value === key) {
      this.insertFirst(item);
    } else {
      while((currNode !== null) && (currNode.value !== key)) {
        prevNode = currNode
        currNode = currNode.next
      }
    }
    prevNode.next = new _NodeDLL(item, currNode, prevNode);
  }
  
  insertAfter(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head.value === key) {
      this.insertFirst(item);
    } else {
      while((currNode !== null) && (currNode.value !== key)) {
        prevNode = currNode
        currNode = currNode.next
      }
    }
    currNode.next = new _NodeDLL(item, prevNode.next.next, prevNode.next);
    if(this.tail===currNode){
      this.tail = currNode.next
    }
  }

  insertAt(item, position){
    
    let currNode = this.head
    let prevNode = this.head
    let counter = 0

    while((currNode !== null)&&(counter !== (position))) {
        prevNode = currNode
        currNode = currNode.next
        counter++
    }
    prevNode.next = new _NodeDLL(item, currNode.next, currNode.prev)
    return currNode
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
        /* Return null if it's the end of the list 
        and the item is not on the list */
        if (currNode.next === null) {
          return null;
        }
        else {
          // Otherwise, keep looking 
          currNode = currNode.next;
        }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      //console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
    currNode.next.prev = previousNode
  }



}

// main function
function main() {
  let SLL = new LinkedList;

  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')
  SLL.makeCyclical('Randolph')
 
  // SLL.remove('squirrel')
  // SLL.insertBefore('Athena', 'Boomer')
  // SLL.insertAfter('Hotdog', 'Helo')
  // SLL.insertAt('Kat',3)
  // SLL.remove('Tauhida')
  // SLL.remove('Apllo')

  //printLL(SLL)

  // console.log(size(SLL))
  // console.log(isEmpty(SLL))

  // let m = new LinkedList
  // console.log(isEmpty(m))
  // console.log(findPrevious('Apollo', SLL))
  // console.log(findLast(SLL))
  console.log(SLL)
  console.log(SLL.find('Tauhida'))
  console.log(cycleInList(SLL))
  //console.log(listReverser(SLL))
  //console.log(middleOfList(SLL))
}

function mainDLL(){

  let DLL = new DoublyLinkedList();

  DLL.insertFirst('Aquaria')
  DLL.insertLast('Caprica')
  DLL.insertLast('Gemenon')
  DLL.insertLast('Picon')
  DLL.insertLast('Sagittaron')
  DLL.insertLast('Tauron')
  DLL.remove('Picon')
  DLL.insertBefore('James', 'Caprica')
  //console.log(DLL)
  //console.log(DLL.find('James'))
  listReverserDLL(DLL)
}

mainDLL()

function printLL(list){
    let counter = 0
    let temp = list.head

    while(temp!==null){
        console.log(temp)
        temp = temp.next
        counter++
    }

}

function size(list){

  let curr = list.head
  let counter = 0

  while(curr !== null){
    curr = curr.next
    counter++
  }

  return counter
}

function isEmpty(list){

  let curr = list.head
  let empty = true

  if(curr !== null){
    empty = false
  }

  return empty
}

function findPrevious(item, list){

  let curr = list.head
  let prev = list.head

  if(list.head === null){
    return
  }

  while((curr !== null) && (curr.value !== item)){
    prev = curr
    curr = curr.next
  }

  return prev.value
}

function findLast(list){

    curr = list.head

    while(curr.next !== null){
      curr = curr.next
    }

    return curr.value

}

function third(list) { 
  let curr = list.head;

    while(curr.next.next.next !== null) { 
        curr = curr.next; 
    } 
  return curr.value; 
}

function listReverser(list){

    console.log(list)
    let curr = list.head
    let prev = null
    let temp = null

    while(curr !== null){    
        temp = curr.next;
        curr.next = prev;
        //if (prev) curr.next = prev; 
        // Preparing for next iteration of while loop 
        prev = curr;
        curr = temp;
    }
    return (printLL(list))
}

function listReverserDLL(list){

  let curr = list.head
  let tail = curr
  let prev = null

  if(this.head===null){
    return null
  }

  while(curr !== null){    
      prev = curr.prev
      curr.prev = curr.next
      curr.next = prev

      if(curr.prev){
        curr = curr.prev
      } else {
        this.head = curr;
        this.tail = list.head
        break;
      }
    }
    //console.log(this.tail)
  return (printLL(list))
}



function middleOfList(list){

  let curr = list.head
  let middleElement = list.head
  let thisSize = size(list)

  if(thisSize !== 0){
    let middle = Math.floor(thisSize/2)
    
    for(let i=0; i<middle; i++){
      curr = curr.next
    }
    middleElement = curr
  }

  return middleElement
}

function cycleInList(list){

  let head = list.head
  let curr = list.head

  while(curr!==null){
    if(curr.next===head){
      return('This list is cyclical')
    } else {
      curr = curr.next
    }
  }
  return('This list is not cyclical')
}


//main();

/*

4)  Program removes duplicate values from an ordered linked list

*/