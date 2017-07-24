

var Stack = function() {

  this.count = 0;
  this.storage = {};

};


 Stack.prototype.push = function(value){
    this.storage[this.count] = value;
    this.count++;

  };

 Stack.prototype.pop = function(){
    this.count--;
    if(this.count < 0){
      this.count = 0;
    }
    var temp = this.storage[this.count];
    delete this.storage[this.count];

    return temp;

  };

  Stack.prototype.size = function(){
    return this.count;
  };











