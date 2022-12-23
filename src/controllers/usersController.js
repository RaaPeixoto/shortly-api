
import { getUserById } from '../Repositories/authRepository.js';
import { selectUrlsByUserId, userVisitCount } from '../Repositories/urlsRepository.js';

export async function getUserUrls(req, res) {
  const userId=res.locals.userId;

  try {
    const user = await getUserById(userId);
    const userRows= user.rows[0];
    const visitCount = await userVisitCount(userRows.id);

    const urls = await selectUrlsByUserId(userRows.id);
 
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