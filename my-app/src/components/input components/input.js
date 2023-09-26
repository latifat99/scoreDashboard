
import '../style.css'
import React, { useState } from 'react';
import Button from '../button components/button';
import Timer from '../timer components/timer';
const Input=() =>{
    
    const[inputPlayer, setInputPlayer]=useState("")
    const [player, setPlayer]=useState([])
    const[noOfPlayer, setNoOfPlayer]=useState(0)
    const handleInputChange=(event)=>{
        setInputPlayer(event.target.value);
    };
    const handleAddPlayer=(input)=>{
        const newPlayer={
            id:Math.random(),
            input:inputPlayer,
        }
        setPlayer([...player,newPlayer]);
        setNoOfPlayer([player.length + 1])
        setInputPlayer('')       
    };
         const handleDeletePlayer=(id)=>{
            const newList=player.filter((input)=> 
             input.id !== id
            );
            setPlayer(newList)
            setNoOfPlayer([newList.length])
         };
         const[count,setCount]=useState(0)

   
        

    return(
     <div className='container'>
        <div className='section-one'>    
        <h3 className='heading'>SCOREBOARD</h3>   
         
        <div className='input'>
            <input className='input_field'type='text' value={inputPlayer} onChange={handleInputChange}></input>
        <button className="btn" onClick={handleAddPlayer} > Add player</button>
            </div>
              <ul > 
              
                {player.map((input)=>
                      <div className='display'>
                    <li className='player' key={input.id}>
                        
                        {input.input}
                        <button className="delete" onClick={()=>handleDeletePlayer(input.id)} >x</button>
                        
                    </li>

                    <div>
                    <Button/>
                    </div>
                    </div>
                
                     
                

             )}
              </ul>
                <div className='footer'>
                <div>
                <div>
                    <h4>No of players:{noOfPlayer}</h4>
                </div>
                <div>
                    <h4>Total Points:</h4>
                </div>
                </div>
                <div>
                <Timer/>
                </div>  
                </div> 
        
        </div>
     </div>
        
    )}

export default Input