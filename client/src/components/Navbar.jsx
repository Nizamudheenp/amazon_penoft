import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { ProductFilterContext } from "../context/ProductFilterContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const { search, setSearch, category, setCategory } = useContext(ProductFilterContext);
  const [localSearch, setLocalSearch] = useState(search);

  const handleSearch = () => {
    setSearch(localSearch);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-nav">
          <img src="/AmazonHome.png" alt="Amazon" />
        </Link>

        <div className="nav-location">
          <FaMapMarkerAlt />
          <div>
            <span>Delivering to Surat 394210</span>
            <strong>Update location</strong>
          </div>
        </div>

        <div className="nav-search">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>Electronics</option>
            <option>Footwear</option>
            <option>Appliances</option>
            <option>Books</option>
            <option>Toys</option>
            <option>Fashion</option>
          </select>
          <input
            placeholder="Search Amazon"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>

        <div className="nav-lang">
          🇺🇸 <span>ENG</span>
        </div>

        <div
          className="nav-account"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span>Hello, {user ? user.name : "Sign in"}</span>
          <strong>Account & Lists</strong>

          {open && (
            <div className="account-dropdown">
              {!user ? (
                <>
                  <button
                    className="signin-btn"
                    onClick={() => navigate("/login")}
                  >
                    Sign in
                  </button>
                  <p className="new-user">
                    New customer? <span>Start here</span>
                  </p>
                </>
              ) : (
                <>
                  <button className="signin-btn" onClick={logout}>
                    Sign Out
                  </button>
                  <p className="new-user">
                    New customer? <span>Start here</span>
                  </p>
                </>

              )}

              <div className="dropdown-content">
                <div className="dropdown-col">
                  <h4>Your Lists</h4>
                  <p>Create a Wish List</p>
                  <p>Wish from Any Website</p>
                  <p>Baby Wishlist</p>
                  <p>Discover Your Style</p>
                </div>

                <div className="dropdown-col">
                  <h4>Your Account</h4>
                  <p>Your Account</p>
                  <p>Your Orders</p>
                  <p>Your Wishlist</p>
                  <p>Your Recommendations</p>
                  <p>Your Prime Membership</p>
                </div>
              </div>
            </div>
          )}
        </div>


        <Link to="/orders" className="nav-orders">
          <span>Returns</span>
          <strong>& Orders</strong>
        </Link>

        <Link to="/cart" className="nav-cart">
          <FaShoppingCart />
          <span className="cart-count">{cart.length}</span>
          Cart
        </Link>
      </nav>

      <div className="category-bar">
        <span>All</span>
        <span>Fresh</span>
        <span>Amazon miniTV</span>
        <span>Sell</span>
        <span>Best Sellers</span>
        <span>Mobiles</span>
        <span>Electronics</span>
        <span>Prime</span>
        <span>Customer Service</span>
      </div>
    </>
  );
};

export default Navbar;
