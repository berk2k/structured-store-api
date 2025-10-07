const Product = require("../models/product.js");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, image, category, brand, rating, reviewCount, currency } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      image,
      category,
      brand,
      rating,
      reviewCount,
      currency
    });

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to create product." });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Product not found." });

    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: "Failed to update product." });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Product not found." });

    await product.destroy();
    res.json({ message: "Product deleted." });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product." });
  }
};
