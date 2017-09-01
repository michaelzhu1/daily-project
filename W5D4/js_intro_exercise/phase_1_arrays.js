Array.prototype.uniq = function uniq() {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (newArray.includes(this[i])) {
      continue;
    } else {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.twoSum = function twoSum() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function transpose() {
  let result = [];
  for (let i = 0; i < this[0].length; i++) {
    result[i] = [];
  }
  alert(JSON.stringify(result));
  for (let row = 0; row < this.length; row++) {
    for (let col = 0; col < this[row].length; col++) {
      result[col][row] = this[row][col];
    }
  }
  return result;
};
