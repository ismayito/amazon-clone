
import './App.css';
import Header from './Components/Header';
import Home from"./Components/Home";
import Checkout from "./Components/Checkout"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
  <BrowserRouter>
  <div className="App"> 
{/* <Header></Header> */}
  <Routes>
    <Route path="/login" element={<Login ></Login>}></Route>
  </Routes>
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
