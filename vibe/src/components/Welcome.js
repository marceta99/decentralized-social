import "./Welcome.css" ; 
import img1 from "../images/vibeProfile.png" ; 
import { meta, walConn } from "../static/pics";
import {Link} from "react-router-dom" ; 
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../static/ContractInteraction";

const Welcome = ({setIsWalletConnect, setIsMetaMask, isMetaMask, isWalletConnect})=>{
    const {activate , active } = useWeb3React() ;

    async function connectMetaMask(){
        try{   
            await activate(injected); 
            setIsMetaMask(true); 
            
        }catch(e){
            alert("problem with connecting to meta mask") ; 
            console.log(e) ; 
        }
    }
    async function connectWalletConnect(){
        try{  
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
                <img className="left "src={img1} alt=""/>
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
                        <img src={meta} alt=""></img>
                        MetaMask
                        </button>
                    
                    <button disabled={isMetaMask} className="walletConnection" 
                            onClick={()=>connectWalletConnect()}>
                        <img src={walConn} alt=""></img>
                        WalletConnect
                        </button>
                    <br/>
                    {active ? <h3>Connected</h3>: <h3>Not Connected</h3>}
                    <Link to="/home" style={{ textDecoration: 'none' }} >
                        <h1 id="logo">Vibe</h1>
                    </Link>
                </div>
            </div>
            
        </>
    ) ; 
}

export default Welcome ; 