import React, { useState } from "react";
import "./HomePage.css";
import propTypes from "prop-types";

export default function HomePage(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const toSentencecase =() => {
    let newText = text.split(" ") ;
    let sentencecase = newText.forEach[0].toUpperCase();
    setText(sentencecase) ;
  }

  const allClear = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <p className="title">{props.title}</p>
        <ul>
          <li>Home </li>
          <li>{props.about} </li>
        </ul>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="togglebutton" />
       
      </nav>

      <div className="form-container">
        <h1>Enter the text below to analyze </h1>

        <textarea
          className="textarea"
          placeholder="Enter your text here"
          value={text}
          onChange={handleChange}
        ></textarea>

        <div className="button-container">
          <button onClick={toUpCase}>To Uppercase</button>
          <button onClick={toLoCase}>To Lowercase</button>
          <button onClick={toSentencecase}>To Sentencecase  </button>
          <button onClick={allClear}> Clear All </button>
        </div>
      </div>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and  {text.length}characters </p>
      <p> {.252 *text.split(" ").length }  Seconds read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
}

// HomePage.propTypes = {
//     title : propTypes.string ,
//     about: propTypes.string
// }

// HomePage.defaultProps = {
//     title: "set title here " ,
//     about : "set about here "
// }
