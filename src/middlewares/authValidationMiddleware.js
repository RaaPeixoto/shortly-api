import { newUserSchema } from "../models/newUserSchema.js";
import connection from "../database/database.js";
import signInSchema from "../models/signInSchema.js";
import bcrypt from "bcrypt";
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

    export async function signInValidation(req, res, next) {
      const {email,password} = req.body;
      const {error} = signInSchema.validate({email,password}, {abortEarly:false});
     
      if(error){
        const erros = error.details.map((detail)=>detail.message);
        return res.status(422).send(erros);  
      }
     
      const user =  await connection.query(
          `SELECT * FROM users WHERE email= $1 ;`, [email]);
        
          const passwordConfirm = bcrypt.compareSync(password, user.rows[0].password);
      if(user.rows.length===0 || !passwordConfirm){
        return res.sendStatus(401);
      }
     
      res.locals.userId = user.rows[0].id;
    
      
      next();
      }