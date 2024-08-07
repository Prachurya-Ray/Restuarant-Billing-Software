// const mongoose = require("mongoose");
// const billingSchema = new mongoose.Schema({
//   customerName: {
//     type: String,
//   },
//   mobileNumber: {
//     type: Number,
//   },
//   address: {
//     type: String,
//   },
//   grandTotal: {
//     type: String,
//   },
//   subTotal: {
//     type: String,
//   },
//   menuItemName: {
//     type: String,
//   },
//   menuItemPrices: {
//     type: String,
//   },
//   menuItemAmount: {
//     type: String,
//   },
//   date: {
//     type: Date,
//   },
//   items: [
//     {
//       menuItemName: String,
//       menuItemPrices: Number,
//       menuItemAmount: Number
//     }
//   ],
//   status: {
//     type: "String",
//     enum: ["enable", "disable"],
//     default: "enable",
//   },
// });
// module.exports = mongoose.model("billing_details", billingSchema);


const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
  mobileNumber: {
    type: String, // Changed from Number to String to support leading zeros
  },
  address: {
    type: String,
  },
  grandTotal: {
    type: Number, // Changed from String to Number for arithmetic operations
  },
  subTotal: {
    type: Number, // Changed from String to Number for arithmetic operations
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
  date: {
    type: Date,
    default: Date.now, // Set default value to current date and time
  },
  items: [
    {
      menuItemName: {
        type: String,
      },
      menuItemPrices: {
        type: Number,
      },
      menuItemAmount: {
        type: Number,
      },
    },
  ],
  status: {
    type: String,
    enum: ["enable", "disable"],
    default: "enable",
  },
});

module.exports = mongoose.model("BillingDetails", billingSchema);
