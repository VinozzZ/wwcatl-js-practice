var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
 // for(var key in treeMethods){
  //  newTree[key] = treeMethods[key];
  //}

  _.extend(newTree, treeMethods);

  // your code here

  newTree.children = [];

  return newTree;
};


var treeMethods = {};



treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
  child.parent = this;
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var result = this.children[i].contains(target);
    if (result === true) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  var par = this.parent;
  this.parent = null;
  for (var i = 0; i < par.children.length; i++) {
    if (par.children[i] === this) {
      return par.children.splice(i, 1)[0];
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


