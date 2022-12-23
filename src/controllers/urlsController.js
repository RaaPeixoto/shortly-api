import { nanoid } from 'nanoid'
import { deleteUrlById, getUrlsRanking, insertUrl, selectUrlById, updateUrl } from '../Repositories/urlsRepository.js';
export async function postUrl(req, res) {
    const userId = res.locals.userId;
    const{url} =req.body
    const shortUrl = nanoid(9);

  
   try {
     await insertUrl(url,shortUrl,userId);
     
     res.status(200).send({"shortUrl":shortUrl})
   } catch (err) {
     console.log(err);
     res.sendStatus(500)
   } 
  }
  export async function getIdUrl(req, res) {
    const {id }= req.params;
   try {
    const url = await selectUrlById(id);
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
        await updateUrl(url);
          res.redirect(200,url.url)
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
  }

  export async function deleteUrl(req,res){
    const {id} = req.params;
   
    try{
     
        await deleteUrlById(id);

        res.sendStatus(204);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
  }

  export async function getRanking(req,res){
    try{

      const ranking = await getUrlsRanking();
     
      res.status(200).send(ranking.rows);
    }catch(err){
      console.log(err);
      res.sendStatus(500);
  }
   
  }