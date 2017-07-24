var Stack = function(){
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    size--;
    var temp = storage[size];
    delete storage[size];

    if(size <0){
      size = 0;
    }

    return temp;

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
