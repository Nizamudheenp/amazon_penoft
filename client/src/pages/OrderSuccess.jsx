import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/orders");
      location.reload()
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="order-success-page">
      <div className="order-success-box">
        <div className="success-icon">✔</div>
        <h2>Payment Successful</h2>
        <p>Your order has been placed successfully.</p>
        <p className="redirect-text">
          Redirecting to <strong>Your Orders</strong>...
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
