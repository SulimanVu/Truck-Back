const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  car: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Car'
},
  name: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
