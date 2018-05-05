
var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  action: String,
  
});

module.exports = mongoose.model('Book', BookSchema);