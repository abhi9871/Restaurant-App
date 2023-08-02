const Restaurant = require('../models/restaurant');

// Create an order
exports.createOrder = async (req, res, next) => {
    const { price, dish, table } = req.body;
    try {
        const createdOrder = await Restaurant.create({
            price: price,
            dish: dish,
            table: table
        });
        console.log(createdOrder);
        res.status(200).json(createdOrder);
    } catch (err) {
        console.log(err);
    }
};

// Get all the orders
exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Restaurant.findAll();
        console.log(orders);
        res.status(200).json(orders);
    } catch (err) {
       console.log(err); 
    }
};

// Delete an order
exports.deleteOrder = async (req, res, next) => {
    const orderId = req.params.orderId;
    try {
        const order = await Restaurant.findByPk(orderId);
        const deletedOrder = await order.destroy();
        console.log("Item Deleted :", deletedOrder.toJSON());
        res.status(200).json(deletedOrder);
    } catch (err) {
        console.log(err);
    }
};