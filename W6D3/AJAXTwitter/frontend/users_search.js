const APIUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find(".users-input");
    this.$ul = this.$el.find(".users");

    this.input = "";
    this.$el.keypress(this.handleInput.bind(this));
  }

  handleInput() {
    this.input += event.key;
    APIUtil.searchUsers(this.$input.val()).then(users => {
      this.renderResult(users);
    });
  }
  renderResult(users) {
    this.$ul.empty();
    users.forEach(user => {
      let $followToggle = $("<button></button>");
      new FollowToggle($followToggle, {
        userId: user.id,
        followState: user.followed ? "followed" : "unfollowed"
      });
      let $li = $("<li></li>");
      $li.append(user.username);
      $li.append($followToggle);
      this.$ul.append($li);
    });
  }
}

module.exports = UsersSearch;
