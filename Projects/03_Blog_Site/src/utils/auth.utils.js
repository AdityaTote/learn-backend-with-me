import { createHmac, randomBytes } from 'node:crypto';
import JWT from "jsonwebtoken";

function hashPass(pass){
    const salt = randomBytes(8).toString();
    const hash = createHmac('sha256', salt)
                  .update(pass)
                  .digest('hex');
    return { hash, salt };
}

function checkPass(password ,salt){
    const enterPass = createHmac('sha256', salt)
                     .update(password)
                     .digest('hex');
    return enterPass;
}

// Creation of Jwt
const secret = `Bloging$07`

function createJwtToken(user){
    const payload = {
        _id: user._id,
        name: user.fullName,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token){
    if(!token){
        return null;
    }
    try{
        const payload = JWT.verify(token, secret);
        return payload;
    } catch (err) {
        console.log("ERR:",err.message);
    }
}

export {
    hashPass,
    checkPass,
    createJwtToken,
    validateToken
}