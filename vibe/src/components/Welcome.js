import "./Welcome.css" ; 
import img1 from "../images/vibeProfile.png" ; 
import {Link} from "react-router-dom" ; 
import {useNotification, Button} from "web3uikit" ; 
import { useEffect, useState } from 'react';
import {ethers} from "ethers" ; 
import {Web3ReactProvider} from "@web3-react/core" ;
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector'
import {WalletConnectConnector} from "@web3-react/walletconnect-connector" ; 
import Home from "./Home";
import { Route } from 'react-router-dom';

const injected = new InjectedConnector(); 

const RPC_URLS = {
    4 : `https://rinkeby.infura.io/v3/8f3b5182a71d43e1bb85fb0b6095ef2a`
}
const walletconnect = new WalletConnectConnector({
    rpc : {
        4 : RPC_URLS[4]
    }, 
    qrcode : true ,
    pollingInterval : 15000
}); 



const Welcome = ()=>{
    const {activate , active , connector , deactivate ,library : provider} =
         useWeb3React() ; //ima property library, a mi ga rename u provider  

    function resetWalletConnector(connector){
        if(connector && connector instanceof WalletConnectConnector){
            connector.walletConnectProvider = undefined ; 
        }
    }

    async function disconnect(){
        try{
            deactivate() ; 
        }catch(e){
            console.log(e); 
        }
    }

    async function connect(){
        try{  
            //resetWalletConnector(walletconnect); 
            //await activate(walletconnect) ; 
            await activate(injected); 
            console.log(active); 
        }catch(e){
            console.log(e) ; 
        }
    }
    async function execute(){
        if(active){
            const signer = provider.getSigner() ; 
            const mvpWorkshopAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"text","type":"string"}],"name":"PostCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"}],"name":"PostDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sponsorAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sponsor","type":"address"}],"name":"PostSponsored","type":"event"},{"inputs":[{"internalType":"string","name":"text","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"deletePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"numOfPosts","type":"uint256"}],"name":"fetchPostsRanged","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct ISocialNetwork.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPostID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"getPost","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct ISocialNetwork.Post","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"sponsorPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}] ; 
            const adresa = "0x9120b19e921fAf41d315B528dE711f99cf530725" ; 
            const contract = new ethers.Contract(adresa, mvpWorkshopAbi, signer) ; 

            try{
                const posts = await contract.fetchPostsRanged(1,9) ;
                console.log(posts) ;  
                const options = {value: ethers.utils.parseEther("0.01")}
                await contract.sponsorPost(4, options); 
            }catch(e){
                console.log(e) ; 
            }
        }
    }
    
    
    const [isConnected, setIsConnected] = useState(false);
    const [signer, setSigner]=  useState() ; 

    async function loadMetaMask(){
        if(typeof window.ethereum !== "undefined"){
            try{
                await window.ethereum.request({ method: "eth_requestAccounts"})
                setIsConnected(true) ; 
                let provider = new ethers.providers.Web3Provider(window.ethereum) ; 
                setSigner(provider.getSigner()) ; 
                console.log(signer); 
            }catch(e){
                console.log(e); 
            }
        }else{
            setIsConnected(false) ; 
            console.log("not installed metamask"); 
          }
    }

    async function sponsorPost(){
      const mvpWorkshopAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"text","type":"string"}],"name":"PostCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"}],"name":"PostDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"postID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sponsorAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sponsor","type":"address"}],"name":"PostSponsored","type":"event"},{"inputs":[{"internalType":"string","name":"text","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"deletePost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"numOfPosts","type":"uint256"}],"name":"fetchPostsRanged","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct ISocialNetwork.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPostID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"getPost","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct ISocialNetwork.Post","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"text","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"postID","type":"uint256"}],"name":"sponsorPost","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}] ; 

      const adresa = "0x9120b19e921fAf41d315B528dE711f99cf530725" ; 
      const contract = new ethers.Contract(adresa, mvpWorkshopAbi, signer) ; 

      //await contract.createPost("ko rano rani, ceo dan zeva") ; 
      const options = {value: ethers.utils.parseEther("0.01")}
      await contract.sponsorPost(9, options); 
    }
    return(
        <>
            <div className="container">
                <img className="left "src={img1}/>
                <div className="right">
                    <h1>CONNECT YOUR WALLET</h1>
                    <p>Need some help connecting wallet ???
                    <Link to={{ pathname: "https://mvpworkshop.co/" }} target="_blank">
                        Read our FAQ
                    </Link>
                    <br/>
                    <Link to="/home" target="_blank">
                        Check new vibes
                    </Link>
                    </p>
                    <button className="walletConnection" onClick={()=>connect()}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"></img>
                        MetaMask
                        </button>
                    <button className="walletConnection" onClick={()=>execute()}>
                        <img src="https://api.nuget.org/v3-flatcontainer/walletconnect.core/1.7.1/icon"></img>
                        WalletConnect
                        </button>
                    {active ? <h1>Connected</h1>: <h1>Not Connected</h1>}
                </div>
            </div>
            
        </>
    ) ; 
}

export default Welcome ; 