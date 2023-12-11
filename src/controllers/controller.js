const dao = require('../db/dao');
const helper = require('../shared/helper');

async function savePost(req, res) {
    try {
        let count = 1;
        const post = req.body;
        const id = post.id;
        let wordsArray = helper.cleanTextAndSplit(post.text)
        const [wordCount, averageWordLength] = helper.getWordCountAndAverageWordLength(wordsArray)

        const result = await dao.savePostDataInDb({wordCount, averageWordLength, text: post.text})

        res.send('postRequest');
    } catch(err) {
        console.log(err);
        res.status(503);
    }
}

async function getPostById(req, res) {
    try {
        const id = req.params.id;
        const result = await dao.getPostDataFromDb(id); 
        res.send({
            id: id,
            data:{
                wordCount : result.rows[0].wordcount,
            averageWordLength: result.rows[0].averagewordcount
            }
            
        });
    } catch(err) {
        console.log(err)
        res.status(503);
    }
}

// module.exports = savePost;

module.exports = {
    savePost:savePost,
    getPostById:getPostById
}