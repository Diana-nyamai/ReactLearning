import React from 'react'

function Timer() { 
   
  return(<div>
            <h1>WE are now at: {new Date().toLocaleTimeString(1000)}</h1>
        </div>); 
} 

export default Timer
