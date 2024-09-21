import React, { useEffect, useState } from "react";
import "../util/Nav.css";
import { useNavigate } from "react-router-dom";
import tech from '../images/tech.png';
function Nav() {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleSearch = () => {
    setSubmit(true);
  };
  const handlelogo=()=>{
    navigate("/home");
  }
  const handleLogin=()=>{
    navigate("/login")
  }
  const handleSignup=()=>{
    navigate("/signup")
  }
  useEffect(() => {
    if (submit) {
      navigate("/questions", { state: { searchQuerry: search } });
      setSubmit(false);
    }
  }, [search, submit, navigate]);
  return (
    <div className="navbar">
      {/* <h2 className="logo" onClick={handlelogo}>techOverflow</h2> */}
      <img className="logo" onClick={handlelogo} src={tech} alt='logo'/>
      {showSearch && (
        <div className="search-container">
        <input
          type="search"
          className="search-input"
          value={search}
          name="search"
          onChange={handleChange}
          placeholder="Search questions..."
        />
        <button className="search-btn" onClick={handleSearch}>
          Go
        </button>
      </div>
      )} 
      <div className="auth-buttons">
      <button className="auth-btn" onClick={() => setShowSearch(!showSearch)}>
          {showSearch ? "Hide Search" : "Search"}
        </button>
        <button className="auth-btn" onClick={handleLogin}>Log in</button>
        <button className="auth-btn" onClick={handleSignup}>Sign up</button>
      </div>
    </div>
  );
}

export default Nav;
