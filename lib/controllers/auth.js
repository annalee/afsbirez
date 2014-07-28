'use strict';

var jwt = require('jsonwebtoken'),
    config = require('../config/config');

exports.signin = function(req, res) {
  var username = req.body.username || '';
  var password = req.body.password || '';

  if (username === '' || password === '') { 
    console.log('unauthed!');
    return res.json(401, {"status": 401, "message": "Please provide a username and password."});
  }

  if (password === '123') {
    var token = jwt.sign({id: 1}, config.authkey, { expiresInMinutes: 60 });
    return res.json({token:token});
  }
  else {
    console.log('unauthed!');
    return res.json(401, {"status": 401, "message": "Invalid username or password."});
  }
};