Array.prototype.bubbleSort = function bubbleSort() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        sorted = false;
        let biggerone = this[i];
        this[i] = this[i+1];
        this[i+1] = biggerone;
      }
    }
  }
  return this;
};

String.prototype.substrings = function substrings() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
};
