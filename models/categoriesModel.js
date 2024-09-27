import mongoose from "mongoose";
const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Kategoriya nomini kiriting!"],
    trim: true,
    unique: [true, "Bir xil nom yubormang"],
  },
  description: {
    type: String,
  },
  image:{
    type: String,
  }
});

export const Categories = mongoose.model("categories", categoriesSchema);
