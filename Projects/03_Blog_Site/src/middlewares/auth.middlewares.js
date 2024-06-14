import { validateToken } from "../utils/auth.utils.js"

// Check for jwt token from user to authenticate
function checkAuthCookie(){
    return (req,res,next) => {
        const tokenCookie = req.cookies["id"];

        if(!tokenCookie){
            return next();
        }

        try{
            const userPlayload = validateToken(tokenCookie);
            req.user = userPlayload;
        }catch{
            return next();
        }
        return next();
    }
}

export { checkAuthCookie }