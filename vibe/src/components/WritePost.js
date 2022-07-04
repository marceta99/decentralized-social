import "./Feed.css" ;
import { useWeb3React } from "@web3-react/core";
import { useEffect, useRef } from "react";

const WritePost = ({contract, setIsLoad })=>{
  const { active} = useWeb3React();
  const input = useRef(); 

    useEffect(()=>{ 
    },[active]);

    const createNewPost = async()=>{
      console.log(input.current.value) ;
      const text = input.current.value ;
      if(text){
        try{
            await contract.createPost(text); 
            setTimeout(()=>{
              setIsLoad(previous => !previous) ; 
            }, 20000);
        }catch(e){
            console.log(e) ; 
        }
      }
      input.current.value = "what is your vibe today ?"; 
    }

    if(!active)return <h2>You need to login to write post</h2>; 
    return (
        <div className="profileTweet">
          <div className="inputContainer">
            <img className="profilePic" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" alt="">
          </img>
            <input type="text" ref={input} onFocus={()=>input.current.value = ""}
            defaultValue="what is your vibe ?" className="postInput"></input>
            <button onClick={createNewPost} className="btn">POST</button>
          </div>
        </div>
    ) ; 
}
export default WritePost ; 