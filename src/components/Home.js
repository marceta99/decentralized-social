import "./Home.css" ; 
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import {Abi} from "../static/ContractInteraction";
import Feed from './Feed';
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import {ethers} from "ethers" ; 

const Home = ({isMetaMask, isWalletConnect})=>{
    const [contract, setContract] = useState(); 
    const { active ,library : provider, deactivate} = useWeb3React() ;  

         useEffect(()=>{
            const address = process.env.REACT_APP_CONTRACT_ADDRESS; 
            let vibeContract ; 
            const getSmartContractInstane = async()=>{
                if(active){
                    const signer = provider.getSigner() ; 
                    const network = signer?.provider['_network']; 
                    if(network.name !== "rinkeby"){
                        alert("you must be connected to rinkeby network with MetaMask") ;
                        await disconnect() ; 
                        const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_API);
                        vibeContract = new ethers.Contract(address, Abi, provider) ; 
                        setContract(vibeContract);
                        
                    }else{
                        vibeContract = new ethers.Contract(address, Abi, signer) ;
                        setContract(vibeContract);
                    } 
                }
                else{
                    const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_API);
                     vibeContract = new ethers.Contract(address, Abi, provider) ; 
                    setContract(vibeContract);
                }
            }
            getSmartContractInstane(); 
         },[]) ; 

         async function disconnect(){
            try{
                deactivate() ; 
            }catch(e){
                console.log(e); 
            }
        }
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