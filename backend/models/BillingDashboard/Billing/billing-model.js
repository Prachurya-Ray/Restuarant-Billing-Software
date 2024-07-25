const mongoose = require("mongoose");
const billingSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  grandTotal: {
    type: String,
  },
  subTotal: {
    type: String,
  },
  menuItemName: {
    type: String,
  },
  menuItemPrices: {
    type: String,
  },
  menuItemAmount: {
    type: String,
  },
  status: {
    type: "String",
    enum: ["enable", "disable"],
    default: "enable",
  },
});
module.exports = mongoose.model("billing_details", billingSchema);
