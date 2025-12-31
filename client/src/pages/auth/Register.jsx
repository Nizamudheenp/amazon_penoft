import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AuthFooter from "../../components/AuthFooter";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    isBusiness: false
  });

 const submitHandler = async (e) => {
  e.preventDefault();
  try {
    await register(form);
    navigate("/verify-otp", { state: { email: form.email } });
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
  }
};


  const googleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div className="auth-wrapper">
      <img src="Amazon.png" className="logo" alt="amazon" />

      <div className="auth-box">
        <h1>Create account</h1>

        <form onSubmit={submitHandler}>
          <label>Your name</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

          <label>Email</label>
          <input type="email" value={form.email} required onChange={(e) => setForm({ ...form, email: e.target.value })} />

          <label>Password</label>
          <input type="password" value={form.password} required onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <button type="submit">Verify email</button>
        </form>
        <div className="business-link" onClick={() => navigate("/business-register")}>
          <p className="buy">Buying for work? </p>
          <p className="link"> Create a free business account</p>
        </div>
        <div className="divider">
          <span><hr /></span>
        </div>
        <p className="buy">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </p>
        <p className="terms">
          By continuing, you agree to Amazon's <span className="link">Conditions of Use </span> and <span className="link" >Privacy
            Notice.</span>
        </p>

      </div>
      <div className="divider">
        <span>or</span>
      </div>

      <button className="google-btn" onClick={googleLogin}>
        <img src="/Google.png" alt="" />
        Login with Google
      </button>

      <AuthFooter />
    </div>
  );
};

export default Register;
