import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-nav">
        <img src="/Amazon.png" alt="logo" />
      </Link>

      <input className="search" placeholder="Search Amazon" />

      <div className="nav-links">
        {!user ? (
          <Link to="/login">Hello, Sign in</Link>
        ) : (
          <div onClick={logout} className="logout">
            Hello, {user.name}
            <span>Sign Out</span>
          </div>
        )}

        <Link to="/orders">Returns & Orders</Link>

        <Link to="/cart" className="cart">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
