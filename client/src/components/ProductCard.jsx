import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="price">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
