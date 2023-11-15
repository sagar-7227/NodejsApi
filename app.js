import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env"
});

// connectDb();

// using middleware
app.use(express.json());
app.use("/users", userRouter);

// mongoose
//   .connect("mongodb://127.0.0.1:27017", {
//     dbName: "backendapi",
//   })
//   .then(() => console.log("Database connectes"))
//   .catch((e) => console.log(e));

// const schema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", schema);

// app.get("/users/all", async (req, res) => {
//   const users = await User.find();

//   res.json({
//     success: true,
//     users,
//   });
// });

// app.get("/userid/:id", async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);

//   res.json({
//     success: true,
//     user,
//   });
// });

// app.post("/users/new", async (req, res) => {
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
// });

app.get("/", (req, res) => {
  res.send("Nice work");
});

// app.listen(4000, () => {
//   console.log("Server is working");
// });
