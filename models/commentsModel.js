import mongoose from "mongoose";

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

export const Comments = mongoose.model("Comments",commentsSchema);