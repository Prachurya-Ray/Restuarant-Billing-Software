const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: "String",
    enum: ["enable", "disable"],
    default: "enable",
  },
});

module.exports = mongoose.model("Dish", dishSchema);
