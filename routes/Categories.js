import express from "express";
import * as categoriesController from "../controllers/categoriesControllers.js";
import { protect } from "../controllers/authController.js";
import { upload } from "../utils/upload.js";
const router = express.Router();

router
  .route("/")
  .get(categoriesController.getAllCategories)
  .post(protect,upload.single("image"),categoriesController.createCategory);

router
  .route("/:id")
  .delete(protect,categoriesController.deleteCategory)
  .patch(protect,upload.single("image"),categoriesController.updateCategory)
  .get(categoriesController.getCategory);

export default router;
