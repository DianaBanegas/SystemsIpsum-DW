var mongoose = require ('mongoose');

var esquema = new mongoose.Schema({
     name: String,
     html: String,
     css: String,
     js: String,

});

module.exports = mongoose.model('', esquema);