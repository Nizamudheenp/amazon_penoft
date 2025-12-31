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

  const setGoogleUser = (user) => {
    setUser(user);
  };


  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  const register = async (payload) => {
    try {
      await api.post("/auth/register", payload);
    } catch (err) {
      throw err;
    }
  };

  const verifyOtp = async (email, otp) => {
    const { data } = await api.post("/auth/verify-otp", { email, otp });

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };


  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, startLogin, login, register, verifyOtp, logout, setGoogleUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
