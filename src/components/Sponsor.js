import "./Sponsor.css";   
import "./Feed.css" ;
import { profilePic } from "../static/pics";
import {  useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import {ethers} from "ethers" ; 
import { useState } from "react";

const Sponsor = ({onClose, contract, index, setSponsoredPosts, sponsoredPosts, post})=>{
    const input = useRef(); 
    const {active,library : provider} =useWeb3React(); 
    
    const sponsorPost = async()=>{
        console.log(input.current.value) ;
        const text = input.current.value ;
        if(text){
          try{
              await contract.createPost(text); 
          }catch(e){
              console.log(e) ; 
          }
        }
        input.current.value = "Sponsor amount in ethereum : "; 
        onClose(); 
      }
      const sponsorPostt = async ()=>{
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
            let isAlredySposnored = false ; 
            sponsoredPosts.forEach(p => {
                if(p === index){
                  isAlredySposnored = true ;  
                  alert("You alredy sposnored this post");
                }     
            });
            if(!isAlredySposnored){
              try {
                const text = input.current.value ;
                if(text && !isNaN(text)){
                    const options = {value: ethers.utils.parseEther(text)}
                    await contract.sponsorPost(index, options);  
                    setSponsoredPosts(previous => [...previous, index]); 
                    onClose(); 
                }else{
                    input.current.value = "Value must be a number"; 
                }
              } catch (error) {
                onClose(); 
                alert("sponsoring did not succeed"); 
              }
            }
          }
        }
        
      }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={onClose}>X</button>    
                </div> 

            <div className="profileTweet">
                <div className="inputContainer">
                    <img className="profilePic" src={profilePic} alt=""></img>
                    <input type="text" onFocus={()=>input.current.value = ""} ref={input} defaultValue="Sponsor amount in ethereum :" className="postInput"></input>
                    <div className="footer">
                        <button onClick={sponsorPostt}>Sponsor</button>
                     </div>
                </div>
            </div>
         </div>
        </div>
    ); 
}
export default Sponsor; 