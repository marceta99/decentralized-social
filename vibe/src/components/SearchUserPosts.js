import "./Feed.css" ;
import "./TweetInFeed.css" ; 
import { useEffect, useRef } from "react";
import { Icon } from "web3uikit";
const SearchUserPosts = ({posts})=>{
    const input = useRef();
    
    const searchPosts =()=>{
        const text = input.current.value ;
        posts.forEach(post => {
           
        });
    }
    
    return (
        <>
        <div className="profileTweet">
          <div className="inputContainer">
            <input type="text" ref={input} defaultValue="search..." className="postInput"></input>
            <div className="interactionNums" onClick={searchPosts}>
                <Icon fill="#ffffff" size={20} svg="search"/>
              </div>
          </div>
        </div>
        </>
    )
}
export default SearchUserPosts ; 