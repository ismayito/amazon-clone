import { useState } from "react";
import { auth } from "../../firebase";
import   loginpage from "./loginpage.css";
import {Link,useNavigate} from "react-router-dom";


function Index(){
    const navigate = useNavigate();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const Signin=()=>{
        email.preventDefault();
    }
    const CreateAccount=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth);
            if(auth){
                navigate.push("/")
            }
        }).catch(error=>alert(error.message))
        //create amazon account
    }
    return(
        <div className="login">
            <Link to="/">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
            className="login__logo"/>
            </Link>
            <div className="container__login">
                <h1>Sign-in</h1>
                <form className="form">
                    <h5>Email:</h5>
                    <input type="email" placeholder="enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password:</h5>
                    <input type="password" placeholder="enter password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button  type="submit" onClick={Signin}>Sign-in</button>
                </form>
              <p>By signing in you agree to amazons terms and conditions of 
                use and Sale. Please see our privacy policy, cookies and our interest based ads</p>
                <h2>Do not have account yet!</h2>
                <button  onClick={CreateAccount} className="register">create your amazon account</button>
            </div>
        </div>
    )
}

 export default Index;