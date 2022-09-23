import Product from "./Product.css"

 import React from 'react'
import { useStateValue } from "../Context"
 
 function Index({ id,title,image, price,rating})  {
   const [{basket},dispatch] = useStateValue();
  // console.log(basket) 


   const addtoBasket = () => {
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id,title,image,price, rating
      }
    })
   }
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
        <button onClick={addtoBasket}>Add to cart</button>
     </div>

   )
 }
 
 export default Index