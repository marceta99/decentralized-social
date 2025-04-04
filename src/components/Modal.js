import "./Modal.css" 
import "./Feed.css" ;
import { profilePic } from "../static/pics";
import {  useRef } from "react";


const Modal = ({onClose, contract})=>{
    const input = useRef(); 

    const createNewPost = async()=>{
        console.log(input.current.value) ;
        const text = input.current.value ;
        if(text){
          try{
              await contract.createPost(text); 
          }catch(e){
              console.log(e) ; 
          }
        }
        input.current.value = "what is your vibe today ?"; 
        onClose(); 
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
                    <input type="text" onFocus={()=>input.current.value = ""} ref={input} defaultValue="what is your vibe ?" className="postInput"></input>
                    <div className="footer">
                        <button onClick={createNewPost}>POST</button>
                     </div>
                </div>
            </div>
         </div>
        </div>
    ); 
}
export default Modal; 