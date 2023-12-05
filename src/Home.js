
import { Route } from "react-router-dom";
import App from "./App";
import { useEffect, useState } from "react";
import Product from "./Product";

const Home=()=>{

    const cardStyle1 = {      
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        width: '500px',
        height: '480px',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      };

    const [post,setpost]=useState([]);

    const url="https://fakestoreapi.com/products";

    async function fetchProduct(){

        const res=await fetch(url);
        const data=await res.json();
        setpost(data);

    }

    useEffect(()=>{
        fetchProduct();
    },[])


    return(
        <div style={cardStyle1}>
            
            {



                post.map((post)=>(
                    <Product key={post.id} post={post}/>
                ))



            }






        </div>
   
    )

    


}

export default Home;



