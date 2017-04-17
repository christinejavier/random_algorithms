function HashTable(){
  this.storage = [];
  this.storageLength = 0;
  var storageLimit = 4;
  this.hashKey = function(str){
    this.hash = 0;
    for (var i = 0; i < str.length; i++){
      this.hash += str.charCodeAt(i);
    }
    return this.hash % storageLimit;
  }

  this.hasKey = function(key){
    var index = this.hashKey(key);
    return Boolean(this.storage[index]);
  }

  this.addKey = function(key, value){
    var index = this.hashKey(key);
    if(this.hasKey(key) === false){
      console.log("it's being added here")
      this.storage[index] = [[key,value]];
    }
    else{
      console.log("may exist")
      var alreadyStored = false;
      for(var i = 0; i < this.storage[index].length; i++){
        if(this.storage[index][i][1] === value){
          alreadyStored = true;
        }
      }
      if(alreadyStored === false){
        this.storage[index].push([key, value]);
      }
    }
  }

  this.removeKey = function(){
    
  }


}

var test = new HashTable();
test.addKey("Queer", "Christine");
test.addKey("Queer", "Mel");
test.addKey("Queer", "Christine");

console.log(test.storage);
// console.log(test.storage);
// console.log(test.hashKey("hello"));



// var HashTable = function(obj){
//   this.items = {};
//   this.length = 0;
//   for (var prop in obj){
//     this.items[prop] = obj[prop];
//     this.length++;
//   }
//   this.addItem = function(key, value){
//     if(this.hasItem({key: value})){
//       return;
//     }
//     else{
//       this.items[key] = value;
//       this.length++;
//     }
//   }
//   this.deleteProp = function(propertyName){
//     if(this.items.hasItem(propertyName)){
//       delete this.items[propertyName];
//       this.length--;
//     }
//     return;
//   }
// }
//
// HashTable.prototype.hasItem = function(arg){
//   return this.items.hasOwnProperty(arg);
// }
//
// var trial1 = new HashTable(
//   {programmer1: "Mary", programmer2: "Christine"}
// );
//
// trial1.addItem("programmer3", "Kevin")
// console.log(trial1.items);
// console.log(trial1.hasItem("programmer3"));
//
// trial1.deleteProp("programmer3")
// trial1.deleteProp("programmer7")
//
// console.log(trial1.items);
// console.log(trial1.hasItem("programmer3"));

// console.log(trial1.length);
// console.log(trial1.items);
