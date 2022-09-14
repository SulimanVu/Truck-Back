const Car = require("../models/Car.model");


module.exports.car = {
    getCar: async (req, res) => {
        const car = await Car.find();

        res.json(car)
    },

    addCar: async (req, res) => {
        const car = await Car.create({
            name: req.body.name,
            phone: req.body.phone,
            loadСapacity: req.body.loadСapacity,
            bottleWidth: req.body.bottleWidth,
            bottleHeight: req.body.bottleHeight,
            model: req.body.model,
            busy: req.body.busy,
            fridge: req.body.fridge,
            carTransporter: req.body.carTransporter,
            img: req.body.img,
            category: req.body.category
        })
        const result = await car.populate('category')
        res.json(result)
    }

}