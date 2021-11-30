const path = require('path');
// const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require("../models/productModel")


// @desc      Get all products
// @route     GET /api/v1/products
// @access    Public
exports.getProducts = asyncHandler(async (req, res, next) => {
    const data = await Product.find()
    res.status(200).json({
        success: true,
        count: data.length,
        data
    });
});
exports.getProductsByCategoryId = asyncHandler(async (req, res, next) => {
    const data = await Product.find({ categoryId: req.params.categoryId })
    res.status(200).json({
        success: true,
        count: data.length,
        data
    });
});
exports.getProduct = asyncHandler(async (req, res, next) => {
    const data = await Product.findById(req.params.id)
    // if (!data) {
    //     return next(
    //         new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    //     );
    // }

    res.status(200).json({
        success: true,
        data
    });
});
