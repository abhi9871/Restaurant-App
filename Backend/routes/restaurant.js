const express = require('express');
const restaurantController = require('../controllers/restaurant');

const router = express.Router();

// Get all the orders route
router.get('/get-orders', restaurantController.getOrders);

// Create an order route
router.post('/create-order', restaurantController.createOrder);

// Delete an order route
router.delete('/delete-order/:orderId', restaurantController.deleteOrder);

module.exports = router;

