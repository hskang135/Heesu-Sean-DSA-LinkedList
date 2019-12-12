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

    while((currNode !== null)&&(counter !== (position-1))) {
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


// main function
function main() {
  let SLL = new LinkedList;

  SLL.insertFirst('Apllo')
  SLL.insertFirst('Boomer')
  SLL.insertFirst('Helo')
  SLL.insertFirst('Husker')
  SLL.insertFirst('Starbuck')
  SLL.insertFirst('Tauhida')
  SLL.remove('squirrel')
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat',3)
  SLL.remove('Tauhida')
  //console.log(SLL.find('ships'));
  //console.log(SLL.find('Helo'));
  //console.log(SLL.find('Husker'));
  //console.log(SLL.insertAt('rocks',2))
  //console.log(SLL.find('rocks'));

  printLL(SLL)
}

function printLL(list){
    let max = 15
    let counter = 0
    let temp = list.head

    while((temp!==null) && (counter < max)){
        console.log(temp)
        temp = temp.next
        counter++
    }

}

main();
