var Queue = function(){

  var thing = Object.create(queueMethods);
  thing.begin = 0;
  thing.end = 0;
  thing.storage = {};

   return thing;

};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.end] = val;
    this.end++;
  },
  dequeue: function() {
    var temp = this.storage[this.begin];
    delete this.storage[this.begin];
    this.begin++;
    if (this.begin > this.end) {
      this.begin = this.end;
    };
    return temp;
  },
  size: function() {
    console.log(this.end, this.begin);
    return this.end - this.begin;
  }
};


