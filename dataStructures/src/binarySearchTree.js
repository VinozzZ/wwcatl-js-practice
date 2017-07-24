var BinarySearchTree = function(value){
  this.value = value;
  this.left;
  this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right !== undefined) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } else if (value < this.value) {
    if (this.left !== undefined) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }

};


BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  }
  if (value > this.value) {
    if (this.right !== undefined) {
      return this.right.contains(value);
    } else {
      return false;
    }
  } else if (value < this.value) {
    if (this.left !== undefined) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }

};

BinarySearchTree.prototype.depthFirstLog = function (func) {
  func(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(func);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
