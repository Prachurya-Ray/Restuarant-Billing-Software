const mongoose = require("mongoose");

const inventoryMaterialsSchema = new mongoose.Schema({
  inventoryItemName: {
    type: String,
    required: true,
  },
  inventoryItemDescription: {
    type: String,
  },
  inventoryItemQty: {
    type: Number,
  },
  inventoryItemCode: {
    type: String,
  },
  inventoryItemUnit: {
    type: String,
  },
  inventoryItemPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: "String",
    enum: ["enable", "disable"],
    default: "enable",
  },
});
module.exports = mongoose.model("inventoryItems", inventoryMaterialsSchema);

// const mongoose = require("mongoose");

// const inventoryMaterialsSchema = new mongoose.Schema({
//   inventoryItemName: {
//     type: String,
//     required: true,
//   },
//   inventoryItemDescription: {
//     type: String,
//   },
//   inventoryItemQty: {
//     type: Number,
//   },
//   inventoryItemCode: {
//     type: String,
//   },
//   inventoryItemUnit: {
//     type: String,
//   },
//   inventoryItemPrice: {
//     type: Number,
//     required: true,
//   },
//   status: {
//     type: String, // Corrected from "String" to String
//     enum: ["enable", "disable"],
//     default: "enable",
//   },
// });

// module.exports = mongoose.model("inventoryItems", inventoryMaterialsSchema);
