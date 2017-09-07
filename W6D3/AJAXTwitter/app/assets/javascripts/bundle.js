/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);
const UsersSearch = __webpack_require__(3);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);
const FollowToggle = __webpack_require__(1);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map