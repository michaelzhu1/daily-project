class View {
  constructor(game, $rootEl) {
    this.game = game;
    this.$el = $rootEl;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (var i = 0; i < 3; i++) {
      const $tower = $('<ul>');
      this.$el.append($tower);
    }
    for (var j = 0; j < 3; j++) {
      let $disk = $('<li>');
      $disk.data('size', (j + 1));
      $("ul:first").append($disk);
    }
  }

  render() {
    let disk = undefined;
    $('<ul>').on("click", e => {
      const $tow = $(e.currentTarget);
      if (disk) {
        $tow.append(disk);
        disk = undefined;
      } else {
        disk = $tow.firstChild();
        $tow.remove(disk);
      }
    });
  }
}

module.exports = View;
