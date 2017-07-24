

var Graph = function(){

  this.bucket = {};


};

Graph.prototype.addNode = function(node){
  this.bucket[node] = {};

};

Graph.prototype.contains = function(node){
  if(this.bucket[node] !== undefined){
    return true;
  }else{
    return false;
  }

};

Graph.prototype.removeNode = function(node){
if(this.contains(node) === false){
    return false;
  }
/*
for(var key in this.bucket){
  delete this.bucket[key][node];
}
*/
var that = this;

  this.forEachNode(function(key){
    that.removeEdge.call(that, key, node);

  });

  delete this.bucket[node];
console.log("remove node finish");
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.contains(fromNode) === false || this.contains(toNode) === false){
    return false;
  }
  return this.bucket[fromNode][toNode] ? true : false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.contains(fromNode) === false || this.contains(toNode) === false){
    return false;
  }
  this.bucket[fromNode][toNode] = true;
  this.bucket[toNode][fromNode] = true;

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.contains(fromNode) === false || this.contains(toNode) === false){
    return false;
  }
  delete this.bucket[fromNode][toNode];
  delete this.bucket[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.bucket){

    cb(key);
  }
  //console.log("---------");
};

/*
bucket = {
  puppies : {kitten: true, penguins: true},
  kittens: {puppies:true, peguins: true}
}
 * Complexity: What is the time complexity of the above functions?
 */



