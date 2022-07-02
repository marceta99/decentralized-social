import "./Feed.css" ;
import TweetInFeed from "./TweetInFeed" ; 
import WritePost from "./WritePost";
import { useEffect, useState, useRef } from "react";
import { Icon } from "web3uikit";
import SearchUserPosts from "./SearchUserPosts";

const Feed = ({contract})=>{
  const [posts, setPosts] = useState() ; 
  const input = useRef();

    useEffect(()=>{
      const getPostAsync = async() =>{
        const postId = await contract?.getLatestPostID();
        const fetchedPosts = await contract?.fetchPostsRanged(1,postId );
        setPosts(fetchedPosts) ;  
      }
      getPostAsync() ; 
    }, [contract]) ;
    
    const searchPosts =()=>{
      const text = input.current.value ;
      const postsFromCreator = retrivePostsFromCreator(text) ; 
      if(postsFromCreator.length !== 0)setPosts(postsFromCreator) ; 
  }
  const compareAddress = (address1, address2)=>{
    const a1 = address1.toLowerCase(); 
    const a2 = address2.toLowerCase(); 
    for(let i = 0 ; i< a1.length ;i++){
      let char1 = a1.charCodeAt(i);   
      let char2 = a2.charCodeAt(i); 
      if(char1 != char2){ 
          return false ; 
      }
    }
    return true ; 
  }
  const retrivePostsFromCreator = (creatorAddress)=>{
    const postsFromCreator = [] ; 
    posts.forEach(p =>{
      if(compareAddress(creatorAddress, p[1] ))postsFromCreator.push(p) ; 
    })
    return postsFromCreator ; 
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
       <div className="mainContent">
        <WritePost contract={contract}/>
        {posts && posts.map((post,i)=>(
          <TweetInFeed key={post} post={post} index={i+1} contract={contract}/>
        ))}
        
       </div>
      </>
    );
  };

export default Feed;  