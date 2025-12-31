const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const { getCart, addToCart, updateQuantity, removeFromCart } = require("../controllers/cartController");

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.put("/:productId", protect, updateQuantity); 
router.delete("/:id", protect, removeFromCart);
module.exports = router;
