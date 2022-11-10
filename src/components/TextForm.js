import React from 'react'
import { useState } from 'react';

export default function TextForm(prop) {
    const handleOnchange=(event)=>{
        console.log("handleonchange");
        setText(event.target.value);
    }
    const handleclick=()=>{
        setText("You have clicked");
        const newText=text.toUpperCase();
        setText(newText);
        console.log("you have clicked");
        }
     const [text,setText]=useState('here is text');
  return (
    <>
     <div className="mb-3">
    <h1>{prop.heading}</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} value={text} rows="8"></textarea>
    <button className="btn btn-primary my-2" onClick={handleclick}>Convert to Uppercase</button>
  </div>
  <div>
    <h1>Your text Summary</h1>
    <p>words are: {text.split(" ").length} and characters are: {text.length} </p>
  </div>
    </>
 

  )
}
