var Queue = function(){
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var beginning = 0
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    var temp = storage[beginning];

    delete storage[beginning];
    beginning++;
    if (beginning > end) {
      beginning = end;
    };
    return temp;
  };

  someInstance.size = function(){
    return end - beginning;
  };

  return someInstance;
};
