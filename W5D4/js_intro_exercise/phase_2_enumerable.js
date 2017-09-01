Array.prototype.myEach = function myEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
  return undefined;
};


Array.prototype.myMap = function myMap(callback) {
  let result = [];
  this.myEach( function(element) {
    result.push(callback(element));
  });
  return result;
};

Array.prototype.myReduce = function myReduce(callback, initialValue) {
  let result;
  if (initialValue === undefined) {
    result = this[0];
    this.myEach(function(element, index) {
      if (index !== 0) {
        result = callback(result, element);
      }
    });
  } else {
    result = initialValue;
    this.myEach((element, index) => {
      result = callback(result, element);
    });
  }
  return result;
};
