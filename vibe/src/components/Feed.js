import "./Feed.css" ;
import TweetInFeed from "./TweetInFeed" ; 
import WritePost from "./WritePost";
import { useEffect, useState, useRef } from "react";
import { Icon } from "web3uikit";

const Feed = ({contract})=>{
  const [posts, setPosts] = useState() ; 
  const [lastShowedPostId, setLastShowedId] = useState(1) ; 
  const [isLoad, setIsLoad] = useState(false); 
  const [isSearch, setIsSearch] = useState(false) ; 
  const [sponsoredPosts, setSponsoredPosts] = useState([]);
  const input = useRef();
  let fetchedPosts = [] ;
  let latestPostId = 1 ;
  let getPostAsync ;  
  
  useEffect(()=>{
       console.log("RELOADDDDDDDDDDDDDDDDDDDDDDD");
        getPostAsync = async() =>{
        latestPostId = await contract?.getLatestPostID();
        if(latestPostId < 5) fetchedPosts = await contract?.fetchPostsRanged(1,latestPostId );
        else{
          setLastShowedId(latestPostId - 4); 
          fetchedPosts = await contract?.fetchPostsRanged(latestPostId - 4, latestPostId);
        }
        if(fetchedPosts){
          const array = [...fetchedPosts] ;
          array.reverse() ;
          setPosts(array);
        } 
      }
      getPostAsync() ; 
    }, [contract, isLoad]) ;
    
    window.onscroll = async ()=>{
      if(!isSearch && window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight){ //if is scrolled at the end of a page
          console.log("SCROLL")
          if(lastShowedPostId === 1)return ; 
          let arr1 =[] ; 
          if(lastShowedPostId < 5){
             arr1 = await contract?.fetchPostsRanged(1,lastShowedPostId );
          }else{
             arr1 = await contract?.fetchPostsRanged(lastShowedPostId - 4, 4 );
            setLastShowedId(lastShowedPostId - 4); 
          }
          let array = [...arr1] ;
          array.reverse() ;
          const arr2 = [...posts, ...array]; 
          setPosts(arr2); 
        }
    }

    const searchPosts = async ()=>{
      setIsSearch(true) ; 
      const text = input.current.value ;
      const postsFromCreator = await retrivePostsFromCreator(text) ; 
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
  const retrivePostsFromCreator = async (creatorAddress)=>{
    const postsFromCreator = [] ; 
    const lastPostId = await contract?.getLatestPostID();
    const allPosts = await contract?.fetchPostsRanged(1,lastPostId );
    allPosts.forEach(p =>{
      if(compareAddress(creatorAddress, p[1] ))postsFromCreator.push(p) ; 
    })
    return postsFromCreator ; 
  }
    return (
      <div className="main-container-div">
       <div className="profileTweet">
          <div className="inputContainer">
            <input type="text" ref={input} defaultValue="search..." 
            onFocus={()=>input.current.value = ""}
            className="postInput"></input>
            <div className="interactionNums" onClick={searchPosts}>
                <Icon fill="#ffffff" size={20} svg="search"/>
              </div>
          </div>
        </div>
       <div className="mainContent">
        <h3>Update your vibe</h3>
        <WritePost contract={contract} setIsLoad={setIsLoad}/>
        <h3>Feed</h3>
        {posts && posts.map((post,i)=>(
          <TweetInFeed key={post} post={post} index={i+1} contract={contract} 
            sponsoredPosts={sponsoredPosts} setSponsoredPosts={setSponsoredPosts}/>
        ))}
        
       </div>
      </div>
    );
  };

export default Feed;  