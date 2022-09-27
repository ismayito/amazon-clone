import Header from "./Header.css";
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "../Context";


function Index() {
    const [{basket},action]=useStateValue()
  return (
    <div className="header">
        <Link to='/'>
        <img className = "header_logo" 
        
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logoimage"/>
        </Link>
       
        <div className="header_search">
            <input className="search_input" type="text"></input>
            <SearchIcon className="search_icon"></SearchIcon>
        </div>
        
        
        <div className="header_nav">
        <Link to="/login">
            <div className="header_option">
                <span className="option1">Hello Guest</span>
                <span className="option2">Sign in</span>
            </div>
            </Link>
           
            <div className="header_option">
            <span className="option1">Returns </span>
                <span className="option2"> &amp; orders</span>
            </div>
            
            
            <div className="header_option">
            <span className="option1">Your</span>
                <span className="option2">Prime</span>
            </div>

            
            <Link to="/checkout">
            <div className="header_basket">
                
                <ShoppingBasketIcon></ShoppingBasketIcon>
                
                
                <span className="shopping_count option basktet">{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Index