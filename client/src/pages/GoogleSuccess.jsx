import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const { setGoogleUser } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const user = params.get("user");

    if (token && user) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);

      setGoogleUser(JSON.parse(user)); 
      navigate("/");
    }
  }, []);

  return null;
};

export default GoogleSuccess;
