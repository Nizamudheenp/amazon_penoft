import { useEffect, useState } from "react";
import api from "../api/axios";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  useEffect(() => {
    api.get("/orders").then((res) => {
      setOrders(res.data)
      console.log(res.data);
    });
  }, []);

  return (
    <div className="orders-page">
      <h2>Your Orders</h2>

      {location.state?.success && (
        <div className="order-success">
           Payment successful. Your order has been placed.
        </div>
      )}

      {orders.length === 0 && <p>You have no orders.</p>}

      {orders.map((o) => (
        <div className="order-card" key={o._id}>
          <p><strong>Order placed:</strong> {new Date(o.createdAt).toDateString()}</p>
          <p><strong>Total:</strong> ₹{o.totalAmount}</p>
          <p><strong>Status:</strong> {o.status}</p>

          <div className="order-items">
            {o.items.map((item, idx) => (
              <div key={idx} className="order-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
