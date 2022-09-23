import React, { useState } from 'react'
import OutputScreen from './OutputScreen'
import './main.css'
function Calculator(e) {
   const[input , setInput] = useState('')
   let [result, setResult] = useState(0)
   
  const clickbtn = (e) => {
         const btnvalue =e.target.value;
        setInput(input + btnvalue)
        console.log(btnvalue)
        console.log(input)

  }
  const clearbtn = () => {
      setInput('')
      setResult('')
  }
  const evaluate = ()=> {
      if (input !== '') {
        console.log(input)
        console.log(result)
        result = eval(input)
        console.log(result)
        setResult(result)
    } else{
        setResult("Enter Value")
    }            
      }

     return (
    <div className='calculator'>
      <OutputScreen input = {input} result={result}></OutputScreen>
           <div className='calc-btns'>
       <div className='button-pannel'>  
         <div className='clear%'> 
       <button id='clear' className='btn' value= 'clear'  onClick={clearbtn}>clear</button>
       <button id='percentage' className='btn' value= '%' onClick={clickbtn}>%</button>
       </div>
       <div className='button-pannel-1'>
       <button id='seven' className='btn' value= '7' onClick={clickbtn}>7</button>
       <button id='eight' className='btn' value= '8' onClick={clickbtn}>8</button>
       <button id='nine'  className='btn' value= '9' onClick={clickbtn}>9</button>
       </div>
       <div className='button-pannel-2'>
       <button id='four' className='btn' value= '4' onClick={clickbtn}>4</button>
       <button id='five' className='btn' value= '5' onClick={clickbtn}>5</button>
       <button id='six'  className='btn' value= '6' onClick={clickbtn}>6</button>
       </div>
       <div className='button-pannel-3'>
       <button id='one' className='btn' value= '1' onClick={clickbtn}>1</button>
       <button id='two' className='btn' value= '2' onClick={clickbtn}>2</button>
       <button id='three' className='btn' value= '3' onClick={clickbtn}>3</button>
       </div>
       <div className='equals'>
       <button id='equals' className=' equalsbtn btn' value= '=' onClick={evaluate}>=</button>
       <button id='zero' className='btn' value= '0' onClick={clickbtn}>0</button>
        </div>
       </div>
       

        <div className='operators'>
         <button   className='btn' value = "/" onClick={clickbtn}>/</button>
         <button   className='btn' value = "*" onClick={clickbtn}>X</button>
        <button   className='btn' value = "-" onClick={clickbtn}>-</button>
       <button className='op-btn btn' value = "+" id='addbtn' onClick={clickbtn}>+</button>
        </div>
        </div>
    </div>
  )
}

export default Calculator
