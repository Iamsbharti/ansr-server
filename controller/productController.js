const Product = require("../model/Product");
const { apiResponse } = require("../common/apiResponse");
const getProducts = async (req, res) => {
  console.log("get products controller");
  Product.find((error, products) => {
    if (error) {
      res.status(500).json(apiResponse(true, "Internal Server Error", null));
    } else {
      res.status(200).json(apiResponse(false, "Products Fetched", products));
    }
  });
};
const addProduct = async (req, res) => {
  console.log("Add product");
  const {
    uniq_id,
    product_name,
    retail_price,
    discounted_price,
    image,
    description,
    product_rating,
    overall_rating,
    brand,
  } = req.body;
  console.log(req.body);
  let newProduct = new Product({
    uniq_id,
    product_name,
    retail_price,
    discounted_price,
    image,
    description,
    product_rating,
    overall_rating,
    brand,
  });
  Product.create(newProduct, (error, product) => {
    if (error) {
      res.status(500).json(apiResponse(true, "Internal Server Error", null));
    } else {
      res.status(200).json(apiResponse(false, "Product Inserted", product));
    }
  });
};
module.exports = {
  getProducts,
  addProduct,
};
