import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
    await register(form);
    navigate("/verify-otp", { state: { email: form.email } });
  };

  return (
    <div className="auth-wrapper">
      <img src="Amazon.png" className="logo" alt="amazon" />

      <div className="auth-box">
        <h1>Create account</h1>

        <form onSubmit={submitHandler}>
          <label>Your name</label>
          <input required onChange={(e) => setForm({ ...form, name: e.target.value })} />

          <label>Email</label>
          <input required onChange={(e) => setForm({ ...form, email: e.target.value })} />

          <label>Password</label>
          <input type="password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <button>Create your Amazon account</button>
        </form>

        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </p>

        <p className="business-link" onClick={() => navigate("/business-register")}>
          Buying for work? Create a free business account
        </p>
      </div>
    </div>
  );
};

export default Register;
