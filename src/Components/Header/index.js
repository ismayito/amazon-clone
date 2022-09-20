import Header from "./Header.css";
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function index() {
  return (
    <div className="header">
        <img className = "header_logo" 
        src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-emblem-png-logo-vector-13.png" alt="logoimage"/>
        <div className="header_search">
            <input className="search_input" type="text"></input>
            <SearchIcon className="search_icon"></SearchIcon>
        </div>
        
        
        <div className="header_nav">
            <div className="header_option">
                <span className="option1">Hello</span>
                <span className="option2">Sign in</span>
            </div>
            <div className="header_option">
            <span className="option1">Returns </span>
                <span className="option2"> &amp; orders</span>
            </div>
            <div className="header_option">
            <span className="option1">Your</span>
                <span className="option2">Prime</span>
            </div>
        </div>
    </div>
  )
}

export default index