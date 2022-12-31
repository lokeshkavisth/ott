import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Inputbox(props) {
  const [text, setText] = useState("");

  const capCase = () => {
    const newText = text.toLowerCase().split(" ");

    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i][0].toUpperCase() + newText[i].toString(1);
    }

    setText(newText.join(" "));
  };

  const upCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const lowCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const extraSpaceRemover = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const clearAll = () => {
    setText("");
  };

  const copyAll = () => {
    const newText = (text) => navigator.clipboard.writeText(text);
    newText(text);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="input-box">
        <h1>{props.heading}</h1>
        <textarea
          name="input-box"
          placeholder="Type your text here..."
          cols="30"
          rows="20"
          title="Paste your text here to transform"
          value={text}
          onChange={handleOnChange}
          autoFocus
        ></textarea>

        <div className="btns">
          <section>
            <button
              type="button"
              className="btn"
              title="Click here to capitalize your text"
              onClick={capCase}
            >
              Capitalize
            </button>
            <button
              type="button"
              className="btn"
              title="Click here to uppercase your text"
              onClick={upCase}
            >
              UPPERCASE
            </button>
            <button
              type="button"
              className="btn"
              title="Click here to lowercase your text"
              onClick={lowCase}
            >
              lowercase
            </button>
            <button
              type="button"
              className="btn"
              title="Click here to remove extra spaces"
              onClick={extraSpaceRemover}
            >
              Remove extra spaces
            </button>
          </section>
          <section>
            <button
              type="button"
              className="btn"
              title="Click here to clear all"
              onClick={clearAll}
            >
              Clear All
            </button>
            <button
              type="button"
              className="btn"
              title="Click here to copy all"
              onClick={copyAll}
            >
              Copy All
            </button>
          </section>
        </div>

        <div className="summary">
          <h2>your text summary</h2>
          <p>
            total words :{" "}
            {
              text.split(" ").filter((e) => {
                return e.length !== 0;
              }).length
            }
          </p>
          <p>total character : {text.split(/[ ]+/).join("").length}</p>
          <p>
            total read time :{" "}
            {text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length * 0.008}
          </p>
        </div>
      </div>
    </>
  );
}

Inputbox.propTypes = {
  heading: PropTypes.string.isRequired,
};

Inputbox.defaultProps = {
  heading: "Your Heading Goes Here...",
};
