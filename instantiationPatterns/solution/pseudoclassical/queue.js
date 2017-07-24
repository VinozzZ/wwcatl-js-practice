var Queue = function(){


  this.begin = 0;
  this.end = 0;
  this.storage = {};



};

Queue.prototype.enqueue = function(val) {
    this.storage[this.end] = val;
    this.end++;
  };

  Queue.prototype.dequeue = function() {
    var temp = this.storage[this.begin];
    delete this.storage[this.begin];
    this.begin++;
    if (this.begin > this.end) {
      this.begin = this.end;
    };
    return temp;
  };

  Queue.prototype.size = function() {
    console.log(this.end, this.begin);
    return this.end - this.begin;
  };

var queue = new Queue();



