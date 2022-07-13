import React, { useEffect, useState } from "react";
import { Icon } from "web3uikit";
import "./TweetInFeed.css" ; 
import { ranPic } from "../static/pics";
import { useWeb3React } from "@web3-react/core";
import {ethers} from "ethers" ; 


const TweetInFeed = ({post, contract, index, sponsoredPosts ,setSponsoredPosts}) => {
  const {active,library : provider} =useWeb3React(); 
  const [isAlredySposnored, setAlredySponsored] = useState(false);
  const [ens,setEns] = useState() ;

  useEffect(()=>{
    const getEns = async ()=>{
      const ethersProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_API); 
      const resolvedName = await ethersProvider?.lookupAddress(post[1]) ; 
      console.log(resolvedName); 
      setEns(resolvedName); 
    }
    getEns() ;
  },[]) ;

  const sponsorPost = async ()=>{
    if(active){
      const signer = provider.getSigner() ;
      const signerAddress = signer.provider.provider["selectedAddress"].toLowerCase() ; 
      const postCreator = post[1].toLowerCase() ; 
      let isValid = false ; 
      for(let i = 0 ; i< postCreator.length ;i++){
        let char1 = postCreator.charCodeAt(i);   
        let char2 = signerAddress.charCodeAt(i); 
        if(char1 != char2){
            isValid = true ; 
            break; 
        }
      }
      if(!isValid){
        alert("can't sposnor your own posts") ; 
      }else{
        sponsoredPosts.forEach(p => {
            if(p === index){
              setAlredySponsored(true) ; 
              alert("You alredy sposnored this post");
            }     
        });
        if(!isAlredySposnored){
          try {

            const options = {value: ethers.utils.parseEther("0.01")}
            await contract.sponsorPost(index, options);  
            setSponsoredPosts(previous => [...previous, index]); 
          } catch (error) {
            alert("insufficient funds"); 
          }
        }
      }
    }
  }
  return (
    <>
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
              <div className="interactionNums">
                {Math.floor(Math.random() * 10)}
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

