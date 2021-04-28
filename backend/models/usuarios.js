var mongoose = require ('mongoose');

var esquema = new mongoose.Schema({
     email: String,
     password: String,
     plan: String,
     aplicaciones: mongoose.SchemaTypes.Mixed,

});

module.exports = mongoose.model('', esquema);