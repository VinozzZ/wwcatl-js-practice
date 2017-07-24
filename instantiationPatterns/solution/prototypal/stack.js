var Stack = function() {
  var thing = Object.create(stackMethods);
  thing.count = 0;
  thing.storage = {};
  return thing;
};

var stackMethods = {
  push:function(value){
    this.storage[this.count] = value;
    this.count++;

  },
  pop: function(){
    this.count--;
    if(this.count < 0){
      this.count = 0;
    }
    var temp = this.storage[this.count];
    delete this.storage[this.count];

    return temp;

  },
  size: function(){
    return this.count;
  }
};


