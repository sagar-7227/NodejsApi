import { User } from "../models/user.js";

export const getAllusers = async (req, res) => {
  const users = await User.find();

  res.json({
    success: true,
    users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    message: "Add Sucessfully",
  });
};

export const getuserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "Updated",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  // await user.remove();

  res.json({
    success: true,
    message: "User Deleted",
  });
};
