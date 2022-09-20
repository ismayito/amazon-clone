import Product from "./Product.css"

 import React from 'react'
 
 function index({ id,title,image, price,rating})  {
   return (
     <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="pice">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="rating">
                {Array(rating).fill().map((_,i)=>(<p>🌟</p>))}
            
            </div>
        </div>
        
        <img src={image} alt="homeimage"></img>
        <button>Add to cart</button>
     </div>

   )
 }
 
 export default index