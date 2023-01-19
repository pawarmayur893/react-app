import React, { useState } from 'react'


export default function TextForm(props) {

    const handelOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }

    const convFUP = () => {

        let newText = text.split(" ");
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
        }
        const str2 = newText.join(" ");
        setText(str2)
        props.showAlert("Converted to first letter in Upper Case","success");
    }

    const convLC = () => {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success");

    }
    const convUP = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success");

    }
    const clearText = () => {

        let newText = "";
        setText(newText)
        props.showAlert("Text Has been Cleared","success");

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("text readed","success");

    }
    const [text, setText] = useState("")


    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" onChange={handelOnChange} id="exampleFormControlTextarea1" value={text} rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={convUP}>Convert to Upper case</button>
                <button className="btn btn-primary mx-1" onClick={convFUP}>Convert First Upper case</button>
                <button className="btn btn-primary mx-1" onClick={convLC}>Convert to Lower case</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
            </div>
            <div className="container my-3">

                <h2 className='my-3'>Preview</h2>
                <p>{text}</p>

                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} charachters</p>
                <p>{0.08 * text.split(" ").length} minut to read </p>

            </div>
        </>
    )
}
