const sql = require("../config/db");

const getCurrentUser = async (req, res) => {
  const { id } = req.user;
  console.log("id", id);
  const [data] = await sql`SELECT * FROM users WHERE id=${id}`;

  res.status(200).json({ message: "success", user: data });
};

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", user: data });
};

const createUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  const createUser =
    await sql`INSERT INTO users(email, name, password, profile_img) 
  VALUES(${email}, ${name},${password},${profile_img});`;
  console.log("post ajillah:", createUser);
  res.status(201).json({ message: "post amjilttai", user: createUser });
};

const updateUser = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  // object destructing
  const { id } = req.params; // {id: 123}
  const { email, name, password, profile_img } = req.body;
  const updateUser = await sql`UPDATE users
  SET email=${email}, name=${name}, password=${password}, profile_img=${profile_img};
  WHERE id=${id}`;
  console.log("DATA", data);
  res
    .status(201)
    .json({ message: "New use created successfully", user: updateUser });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deleteUser = await sql`DELETE FROM users WHERE eid=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete success", user: deleteUser });
};

module.exports = {
  getCurrentUser,
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};
