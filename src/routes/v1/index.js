const express = require('express')
const router = express.Router()
const controller = require('../../controllers/controller')


// API Routes
router.post('/api/v1/posts', controller.savePost)
router.get('/api/v1/posts/:id/analysis', controller.getPostById)

module.exports = router;