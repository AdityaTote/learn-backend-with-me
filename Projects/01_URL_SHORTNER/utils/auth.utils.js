import jwt from "jsonwebtoken";

// const sessionIdToUser = new Map();     // we do not need this
const secretKey = "HighlySecured@Key$";

function setUser(user){
    // return sessionIdToUser.set(id, user);  // for statefull auth 
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, secretKey);
}

function getUser(token) {
    // return sessionIdToUser.get(id);  //for statefull auth
    if(!token){
         return null;
    }
    try {
    return jwt.verify(token, secretKey)
    } catch(err){
        console.log(err.message);
    }
}

export {
    setUser,
    getUser
}