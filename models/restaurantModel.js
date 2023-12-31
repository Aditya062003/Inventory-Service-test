const mongoose = require('mongoose');


const RestaurantSchema = mongoose.Schema({
  name : {
    type: String,
    required : [true, "Please enter an Restaurant name"]
  },
  location : {
    type: Number,
    required : [true, "Please enter a primary location"],
  },
  image_url : {
    type: String,
    required : [true, "Provide url for restaurant image"]
  },
  description : {
    type: String,
  },
  rating : {
    type: mongoose.Types.Decimal128,
  },

},{timestamp:true});

module.exports = mongoose.model('Restaurant',RestaurantSchema);