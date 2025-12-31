const Order = require("../models/Order");
const Cart = require("../models/Cart");
exports.placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id })
    .populate("items.productId");

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const orderItems = cart.items.map(item => ({
    productId: item.productId._id,
    title: item.productId.title,
    image: item.productId.image,
    price: item.productId.price,
    quantity: item.quantity
  }));

  const totalAmount = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const order = await Order.create({
    userId: req.user.id,
    items: orderItems,
    totalAmount
  });

  cart.items = [];
  await cart.save();

  res.status(201).json(order);
};


exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id })
    .sort({ createdAt: -1 });

  res.json(orders);
};
