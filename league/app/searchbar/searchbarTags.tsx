import "./assets/searchbar.scss";
import { useEffect, useState } from "react";

export default function SearchbarTags({ props }) {
  let listTag = Object.values<string>(props.tags);
  let [clickValue, setClickValue] = useState("");
  useEffect(() => {
    props.onQueryTags(clickValue);
  });
  let inputHandler = (e) => {
    setClickValue(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className="list-buttons-main">
        {listTag.map((tag) => {
          return (
            <button
              className="button-search-parameters"
              key={tag}
              value={tag}
              onClick={inputHandler}
              type="button"
            >
              {tag}
            </button>
          );
        })}
      </div>
    </>
  );
}
