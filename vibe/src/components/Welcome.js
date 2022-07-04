import "./Welcome.css" ; 
import img1 from "../images/vibeProfile.png" ; 
import {Link} from "react-router-dom" ; 
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector'
import {WalletConnectConnector} from "@web3-react/walletconnect-connector" ; 

const injected = new InjectedConnector(); 
const walletconnect = new WalletConnectConnector({
    rpc : {
        1: "https://rinkeby.infura.io/v3/8f3b5182a71d43e1bb85fb0b6095ef2a"
    }, 
    qrcode : true ,
    pollingInterval : 15000
}); 

const Welcome = ({setIsWalletConnect, setIsMetaMask, isMetaMask, isWalletConnect})=>{
    const {activate , active , connector , deactivate ,library : provider} =
         useWeb3React() ; //ima property library, a mi ga rename u provider 


    async function disconnect(){
        try{
            deactivate() ; 
        }catch(e){
            console.log(e); 
        }
    }

    async function connectMetaMask(){
        try{  
            await activate(injected); 
            setIsMetaMask(true); 
            console.log(active); 
        }catch(e){
            alert("problem with connecting to meta mask") ; 
            console.log(e) ; 
        }
    }
    async function connectWalletConnect(){
        try{  
            //resetWalletConnector(walletconnect); 
            await activate(walletconnect) ; 
            setIsWalletConnect(true) ; 
            console.log(active); 
        }catch(e){
            alert("problem with connecting to wallet connect") ; 
            console.log(e) ; 
        }
    }
    return(
        <>
            <div className="container">
                <img className="left "src={img1}/>
                <div className="right">
                    <h2>CONNECT YOUR WALLET</h2>
                    <p>Need some help connecting wallet ???
                    <Link to={{ pathname: "https://mvpworkshop.co/" }} target="_blank">
                        Read our FAQ
                    </Link>
                    <br/>
                    </p>
                    <button disabled={isWalletConnect} className="walletConnection" 
                            onClick={()=>connectMetaMask()}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"></img>
                        MetaMask
                        </button>
                    
                    <button disabled={isMetaMask} className="walletConnection" 
                            onClick={()=>connectWalletConnect()}>
                        <img src="https://api.nuget.org/v3-flatcontainer/walletconnect.core/1.7.1/icon"></img>
                        WalletConnect
                        </button>
                    <br/>
                    {active ? <h3>Connected</h3>: <h3>Not Connected</h3>}
                    <Link to="/home" >
                        <h1 id="logo">Vibe</h1>
                    </Link>
                </div>
            </div>
            
        </>
    ) ; 
}

export default Welcome ; 