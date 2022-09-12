const { Router } = require('express')
const router = Router();
const {car} = require('../controllers/car.controller')

router.get('/car', car.getCars)
router.post('/car', car.addCars)

module.exports = router