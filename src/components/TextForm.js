import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase is clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "danger");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const handleDownClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClearClick = (event) => {
        let newText = '';
        setText(newText)
        props.showAlert("Text are deleted", "danger")
    }
    const handleCopyClick = (event) => {
        // var text = document.getElementById('myBox')
        // text.select()
        navigator.clipboard.writeText(text.value)
        // document.getSelection().removeAllRanges()
        props.showAlert("Text are copied", "success")
    }
    const handleSpacesClick = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed", "primary")
    }
    const [text, setText] = useState("");
    // text = "new text" //   Wrong way to change the text
    // setText("new Text")  //  Correct way to change the text
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea> 
                </div>
                {/* We use double curli bracket in style because one for writing javascript and one for writing object in javascript. */}
                <button disabled={text.length===0} className="bt btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upperCase</button>
                <button disabled={text.length===0} className="bt btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to lowerCase</button>
                <button disabled={text.length===0} className="bt btn-primary mx-1 my-1" onClick={handleClearClick}>Clear now</button>
                <button disabled={text.length===0} className="bt btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy the text</button>
                <button disabled={text.length===0} className="bt btn-primary mx-1 my-1" onClick={handleSpacesClick}>Remove extra spaces</button>
            </div>
            <div className="container"  style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <br />
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.005 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes required to read this text Area</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}