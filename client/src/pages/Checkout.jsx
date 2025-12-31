import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const placeOrder = async () => {
    try {
      setLoading(true);
      await api.post("/orders");
      navigate("/order-success");
    } catch (err) {
      alert("Order failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-box">
        <p><strong>Delivery Address</strong></p>
        <p> Ernakulam, Kerala, India</p>

        <hr />

        <p><strong>Payment Method</strong></p>
        <p>Cash on Delivery (Demo)</p>

        <button onClick={placeOrder} disabled={loading}>
          {loading ? "Processing..." : "Place your order"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
