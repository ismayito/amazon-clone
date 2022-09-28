 import Subtotal from "./Subtotal.css"

 import React from 'react';
  import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context";
import { getBasketTotal } from "../Context/reducer";
import { useNavigate } from "react-router";
 
 function Index(){
    const [{basket},dispatch] = useStateValue();
    console.log(basket);

    const navigate=useNavigate();
   

  

   return (

    
     <div className="subtotal">

<CurrencyFormat
        renderText={(value) => (
          <>
            <p >
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift" style={{marginTop:"5px"}}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value ={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e=>navigate("/payment")} className="checkout__button">Proceed to checkout</button>
     </div>
   )
 }
 
 export default Index