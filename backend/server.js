// const express = require("express");
// const app = express();
// const fs = require("fs"); //fs=file system
const cors = require("cors");

// app.use(express.json()); // middleware
// app.use(cors()); //haanaas ch handaj bolno widdleware

// app.get("/users", (req, res) => {
//   console.log("users", req.body);
// });

// app.post("/users", (req, res) => {
//   console.log("users", req.body);
// });

// app.delete("/users", (req, res) => {
//   console.log(req.params);
// });

// app.put("/users/:userId", (req, res) => {
//   console.log(req.params);
// });

// app.listen(8000, () => {
//   console.log("Server is running at local host: 8000");
// });
const express = require("express");

const dotenv = require("dotenv");
dotenv.config(); //

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/user", (req, res) => {
  console.log("all user is read successfully");
});
app.post("/user", (req, res) => {
  console.log("New user is created successfully");
});
app.put("/user", (req, res) => {
  console.log("user is updated successfully");
});
app.delete("/user", (req, res) => {
  console.log("user is deleted successfully");
});

app.listen(PORT, () => {
  console.log(`сервер localhost:${PORT} дээр аслаа`);
});
