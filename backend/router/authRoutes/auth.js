



const router = require("express").Router();
const { User } = require("../../models/authModels/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const Token = require("../../models/authModels/token");
const sendEmail = require("../../utils/sendEmail");
const crypto = require("crypto");

// User Login Route
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });

    if (!user.verified) {
      let token = await Token.findOne({ userId: user._id });
      if (!token) {
        token = await new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"), // Adjusted to 32 for consistency
        }).save();
        const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify your email", url);
      }
      return res.status(401).send({ message: "An email has been sent to your account. Please check your email to verify your account." });
    }

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    console.error("Error during login:", error); // Improved error logging
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Validation function for login data
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
