const db = require('../db/db');

async function savePostDataInDb(postData){
    db.query(`INSERT INTO posts (wordCount, averageWordCount, text, createdAt, isDeleted) VALUES ($1,$2, $3, '2023-12-10 12:34:56', false)`,[postData.wordCount, postData.averageWordLength, postData.text]);
}

async function getPostDataFromDb(postId){
    db.query('SELECT * from posts where id = $1', [postId]);
}

module.exports = {
    savePostDataInDb,
    getPostDataFromDb
}