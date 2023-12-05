import {useState,useEffect} from 'react';
import './App.css';
import App from './App';
import ProductList from './ProductList';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem';


function Cart() { 

    const {cart}=useSelector((state)=>state);

    const [total,settotal]=useState(0);

    useEffect(()=>{

        settotal(cart.reduce((acc,total)=>acc+total.price,0));

    },[cart])    



    return (

      
      <div>

      {

        cart.length > 0 ? 
        
        
        (
            <div>

            {
              
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }

            <div>

            <span>Total Items: {cart.length}</span>
            <h1>Total : {total}</h1>
            </div>



            </div>
        
        ) : 
        
        (
            
            <div>
            <p>Cart Empty</p>
            <NavLink to='/'>
                Shop Now
            </NavLink>
            </div>)

      }







      </div>


    
  )
}

export default Cart;
