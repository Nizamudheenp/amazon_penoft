const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const order = await Order.create({
    userId: req.user.id,
    items: req.body.items,
    totalAmount: req.body.totalAmount
  });

  res.json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};
