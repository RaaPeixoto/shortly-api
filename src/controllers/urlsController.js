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
  export async function getIdUrl(req, res) {
    const {id }= req.params;
   try {
    const url = await connection.query(
        `SELECT * FROM urls WHERE id= $1;`, [id]);;
        if(url.rows.length===0){
            return res.sendStatus(404);
        };
     const urlRow = url.rows[0]
     res.status(200).send({"id":urlRow.id,"shortUrl":urlRow.shortUrl,"url":urlRow.url})
   } catch (err) {
     console.log(err);
     res.sendStatus(500)
   } 
  }

  export async function getOpenUrl(req,res){
    const url= res.locals.url
    try{
        await connection.query(
            `
            UPDATE urls
            SET "visitCount" = "visitCount" +1
            WHERE id = $1
          `,
            [url.id]
          );
          res.redirect(200,url.url)
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
  }

  export async function deleteUrl(req,res){
    const {id }= req.params;
    try{
        await connection.query(

            `DELETE FROM urls WHERE id = $1`,[id]
        )
        res.sendStatus(204)
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
  }