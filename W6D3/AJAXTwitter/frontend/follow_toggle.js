const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.user_id = $(el).data("user-id") || options.userId;
    this.follow_state =
      $(el).data("initial-follow-state") || options.followState;

    this.render();
    this.handleClick();
  }

  render() {
    if (this.follow_state === "unfollowed") {
      this.$el.prop("disable", false);
      this.$el.text("Follow!");
    } else if (this.follow_state === "followed") {
      this.$el.prop("disable", false);
      this.$el.text("Unfollow!");
    } else if (this.follow_state === "following") {
      this.$el.prop("disable", true);
      this.$el.text("Following...");
    } else if (this.follow_state === "unfollowing") {
      this.$el.prop("disable", true);
      this.$el.text("Unfollowing...");
    }
  }

  handleClick() {
    this.$el.click(event => {
      event.preventDefault();
      if (this.follow_state === "unfollowed") {
        this.render();
        APIUtil.followUser(this.user_id).then(() => {
          // console.log(this.follow_state);
          this.follow_state = "followed";
          this.render();
        });
      } else if (this.follow_state === "followed") {
        this.render();
        APIUtil.unfollowUser(this.user_id).then(() => {
          this.follow_state = "unfollowed";
          this.render();
        });
      }
      // console.log(this.follow_state);
    });
  }
}

module.exports = FollowToggle;
