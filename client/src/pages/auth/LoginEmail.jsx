import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../../components/AuthFooter";

const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/login/password", { state: { email } });
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };


  return (
    <div className="auth-wrapper">
      <img src="/Amazon.png" className="logo" alt="amazon" />

      <div className="auth-box">
        <h1>Sign in</h1>

        <form onSubmit={submitHandler}>
          <label>Email or mobile phone number</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Continue</button>
        </form>

        <p className="terms">
          By continuing, you agree to Amazon's <span className="link">Conditions of Use </span> and <span className="link" >Privacy
            Notice.</span>
        </p>

        <p className="link">Need help?</p>

        <div className="buy">
          Buying for work?
          <p className="link"> Shop on amzon Business</p>
        </div>
      </div>

      <div className="divider">
        <span>New to Amazon?</span>
      </div>

      <button
        className="secondary-btn"
        onClick={() => navigate("/register")}
      >
        Create your Amazon account
      </button>

      <div className="divider">
        <span>or</span>
      </div>

      <button className="google-btn" onClick={googleLogin}>
        <img src="/Google.png" alt="" />
        Continue with Google
      </button>
      <AuthFooter />

    </div>
  );
};

export default LoginEmail;
