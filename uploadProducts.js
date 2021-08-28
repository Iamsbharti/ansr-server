const fs = require("fs");
const mongoose = require("mongoose");
const Product = require("./model/Product");

const uploadProductJson = () => {
  console.log("Upload Product Start");
  // upload product json file to mongo db collection
  let productsJson = fs.readFileSync("productdf38641.json");
  let products = JSON.parse(productsJson);
  console.log("DB OPS INIT");
  Product.insertMany(products, (error, product) => {
    if (error) {
      console.log("PRODUCT UPLOAD ERROR:", error);
    } else {
      console.log("Products Upload Success");
    }
  });
  console.log("DB OPS FINISHED");
};
module.exports = {
  uploadProductJson,
};
