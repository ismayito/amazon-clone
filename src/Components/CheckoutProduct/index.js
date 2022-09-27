 import React from 'react';
import { useStateValue } from '../Context';
 import CheckoutProduct from "./CheckoutProduct.css"
 
 function Index  ({id,image,title,price, rating})  {
   const [{basket},dispatch] = useStateValue();

  const RemoveFromBasket=()=>{
    //remove an item from the basket
    dispatch({
      type:"REMOVE_BASKET_ITEM"
    })
  }
   return (
     <div className='checkoutProduct'>
        <img src={image} className="productimage"/>
        <div className='checkoutProduct__info'>
            <p className='title'>{title}</p>
            <p className='price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='rating'>
            {Array(rating).fill().map((_,i)=>(<p>🌟</p>))}
            </div>
            <div className='checkoutButton'>
                <button className='checkout__product__button' onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
        </div>

     </div>
   )
 }
 
 export default Index