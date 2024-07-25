
const express = require('express');
const router = express.Router();
const { postUserOrders, getUserOrders } = require('../../controllers/UserOrder/UserOrder.controller'); // Adjust the path as per your file structure

// POST route to create a new user order
router.post('/orders', postUserOrders);

// GET route to fetch all user orders
router.get('/orders', getUserOrders);

module.exports = router;
