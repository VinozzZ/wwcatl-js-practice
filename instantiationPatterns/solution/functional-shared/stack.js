var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var thing = {
    count: 0,
    storage: {},
  };
  _.extend(thing, stackMethods);

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


