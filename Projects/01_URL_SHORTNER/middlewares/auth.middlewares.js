import { getUser } from "../utils/auth.utils.js";

async function checkAu7th(req, res, next) {
    const userUid = req.cookies?.uid;
  
    const user = getUser(userUid);
  
    req.user = user;
    next();
  }

  function checkAuth(req,res,next){
    const tokenCookie = req.cookies?.uid;
    req.user = 0;
    if (!tokenCookie){
      return next();
    }
    const token = tokenCookie
    const user = getUser(token);
    if(!user){
      return res.redirect("/login");
    }
    req.user =user

    return next();
  }

  function restriTo(roles = []){
    return function(req,res,next){
      if(!req.user.role){
        return res.redirect("/login")
      }
      if(!roles.includes(req.user.role)){
        return res.end("Unauthorize");
      }
      return next();
    }
  }

export {
    checkAuth,
    restriTo
}