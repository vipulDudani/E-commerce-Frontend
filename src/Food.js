import {useState,useEffect} from 'react';
import './App.css';
import ProductData from './ProductData';
import { data } from './data';


function Food() {

  const btn={
        borderRadius: '10px',
        padding: '15px',
        margin: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cardStyling={

    display:'flex',
    flexWrap: 'wrap'

  }

  console.log(data);

  const [items,setitems]=useState(data);

    function clickHandler(categoryName){

      const updateitems=data.filter((curritem)=>{
        return categoryName==curritem.category;
      })
      
      console.log(updateitems);
      setitems(updateitems);
  }

    const [inputdata,setinputdata]=useState('');

    function changeHandler(event){
      
      console.log(event.target.value);
      setinputdata(event.target.value);

    }


  return (

    <div>

    <button style={btn} onClick={()=>clickHandler('Breakfast')}>Breakfast</button>
    <button style={btn} onClick={()=>clickHandler('Lunch')}>Lunch</button>
    <button style={btn} onClick={()=>clickHandler('Dinner')}>Dinner</button>
    <button style={btn} onClick={()=>setitems(data)}>All</button>

    <div>
    <h2>Total Items: {items.length}</h2>
    </div>


    <div style={cardStyling}>
    {

        items.map((data)=>(
          <ProductData key={data.id} data={data}/>
        ))
    }
    </div>


    </div>
    
    
  )
}

export default Food;
