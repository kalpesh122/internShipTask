const express = require('express')
const { getProducts, getProductsByCategoryId, getProduct } = require("../controllers/productController")
const router = express.Router()

router.route("/").get(getProducts)
router.route("/category/:categoryId").get(getProductsByCategoryId)
router.route("/:id").get(getProduct)

module.exports = router