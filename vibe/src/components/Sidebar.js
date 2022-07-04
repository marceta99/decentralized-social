import React, { useState } from "react";
import "./SideBar.css" ;
import { Link } from "react-router-dom";
import img1 from "../images/logo.png" ; 
import Modal from "./Modal";
import { useWeb3React } from "@web3-react/core";

const Sidebar = ({contract}) => {
  
  const {activate , active , connector , deactivate ,library : provider} =
  useWeb3React() ; //ima property library, a mi ga rename u provider  

  const [openModal, setOpenModal] = useState(false) ; 

  return (
    <>
    {openModal && <Modal onClose={()=>setOpenModal(false)} contract={contract}/>} 
     <div className="siderContent">
       <Link to="/" className="link" style={{ textDecoration: 'none' }}>
         <h1 className="logo">VIBE</h1>
       </Link>
       {active && 
         <div className="buttonPost" onClick={()=> setOpenModal(true)}>
           <h4 className="writePost">Write A Post </h4>
        </div>
       }
     </div>
   </>
  );
};

export default Sidebar;

