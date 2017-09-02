const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const addNumbers = function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("What number?", function(numStr) {
      const thisNumber = parseInt(numStr);

      sum += thisNumber;
      console.log('Partial sum is ' + sum);

      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
};

addNumbers(0, 5, function(sum) {
    console.log('Total sum is equal to ' + sum);
    reader.close();
});
