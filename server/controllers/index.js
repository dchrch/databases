var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res);
    },
    post: function (req, res) {
      models.messages.post(req.body);
    }
  },

  users: {
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

