

import React from 'react';
import Checkout from "./Checkout.css";
import Subtotal from "../Subtotal"

function index  () {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img  className='checkout__image' src=" https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout image"/>
        <div className='product__title'>
            <h1>Your shopping basket</h1>
        </div>
        </div>
        <div className='checkout__right'>
            <Subtotal></Subtotal>
         

        </div>
    </div>
  )
}

export default index