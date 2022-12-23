import connection from "../database/database.js";

export async function insertUrl(url,shortUrl,userId){
    return  connection.query(
        `INSERT INTO urls(url,"shortUrl","userId") VALUES ($1,$2,$3);`,
        [url,shortUrl,userId]
      );
}

export async function selectUrlById(id){
    return connection.query(
        `SELECT * FROM urls WHERE id= $1;`, [id]);
}

export async function selectUrlByShortUrl(shortUrl){
    return connection.query(
        `SELECT * FROM urls WHERE "shortUrl"= $1;`, [shortUrl]
    );
}

export async function updateUrl(url){
    return connection.query(
        `
        UPDATE urls
        SET "visitCount" = "visitCount" +1
        WHERE id = $1
      `,
        [url.id]
      );
}

export async function deleteUrlById(id){
   
    return connection.query(

        `DELETE FROM urls WHERE id = $1`,[id]
    );
}

export async function getUrlsRanking(){
    return connection.query (`SELECT users.id, users.name, 
    COUNT(urls.id) AS "linksCount", 
    SUM(urls."visitCount") AS "visitCount" 
    FROM urls 
    LEFT JOIN users  ON urls."userId" = users.id
     GROUP BY users.id 
     ORDER BY "visitCount" 
     DESC LIMIT 10;`);
}

export async function selectUrlsByIdAndUserId(id,userId){
   return connection.query(
        `SELECT * FROM urls WHERE "id"= $1 AND "userId" = $2;`, [id,userId]
    );
}

export async function userVisitCount(id){
   return connection.query(`SELECT  SUM("visitCount") FROM urls WHERE "userId"=$1 ;`,[id])
}

export async function selectUrlsByUserId(id){
    return connection.query(`SELECT id,url,"shortUrl","visitCount" FROM urls WHERE "userId"= $1;`, [id]);
}