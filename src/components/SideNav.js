import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";
import { FaClipboardQuestion } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "../util/SIdeNav.css";
import { useNavigate } from "react-router-dom";
function SideNav() {
  const [isOpen ,setIsOpen]=useState(true);
  const[isCollapsed, setIsCollapsed]=useState(false);
  const navigate = useNavigate();

  const handleToggle=()=>{
    setIsOpen(!isOpen);
  }

  const handleResize=()=>{
    if(window.innerWidth<768){
      setIsCollapsed(true);
      setIsOpen(false);
    }else{
      setIsCollapsed(false);
    }
  }
  const handleHome = () => {
    navigate("/home");
  };
  const handleTag = () => {
    navigate("/tags");
  };
  const handleQuestion = () => {
    navigate("/questions");
  };
  const handleUsers = () => {
    navigate("/users");
  };
  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    handleResize();
    return ()=>{
      window.removeEventListener("remove",handleResize);
    };
  },[setIsCollapsed]);
  return (
    <div className={`side-navbar ${isCollapsed ? 'collapsed' : 'open'}`}>
    <button className="toggle-btn" onClick={handleToggle}>
      {isOpen? <FaTimes/> : <FaBars/>}
    </button>
      <ul className="nav-links">
      <li onClick={handleHome}>
          <FaHome /> {isOpen && "Home"}
        </li>
        <li onClick={handleTag}>
          <FaTags /> {isOpen && "Tags"}
        </li>
        <li onClick={handleQuestion}>
          <FaClipboardQuestion /> {isOpen && "Questions"}
        </li>
        <li onClick={handleUsers}>
          <FaUsers /> {isOpen && "Users"}
        </li>
        {/* <li><a href="#">Item 1</a></li> */}
    {/* <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
    <li><a href="#">Item 6</a></li>
    <li><a href="#">Item 7</a></li>
    <li><a href="#">Item 8</a></li>
    <li><a href="#">Item 9</a></li>
    <li><a href="#">Item 10</a></li>
    <li><a href="#">Item 11</a></li>
    <li><a href="#">Item 12</a></li> */}
      </ul>
    </div>
  );
}

export default SideNav;
