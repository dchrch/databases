var db = require("../db");

module.exports = {
  messages: {
    get: function (res) {
      db.query('SELECT * from messages', function(err, rows, fields) {
        if (!err) {
          res.json({results: rows});
        } else {
          console.log('Error while performing Query.');
        }
      });
    },
    post: function (data) {
      db.query("INSERT into messages (username, text, roomname) values (?, ?, ?);", [data.username, data.text, data.room],
        function(err, rows, fields) {
        if (!err) {
          console.log("Row added.");
        }
        else {
          console.log("Error while performing Query.");
        }
      });
    }
  },

  users: {
    get: function () {},
    post: function () {}
  }
};

