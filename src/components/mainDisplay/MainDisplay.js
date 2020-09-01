import React from 'react'
import './MainDisplay.css'

const MainDisplay = ({result}) => 
    <input 
      className="mainDisplay"
      value={result}  
      placeholder="0"
    >
    </input> 

export default MainDisplay;