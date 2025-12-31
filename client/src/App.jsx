import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import LoginEmail from "./pages/auth/LoginEmail";
import LoginPassword from "./pages/auth/LoginPassword";
import Register from "./pages/auth/Register";
import VerifyOtp from "./pages/auth/VerifyOtp";
import BusinessRegister from "./pages/auth/BusinessRegister";

import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleSuccess from "./pages/GoogleSuccess";
import { ProductFilterProvider } from "./context/ProductFilterContext";
import OrderSuccess from "./pages/OrderSuccess";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register") ||
    location.pathname.startsWith("/verify-otp") ||
    location.pathname.startsWith("/business");

  return (
    <div className="app-layout">
      {!hideLayout && <Navbar />}

      <main className="app-content">
        {children}
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ProductFilterProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />

                <Route path="/login" element={<LoginEmail />} />
                <Route path="/login/password" element={<LoginPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify-otp" element={<VerifyOtp />} />
                <Route path="/business-register" element={<BusinessRegister />} />
                <Route path="/google-success" element={<GoogleSuccess />} />


                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute>
                      <Orders />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/order-success"
                  element={
                    <ProtectedRoute>
                      <OrderSuccess />
                    </ProtectedRoute>
                  }
                />

              </Routes>
            </Layout>
          </ProductFilterProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
