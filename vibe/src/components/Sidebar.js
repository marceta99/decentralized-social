import React, { useState } from "react";
import "./SideBar.css" ;
import { Link } from "react-router-dom";
import img1 from "../images/logo.png" ; 
import Modal from "./Modal";

const Sidebar = ({contract}) => {
  const [openModal, setOpenModal] = useState(false) ; 

  return (
    <>
     {openModal && <Modal onClose={()=>setOpenModal(false)} contract={contract}/>} 
      <div className="siderContent">
        <Link to="/" className="link">
          <h1 className="logo">VIBE</h1>
        </Link>
        <div className="buttonPost" onClick={()=> setOpenModal(true)}>
           <h4 className="writePost">Write A Post </h4>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

