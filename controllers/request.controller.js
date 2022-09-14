const Request = require("../models/Request.model");

module.exports.request = {
  getRequests: async (req, res) => {
    const data = await Request.find().populate('car');
    res.json(data);
  },
  addRequest: async (req, res) => {
    const data = await Request.create({
      car: req.body.car,
      user: req.body.user,
      from: req.body.from,
      to: req.body.to,
      km: req.body.km,
      price: req.body.price,
    });
    res.json(data);
  },
  updateRequest: async (req, res) => {
    const data = await Request.findByIdAndUpdate(req.params.id, {
      km: req.body.km,
      price: req.body.price,
    });
    res.json(data);
  },
  deleteRequest: async (req, res) => {
    const data = await Request.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
