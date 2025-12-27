import { createContext, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const startLogin = async (email) => {
    return email; 
  };

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  const register = async (payload) => {
    await api.post("/auth/register", payload);
  };

  const verifyOtp = async (email, otp) => {
    await api.post("/auth/verify-otp", { email, otp });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, startLogin, login, register, verifyOtp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
