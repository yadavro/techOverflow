import React, { useEffect, useState } from "react";
import "../util/Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  useEffect(() => {
    if (submit) {
      alert(`email: ${email} and password: ${password}`);
      axios
        .post("/api", { email, password })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setSubmit(false);
        });
    }
  }, [submit]);
  return (
    <div className="login">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name="email" value={email} type="text" onChange={handleChange} />
        <br />
        <label>password:</label>
        <input
          name="password"
          value={password}
          type='password'
          onChange={handleChange}
        />

        <button type="submit">Sign in</button>
        <p>
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
