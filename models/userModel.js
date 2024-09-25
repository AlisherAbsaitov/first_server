import mongoose from "mongoose";
import bcrypt from "bcrypt";
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username kiritilishi kerak"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password kiritilishi kerak"],
  },
});

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
usersSchema.methods.checkPassword = async function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

export const Users = mongoose.model("users", usersSchema);