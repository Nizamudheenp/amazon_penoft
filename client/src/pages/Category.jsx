import ProductCard from "../components/ProductCard";

const Category = () => {
  return (
    <div className="page-container">
      <h2>Results</h2>

      <div className="products-grid">
        {[1,2,3,4,5,6,7,8].map((id) => (
          <ProductCard
            key={id}
            product={{
              _id: id,
              title: "Samsung Galaxy M14 5G (ICY Silver)",
              price: 13999,
              image: "https://m.media-amazon.com/images/I/81ZSn2rk9WL._SX679_.jpg",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
