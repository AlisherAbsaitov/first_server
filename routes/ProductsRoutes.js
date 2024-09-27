import express from "express";
import * as productsControllers from "../controllers/productsControllers.js";
import { protect } from "../controllers/authController.js";
import { upload } from "../utils/upload.js";
const router = express.Router();
router
  .route("/")
  .get(productsControllers.getAllProducts)
  .post(protect,upload.single("image"),productsControllers.createProduct);
router
  .route("/:id")
  .get(productsControllers.getProduct)
  .put(protect,upload.single("image"),productsControllers.updateProduct)
  .delete(protect,productsControllers.deleteProduct);
export default router;
