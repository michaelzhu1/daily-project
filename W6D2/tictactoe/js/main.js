const View = require('./ttt-view');// require appropriate file
const Game = require('../../nodesolution/game');// require appropriate file

aef

$( () => {
  const game = new Game();
  const $ttt = $(".ttt");
  new View(game, $ttt);
});
