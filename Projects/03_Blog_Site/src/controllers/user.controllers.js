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

    if(!fullName && !email && !password){
        return res.json("invalid input")
    }
    
    try {
        await User.create({
            fullName,
            email,
            password
        });
        res
            .status(200)
            .redirect("/users/login")
    } catch (error) {
        return res
            .status(500)
            .json("Error in signup. Please signup again")
    }
};

// Authenticate use and set jwt 
async function handleLoginUser(req,res){
    const { email, password } = req.body;
    if(!email && !password){
        return res.json("Please entre email and password")
    }
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