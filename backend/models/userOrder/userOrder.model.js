const mongoose = require('mongoose');

// Define the schema
const UserOrderSchema = new mongoose.Schema({
  dishes: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: Number,
});

// Create the model based on the schema
const UserOrder = mongoose.model('UserOrder', UserOrderSchema);

// Export the model, not the schema
module.exports = UserOrder;
