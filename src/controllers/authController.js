
import {v4 as uuidV4} from "uuid";
import bcrypt from "bcrypt";
import { insertSession, insertUser } from "../Repositories/authRepository.js";
export async function signUp(req,res) {
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10)
  try {
    await insertUser(name,email,passwordHash);
    
      res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
}

export async function signIn(req, res) {
  const userId = res.locals.userId;

 const token = uuidV4(); 

 try {
  await insertSession(token,userId);
   
   res.status(200).send(token)
 } catch (err) {
   console.log(err);
   res.sendStatus(500)
 }
}
