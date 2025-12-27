import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const placeOrder = async () => {
    await api.post("/orders");
    navigate("/orders");
  };

  return <button onClick={placeOrder}>Place Order</button>;
};

export default Checkout;
