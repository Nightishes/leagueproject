"use client";
import { useState } from "react";

export default function SearchbarName({ onQuery }) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    onQuery(e.target.value);
  };

  return (
    <div className="search">
      <label htmlFor="site-search"> Search by name:</label>
      <input type="search" id="site-search" onInput={inputHandler} />
    </div>
  );
}
