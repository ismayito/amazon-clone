import React, { useEffect } from 'react'
import { useStateValue } from '../Context';
import Header from "../Header";
import Payment from "./Payment.css";
import CheckoutProduct from "../CheckoutProduct"
import {Link, useNavigate} from "react-router-dom";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import {useState} from "react";
import { getBasketTotal } from "../Context/reducer";
import CurrencyFormat from "react-currency-format";
import axios from '../../axios';

 function Index  () {
  const navigate=useNavigate();
    const [processing,setProcessing]=useState(false);
    const [succeeded,setSucceeded]=useState(null);
    const [error,setError]= useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret]= useState(true);
    const stripe= useStripe();
    const elements= useElements();
     const [{basket,user},dispatch]= useStateValue();   

    useEffect(()=>{
        // allows us to generate the special secret that allows us to  charge the customer
        const getClientSecret = async()=>{
            const response = await axios({
              method:"post",
              //stripe expects the currencey in the subuints
              url:`/payment/create?total = ${getBasketTotal(basket)*100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    },[basket])
    console.log("the secret is",clientSecret);
   
      const handleCardSubmit=async(e)=>{
        e.PreventDefault();
        setProcessing(true);
        // do all the stripe work logic and functions
        const payload= await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card:elements.getElement(CardElement)

          }
        }).then((paymentIntent)=>{
          //paymentIntent=payment confirmation
          setSucceeded(true);
          setError(null);
          setProcessing(false);
          navigate.replace("/orders");
          

        })
      }

      const handleChange=(e)=>{
        // handles onclick changes on the card
        setDisabled(e.empty);
        setError(e.error? e.error.message:"")
      }
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
        <div className='payment__title'>
        <h3>Payment method</h3>
        </div>
        <div className = 'pay__details'>
        {/* stripe will go here */}
        <form onSubmit={handleCardSubmit}>
            <CardElement on onChange={handleChange}></CardElement>
            <div className='payment__orderTotal'>
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p >
              Order Total of ({basket.length} items): <strong>{value}</strong>
            </p>
            
          </>
        )}
        decimalScale={2}
        value ={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button disabled={processing||succeeded|| disabled}>
        <span>{processing?<p>processing</p>:"Buy now"}</span>
      </button>
            </div>
            {/* errors */}
            {error && <div>{error}</div>}

        </form>

    </div>
    </div>
   
</div>
</div>
    </>
    
  )
}

export default Index