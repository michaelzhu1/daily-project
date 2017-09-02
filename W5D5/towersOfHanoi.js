const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



class Hanoi {
  constructor() {
    this.stackOne = [3,2,1];
    this.stackTwo = [];
    this.stackThree = [];
  }

  promptMove(callbackTo, callbackFrom) {
    console.log(this.stackOne);
    console.log(this.stackTwo);
    console.log(this.stackThree);

    reader.question('Enter the stack to move a disc from: (1/2/3)', function(fromAnswer) {
      const startTowerIdx = parseInt(fromAnswer);
      callbackTo(startTowerIdx);
      reader.question('Enter the stack to move a disc to: (1/2/3)', function(toAnswer) {
        const endTowerIdx = parseInt(toAnswer);
        callbackFrom(endTowerIdx);
      });
    });


    console.log("made it to the bottom");

  }

  run() {
    //ask which disk to move
    //ask which stack to move disc to
    //check if move is valid
    //make move if valid
    //check if game has been won
  }
}

const callBackFrom = function (idx) {
  console.log(idx);
};
const callBackTo = function (idx) {
  console.log(idx);
};

const game = new Hanoi();

game.promptMove(callBackTo,callBackFrom);
