import express from "express";
import { User } from "../models/user.js";
import {
  deleteUser,
  getAllusers,
  getuserDetails,
  register,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get(
  "/all",
  getAllusers
  // async (req, res) => {
  //   const users = await User.find();

  //   res.json({
  //     success: true,
  //     users,
  //   });
  // }
);

router.post(
  "/new",
  register
  // async (req, res) => {
  //   const { name, email, password } = req.body;

  //   await User.create({
  //     name,
  //     email,
  //     password,
  //   });

  //   res.status(201).json({
  //     success: true,
  //     message: "Add Sucessfully",
  //   });
  // }
);

router
  .route("/userid/:id")
  .get(getuserDetails)
  .put(updateUser)
  .delete(deleteUser);

// router.get(
//   "/userid/:id",
//   getuserDetails
//   // async (req, res) => {
//   //   const { id } = req.params;
//   //   const user = await User.findById(id);

//   //   res.json({
//   //     success: true,
//   //     user,
//   //   });
//   // }
// );

// router.put("/userid/:id", updateUser);

// router.delete("/userid/:id", deleteUser);

export default router;
