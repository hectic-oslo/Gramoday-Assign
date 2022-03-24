const mongoose = require("mongoose");
 


const cmdtySchema = new mongoose.Schema({
  cmdtyName: {
    type: String,
    required: true,
    trim: true,
  },

},{
  timestamps:true
});

 



const Cmdty = mongoose.model("Cmdty", cmdtySchema);

module.exports = Cmdty;
