import React, { useState } from 'react';
import '../style.css'
const Button=() =>{
    const[count,setCount]=useState(0)
     const[point,setPoint]=useState(0)
    const handleIncreament=()=>{
        setCount(count + 1)
         
        
    }
    
    const handleDecreament=()=>{
        setCount(count - 1)
        
        
    }
    

    return(
        <div>
        <div className='buttons'>
          <button  className='increament_btn' onClick={handleIncreament}>+</button>
          <span>{count}</span>
          <button className='decreament_btn' onClick={handleDecreament}>-</button>
          </div>
            

            <div>
            
            </div>
        </div>
    
    )
}
export default Button