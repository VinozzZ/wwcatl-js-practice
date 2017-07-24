var LinkedListDouble = function(){

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null){
      list.head = Node(value);

    }

    if(list.tail === null){
      list.tail = list.head;
    }else{
      var node = Node(value);
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;
    }

  };

  list.removeTail = function(){
    var newTail = list.tail.previous;
    var oldTail = list.tail;

    list.tail = newTail;

    if(newTail !== null){
      newTail.next = null;
    }

    return oldTail.value;
  }

  list.removeHead = function(){

    var newHead = list.head.next;
    var oldHead = list.head;

    list.head = newHead;

    if(newHead !== null){
      newHead.previous = null;
    }


    return oldHead.value;

  };

  list.addToHead = function(value){

   if(list.head === null){
    list.head = Node(value);

    }

    if(list.tail === null){
      list.tail = list.head;
    }


    var newNode = Node(value);
    newNode.next = list.head;
    list.head.previous = newNode;
    list.head = newNode;


  }

  list.contains = function(target){

    var thing = null;

    do{
      if(thing === null){
        thing = list.head;
      }

      if(target === thing.value){
        return true;
      }

       thing = thing.next;


    } while(thing !== null);


    return false;

  };

  return list;
};

//class down here, this is a class
var Node = function(value){

  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};








/*
 * Complexity: What is the time complexity of the above functions?
 */
