

import React from 'react';
import Checkout from "./Checkout.css";
import Subtotal from "../Subtotal";
import CheckoutProduct from "../CheckoutProduct";
import { useStateValue } from '../Context';
import Header from "../Header";
import userEvent from '@testing-library/user-event';

function Index  () {
  const [{basket,user}]= useStateValue();
  console.log(basket)
  return (
    <>
    <Header></Header>
    <div className='checkout'>
        <div className='checkout__left'>
            <img  className='checkout__image' src=" https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout image"/>
        <div className='product__title'>
          <h3> Hello {user? user?.email:"Guest"}</h3>
            <h1>Your shopping basket</h1>
            {
              basket.map(item =>(
                <CheckoutProduct  id ={item.id}
                title ={item.title}
                image ={item.image}
                price ={item.price}
                rating ={item.rating}>
                </CheckoutProduct>
              )
              ) 
            }
            
        </div>
        </div>
        <div className='checkout__right'>
            <Subtotal></Subtotal>
         

        </div>
    </div>
    </>
  )
  
}

export default Index