const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
         required: true,
         },
    },
  ]
   
},{
  timestamps:true
});

 


//for jwt auth tokens
userSchema.methods.generateAuthToken = async function (){
  const user = this;

  const token = jwt.sign({ _id: user._id.toString()}, "secretcode");
  // console.log(token);
   user.tokens =  user.tokens.concat({ token });
 
  await user.save();
  
  return token;
  
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//for logging in
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
   
  if (!user) {
    throw new Error("unable to login/mail not found");
    
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("password not matched");
  }
  
  return user;
};



const User = mongoose.model("User", userSchema);

module.exports = User;
