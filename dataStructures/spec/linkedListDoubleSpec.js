describe('linkedListDouble', function() {
  var linkedListDouble;

  beforeEach(function() {
    linkedListDouble = LinkedListDouble();
  });

  it('should have a head and tail', function() {
    expect(linkedListDouble).to.have.property("head");
    expect(linkedListDouble).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains", "addToHead", "removeTail"', function() {
    expect(linkedListDouble.addToTail).to.be.a("function");
    expect(linkedListDouble.removeHead).to.be.a("function");
    expect(linkedListDouble.contains).to.be.a("function");
    expect(linkedListDouble.addToHead).to.be.a("function");
    expect(linkedListDouble.removeTail).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedListDouble.addToTail(4);
    expect(linkedListDouble.tail.value).to.equal(4);
    linkedListDouble.addToTail(5);
    expect(linkedListDouble.tail.value).to.equal(5);
  });

   it('should point new tail.previous to old tail', function(){
    linkedListDouble.addToTail(4);
    //expect(linkedListDouble.tail.value).to.equal(4);
    linkedListDouble.addToTail(5);
    expect(linkedListDouble.tail.previous.value).to.equal(4);
  });

  it('should point new tail.next to null', function(){
    linkedListDouble.addToTail(4);
    //expect(linkedListDouble.tail.value).to.equal(4);
    linkedListDouble.addToTail(5);
    expect(linkedListDouble.tail.next).to.equal(null);
  });

  it('should designate a new head when addToHead is called', function(){
    linkedListDouble.addToHead(27);
    expect(linkedListDouble.head.value).to.equal(27);
    linkedListDouble.addToHead(26);
    expect(linkedListDouble.head.value).to.equal(26);
  });

  it('should point new head.previous to null', function(){
    linkedListDouble.addToHead(2);
    //expect(linkedListDouble.tail.value).to.equal(4);
    linkedListDouble.addToHead(1);
    expect(linkedListDouble.head.previous).to.equal(null);
  });

  it('should point new head.next to old head', function(){
    linkedListDouble.addToHead(2);
    //expect(linkedListDouble.tail.value).to.equal(4);
    linkedListDouble.addToHead(1);
    expect(linkedListDouble.head.next.value).to.equal(2);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedListDouble.addToTail(4);
    linkedListDouble.addToTail(5);
    expect(linkedListDouble.head.value).to.equal(4);
    linkedListDouble.removeHead();
    expect(linkedListDouble.head.value).to.equal(5);
  });

   it('should set new head.previous to null when removeHead is called', function(){
    linkedListDouble.addToTail(4);
    linkedListDouble.addToTail(5);
    expect(linkedListDouble.head.value).to.equal(4);
    linkedListDouble.removeHead();
    expect(linkedListDouble.head.previous).to.equal(null);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedListDouble.addToTail(4);
    expect(linkedListDouble.removeHead()).to.equal(4);
  });

  it("should return the value of the former tail when removeTail is called", function(){
    linkedListDouble.addToTail(4);
    expect(linkedListDouble.removeTail()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedListDouble.addToTail(4);
    linkedListDouble.addToTail(5);
    expect(linkedListDouble.contains(4)).to.equal(true);
    expect(linkedListDouble.contains(5)).to.equal(true);
    expect(linkedListDouble.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedListDouble.addToTail(4);
    linkedListDouble.addToTail(5);
    linkedListDouble.removeHead();
    expect(linkedListDouble.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedListDouble
});
