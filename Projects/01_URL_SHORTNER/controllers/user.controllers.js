// import { v4 as uuidv4 } from "uuid"; //For statefull Auth

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
            return res.render("login", { ERR: "Invalid Email or Passwaord"})
        }
        // const sessionId = uuidv4();   //For statefull Auth
        const token = setUser(user);
        res.cookie("uid", token);
        return res.redirect("/");
    } catch(err){
        return res.status(404).json(err.message)
    }
}


export { handleUserSignup, handleUserLogin}