const APIUtil = require("./api_util.js");

class TweetCompose {
  constructor(el) {
    this.$el = $(el);

    this.$el.submit(event => {
      alert("WOW DID YOU REALLY DO THAT");
    });
  }
  submit(event) {
    event.preventDefault();
    const data = this.$el.serializeJSON();
    this.$el.find(":input").prop("disabled", true);
    APIUtil.createTweet(data).then(tweet => this.handleSuccess(tweet));
  }

  handleSuccess(data) {
    const $tweetsU1 = $(this.$el.data("tweets-ul"));
    $tweetsU1.trigger("insert-tweet", data);

    this.clearInput();
  }
}
