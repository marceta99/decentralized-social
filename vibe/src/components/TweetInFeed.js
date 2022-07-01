import React from "react";
import { Icon } from "web3uikit";
import "./TweetInFeed.css" ; 



const TweetInFeed = ({post}) => {
  console.log("post from tweetfeed") ; 
  console.log(post); 
  return (
    <>
     <div className="feedTweet">
        <img className="profilePic" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"></img>
        <div className="completeTweet">
          <div className="who">
            {post[1]}
            <div className="accWhen">0x123lsk23js2asdasdasdasd 1h</div>
          </div>
          <div className="tweetContent">
            {post[2]}
            <img className="tweetImg" src="https://vrelegume.rs/wp-content/uploads/2021/05/tesla-roadster.jpg" ></img>
          </div>

          <div className="interactions">
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="messageCircle"/>
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="star"/>12
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="matic"/>
            </div>
          </div>

        </div>
     </div>
    </>
  );
};

export default TweetInFeed;

