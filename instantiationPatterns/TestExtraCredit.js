//============== tests ====================
window.onload = function(){

var ts = {};

(function(){
  ts.r1 = document.getElementById("r1");
  ts.r2 = document.getElementById("r2");
  ts.r3 = document.getElementById('r3');
  ts.r4 = document.getElementById('r4');

  ts.r1s = document.getElementById('r1s');
  ts.r2s = document.getElementById('r2s');
  ts.r3s = document.getElementById('r3s');
  ts.r4s = document.getElementById('r4s');

  ts.r1q = document.getElementById('r1q');
  ts.r2q = document.getElementById('r2q');
  ts.r3q = document.getElementById('r3q');
  ts.r4q = document.getElementById('r4q');

  ts.testStartPositions = {1:0,2:0,3:0,4:0};
  ts.testSpacingTimes = 3000;
  ts.getRandomInt = function(low,high){
    Math.floor(Math.random() * (low + high) + low);
  };

}());

ts.repeat = 100000;
ts.dataInput = [];

  for(var i = 0; i < repeat; i++){
    if(i % 3 === 0){
      ts.dataInput.push(["this", "is", "an", "arr"]);
    }else if(i % 2 === 0){
      ts.dataInput.push({this:"this",is:"is",an:"an", obj: "obj"});
    }else{
      tx.dataInput.push(1999.9991);
    }
  }

function testOrderRandomizer = function(){

}

var testDataIO = function(classFunc, repeat, isStack, htmlNum){
  var startTimeI, startTimeO;
  var endTimeI, startTimeO;
  var object;

  var hash = {
    1: function(){

      object = classFunc();
    },
    2: function(){

      object = classFunc();
    },
    3: function(){

      object = classFunc();
    },
    4: function(){

      object = new classFunc();
    }

  };

  startTimeI = window.performance.now();
    for(var i = 0; i < repeat; i++){
      object.push(tx.dataInput[i]);
    }
  endTimeI = window.performance.now();

  startTimeO = window.performance.now();
    for(var i = 0; i < repeat; i++){
      object.pop();
    }
  endTimeO = window.performance.now();


  return {
    totalTimeI: Math.floor((endTimeI - startTimeI) * 10000)/10000,
    totalTimeO: Math.floor((endTimeO - startTimeO) * 10000)/10000,
    className: classFunc,
    repeat: repeat,
    isStack: isStack,
    htmlNum: htmlNum,
    object: object,
    testType: "IO",
  };
};


var testDataInstantiation = function(classFunc, repeat, isStack, htmlNum){
  var startTime;
  var endTime;
  var store = [];

  var hash = {
    1: function(){

      store.push(classFunc());
    },
    2: function(){

      store.push(classFunc());
    },
    3: function(){

      store.push(classFunc());
    },
    4: function(){

      store.push(new classFunc());
    }

  };

  startTime = window.performance.now();
  for(var i = 0; i < repeat; i++){
    hash[htmlNum]();
  }
  endTime = window.performance.now();

  return {
    totalTime: Math.floor((endTime - startTime) * 10000)/10000,
    className: classFunc,
    repeat: repeat,
    isStack: isStack,
    htmlNum: htmlNum,
    objects: store,
    testType: "load",
  };
};

var printLoadTimeToHTML = function (obj){
  var divStr = "r" + obj.htmlNum;
  var subStr = divStr;
  if(obj.isStack){
    subStr+="s";
  }else{
    subStr+="q";
  }
  console.log(ts[subStr]);

  ts[subStr].innerHTML = "Loaded: " + obj.repeat + " Objects in: " + obj.totalTime + "ms.";

};
var _ = {};
  _.extend = function(obj) {
    each(Array.prototype.slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  var each = _.each = _.forEach = function(obj, iterator, context) {

   if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        iterator.call(context, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  };
//=================================

//classes we copied in from the files

var FunctionalQ = function(){
  var someInstance = {};

  var storage = {};
  var beginning = 0
  var end = 0;

  someInstance.push = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.pop = function(){
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


printLoadTimeToHTML(testDataInstantiation(FunctionalQ, ts.repeat, false, 1));



var FunctionalS = function(){
  var someInstance = {};
  var size = 0;

  var storage = {};

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

printLoadTimeToHTML(testDataInstantiation(FunctionalS, ts.repeat, true, 1));


(function(){
  var FSQueue = function(){
     var thing = {
      begin: 0,
      end: 0,
      storage: {}
     };
     _.extend(thing, methods);
     return thing;

  };

  var methods = {
    push: function(val) {
      this.storage[this.end] = val;
      this.end++;
    },
    pop: function() {
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

  printLoadTimeToHTML(testDataInstantiation(FSQueue, ts.repeat, false, 2));

}());


(function(){
  var FSStack = function() {

    var thing = {
      count: 0,
      storage: {},
    };
    _.extend(thing, methods);

    return thing;

  };


  var methods = {

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
   printLoadTimeToHTML(testDataInstantiation(FSStack, ts.repeat, true, 2));
}());

(function(){
  var PrototypalQ = function(){

    var thing = Object.create(methods);
    thing.begin = 0;
    thing.end = 0;
    thing.storage = {};

    return thing;

  };

  var methods = {
    push: function(val) {
      this.storage[this.end] = val;
      this.end++;
    },
    pop: function() {
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
  printLoadTimeToHTML(testDataInstantiation(PrototypalQ, ts.repeat, false, 3));
}());

(function(){
  var PrototypalS = function() {
    var thing = Object.create(methods);

    thing.count = 0;
    thing.storage = {};

    return thing;
  };

  var methods = {
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
  printLoadTimeToHTML(testDataInstantiation(PrototypalS, ts.repeat, true, 3));
}());

(function(){
  var PseudoS = function() {

    this.count = 0;
    this.storage = {};

  };


   PseudoS.prototype.push = function(value){
      this.storage[this.count] = value;
      this.count++;

    };

   PseudoS.prototype.pop = function(){
      this.count--;
      if(this.count < 0){
        this.count = 0;
      }
      var temp = this.storage[this.count];
      delete this.storage[this.count];

      return temp;

    };

  PseudoS.prototype.size = function(){
    return this.count;
  };
   printLoadTimeToHTML(testDataInstantiation(PseudoS, ts.repeat, true, 4));
}());

(function(){
  var PseudoQ = function(){


  this.begin = 0;
  this.end = 0;
  this.storage = {};
  };

  PseudoQ.prototype.push = function(val) {
      this.storage[this.end] = val;
      this.end++;
    };

  PseudoQ.prototype.pop = function() {
    var temp = this.storage[this.begin];
    delete this.storage[this.begin];
    this.begin++;
    if (this.begin > this.end) {
      this.begin = this.end;
    };
    return temp;
  };

  PseudoQ.prototype.size = function() {
    console.log(this.end, this.begin);
    return this.end - this.begin;
  };

  printLoadTimeToHTML(testDataInstantiation(PseudoQ, ts.repeat, false, 4));
}());



};

