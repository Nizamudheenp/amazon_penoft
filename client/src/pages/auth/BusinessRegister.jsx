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

         <p className="terms">
          By creating an account or logging in, you agree to Amazon's <span className="link">Conditions of Use </span> and <span className="link" >Privacy
            Notice.</span> and the <span className="link">Amazon Business Terms and Conditons.</span> You agree that you are creating this business account on behalf of your organization and have authority to bind your organization.
        </p>
      </div>
    </div>
  );
};

export default BusinessRegister;
