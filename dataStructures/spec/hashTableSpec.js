describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a("function");
    expect(hashTable.remove).to.be.a("function");
    expect(hashTable.retrieve).to.be.a("function");
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(null);
  });

  it('adding and subracting should affect count', function() {
    hashTable.insert('c', 'd');

    expect(hashTable._count).to.equal(1);
    hashTable.insert('a', 'b');
    expect(hashTable._count).to.equal(2);

    hashTable.remove('a');

    expect(hashTable._count).to.equal(1);


    hashTable.remove('c');
    expect(hashTable._count).to.equal(0);

  });



  it('should handle hash function collisions', function(){
    var v1 = "val1";
    var v2 = "val2";
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  // (Extra credit! Remove the extra "x" when you want the following tests to run)
  it('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

   it('should contain original values after doubling in size', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
    expect(hashTable.retrieve('Alan')).to.equal('Turing');
    expect(hashTable.retrieve('Panda')).to.equal(null);
    expect(hashTable.retrieve('George')).to.equal('Harrison');
    expect(hashTable._count).to.equal(7);
  });

  it('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George'); //6
    hashTable.remove('Dr.'); //5
    hashTable.remove('Steven'); //4 - resize limit=8, 
    hashTable.remove('John'); //3 
    hashTable.remove('Mr.'); //2
    expect(hashTable._limit).to.equal(8);
  });
});
