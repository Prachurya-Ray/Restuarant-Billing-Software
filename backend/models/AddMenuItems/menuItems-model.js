const mongoose = require("mongoose");

const menuItemsSchema = new mongoose.Schema({
  menuItemName: {
    type: String,
    required: true,
  },
  menuItemDescription: {
    type: String,
    required: true,
  },
//   menuItemFullPrice: {
//     type: "Number",
//     required: true,
//   },
//   menuItemHalfPrice: {
//     type: "Number",
//     required: true,
//   },
  menuItemPrices: {
    menuItemFullPrice: {
      type: "Number",
      required: true,
    },
    menuItemHalfPrice: {
      type: "Number",
      required: true,
    },
  },
  status: {
    type: "String",
    enum: ["enable", "disable"],
    default: "enable",
  },
});
module.exports = mongoose.model("menuItems", menuItemsSchema);
