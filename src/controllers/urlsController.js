import { nanoid } from 'nanoid'
import connection from '../database/database.js';
export async function postUrl(req, res) {
    const userId = res.locals.userId;
    const{url} =req.body
    const shortUrl = nanoid(9);

  
   try {
     await connection.query(
      `INSERT INTO urls(url,"shortUrl","userId") VALUES ($1,$2,$3);`,
      [url,shortUrl,userId]
    );
     
     res.status(200).send({"shortUrl":shortUrl})
   } catch (err) {
     console.log(err);
     res.sendStatus(500)
   } 
  }
  