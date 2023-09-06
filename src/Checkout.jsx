import React from 'react'
import { useAppValue } from './ProductContext';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {

  const[{basket}]=useAppValue();
  //  console.log(basket);
  return (
   <div className="checkout">
     
      {(basket.length===0 )?(

            <div>
              <h2 className='checkout__title'>Your shopping cart is empty</h2>
            </div>
      ):(
        <div style={{textlign:'ceneter'}}> 
             <h2>This is your Shopping Basket</h2>
             <h2>your total items are:<span style={{color:'red'}}>{basket.length}</span> </h2> 
               {/* list out all checkout products */}
               {
                 basket.map((item)=>{
                    console.log(item.id);
                   return(<CheckoutProduct
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price} />)
                 }
                 )
               }
    
        </div>
      )
          
      }
   </div>
      
  
  )
}

export default Checkout