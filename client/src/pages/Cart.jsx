import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>Shopping Cart</h2>

        {cart.length === 0 && <p>Your Amazon Cart is empty.</p>}

        {cart.map(item => (
          <div className="cart-row" key={item.productId._id}>
            <img
              src={item.productId.image}
              alt={item.productId.title}
              className="cart-img"
            />

            <div className="cart-info">
              <h3>{item.productId.title}</h3>
              <p className="delivery">
                Usually ships within 4 to 5 days
              </p>

              <div className="cart-actions">
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.productId._id, Number(e.target.value))
                  }
                >
                  {[1,2,3,4,5].map(q => (
                    <option key={q} value={q}>Qty: {q}</option>
                  ))}
                </select>

                <span onClick={() => removeFromCart(item.productId._id)}>
                  Delete
                </span>
                <span>Save for later</span>
                <span>Share</span>
              </div>
            </div>

            <div className="cart-price">
              ₹{item.productId.price}
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="cart-subtotal-text">
            Subtotal ({cart.length} item):{" "}
            <strong>₹{totalPrice}</strong>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-right">
          <p>
            Subtotal ({cart.length} item):{" "}
            <strong>₹{totalPrice}</strong>
          </p>

          <Link to="/checkout">
            <button className="proceed-btn">
              Proceed to Buy
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
