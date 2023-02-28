import React, { useState } from "react";
import './login.css'
const LoginSignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code for handling login/signup logic
  };

  return (
    <div className="main">
    <div className="main_container">
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label id="email">
          Email:
          <input className="background" type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label id="passward">
          Password:
          <input
          className="background"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button  id="submitbtn" type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account yet?" : "Already have an account?"}{" "}
        <button id="signup_btn" type="button" onClick={handleToggle}>
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
    </div>
  );
};

export default LoginSignupPage;
