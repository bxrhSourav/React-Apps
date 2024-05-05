import React, { useState } from 'react'

export default function TextAarea() {
  const [text, setText] = useState("Enter Text")
  const [head, setHeading] = useState("Write in lowercase")

  const handleChange = (event)=> {
    setText(event.target.value)
  }
  const handleClick = ()=>{
    setHeading("Result in uppercase")
    setText(text.toUpperCase())
}
  
  return (
    <div className='container'>
      
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{head}</label>
  <textarea className="form-control" value={text} onChange={handleChange} id="T1" rows="8"></textarea>
</div>
<button id='he' className='btn btn-outline-success' onClick={handleClick}> Submit</button>
    </div>
  )
}
