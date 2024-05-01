import { v4 as uuidv4 } from "uuid";

import { setUser} from "../utils/auth.utils.js";
import { User } from "../models/user.models.js";

// Store New User
async function handleUserSignup (req,res) {
    const { name, email, password  } = req.body;
    try{
        await User.create({
            name,
            email,
            password
        })
        res.redirect("/");
    } catch(err){
        res.json(err.message)
    }
} 

// Login Check
async function handleUserLogin (req,res) {
    const { email, password  } = req.body;
    try{
        const user = await User.findOne  ({ email, password})
        if (!user){
            res.render("login", { ERR: "Invalid Email or Passwaord"})
        }
        const sessionId = uuidv4();
        setUser(sessionId ,user);
        res.cookie("uid",sessionId);
        res.redirect("/");
    } catch(err){
        res.status(404).json(err.message)
    }
} 


export { handleUserSignup, handleUserLogin}