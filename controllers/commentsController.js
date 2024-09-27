import { Comments } from "../models/commentsModel.js";

export const gettAllComments = async (req, res) => {
  try {
    const comments = await Comments.find();
    res.status(200).json({
      status: "success",
      resulst: comments.length,
      data: comments,
    });
  } catch (error) {
    return res.status(500).json({ status: "fail", message: error });
  }
};
export const createNewComment = async (req, res) => {
  try {
    const newComment = await Comments.create(req.body);
    res.status(201).json({
      status: "success",
      data: newComment,
    });
  } catch (error) {
    return res.status(400).json({ status: "fail", message: error });
  }
};

export const getComment = async (req, res) => {
  try {
    const comment = await Comments.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: comment,
    });
  } catch (error) {
    return res.status(404).json({ status: "fail", message: error });
  }
};

export const updateComment = async (req, res) => {
  try {
    const updateComment = await Comments.findByIdAndUpdate(
      req.body.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: updateComment,
    });
  } catch (error) {
    return res.status(400).json({ status: "fail", message: error });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comments.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .json({ status: "fail", message: "Kommentari topilmadi" });
    }
    res.status(200).json({
      status: "success",
      data: "Kommentariya o'chirildi",
    });
  } catch (error) {
    return res.status(500).json({ status: "fail", message: error });
  }
};
