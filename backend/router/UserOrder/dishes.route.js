
const express = require('express');
const router = express.Router();

const OrderController = require('../../controllers/AdminOrder/AdminOrder.controller.js');
const Dish = require('../../models/dish.model.js'); // Assuming you have a Dish model defined

router.post('/dishes', async (req, res) => {
    try {
        const { name, price } = req.body;
        const dish = new Dish({ name, price });
        await dish.save();
        res.status(201).send('Dish added successfully!');
    } catch (error) {
        res.status(400).send('Error adding dish: ' + error.message);
    }
});

router.get('/dishes', async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(400).send('Error fetching dishes: ' + error.message);
    }
});

module.exports = router;
