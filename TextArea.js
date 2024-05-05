import React, { useState } from 'react'

export default function TextAarea() {
  const [text, setText] = useState("")
  const [head, setHeading] = useState("Text In Lowercase :")

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleUClick = () => {
    setHeading("Result in UpperCase")
    setText(text.toUpperCase())
  }
  const handleLClick = () => {
    setHeading("Result in LoweCase")
    setText(text.toLocaleLowerCase())

  }
  const handleCClick = () => {
    setText("")
  }

  return (
    <>
      <div className='container'>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label"><h3>{head}</h3></label>
          <textarea className="form-control" value={text} onChange={handleChange} id="T1" rows="8"></textarea>
        </div>
        <button id='bup' className='btn btn-light mx-2' onClick={handleUClick}> Convert to UpperCase </button>
        <button id='blow' className='btn btn-dark mx-2' onClick={handleLClick}> Convert to LowerCase </button>
        <button id='bclear' className='btn btn-danger mx-2' onClick={handleCClick}> Clear </button>
      </div>


      <div className='container my-5'>
        <h2> Text Analytics</h2>

        <p> <u>{text.length}</u> characters <br /> <u>{text.split(" ").length}</u> words</p>
        <h2>
          Preview</h2>
        {text}
      </div>
    </>
  )
}
