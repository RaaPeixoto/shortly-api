import connection from "../database/database.js";
import newUrlSchema from "../models/newUrlSchema.js";
/* f246c65e-6d67-4bff-bd88-628b8bcb21af */
export async function postUrlValidation(req, res, next) {
    const {url} = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const session = await connection.query(
        `SELECT * FROM sessions WHERE token= $1;`, [token]);
    if (!token||session.rows.length===0) {
      return res.sendStatus(401);
    }
    const {error} = newUrlSchema.validate({url}, {abortEarly:false});
   
    if(error){
      const erros = error.details.map((detail)=>detail.message);
      return res.status(422).send(erros);  
    }
  
    res.locals.userId=session.rows[0].userId
    
    next();
    }

 export async function getOpenUrlValidation(req,res,next){
    const {shortUrl}=req.params;
    const url = await connection.query(
        `SELECT * FROM urls WHERE "shortUrl"= $1;`, [shortUrl]
    );
    if(url.rows.length===0){
        return res.sendStatus(404);
    }
    res.locals.url = url.rows[0];
    next();
 }