import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleLoClick = ()=>{
    // console.log("Uppercase clicked" + text);
     let newText = text.toLowerCase();
     setText(newText)
 
   }
   const handleClClick = ()=>{
    // console.log("Uppercase clicked" + text);
     let newText = '';
     setText(newText)
 
   }
   const handleCopy = ()=>{
var text = document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);
   }

   const handleExtraSpace =()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
   }
  const handleOnChange = (event)=>{
    //console.log("On Changed");
    setText(event.target.value);
  }


const [text, setText]= useState('');
  
 return (
  <>
    <div className="container">
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to upper case</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lower case</button>
<button className="btn btn-primary mx-2" onClick={handleClClick} >Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy} >Copy</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>
</div>
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} caharacter </p>
    <p>Read in {0.008 * text.split(" ").length} minutes </p>
 <h3>Preview</h3>
 <p>{text}</p>
 </div>
  </>
  )
}
