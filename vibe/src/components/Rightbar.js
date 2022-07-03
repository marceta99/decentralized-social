import React from "react";
import "./RightBar.css" ; 
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import {ethers} from "ethers" ; 

const mainNetProvider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/8f3b5182a71d43e1bb85fb0b6095ef2a"); 

const Rightbar = ({isMetaMask, isWalletConnect}) => {
  const {activate , active , connector , deactivate ,library : provider} =
         useWeb3React() ; //ima property library, a mi ga rename u provider 
  const [user, setUser] = useState() ;
  const [ens,setEns] = useState() ;

  useEffect(()=>{
    if(active){

      const signer = provider.getSigner() ;
      let userAddress = "" ; 
      if(isWalletConnect){
        userAddress = signer.provider.provider.signer.connection.wc._accounts[0] ;
        setUser(userAddress);
      }else if(isMetaMask){
        userAddress = signer.provider.provider["selectedAddress"].toLowerCase() ;
        setUser(userAddress);
      }
      const getEns = async ()=>{
        const resolvedName = await mainNetProvider?.lookupAddress(userAddress); 
        console.log(resolvedName); 
        setEns(resolvedName); 
      }
      getEns();
      
    }
  })

  return (
    <>
    {active && 
      <div className="rightbarContent">
      <div className="user">
        <div className="userContainer">
          {ens ? ens : user?.slice(0,15)}...
        </div>
        
      </div>
     </div> }
     
    </>
  );
};

export default Rightbar;

