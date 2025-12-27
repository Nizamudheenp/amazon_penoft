import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product._id, 1)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
