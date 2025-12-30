import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

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
          <select>
            <option>All</option>
            <option>Electronics</option>
            <option>Mobiles</option>
            <option>Fashion</option>
          </select>
          <input placeholder="Search Amazon" />
          <button>🔍</button>
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

          {open && user && (
            <div className="dropdown">
              <p onClick={logout}>Sign Out</p>
            </div>
          )}

          {!user && <Link to="/login" className="overlay-link" />}
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
