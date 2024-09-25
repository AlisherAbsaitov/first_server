import { Categories } from "../models/categoriesModel.js";
import { APIFeatures } from "../utils/apiFeatures.js";

export const getAllCategories = async (req, res, next) => {
  console.log(req.query);
  
  try {
    const features = new APIFeatures(Categories.find(), req.query)
      .filter()
      .paginate()
      .limitFields()
      .sort();

    const categories = await features.query;
    
    res.status(200).json({
      status: "success",
      results: categories.length,
      data: categories,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const categories = await Categories.create(req.body);
    res.status(201).json({
      status: "success",
      results: categories.length,
      data: categories,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndDelete(req.params.id);
    if (!category) {
      res.status(400).json({
        status: "fail",
        message: "Category id topilmadi",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: null,
        message: "Category ochirildi",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: updatedCategory,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const category = await Categories.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Server Error",
    });
  }
};
