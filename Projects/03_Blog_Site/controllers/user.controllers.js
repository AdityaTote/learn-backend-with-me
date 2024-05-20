import { User } from "../models/user.models.js"

function handleLoginDisplay(req,res){
    return res.render("login");
};

function handleSignupDisplay(req,res){
    return res.render("signup");
}

// Register user
async function handeSignupUser(req,res){
    const { fullName,
            email,
            password } = req.body;
   
    await User.create({
        fullName,
        email,
        password
    });
    res.redirect("/users/login")
};

// Authenticate use and set jwt 
async function handleLoginUser(req,res){
    const { email, password } = req.body;
    try{
    const token = await User.matchPasswordAndGenToken(email, password);
    
    res.cookie("id",token).redirect("/");
    } catch{
        return res.render("login",{
            error: "Email or Pass is incorrect"
        })
    }
}

// Logout user
function handleUserLogout(req,res){
    res.clearCookie("id")
    return res.render("logout",{
        msg: "You have been logged out",
    });
}

export {
    handleLoginDisplay,
    handleLoginUser,
    handleSignupDisplay,
    handeSignupUser,
    handleUserLogout
}