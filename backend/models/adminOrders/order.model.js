const mongoose = require('mongoose');


const AdminOrderSchema = new mongoose.Schema({
    dishes: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: Number,
  });

  const AdminOrder = mongoose.model('AdminOrder', AdminOrderSchema);

  module.exports = AdminOrder;