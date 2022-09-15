const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    car: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Car'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    from: String,
    to: String,
    km: Number,
    kg: Number,
    price: Number
})

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;