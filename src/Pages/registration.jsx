import React, { useState } from "react";
import './registeration.css'
const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // code for handling registration logic
  };

  return (
    <div className="main">
      <div className="main_container">
      <h1 id="Reg">Registration</h1>
      <form onSubmit={handleSubmit}>
        <label id="name">
          Name:
          <input className="background" type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label id="dob">
          Date of Birth:
          <input className="background" type="date" value={dob} onChange={handleDobChange} />
        </label>
        <br />
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
        <button id="registrer_btn" type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationPage;
