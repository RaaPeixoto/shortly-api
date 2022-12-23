import connection from "../database/database.js";

export async function checkEmail(email){
    return connection.query(
        `SELECT * FROM users WHERE email= $1;`, [email]);
}

export async function insertUser(name,email,passwordHash){
    return  connection.query(
        `INSERT INTO users(name,email,password) VALUES ($1,$2,$3);`,
        [name,email,passwordHash]
      );
}

export async function insertSession(token,userId){
    return  connection.query(
        `INSERT INTO sessions(token,"userId") VALUES ($1,$2);`,
        [token,userId]
      );
}

export async function getUserBySession(token){
    return connection.query(
        `SELECT * FROM sessions WHERE token= $1;`, [token]);
}

export async function getUserById(id){
    return connection.query(`SELECT * FROM users WHERE id = $1;`,[id]);
}