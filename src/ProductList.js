import {useState,useEffect} from 'react';
import './App.css';


function ProductList({data}) { 

  const cardStyling={

    display:'flex',
    flexWrap: 'wrap'

  }

  const cardStyle1 = {       
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      width: '200px',
      height: '470px',
      margin: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const [cart,setcart]=useState([]);


    function cartHandler(data){
        console.log(data);
        setcart([...cart,data])
    }

    
  return (

      
      <div style={cardStyle1}>
    <div style={cardStyling}>
    {

      data.map((data)=>(

        <div>
      <p>{data.name}</p>
      <img src={data.image} width={200}/>
      <p>{data.category}</p>
      <p>{data.price}</p>
      <button onClick={()=>cartHandler(data)}>Add To Cart</button>
       </div>

      ))

    }
    </div>
    </div>


  )
}

export default ProductList;
