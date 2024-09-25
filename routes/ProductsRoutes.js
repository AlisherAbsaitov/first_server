import express from "express";
import * as productsControllers from "../controllers/productsControllers.js";
const router = express.Router();
router
  .route("/")
  .get(productsControllers.getAllProducts)
  .post(productsControllers.createProduct);
router
  .route("/:id")
  .get(productsControllers.getProduct)
  .put(productsControllers.updateProduct)
  .delete(productsControllers.deleteProduct);
export default router;
