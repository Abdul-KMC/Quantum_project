import React, { useState } from "react";
import "./registeration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [DateOfBirth, setDob] = useState("");
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
    console.log("check");
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
    const DateOfBirth = event.target.DateOfBirth.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const data = { name, DateOfBirth, email, password };
    console.log (data);
    axios
      .post("https://quantum-backend.vercel.app/api/user ", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });

    // code for handling registration logic
  };

  // const navigate = useNavigate();
  // function handleRegister(event) {
  //   event.preventDefault();
  //   navigate("/login");
  // }

  return (
    <div className="main">
      <div className="main_container">
        <h1 id="Reg">Registration</h1>
        <form >
          <label id="name">
            Name:
            <input
              className="background"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <br />
          <label id="DateOfBirth">
            DateOfBirth:
            <input
              className="background"
              type="date"
              value={DateOfBirth}
              onChange={handleDobChange}
            />
          </label>
          <br />
          <label id="email">
            Email:
            <input
              className="background"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
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
          <button id="registrer_btn" type="submit" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
