import express from "express";
import * as categoriesController from "../controllers/categoriesControllers.js";
const router = express.Router();

router
  .route("/")
  .get(categoriesController.getAllCategories)
  .post(categoriesController.createCategory);

router
  .route("/:id")
  .delete(categoriesController.deleteCategory)
  .patch(categoriesController.updateCategory)
  .get(categoriesController.getCategory);

export default router;
