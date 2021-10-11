import React, { useState } from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    settext(newText);
    props.showalert("converted to uppercase!","success");
    // settext('you have clicked on handleupclick')
  }
  const handleLoClick = () => {
    // console.
    // log("uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    settext(newText);
    props.showalert("converted to Lowercase!","success");
    // settext('you have clicked on handleupclick')
  }
  const handleClearText = () => {
    let newText = " ";
    settext(newText);
    props.showalert("Text Cleared!","success");
  }
  const handleOnChange = (event) => {
    // console.log("On change")
    settext(event.target.value);
  }

  const [text, settext] = useState("");
  return (
    <>
      <div className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 className='mb-4 '>{props.heading}</h1>
          <div className="mb-3">
            <textarea value={text} onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="form-control"
              id="text-box"
              rows="8"></textarea>
          </div>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>your text summary</h1>
        <p>
          {text.length} characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
