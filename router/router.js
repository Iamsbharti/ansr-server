const router = require("express").Router();
const { uploadProductJson } = require("../uploadProducts");
const { getProducts, addProduct } = require("../controller/productController");
router.get("/ping", (req, res) => {
  res.status(200).send("Product ANSR-Server PING Success");
});
router.get("/upload", (req, res) => {
  uploadProductJson();
  res.status(200).send("Product Upload Success");
});
router.post("/products", addProduct);
router.get("/products", getProducts);

module.exports = router;
