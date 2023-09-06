import React from 'react'
import { useAppValue } from './ProductContext'
import './Checkout.css'
const CheckoutProduct = (props) => {
    console.log(props.id);
    const[{basket},dispatch]=useAppValue();
    var idd=props.id;
    const removeBasket=()=>{
       dispatch({
          type:"REMOVE_FROM_BASKET",
          id:idd,
        });
       }
  return (
    <div className="checkoutproduct">
        <img src={props.image} alt="" />
        <div className="profuctinfo">
            <h2>{props.name} </h2>
        
            <h3>₹ {props.price}</h3>
            
        </div>
        <button onClick={removeBasket}>Remove from Basket</button>
    </div>
  )
}

export default CheckoutProduct