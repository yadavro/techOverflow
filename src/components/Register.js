<<<<<<< HEAD
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import "../util/Register.css";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmpassword: "",
  submitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        submitted: true,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

function Register() {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `fname:${formData.fname} \n lname:${formData.lname}\n email:${formData.email}\n password:${formData.password} \n confirmpassword: ${formData.confirmpassword}`
    );
    axios
      .post("/postregister", {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
        confirmpassword: formData.confirmpassword,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch({
      type: "SUBMIT_FORM",
    });
  };

  useEffect(() => {
    if (formData.submitted) {
      console.log("Form has been submitted!");
      dispatch({ type: "RESET_FORM" });
    }
  }, [formData.submitted]);

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          name="fname"
          value={formData.fname}
          type="text"
          onChange={handleChange}
        />
        <label>Last Name:</label>
        <input
          name="lname"
          value={formData.lname}
          type="text"
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          name="email"
          value={formData.email}
          type="text"
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <input
          name="password"
          value={formData.password}
          type="password"
          onChange={handleChange}
        />
        <label>Confirm Password:</label>
        <input
          name="confirmpassword"
          value={formData.confirmpassword}
          type="text"
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
        <p>
          ALready have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
=======
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import "../util/Register.css";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmpassword: "",
  submitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        submitted: true,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

function Register() {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `fname:${formData.fname} \n lname:${formData.lname}\n email:${formData.email}\n password:${formData.password} \n confirmpassword: ${formData.confirmpassword}`
    );
    axios
      .post("/postregister", {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
        confirmpassword: formData.confirmpassword,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch({
      type: "SUBMIT_FORM",
    });
  };

  useEffect(() => {
    if (formData.submitted) {
      console.log("Form has been submitted!");
      dispatch({ type: "RESET_FORM" });
    }
  }, [formData.submitted]);

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          name="fname"
          value={formData.fname}
          type="text"
          onChange={handleChange}
        />
        <label>Last Name:</label>
        <input
          name="lname"
          value={formData.lname}
          type="text"
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          name="email"
          value={formData.email}
          type="text"
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <input
          name="password"
          value={formData.password}
          type="password"
          onChange={handleChange}
        />
        <label>Confirm Password:</label>
        <input
          name="confirmpassword"
          value={formData.confirmpassword}
          type="text"
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
        <p>
          ALready have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
>>>>>>> b42d2e88d57ab86538b92622c922a7090e3d6727
