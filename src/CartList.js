import {useState,useEffect} from 'react';
import './App.css';
import App from './App';
import ProductList from './ProductList';


function CartList({data}) { 

    console.log(data);

    return (

      
      <div>
      
      <img src={data.image} width={200}/>
      <button>-</button>
      <p>1</p>
      <button>+</button>
      <p>{data.price}</p>   
      </div>


    
  )
}

export default CartList;
