
import './App.css';
import Header from './Components/Header';
import Home from"./Components/Home";
import Checkout from "./Components/Checkout"
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
<Header></Header>
  <div className="App"> 
  
  <Routes>
    <Route path="/" element={<Home></Home> }></Route>
  </Routes>
  <Routes>
    <Route  exact path="/checkout" element={<Checkout/>}>
    
   
      
    </Route>

  </Routes>
      </div>
  </BrowserRouter>
    
    
     
      
     
  
  );
}

export default App;
