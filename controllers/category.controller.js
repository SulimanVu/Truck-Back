const Category = require("../models/Category.model");

module.exports.category = {
  addCategory: async (req, res) => {
    const category = await Category.create({
      name: req.body.name,
    });
    res.json(category);
  },

  updateCategory: async (req, res) => {
    const data = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name
    });
    res.json(data);
}

};
