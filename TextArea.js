import React, { useState } from 'react'

export default function TextAarea() {
  const [text, setText] = useState("")
  const [head, setHeading] = useState("Text In Lowercase :")

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleUClick = () => {
    setHeading("Result in uppercase")
    setText(text.toUpperCase())
  }
  const handleLClick = () => {
    setHeading("Result in uppercase")
    setText(text.toLocaleLowerCase())
  }

  return (
    <>
      <div className='container'>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label"><h3>{head}</h3></label>
          <textarea className="form-control" value={text} onChange={handleChange} id="T1" rows="8"></textarea>
        </div>
        <button id='he' className='btn btn-primary mx-2' onClick={handleUClick}> Convert to UpperCase </button>
        <button id='hi' className='btn btn-secondary mx-2' onClick={handleLClick}> Convert to LowerCase </button>
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
