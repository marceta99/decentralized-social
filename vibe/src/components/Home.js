import "./Home.css" ; 
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import Feed from './Feed';
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import {ethers} from "ethers" ; 

const Home = ({isMetaMask, isWalletConnect})=>{
    const [contract, setContract] = useState(); 

    const {activate , active , connector , deactivate ,library : provider} =
         useWeb3React() ; //ima property library, a mi ga rename u provider  

         useEffect(()=>{
            const mvpWorkshopAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"text","type":"string"}],"name":"PostCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"}],"name":"PostDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sponsorAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sponsor","type":"address"}],"name":"PostSponsored","type":"event"},{"inputs":[{"internalType":"string","name":"text","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"deletePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"numOfPosts","type":"uint256"}],"name":"fetchPostsRanged","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct ISocialNetwork.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPostID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"getPost","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct ISocialNetwork.Post","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"sponsorPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}] ; 
            const adresa = "0x9120b19e921fAf41d315B528dE711f99cf530725" ; 
            let vibeContract ; 
            const getSmartContractInstane = ()=>{
                if(active){
                    const signer = provider.getSigner() ; 
                    console.log(signer);
                    vibeContract = new ethers.Contract(adresa, mvpWorkshopAbi, signer) ;
                    setContract(vibeContract); 
                }else{
                    const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/8f3b5182a71d43e1bb85fb0b6095ef2a`);
                     vibeContract = new ethers.Contract(adresa, mvpWorkshopAbi, provider) ; 
                    setContract(vibeContract);
                }
            }
            getSmartContractInstane(); 
         },[]) ; 

    return (
        <>  
            <div className="page">
                <div className='sideBar'><Sidebar contract={contract}/></div>

                <div className='mainWindow'><Feed contract={contract}/></div>

                <div className='rightBar'><Rightbar contract={contract} 
                    isMetaMask={isMetaMask} isWalletConnect={isWalletConnect}/></div>
            </div>
        </>
    ); 
}

export default Home ; 