
const Order = require("../../models/userOrder/userOrder.model.js");

const postUserOrders = async (req, res) => {
  try {
    const { dishes, total } = req.body;
    const order = new Order({ dishes, total });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (error) {
    console.error('Error placing order:', error.message);
    res.status(400).json({ error: 'Error placing order', message: error.message });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(400).json({ error: 'Error fetching orders', message: error.message });
  }
};

module.exports = { postUserOrders, getUserOrders };
