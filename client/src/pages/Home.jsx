import { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  const electronics = products.filter(p => p.category === "Electronics");
  const Footwear = products.filter(p => p.category === "Footwear");
  const Appliances = products.filter(p => p.category === "Appliances");
  const Books = products.filter(p => p.category === "Books");
  const Toys = products.filter(p => p.category === "Toys");
  const Fashion = products.filter(p => p.category === "Fashion");



  return (
    <>
      <Carousel />

      <section className="product-section">
        <h2>Electronics</h2>
        <div className="grid">
          {electronics.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>Footwear</h2>
        <div className="grid">
          {Footwear.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>Appliances</h2>
        <div className="grid">
          {Appliances.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>Books</h2>
        <div className="grid">
          {Books.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>Toys</h2>
        <div className="grid">
          {Toys.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>Featured</h2>
        <div className="grid">
          {electronics.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <h2>Fashion</h2>
        <div className="grid">
          {Fashion.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
