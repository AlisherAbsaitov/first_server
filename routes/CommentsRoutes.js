import express from "express";
import * as commentsControllers from "../controllers/commentsController.js";

const router = express.Router();
router
  .route("/")
  .get(commentsControllers.gettAllComments)
  .post(commentsControllers.createNewComment);

router
  .route("/:id")
  .get(commentsControllers.getComment)
  .patch(commentsControllers.updateComment)
  .delete(commentsControllers.deleteComment);
export default router;
