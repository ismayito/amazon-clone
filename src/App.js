
import './App.css';
import Header from './Components/Header';
import Home from"./Components/Home";
import Checkout from "./Components/Checkout"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Components/Context';

function App() {
  const [{user},dispatch]= useStateValue();
// this will only run once when the app loads
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("auth user >>>",authUser);
      if(authUser){
        // the user has just logged in or the user was loggeg in
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        //the user is not logged in
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })
  },[])
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
