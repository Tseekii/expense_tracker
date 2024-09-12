const sql = require("../config/db");//require import hiij bgaa 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  console.log("NEW USER");
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = await sql`
    INSERT INTO users(email, name, password, profile_img)
    VALUES(${email}, ${name}, ${hashedPassword}, 'url');
    `;
    console.log("DATA", data);
    res.status(201).json({ message: "New user registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Client error garlaa" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await sql`
    SELECT * FROM users WHERE email=${email}
  `;

    if (!user) {
      res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password);
      if (!isCheck) {
        res.status(400).json({
          message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "1h",
        });
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxMGJkZDMxLTY1OTQtNGY3OS1hNmM4LTEyYjk5ODcwMmExOCIsImlhdCI6MTcyNTg1MDIyMSwiZXhwIjoxNzI1ODUzODIxfQ.eFBoADSc6PANPmHk78_jH8WtabE3DliG4KQp18HsUaM
        res.status(200).json({
          message: "success",
          token,
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Client error garlaa" });
  }
};

module.exports = { signUp, signIn };
