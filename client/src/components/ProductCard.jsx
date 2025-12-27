import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      <Link to={`/product/${product._id}`}>View</Link>
    </div>
  );
};

export default ProductCard;
