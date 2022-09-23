import React from 'react'
import './main.css'

function OutputScreen(props) {
  return (
    <div className='screens'>
       <input id='input' type= 'text'  className='displayscreens' value ={props.input}  autoComplete = 'none'></input>
       <input id='result' type= 'text' className='displayscreens' value ={props.result}  autoComplete = 'none'></input>
    </div>
  )
}

export default OutputScreen
