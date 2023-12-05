
import { Route } from "react-router-dom";
import App from "./App";
import { useDispatch } from "react-redux";
import { remove } from "./CartSlice";

const CartItem=({item,itemIndex})=>{

    const dispatch=useDispatch();

    const removeFromCart=()=>{
        dispatch(remove(item.id));
    }


    return(

        <div> 

            <img src={item.image} width={100}/>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p onClick={removeFromCart} style={{cursor:'pointer'}}>Delete</p>
        </div>

    )

    


}

export default CartItem;



