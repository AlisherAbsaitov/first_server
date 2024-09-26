import express from "express";
import * as productsControllers from "../controllers/productsControllers.js";
import { protect } from "../controllers/authController.js";
const router = express.Router();
router
  .route("/")
  .get(productsControllers.getAllProducts)
  .post(protect,productsControllers.createProduct);
router
  .route("/:id")
  .get(productsControllers.getProduct)
  .put(protect,productsControllers.updateProduct)
  .delete(protect,productsControllers.deleteProduct);
export default router;
