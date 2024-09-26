import express from "express";
import * as categoriesController from "../controllers/categoriesControllers.js";
import { protect } from "../controllers/authController.js";
const router = express.Router();

router
  .route("/")
  .get(categoriesController.getAllCategories)
  .post(protect,categoriesController.createCategory);

router
  .route("/:id")
  .delete(protect,categoriesController.deleteCategory)
  .patch(protect,categoriesController.updateCategory)
  .get(categoriesController.getCategory);

export default router;
