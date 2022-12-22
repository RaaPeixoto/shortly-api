import connection from "../database/database.js";

 export async function getUserValidation(req,res,next){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const session = await connection.query(
        `SELECT * FROM sessions WHERE token= $1;`, [token]);
       
    if (!token) {
      return res.sendStatus(401);
    }
    if (session.rows.length===0){
        return res.sendStatus(404);
    }
    res.locals.userId= session.rows[0].userId
    
    next();
 }