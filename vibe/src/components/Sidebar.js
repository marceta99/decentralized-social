import React from "react";
import "./SideBar.css" ;
import {Icon} from "web3uikit" ; 
import { Link } from "react-router-dom";

const Sidebar = () => {
  

  return (
    <>
      <div className="siderContent">
        <div className="menu">
          <div className="details">
            <Icon fill="#ffffff" size={33} svg="twitter"/>
          </div>
        </div>
        <Link to="/" className="link">
        <div className="menuItems">
          <div className="details">
            <Icon fill="#ffffff" size={33} svg="list"/>Home
          </div>
        </div>
        </Link>
        <Link to="/profile" className="link">
        <div className="menuItems">
          <div className="details">
            <Icon fill="#ffffff" size={33} svg="user"/>Profile
          </div>
        </div>
        </Link>
        <Link to="/settings" className="link">
        <div className="menuItems">
          <div className="details">
            <Icon fill="#ffffff" size={33} svg="cog"/>Settings
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;

