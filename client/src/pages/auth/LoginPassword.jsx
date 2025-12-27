import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginPassword = () => {
  const { login } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await login(state.email, password);
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <img src="/amazon-logo.png" className="logo" alt="amazon" />

      <div className="auth-box">
        <h1>Sign in</h1>

        <p className="email-preview">{state.email}</p>

        <form onSubmit={submitHandler}>
          <label>Password</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPassword;
