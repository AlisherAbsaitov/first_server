import mongoose, { Schema } from "mongoose";
const commentsSchema = new mongoose.Schema({
  message: {
    type: "string",
  },
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "products",
  },
});

// const productsSchema = new mongoose.Schema({
//   name: {
//     type: "string",
//     required: [true, "Product nomi kritilishi kerak!"],
//     trim: true,
//     unique: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   color: {
//     type: [String],
//     required: true,
//   },
//   quantity: {
//     type: "number",
//     required: true,
//   },
//   categoryId: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: "categories",
//   },
//   category: {
//     type: String,
//   },
//   image:{
//     type:String
//   }
// });


export const Comments = mongoose.model("comments",commentsSchema);