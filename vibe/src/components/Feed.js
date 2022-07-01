import "./Feed.css" ;
import { Icon, TextArea } from "web3uikit";
import TweetInFeed from "./TweetInFeed" ; 
import WritePost from "./WritePost";
import { useEffect, useState } from "react";

const Feed = ({contract})=>{
  const [posts, setPosts] = useState() ; 

    useEffect(()=>{
      const getPostAsync = async() =>{
        const postId = await contract?.getLatestPostID();
        const fetchedPosts = await contract?.fetchPostsRanged(1,postId );
        setPosts(fetchedPosts) ;  
      }
      getPostAsync() ; 
    }, [contract]) ; 
    return (
      <>
      <div className="pageIdentify">Home</div>
       <div className="mainContent">
        <WritePost contract={contract}/>
        {posts && posts.map((post)=>(
          <TweetInFeed key={post} post={post}/>
        ))}
        
       </div>
      </>
    );
  };

export default Feed;  