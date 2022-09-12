const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    name: String,
    Phone: String,
    loadСapacity: Number,
    bottleWidth: Number,
    bottleHeight: Number,
    model: String,
    busy: Boolean,
    fridge: Boolean,
    carTransporter: Boolean
})

const Car = mongoose.model("Car", carSchema);

module.exports = Car;