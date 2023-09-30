import React, { useState } from 'react';
import { useInterval }from 'use-interval';

 const Timer=()=>{
    const[counter, setCounter]=useState(0)
    const [delay,setDelay]=useState(1000)
    const [counting, setCounting]=useState(false)
         const handleClick=()=>{
         if (counter===60){
             setCounting(!counting) || setCounter(0)
         }
             setCounter((prevCounter)=> prevCounter+1)
      }
        useInterval(
              ()=>{
              handleClick()
              },counting? delay:false
              )

         const reset=()=>{
         if(counting ){
           setCounter(0)|| setCounting(!counting)
         } 
    }
      const handleCounting=()=>{
        if (!counting)
        {setCounting(!counting)}
        else{
          setCounting(counting)
        }

      }
    

    return(
        <div>
          <div>
            <h5 className='head'>Stopwatch</h5>
          <span className='timer'>{counter}</span>
          <div className='reset'>
            <button className='start_btn' onClick={handleCounting}
          > 
            {"start"}
          </button>
            <button className='reset_btn' onClick={reset}> Reset</button></div>
          </div>
        </div>
    )
 }
 export default Timer