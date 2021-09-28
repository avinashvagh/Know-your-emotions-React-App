import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😀": "Grinning",
   "😂": "Face with tears of joy",
   "😌": "Relieved face",
   "😍": "Smiling face with heart eyes",
   "😘": "Face throwing a kiss",
   "😐": "Neutral",
   "😵": "Dizzy",
   "😷": "Face with medical mask",
   "😏": "Smirking",
   "😢": "Crying",
   "😲": "Shocked",
   "😴": "Sleeping face"
};

var emojisDatabase = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Smileys!!</h1>
      <input
       
      style={{ width: "350px", height: "40px" }}
        onChange={emojiInputHandler}
      />

      <h3>{meaning} </h3>

      <h3>emojis we know!!</h3>
      {emojisDatabase.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
