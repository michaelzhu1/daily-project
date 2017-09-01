const range = function range(start, end) {
  if (start === end) {
    return [start];
  } else if (start > end) {
    return undefined;
  } else {
    return [start].concat(range(start + 1, end));
  }
};

const sumRec = function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return sumRec(arr.slice(1, arr.length)) + arr[0];
  }
};

const exponent1 = function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent1(base, exp - 1);
  }
};

const exponent2 = function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    return exponent2(base, exp / 2) * exponent2(base, exp / 2);
  } else {
    return base * exponent2(base, (exp - 1) / 2)
      * exponent2(base, (exp - 1) / 2);
  }
};

const fibonacci = function fibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0,1];
  } else {
    let prevPrevFib = fibonacci(n-2); //[0]
    let prevFib = fibonacci(n-1); //[0,1]
    return prevFib.concat([
      prevFib[prevFib.length - 1] + prevPrevFib[prevPrevFib.length - 1]
    ]);
  }
};

const bsearch = function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    if (bsearch(arr.slice(mid + 1, arr.length), target) === -1) {
      return -1;
    } else {
      return bsearch(arr.slice(mid + 1, arr.length), target) + mid + 1;
    }
  }
};


const mergesort = function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid, arr.length);
    console.log("left",left);
    console.log("right", right);
    return mergesort(left).myMerge(mergesort(right));
  }
};

Array.prototype.myMerge = function (rightArray) {
  let result = [];
  while (this.length > 0 && rightArray.length > 0) {
    if (this[0] < rightArray[0]) {
      result.push(this.shift());
    } else {
      result.push(rightArray.shift());
    }
  }
  result = result.concat(this).concat(rightArray);
  return result;
};

const subsets = function subsets(arr) {
  if (arr.length <= 1) {
    return [arr];
  }

  let prevSet = subsets(arr.slice(0, arr.length - 1)); // [[1]]
  let lastEl = arr[arr.length - 1]; // 2
  // console.log('prevSet',JSON.stringify(prevSet));
  // console.log('lastEl',JSON.stringify(lastEl));

  let result = prevSet.concat([[lastEl]]); // [[1], [2]]

  prevSet.myEach((el) => {
    let newEl = el.concat([lastEl]); // [1, 2]
    result = result.concat([newEl]); // [[1], [2], [1, 2]]
  });

  return result;
};

// JSON.stringify(subsets([1]));
