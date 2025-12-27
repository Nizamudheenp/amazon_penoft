const BusinessRegister = () => {
  return (
    <div className="auth-wrapper business">
      <div className="auth-box">
        <h1>Enter your full name and choose your business password</h1>

        <label>Your name</label>
        <input />

        <label>Mobile number</label>
        <input />

        <label>Password</label>
        <input type="password" />

        <label>Password again</label>
        <input type="password" />

        <button>Next step</button>
      </div>
    </div>
  );
};

export default BusinessRegister;
