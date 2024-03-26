import "./assets/searchbar.scss";
import { useEffect } from "react";

export default function SearchbarTags(tags) {
  let listTag = Object.values(tags.tags);
  let inputHandler = (e) => {};
  return (
    <>
      <div className="list-buttons-main">
        {listTag.map((tag, index) => {
          console.log(tag);
          return (
            <>
              {}
              <button className="button-search-parameters" key={index}>
                {tag}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}
