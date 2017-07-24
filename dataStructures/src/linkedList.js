var LinkedList = function(){

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
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }

  };

  list.removeHead = function(){

    var head = list.head;
    list.head = list.head.next;
    return head.value;

  };

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

  return node;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
