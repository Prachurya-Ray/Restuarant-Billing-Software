
// const router = require("express").Router();
// const { User, validate } = require("../../models/authModels/user");
// const bcrypt = require("bcrypt");
// const Token = require("../../models/authModels/token");
// const sendEmail = require("../../utils/sendEmail");

// const crypto = require("crypto");

// // Register User and Send Verification Email
// router.post("/", async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if (error)
//       return res.status(400).send({ message: error.details[0].message });

//     let user = await User.findOne({ email: req.body.email });
//     if (user)
//       return res
//         .status(409)
//         .send({ message: "User with given email already exists!" });

//     const salt = await bcrypt.genSalt(Number(process.env.SALT));
//     const hashPassword = await bcrypt.hash(req.body.password, salt);

//     user = await new User({ ...req.body, password: hashPassword }).save();
//     const token = await new Token({
//       userId: user._id,
//       token: crypto.randomBytes(32).toString("hex"),
//     }).save();
//     const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
//     await sendEmail(user.email, "Verify your email", url);
//     res.status(201).send({
//       message: "An email sent to your account. Please check your email.",
//     });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// // Verify User Email
// router.get("/:id/verify/:token", async (req, res) => {
//   try {
//     const { id, token } = req.params;

//     const user = await User.findOne({ _id: id });
//     if (!user) return res.status(400).send({ message: "Invalid link" });

//     const tokenDoc = await Token.findOne({ userId: id, token });
//     if (!tokenDoc) return res.status(400).send({ message: "Invalid link" });

//     // Update user verification status
//     await User.updateOne({ _id: id }, { $set: { verified: true } });
//     await tokenDoc.remove();

//     res.status(200).send({ message: "Email verified successfully" });
//   } catch (error) {
//     console.error("Error verifying email:", error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;

const router = require("express").Router();
const { User, validate } = require("../../models/authModels/user");
const bcrypt = require("bcrypt");
const Token = require("../../models/authModels/token");
const sendEmail = require("../../utils/sendEmail");
const crypto = require("crypto");

// Register User and Send Verification Email
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(409).send({ message: "User with given email already exists!" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user = await new User({ ...req.body, password: hashPassword }).save();
    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`;
    await sendEmail(user.email, "Verify your email", url);

    res.status(201).send({
      message: "An email sent to your account. Please check your email.",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Verify User Email
router.get("/:id/verify/:token", async (req, res) => {
  try {
    const { id, token } = req.params;

    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).send({ message: "Invalid link: User not found" });
    }

    if (user.verified) {
      return res.status(400).send({ message: "User already verified" });
    }

    const tokenDoc = await Token.findOne({ userId: id, token });
    if (!tokenDoc) {
      return res.status(400).send({ message: "Invalid link: Token not found" });
    }

    // Update user verification status
    await User.updateOne({ _id: id }, { $set: { verified: true } });
    await Token.deleteOne({ _id: tokenDoc._id });

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
