import { useState } from "react";

export default function SearchbarName() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="search">
      <label htmlFor="site-search">Search by name:</label>
      <input type="search" id="site-search" />
    </div>
  );
}
