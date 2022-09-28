import React from 'react'
import { useStateValue } from '../Context';
import Header from "../Header";
import Payment from "./Payment.css";
import CheckoutProduct from "../CheckoutProduct"
import {Link} from "react-router-dom";

 function Index  () {
     const [{basket,user},dispatch]= useStateValue();
  return (
    <>
    <Header></Header>

<div className='payment'>
    < div className='payment__container'>
        <h1>checkout ( <Link to="/checkout">{basket?.length} items</Link>)</h1>
        <div className='payment__section'>
        <div className='payment__title'>
            <h3>Delivery address</h3>
        </div>
        <div className='payment__add'>
            <p>{user?.email}</p>
            <p>Mutungo-Twins</p>
            <p>Kampala Nakawa Division</p>
        </div>
        </div>
    <div className='payment__section'>
        <div className='payment__title'>
            <h3>Payment Review items</h3>
        </div>
        <div className='payment__items'>
            {/*  payment product  */}
            {
                basket.map((item) =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.tite}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    />
                ))
            }
        </div>
    </div>
    <div className='payment__section'>
    <div className='payment__method'>
        <div className='payment__title'>
        <h3>Payment method</h3>
        </div>
        
        <div className='pay__method'>
        {/* stripe will go here */}
        </div>
    </div>
    </div>
   
</div>
</div>
    </>
    
  )
}

export default Index