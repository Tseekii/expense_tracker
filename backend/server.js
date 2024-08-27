const express = require("express");
const app = express();
const fs = require("fs"); //fs=file system
const cors = require("cors");

app.use(express.json()); // middleware
app.use(cors()); //haanaas ch handaj bolno widdleware
app.get("", (req, res) => {});
app.listen(8000, () => {
  console.log("Server is running at local host: 8000");
});
