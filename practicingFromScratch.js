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
testTrial1.add(9);
testTrial1.add(3);
// testTrial1.remove(4);
// testTrial1.remove(3);
// testTrial1.remove(9);

console.log(testTrial1.head)





// function Node(data){
//   this.data = data;
//   this.next = null;
// }
//
// function LinkedList(){
//   this.length = 0;
//   this.nodes = null;
// }
//
// LinkedList.prototype.add = function(val){
//   let headNode = new Node(val);
//   if(!this.nodes){
//     this.nodes = headNode;
//     this.length++;
//     return this.nodes;
//   }
//   let currentNode = this.nodes;
//   while(currentNode.next){
//     currentNode = currentNode.next;
//   }
//   currentNode.next = headNode;
//   this.length++;
//   this.nodes = currentNode;
//   return this.nodes;
// }

LinkedList.prototype.remove = function(val){
  // let headNode = new Node(val);
  // console.log("here")
  let currentNode = this.nodes;
  console.log(currentNode)
  for (let prop in currentNode.next){
    console.log(currentNode[0])
    // console.log("currentNode[prop] = " + currentNode[prop])
    // console.log("val = " + val)
    // console.log(prop);
    // if(currentNode[prop] === val){
    //   // console.log('hello')
    // }
    // console.log("currentNode.next =" +currentNode.next)
    console.log("currentNode.data = " +  currentNode.data)
    if(currentNode.data === val){
      currentNode = currentNode.next;
    }
    // currentNode = currentNode.next;
    // console.log(currentNode)
  }
  this.length--;
  this.nodes = currentNode;
  return this.nodes;
}

let linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(14);
// console.log(linkedList.nodes);
// linkedList.remove(14);
// console.log("linkedList.nodes = " + linkedList.nodes);
