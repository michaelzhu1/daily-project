const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
  const $el = $(".follow-toggle");
  $el.each(function() {
    new FollowToggle($el);
  });
  const $el2 = $(".users-search");
  $el2.each(function() {
    new UsersSearch($el2);
  });
});
