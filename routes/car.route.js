const { Router } = require('express')
const router = Router();
const {car} = require('../controllers/car.controller')

router.get('/car', car.getCar )
router.post('/car', car.addCar)

module.exports = router