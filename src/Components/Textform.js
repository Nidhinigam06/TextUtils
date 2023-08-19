import React,{useState} from 'react';
import propTypes from "prop-types";

export default function Textform (props) {
    const handleUpClick = () => {
        // console.log("uppercase was Clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText)
        // setText("you have clicked on handleUpClick ")
        props.showAlert("converted to UpperCase!", "success");
    }
    const handleLoClick = () => {
      // console.log("uppercase was Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      // setText("you have clicked on handleUpClick ")
      props.showAlert("converted to LowerCase!", "success");
    }
    const handleClerClick =() =>{
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared", "success");
      }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        
    }


    const handleCopy = () => {
       console.log("i am copy");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");

    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spacess removed", "success");
  }

    const [text, setText] = useState('Enter text here2');
    //  text = "new text" //wrong way to change the state
    //  settext("new text")// correct way to change state
  return  ( 
    <>
    <div className='container'  style={{ color: props.mode==='dark'?'white':'#042743' }}>
      <h1  >{props.heading}</h1>
     <div className="mb-3">
      <textarea className='form-control' value={text} onChange={handleOnChange } style={{backgroundcolour: props.mode==='dark'? 'grey': 'white',  color: props.mode==='dark'?'grey':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClerClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>

    </div>
    
    
    </>
  );
    
}
