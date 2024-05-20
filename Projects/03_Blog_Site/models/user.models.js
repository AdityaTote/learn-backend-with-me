import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  salt: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String,
    default: "/images/images.png"
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
},
{timestamps:true}
);

// Hash Password
import { hashPass,
         checkPass,
         createJwtToken } from "../utils/auth.utils.js"

// Normal Pass to Hash Pass
userSchema.pre('save', function(next){
  const user = this;
  if(user.isModified("password")){ 
    const{ hash, salt } = hashPass(user.password);
    this.password = hash;
    this.salt = salt;
  }
  next();
});

// Check wether the  pass(Hashed) entered match with pass stored 
userSchema.static("matchPasswordAndGenToken",async function(email, password){
  
  const user = await this.findOne({ email});
  if(!user) throw new Error("User not found");
  
  const salt = user.salt;
  const hashPassword = user.password;

  const enterPass = checkPass( password, salt)  
  
  if(enterPass === hashPassword) {
    const token = createJwtToken(user);
    return token;
  } else {
    throw new Error("Incorect Password");
  };
})

const User = mongoose.model("user",userSchema);

export { User }