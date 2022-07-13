import React, { useEffect, useState } from "react";
import { Icon } from "web3uikit";
import "./TweetInFeed.css" ; 
import { ranPic } from "../static/pics";
import { useWeb3React } from "@web3-react/core";
import {ethers} from "ethers" ; 
import Sponsor from "./Sponsor.js" ; 

const TweetInFeed = ({post, contract, index, sponsoredPosts ,setSponsoredPosts}) => {
  const {active,library : provider} =useWeb3React(); 
  const [ens,setEns] = useState() ;
  const [openSponsor , setOpenSponsor] = useState(false) ; 

  useEffect(()=>{
    const getEns = async ()=>{
      const ethersProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_API); 
      const resolvedName = await ethersProvider?.lookupAddress(post[1]) ; 
      console.log(resolvedName); 
      setEns(resolvedName); 
    }
    if(active)getEns();
  },[]) ;

  return (
    <>
     {openSponsor && <Sponsor onClose={()=>setOpenSponsor(false)} contract={contract} post={post}
                index={index} sponsoredPosts={sponsoredPosts} setSponsoredPosts={setSponsoredPosts}/>} 
     <div className="feedTweet">
        <img className="profilePic" src={ranPic+Math.floor(Math.random() * 10)} alt=""></img>
        <div className="completeTweet">
          <div className="who">
            {ens ? ens : post[1]}
            <div className="accWhen">1h ago</div>
            <div className="interactionNums moreVert">
                <Icon fill="#000000" size={20} svg="moreVert"/>
              </div>
          </div>
          <div className="tweetContent">
            {post[2]}
          </div>

          {active && 
            <div className="interactions">
              <div className="interactionNums" onClick={()=>setOpenSponsor(true)}>
                <Icon fill="#000000" size={20} svg="eth"/>
              </div>
              <div className="interactionNums">
                <Icon fill="#3f3f3f" size={20} svg="triangleUp"/>
                {Math.floor(Math.random() * 10)*5}
              </div>
            </div>
          }

        </div>
     </div>
    </>
  );
};

export default TweetInFeed;

