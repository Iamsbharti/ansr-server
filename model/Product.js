const mongoose = require("mongoose");
let productSchema = mongoose.Schema({
  uniq_id: {
    type: String,
    required: true,
    unique: true,
  },
  product_name: {
    type: String,
  },
  retail_price: {
    type: Number,
  },
  discounted_price: {
    type: Number,
  },
  image: {
    type: Object,
  },
  description: {
    type: String,
  },
  product_rating: {
    type: String,
  },
  overall_rating: {
    type: String,
  },
  brand: {
    type: String,
  },
});
module.exports = mongoose.model("Product", productSchema);
