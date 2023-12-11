const express = require('express')
const router = express.Router()
const controller = require('../../controllers/controller')
const v1Routes = require('./v1')

// health check endpoint
router.get('/ping', (req, res)=>{
    res.send('pong')
})

// router.use('/api/v1/*', router)

module.exports = router;