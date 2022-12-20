import connection from "../database/database.js";
import {v4 as uuidV4} from "uuid";
import bcrypt from "bcrypt";
export async function signUp(req,res) {
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10)
  try {
    await connection.query(
        `INSERT INTO users(name,email,password) VALUES ($1,$2,$3);`,
        [name,email,passwordHash]
      );
    
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
   await connection.query(
    `INSERT INTO sessions(token,"userId") VALUES ($1,$2);`,
    [token,userId]
  );
   
   res.status(200).send(token)
 } catch (err) {
   console.log(err);
   res.sendStatus(500)
 }
}
