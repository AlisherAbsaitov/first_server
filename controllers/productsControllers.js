import { Products } from "../models/produtsModel.js";
import { APIFeatures } from "../utils/apiFeatures.js";

export const getAllProducts = async (req, res) => {
  try {
    const features = new APIFeatures(Products.find(), req.query)
      .filter()
      .paginate()
      .limitFields()
      .sort();

    const products = await features.query;

    res.status(200).json({
      status: "success",
      results: products.length,
      data: products,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const products = await Products.create(req.body);
    console.log(products);
    
    if(req.file){
      products.image = req.file
    }
    

    res.status(201).json({
      status: "success",
      results: products.length,
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if(req.file){
      updatedProduct.image = req.file
    }
    res.status(200).json({
      status: "success",
      data: updatedProduct,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await Products.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "Product nomi topilmadi",
      });
    }
    console.log(product);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Server Error",
    });
  }
};
