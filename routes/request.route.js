const {Router} = require('express')
const router = Router()
const {request} = require('../controllers/request.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.get('/request', request.getRequests)
router.post('/request', authMiddleware, request.addRequest)
router.patch('/request/:id', authMiddleware, request.updateRequest)
router.delete('/request/:id', authMiddleware, request.deleteRequest)

module.exports = router