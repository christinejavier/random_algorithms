function LinkedList(){
  this.head = null;
  this.length = 0;
}

function Node(data){
  this.data = data;
  this.next = null;
}

LinkedList.prototype.add = function(data){
  let tailNode = new Node(data);
  if(this.head === null){
    this.head = tailNode;
    this.length++;
    return this.head;
  }
  else{
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = tailNode;
    return currentNode;
  }
}

LinkedList.prototype.hasNodeData = function(data){
  let currentNode = this.head;
  while(currentNode.next !== null){
    if(currentNode.data === data){
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

LinkedList.prototype.remove = function(data){
  let currentNode = this.head;
  if(!this.hasNodeData){
    return;
  }
  else{
    if(currentNode.data === data){
      // console.log(currentNode.next);
      // return currentNode.next;
      // console.log(currentNode);
      this.head = currentNode.next;
      return this.head;
    }
    else{
      while(currentNode.next){
        if(currentNode.next.data === data){
          currentNode.next = currentNode.next.next;
          return currentNode;
        }
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }
}

let testTrial1 = new LinkedList();
testTrial1.add(4);
testTrial1.add(4);
testTrial1.add(3);
console.log(testTrial1.head)
