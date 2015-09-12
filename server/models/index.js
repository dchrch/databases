var db = require("../db");

module.exports = {
  messages: {
    get: function (res) {
      db.Message.findAll().then(function(messages){
        res.json({results: messages});
      });
    },
    post: function (data) {
      var newMessage = db.Message.build(data);
      newMessage.save();
    }
  },

  users: {
    get: function () {},
    post: function () {}
  }
};

