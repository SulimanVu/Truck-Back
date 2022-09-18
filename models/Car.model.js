const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    name: String,
    phone: String,
    loadСapacity: Number,
    bottleWidth: Number,
    bottleHeight: Number,
    model: String,
    busy: Boolean,
    fridge: Boolean,
    carTransporter: Boolean,
    img: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})

const Car = mongoose.model("Car", carSchema);

module.exports = Car;