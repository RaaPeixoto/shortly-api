import { newUserSchema } from "../models/newUserSchema.js";
import connection from "../database/database.js";
export async function signUpValidation(req, res, next) {
    const {name,email,password,confirmPassword} = req.body;
 
    const isEmailRegistered =  await connection.query(
        `SELECT * FROM users WHERE email= $1;`, [email]);
    if(isEmailRegistered.rows.length>0){
      return res.status(409).send("Email já cadastrado!")
    }
    const user = {
    name,
    email,
    password,
    confirmPassword,
    };
    
    
    const {error} = newUserSchema.validate(user, {abortEarly:false});
   
    if(error){
      const erros = error.details.map((detail)=>detail.message);
      return res.status(422).send(erros);  
    }
  
    
    next();
    }