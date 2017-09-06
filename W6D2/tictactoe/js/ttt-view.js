class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();

  }

  bindEvents() {
    $('.square').on("click", e => {
      const $sq = $(e.currentTarget);
      $sq.css("background-color", 'white');
      this.makeMove($sq);
    });
  }

  makeMove($square) {
    const pos = $square.data('pos');
    const mark = this.game.currentPlayer;
    this.game.playMove(pos);
    const $mark = $('<div>');
    $mark.addClass('mark');
    $mark.text(mark);
    $square.append($mark);

    if (this.game.isOver()) {
      alert(`WINNER is ${this.game.winner()}`);
    }
  }

  setupBoard() {
    const $board = $('<ul>').addClass("group");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const $square = $("<li>").addClass("square");
        $square.data("pos", [rowIdx, colIdx]);
      $board.append($square);
    }
  }
    this.$el.append($board);
  }
}


module.exports = View;
