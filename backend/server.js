// app.use(express.json()); // middleware
// app.use(cors()); //haanaas ch handaj bolno widdleware
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
dotenv.config();

const authRoutes = require("./routes/auth-route");
const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const recordRoute = require("./routes/record-route");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoute);

app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа.`);
});
