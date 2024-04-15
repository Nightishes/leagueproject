"use client";
import { useState, useEffect } from "react";
import "./assets/searchbar.scss";

export default function SearchbarName({ onQuery }) {
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    onQuery(inputText);
  });
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="searchbar-general">
      <label htmlFor="site-search"> Search by name:</label>
      <input
        type="search"
        id="site-search"
        onInput={inputHandler}
        value={inputText ?? ""}
      />
    </div>
  );
}
