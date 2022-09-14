const Category = require("../models/Category.model");

module.exports.category = {
  addCategory: async (req, res) => {
    const category = await Category.create({
      name: req.body.name,
    });
    res.json(category);
  },

  getCategory: async (req, res) => {
    const data = await Category.find();
    res.json(data);
  },
};
