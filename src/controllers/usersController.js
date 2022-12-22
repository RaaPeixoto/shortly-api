import connection from '../database/database.js';

export async function getUserUrls(req, res) {
  const userId=res.locals.userId;

  try {
    const user = await connection.query(`SELECT * FROM users WHERE id = $1;`,[userId]);
    const userRows= user.rows[0];
    const visitCount = await connection.query(`SELECT  SUM("visitCount") FROM urls WHERE "userId"=$1 ;`,[userRows.id])

    const urls = await  connection.query(`SELECT * FROM urls WHERE "userId"= $1;`, [userRows.id]);
 
    const urlsRows = urls.rows;

    res.send({
      id: userRows.id,
      name: userRows.name,
      visitCount: visitCount.rows[0].sum,
      shortenedUrls: urlsRows
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500); 
  }
  }