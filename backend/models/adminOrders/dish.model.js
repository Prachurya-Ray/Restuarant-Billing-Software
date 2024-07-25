const mongoose = require('mongoose');

// Dish Schema and Model
const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
