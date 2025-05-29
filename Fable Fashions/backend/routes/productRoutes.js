const express = require("express");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
// @route   POST /api/products
// @desc    Create a new product
// @access  Private/Admin
router.post("/", protect, async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      discountPrice,
      countInStock,
      category,
      brand,
      images,
      sizes,
      colors,
      weight,
      dimensions,
      material,
      collections,
      tags,
      isFeatured,
      isPublished,
      sku,
    } = req.body;
    const product = new Product({
      name,
      price,
      description,
      discountPrice,
      countInStock,
      category,
      brand,
      images,
      sizes,
      colors,
      weight,
      dimensions,
      material,
      collections,
      tags,
      isFeatured,
      isPublished,
      sku,
      user:req.user._id,   //Reference to the admin user who created it 
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).send("Server error");
  }
});
module.exports = router
