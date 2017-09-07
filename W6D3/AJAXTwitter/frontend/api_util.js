const APIUtil = {
  followUser: id => APIUtil.changeFollowStatus(id, "POST"),

  unfollowUser: id => APIUtil.changeFollowStatus(id, "DELETE"),

  changeFollowStatus: (id, method) =>
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: "json",
      method
    }),

  searchUsers: query =>
    $.ajax({
      url: "/users/search",
      dataType: "json",
      method: "GET",
      data: { query }
    }),

  createTweet: data =>
    $.ajax({
      url: "/tweets",
      dataType: "json",
      method: "POST"
    })
};

module.exports = APIUtil;
