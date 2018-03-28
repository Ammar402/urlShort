const mongoose = require("mongoose")
const Scheme = mongoose.Scheme;

const urlScheme = new Scheme({
  
  originalUrl : String,
  shorterUrl : String
},{timestamps:true});

const ModelClass = mongoose.model('shorterUrl',urlScheme);

module.exports = ModelClass;