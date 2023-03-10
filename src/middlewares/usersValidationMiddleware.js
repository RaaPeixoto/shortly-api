
import { getUserBySession } from "../Repositories/authRepository.js";

 export async function getUserValidation(req,res,next){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const session = await getUserBySession(token);
       
    if (!token) {
      return res.sendStatus(401);
    }
    if (session.rows.length===0){
        return res.sendStatus(404);
    }
    res.locals.userId= session.rows[0].userId
    
    next();
 }