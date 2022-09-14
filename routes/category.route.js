const { Router } = require("express");
const router = Router();
const { category } = require("../controllers/category.controller");

router.post('/category', category.addCategory);
router.patch('/category/:id', category.updateCategory);

module.exports = router;