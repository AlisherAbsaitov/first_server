import mongoose, { Schema } from "mongoose";
const commentsSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "products",
  },
});




export const Comments = mongoose.model("comments",commentsSchema);