'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Url = new Schema({
  link: String,
  ref: String
});

module.exports = mongoose.model('Url', Url);