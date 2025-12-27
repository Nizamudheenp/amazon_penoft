import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.productId._id}>
          <p>{item.productId.title}</p>
          <p>Qty: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.productId._id)}>
            Remove
          </button>
        </div>
      ))}
      <Link to="/checkout">Proceed to Buy</Link>
    </div>
  );
};

export default Cart;
