import Welcome from './components/Welcome';
import Home from './components/Home';
import './App.css';
import { Route,Switch, BrowserRouter , Routes} from 'react-router-dom';
import {ethers} from "ethers" ; 
import {Web3ReactProvider} from "@web3-react/core" ; 

function App() {
  const getLibrary = (provider)=>{
    return new ethers.providers.Web3Provider(provider);  
}

  return (
    <div>
    <BrowserRouter>
    <div>HiiIIIIIIII</div>
    <Web3ReactProvider  getLibrary={getLibrary}>
    
      <div className='main-container'>
      <Switch>
          <Route path="/" exact component={ Welcome }></Route>
          <Route path="/home" component={ Home}></Route>
      </Switch>
      </div>
    </Web3ReactProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
