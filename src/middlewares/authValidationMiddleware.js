import { newUserSchema } from "../models/newUserSchema.js";
import signInSchema from "../models/signInSchema.js";
import bcrypt from "bcrypt";
import { checkEmail } from "../Repositories/authRepository.js";
export async function signUpValidation(req, res, next) {
    const {name,email,password,confirmPassword} = req.body;
 
    const isEmailRegistered = await checkEmail(email);
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
     
      const user =   await checkEmail(email);
        
          const passwordConfirm = bcrypt.compareSync(password, user.rows[0].password);
      if(user.rows.length===0 || !passwordConfirm){
        return res.sendStatus(401);
      }
     
      res.locals.userId = user.rows[0].id;
    
      
      next();
      }