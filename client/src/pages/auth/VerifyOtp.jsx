import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const VerifyOtp = () => {
  const { verifyOtp } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(state.email, otp);
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h1>Verify email address</h1>
        <p>We sent an OTP to {state.email}</p>

        <form onSubmit={submitHandler}>
          <label>Enter OTP</label>
          <input required onChange={(e) => setOtp(e.target.value)} />
          <button>Create your Amazon account</button>
        </form>

        <p className="link">Resend OTP</p>
      </div>
    </div>
  );
};

export default VerifyOtp;
