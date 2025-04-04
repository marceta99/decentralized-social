import React from "react";
import "./RightBar.css" ; 
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import {ethers} from "ethers" ; 

const Rightbar = ({isMetaMask, isWalletConnect}) => {
  const {active ,library : provider} = useWeb3React() ; 
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
        const ethersProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_API); 
        const resolvedName = await ethersProvider?.lookupAddress(userAddress); 
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

