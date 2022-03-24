const mongoose = require("mongoose");


const marketSchema = new mongoose.Schema({
  marketName: {
    type: String,
    required: true,
    trim: true,
  },
  marketTypes: {
    type: String,
    required: true,
    trim: true,
  },

},{
  timestamps:true
});

 



const Market = mongoose.model("Market", marketSchema);

module.exports = Market;
