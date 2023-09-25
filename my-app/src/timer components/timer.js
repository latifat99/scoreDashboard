import React, { useEffect,useRef,useState } from 'react';
import {render} from 'react-dom'
 const Timer=()=>{
    const[counter, setCounter]=useState(0)
         const handleClick=()=>{

       setCounter(counter+1)
      }

          React.useEffect=(()=>{handleClick()
 },[counter]
 
 )

 const timeout=()=>{setTimeout(handleClick,1000);
        
}

    const Reset=()=>{
    setCounter(0);
    }
      
    
    
    

    return(
        <div>
          <div>
            <h5 className='head'>Stopwatch</h5>
          <span className='timer'>{counter}</span>
          <div className='reset'>
            <button className='start_btn' onClick={timeout}> start</button>
            <button className='reset_btn' onClick={Reset}> Reset</button></div>
          </div>
        </div>
    )
 }
 export default Timer