import { useContext, useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { ProductFilterContext } from "../context/ProductFilterContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { search, category } = useContext(ProductFilterContext);

  useEffect(() => {
    api.get("/products").then(res => {
      setProducts(res.data)
    });
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesSearch = (p.title || "").toLowerCase().includes((search || "").toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const electronics = products.filter(p => p.category === "Electronics");
  const Footwear = products.filter(p => p.category === "Footwear");
  const Appliances = products.filter(p => p.category === "Appliances");
  const Books = products.filter(p => p.category === "Books");
  const Toys = products.filter(p => p.category === "Toys");
  const Fashion = products.filter(p => p.category === "Fashion");

  const showDefaultLayout = category === "All" && (!search || search.trim() === "");

  return (
    <>
      <Carousel />

      {showDefaultLayout ? (
        <>
          <section className="product-section">
            <h2>Electronics</h2>
            <div className="grid">
              {electronics.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </section>

          <section className="product-section">
            <h2>Footwear</h2>
            <div className="grid">
              {Footwear.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </section>

          <section className="product-section">
            <h2>Appliances</h2>
            <div className="grid">
              {Appliances.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </section>

          <section className="product-section">
            <h2>Books</h2>
            <div className="grid">
              {Books.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </section>

          <section className="product-section">
            <h2>Toys</h2>
            <div className="grid">
              {Toys.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </section>

          <section className="product-section">
            <h2>Featured</h2>
            <div className="grid">
              {electronics.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </section>

          <section className="product-section">
            <h2>Fashion</h2>
            <div className="grid">
              {Fashion.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </section>
        </>
      ) : (
        <section className="product-section">
          <h2>Products</h2>
          <div className="grid">
            {filteredProducts.length > 0
              ? filteredProducts.map(p => <ProductCard key={p._id} product={p} />)
              : <p>No products found</p>
            }
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
