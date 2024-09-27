import mongoose, { Schema } from "mongoose";
import { Products } from "./produtsModel";

const commentsSchema = new mongoose.Schema({
  message: {
    typeof: "string",
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "products",
  },
});

commentsSchema.pre("save", async function (next) {
  if (this.isModified("productId")) {
    // Fetch the category document using the id
    const product = await Products.findById(this.productId);
    if (!product) {
      return next(new Error("Categoriya topilmadi"));
    }
    // Set the category name
    this.product = product.name;
  }
  next();
});

export const Comments = mongoose.model("Comments",commentsSchema);