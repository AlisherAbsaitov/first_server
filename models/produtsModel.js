import mongoose, { Schema } from "mongoose";
import { Categories } from "./categoriesModel.js";
import { Comments } from "./commentsModel.js";

const productsSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Product nomi kritilishi kerak!"],
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: [String],
    required: true,
  },
  quantity: {
    type: "number",
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "categories",
  },
  category: {
    type: String,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "products",
  },
  message: {
    type: String,
  },
  image: {
    type: String,
  },
});

productsSchema.pre("save", async function (next) {
  if (this.isModified("categoryId")) {
    const category = await Categories.findById(this.categoryId);
    if (!category) {
      return next(new Error("Categoriya topilmadi"));
    }
    this.category = category.name;
  }

  if (this.isModified("productId")) {
    console.log(Comments);

    const comment = await Comments.find({ productId: this.productId });
    console.log(comment);
    if (!comment) {
      return next(new Error("product topilmadi"));
    }
    const Userscomment = comment.filter((val) => val.message != undefined);
    if (filteredComments.length > 0) {
      this.message = Userscomment[0].message;
    }
  }
  next();
});

export const Products = mongoose.model("products", productsSchema);
