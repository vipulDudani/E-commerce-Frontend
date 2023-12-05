
import { Route } from "react-router-dom";
import App from "./App";
import { useDispatch, useSelector } from "react-redux";
import { add , remove } from "./CartSlice";

const Product=({post})=>{

    const {cart}=useSelector((state)=>state);
    console.log(cart);
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(post));
    }
    
    console.log(cart);

    const removeFromCart=()=>{
        dispatch(remove(post.id));
    }



    return(

        <div> 
        <p>{post.title}</p> 
        <p>{post.description}</p> 
        <img src={post.image} width={200}/>
        <p>{post.price}</p>
        
        {cart && cart.some((p) => p.id === post.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
        ) : (
        <button onClick={addToCart}>Add To Cart</button>
        )}



        </div>

    )

    


}

export default Product;



