import React from "react";
import "./RightBar.css" ; 
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

const Rightbar = ({isMetaMask, isWalletConnect}) => {
  const {activate , active , connector , deactivate ,library : provider} =
         useWeb3React() ; //ima property library, a mi ga rename u provider 
  const [user, setUser] = useState() ;

  useEffect(()=>{
    if(active){
      const signer = provider.getSigner() ;
      if(isWalletConnect){
        const walletConnectAddress = signer.provider.provider.signer.connection.wc._accounts[0] ;
        setUser(walletConnectAddress);
      }else if(isMetaMask){
        const signerAddress = signer.provider.provider["selectedAddress"].toLowerCase() ;
        setUser(signerAddress);
      }
      
    }
  })

  return (
    <>
    {active && 
      <div className="rightbarContent">
      <div className="user">
        <div className="userContainer">
          {user?.slice(0,15)}...
        </div>
        
      </div>
     </div> }
     
    </>
  );
};

export default Rightbar;

