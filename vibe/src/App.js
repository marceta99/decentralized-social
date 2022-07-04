import Welcome from './components/Welcome';
import Home from './components/Home';
import './App.css';
import { Route, BrowserRouter , Routes} from 'react-router-dom';
import {ethers} from "ethers" ; 
import {Web3ReactProvider} from "@web3-react/core" ; 
import ErrorPage from './components/ErrorPage';
import { useState } from 'react';

function App() {
  const [isMetaMask, setIsMetaMask] = useState(false) ;
  const [isWalletConnect, setIsWalletConnect] = useState(false); 

  const getLibrary = (provider)=>{
    return new ethers.providers.Web3Provider(provider);  
}

  return (
    <div>
      <BrowserRouter>
        <Web3ReactProvider  getLibrary={getLibrary}>
        
          <div className='main-container'>
          <Routes>
              <Route path="/" exact element={ <Welcome setIsMetaMask={setIsMetaMask} 
                  setIsWalletConnect ={setIsWalletConnect} isMetaMask={isMetaMask} 
                  isWalletConnect={isWalletConnect} /> }></Route>
              <Route path="/home" element={ <Home isMetaMask={isMetaMask}
                isWalletConnect={isWalletConnect}/>}></Route>
              <Route path="*" element={ <ErrorPage/>}></Route>
          </Routes>
          </div>
        </Web3ReactProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
