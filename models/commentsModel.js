import mongoose, { Schema } from "mongoose";
import { Products } from "./produtsModel.js";

const commentsSchema = new mongoose.Schema({
  message: {
    typeof: "string",
  },
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "products",
  },
});


export const Comments = mongoose.model("comments",commentsSchema);