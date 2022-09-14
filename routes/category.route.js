const { Router } = require("express");
const router = Router();
const { category } = require("../controllers/category.controller");

router.post('/category', category.addCategory);
router.get('/category', category.getCategory);

module.exports = router;