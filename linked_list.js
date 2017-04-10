// https://www.youtube.com/watch?v=MozZbtPyqt8
// Linked List Methods:
// isEmpty
// size
// prepend
// append
// contains
// remove
// print

function LinkedList(){
  this.head = null;
  this.isEmpty = function(){
    return this.head === null;
  };
  this.size = function(){
    var count = 0;
    var current = this.head;
    while(current !== null){
      count++;
      current = current.next;
    }
    return count;
  };
  this.prepend = function(val){
    var newNode = {
      data: val,
      next: this.head
    };
    this.head = newNode;
  }
  this.append = function(val){
    var newNode = {
      data: val,
      next: null
    };
    if (this.isEmpty()){
      this.head = newNode;
      return;
    }
    var current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = newNode;
  }
  this.contains = function(val){
    var current = this.head;
    while(current.next !== null){
      if(current.data === val){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  this.remove = function(val){
    if(!this.contains(val)){
      return;
    }
    if(this.head.data === val){
      this.head = this.head.next;
      return;
    }
    var previous = null;
    var current = this.head;
    while(current.data !== val){
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    }
}

var list = new LinkedList();
  list.prepend(4);
  list.prepend(7);
  list.append(4);
  list.remove(4);
  list.remove(7);
console.log(list.head);
